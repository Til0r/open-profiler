import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { openProfilerConfig } from '@open-profiler/config/open-profiler.config';
import { ThemeConstant } from '@open-profiler/constants/theme.constant';
import { BadgesComponent } from '@open-profiler/elements/badges/badges.component';
import { ExperienceComponent } from '@open-profiler/elements/experience/experience.component';
import { SocialsComponent } from '@open-profiler/elements/socials/socials.component';
import { environments } from '@open-profiler/env/environments';
import { BadgeModel } from '@open-profiler/models/badge.model';
import { BadgesModel } from '@open-profiler/models/badges.model';
import { BannerModel } from '@open-profiler/models/banner.model';
import { ExperienceModel } from '@open-profiler/models/experience.model';
import { IconModel } from '@open-profiler/models/icon.model';
import { OpenProfilerModel } from '@open-profiler/models/open-profiler.model';
import { ProjectModel } from '@open-profiler/models/project.model';
import { mapValues, orderBy } from 'lodash';

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

  currentYear = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {
    this.initColorScheme();

    const primary = openProfilerConfig.color?.primary || '1db954';

    this.setCssVariable('--primary', `#${primary}`);

    const light = this.openProfilerConfig.color?.light;
    this.setCssVariable('--light', light?.background || '#f4f4f5');
    this.setCssVariable('--light-card', light?.card || '#f9fafb');
    this.setCssVariable('--light-second-level', light?.backgroundSecondLevel || '#f4f4f5');

    const dark = this.openProfilerConfig.color?.dark;
    this.setCssVariable('--dark', dark?.background || '#12110a');
    this.setCssVariable('--dark-card', dark?.card || '#1c1c1c');
    this.setCssVariable('--dark-second-level', light?.backgroundSecondLevel || '#262626');

    this.openProfilerConfig = this.mapOpenProfilerConfig(
      openProfilerConfig.color?.badges || '1db954',
    );
  }

  private mapOpenProfilerConfig(color: string): Partial<OpenProfilerModel> {
    return mapValues(openProfilerConfig, (value, key) => {
      switch (key) {
        case 'banner':
          return this.mapBannerModel(value as BannerModel);
        case 'projects':
          return (value as ProjectModel[]).map((project) => this.mapProjectModel(project, color));
        case 'badges':
          return mapValues(value as BadgesModel, (area) =>
            this.getLinkIcon<BadgeModel>(area, color),
          );
        case 'experiences':
          return this.mapExperienceByDateStart(
            (value as ExperienceModel[]).map((experience) =>
              this.mapExperienceModel(experience, color),
            ),
          );
        case 'education':
          return this.mapExperienceByDateStart(value as ExperienceModel[]);
        default:
          return value;
      }
    }) as never;
  }

  private mapExperienceByDateStart = (experience: ExperienceModel[]): ExperienceModel[] =>
    orderBy(experience, 'date.start', 'desc');

  private mapBannerModel = (bannerModel: BannerModel): BannerModel => ({
    ...bannerModel,
    ...(bannerModel.socials && {
      socials: this.getLinkIcon<IconModel>(bannerModel.socials as IconModel[], 'fff'),
    }),
  });

  private mapProjectModel = (project: ProjectModel, color: string): ProjectModel => ({
    ...project,
    ...(project.socials && {
      socials: this.getLinkIcon<IconModel>(project.socials, color),
    }),
  });

  private mapExperienceModel = (experience: ExperienceModel, color: string): ExperienceModel => {
    return {
      ...experience,
      ...('badges' in experience && {
        badges: this.getLinkIcon<BadgeModel>(experience.badges as BadgeModel[], color),
      }),
    };
  };

  private getLinkIcon = <T extends { icon?: string }>(badges: T[], color: string): T[] =>
    badges?.map((badge) => ({
      ...badge,
      link: `${environments.simpleIcon}${badge.icon}/${color}`,
    }));

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
