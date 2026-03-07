import { JsonPipe, KeyValuePipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { openProfilerConfig } from '@open-profiler/config/open-profiler.config';
import { ThemeConstant } from '@open-profiler/constants/theme.constant';
import { ImageErrorHandlerDirective } from '@open-profiler/directives/image-error-handler.directive';
import { BadgesComponent } from '@open-profiler/elements/badges/badges.component';
import { ExperienceComponent } from '@open-profiler/elements/experience/experience.component';
import { SocialsComponent } from '@open-profiler/elements/socials/socials.component';
import { ExperienceModel } from '@open-profiler/models/experience.model';
import { OpenProfilerModel } from '@open-profiler/models/open-profiler.model';

@Component({
  standalone: true,
  selector: 'open-profiler-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    JsonPipe,
    KeyValuePipe,
    NgOptimizedImage,
    BadgesComponent,
    ExperienceComponent,
    SocialsComponent,
    ImageErrorHandlerDirective,
  ],
})
export class AppComponent implements OnInit {
  readonly isDarkMode = signal(false);
  readonly colorBadges = signal('3EA44F');
  readonly currentYear = new Date().getFullYear();
  readonly openProfilerConfig = signal<Partial<OpenProfilerModel>>(openProfilerConfig);

  ngOnInit(): void {
    this.initColorScheme();

    this.openProfilerConfig.update((config) => ({
      ...config,
      experiences: this.mapExperienceByDateStart(config.experiences as ExperienceModel[]),
      education: this.mapExperienceByDateStart(config.education as ExperienceModel[]),
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
    this.setCssVariable('--dark-second-level', dark?.backgroundSecondLevel || '#262626');

    const colorBadges = openProfilerConfig.color?.badges;
    if (colorBadges) this.colorBadges.set(colorBadges.replace('#', ''));
  }

  private readonly mapExperienceByDateStart = (experiences: ExperienceModel[]): ExperienceModel[] =>
    [...experiences].sort(
      (a, b) => new Date(b.date.start).getTime() - new Date(a.date.start).getTime(),
    );

  private initColorScheme(): void {
    const stored = localStorage.getItem(ThemeConstant.THEME);
    const prefersDark = globalThis.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefersDark ? ThemeConstant.DARK : ThemeConstant.LIGHT);

    if (!stored) localStorage.setItem(ThemeConstant.THEME, theme);

    this.applyTheme(theme);
  }

  protected switchColorScheme(): void {
    const newTheme = this.isDarkMode() ? ThemeConstant.LIGHT : ThemeConstant.DARK;
    localStorage.setItem(ThemeConstant.THEME, newTheme);
    this.applyTheme(newTheme);
  }

  private applyTheme(theme: string): void {
    const dark = theme === ThemeConstant.DARK;
    this.isDarkMode.set(dark);
    document.documentElement.classList.toggle(ThemeConstant.DARK, dark);
  }

  private setCssVariable(variableName: string, value: string): void {
    document.documentElement.style.setProperty(variableName, value);
  }
}
