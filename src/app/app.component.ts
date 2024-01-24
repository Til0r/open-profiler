import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { openProfilerConfig } from '@open-profiler/config/open-profiler.config';
import { ThemeConstant } from '@open-profiler/constants/theme.constant';
import { BadgesComponent } from '@open-profiler/elements/badges/badges.component';
import { ExperienceComponent } from '@open-profiler/elements/experience/experience.component';
import { SocialsComponent } from '@open-profiler/elements/socials/socials.component';
import { ExperienceModel } from '@open-profiler/models/experience.model';
import { orderBy } from 'lodash';

@Component({
  standalone: true,
  selector: 'open-profiler-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  imports: [
    CommonModule,
    RouterOutlet,
    NgOptimizedImage,
    BadgesComponent,
    ExperienceComponent,
    SocialsComponent,
  ],
})
export class AppComponent implements OnInit {
  localStorage = localStorage;
  ThemeConstant = ThemeConstant;
  openProfilerConfig = openProfilerConfig;

  colorBadges: string = '1db954';
  currentYear = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {
    this.initColorScheme();

    const primary = openProfilerConfig.color?.primary || '#1db954';

    this.setCssVariable('--primary', primary);
    this.setCssVariable('--border-color', `${primary}10`);

    const light = this.openProfilerConfig.color?.light;
    this.setCssVariable('--light', light?.background || '#f4f4f5');
    this.setCssVariable('--light-card', light?.card || '#f9fafb');
    this.setCssVariable('--light-second-level', light?.backgroundSecondLevel || '#f4f4f5');

    const dark = this.openProfilerConfig.color?.dark;
    this.setCssVariable('--dark', dark?.background || '#12110a');
    this.setCssVariable('--dark-card', dark?.card || '#202020');
    this.setCssVariable('--dark-second-level', light?.backgroundSecondLevel || '#262626');

    const colorBadges = openProfilerConfig.color?.badges;
    if (colorBadges) this.colorBadges = colorBadges.replace('#', '');

    this.openProfilerConfig = {
      ...this.openProfilerConfig,
      experiences: this.mapExperienceByDateStart<ExperienceModel>(
        this.openProfilerConfig['experiences'] as ExperienceModel[],
      ),
      education: this.mapExperienceByDateStart<ExperienceModel>(
        this.openProfilerConfig['education'] as ExperienceModel[],
      ),
    };
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

  private setCssVariable = (variableName: string, value: string) => {
    document.documentElement.style.setProperty(variableName, value);
  };
}
