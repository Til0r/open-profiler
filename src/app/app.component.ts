import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { openProfilerConfig } from '@open-profiler/config/open-profiler.config';
import { ThemeConstant } from '@open-profiler/constants/theme.constant';
import { ImageErrorHandlerDirective } from '@open-profiler/directives/image-error-handler.directive';
import { BadgesComponent } from '@open-profiler/elements/badges/badges.component';
import { ExperienceComponent } from '@open-profiler/elements/experience/experience.component';
import { SocialsComponent } from '@open-profiler/elements/socials/socials.component';
import { ExperienceModel } from '@open-profiler/models/experience.model';
import { OpenProfilerModel } from '@open-profiler/models/open-profiler.model';
import { orderBy } from 'lodash';

@Component({
  standalone: true,
  selector: 'open-profiler-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  imports: [
    CommonModule,
    NgOptimizedImage,
    BadgesComponent,
    ExperienceComponent,
    SocialsComponent,
    ImageErrorHandlerDirective,
  ],
})
export class AppComponent implements OnInit {
  ThemeConstant = ThemeConstant;

  colorBadges = signal('3EA44F');
  currentYear = new Date().getFullYear();
  openProfilerConfig = signal<Partial<OpenProfilerModel>>(openProfilerConfig);

  constructor() {}

  ngOnInit(): void {
    this.initColorScheme();

    this.openProfilerConfig.update((openProfilerConfig) => ({
      ...openProfilerConfig,
      experiences: this.mapExperienceByDateStart<ExperienceModel>(
        openProfilerConfig['experiences'] as ExperienceModel[],
      ),
      education: this.mapExperienceByDateStart<ExperienceModel>(
        openProfilerConfig['education'] as ExperienceModel[],
      ),
    }));

    const primary = openProfilerConfig.color?.primary || '#1ca955';

    this.setCssVariable('--primary', primary);
    this.setCssVariable('--border-color', `${primary}10`);

    const light = this.openProfilerConfig().color?.light;
    this.setCssVariable('--light', light?.background || '#f4f4f5');
    this.setCssVariable('--light-card', light?.card || '#f9fafb');
    this.setCssVariable('--light-second-level', light?.backgroundSecondLevel || '#f4f4f5');

    const dark = this.openProfilerConfig().color?.dark;
    this.setCssVariable('--dark', dark?.background || '#12110a');
    this.setCssVariable('--dark-card', dark?.card || '#202020');
    this.setCssVariable('--dark-second-level', light?.backgroundSecondLevel || '#262626');

    const colorBadges = openProfilerConfig.color?.badges;
    if (colorBadges) this.colorBadges.update((colorBadges) => colorBadges.replace('#', ''));
  }

  private mapExperienceByDateStart = <T>(experience: T[]): T[] =>
    orderBy(experience, 'date.start', 'desc');

  private initColorScheme(): void {
    const themeLocalStorage = this.getThemeLocalStorage();
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (!themeLocalStorage)
      localStorage.setItem(
        ThemeConstant.THEME,
        prefersDarkMode ? ThemeConstant.DARK : ThemeConstant.LIGHT,
      );

    this.toggleColorScheme(
      themeLocalStorage || (prefersDarkMode ? ThemeConstant.DARK : ThemeConstant.LIGHT),
    );
  }

  protected switchColorScheme(): void {
    const themeLocalStorage = this.getThemeLocalStorage();

    const newTheme =
      themeLocalStorage === ThemeConstant.LIGHT ? ThemeConstant.DARK : ThemeConstant.LIGHT;
    localStorage.setItem(ThemeConstant.THEME, newTheme);

    this.toggleColorScheme(newTheme);
  }

  private toggleColorScheme(currentTheme: string): void {
    document.documentElement.classList.toggle(
      ThemeConstant.DARK,
      currentTheme === ThemeConstant.DARK,
    );
  }

  protected getThemeLocalStorage = (): string => localStorage.getItem(ThemeConstant.THEME) || '';

  private setCssVariable(variableName: string, value: string): void {
    document.documentElement.style.setProperty(variableName, value);
  }
}
