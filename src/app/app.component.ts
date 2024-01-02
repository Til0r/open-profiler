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
import { BaseModel } from '@open-profiler/models/base.model';
import { ExperienceModel } from '@open-profiler/models/experience.model';
import { IconModel } from '@open-profiler/models/icon.model';
import { OpenProfilerModel } from '@open-profiler/models/open-profiler.model';
import { ProjectModel } from '@open-profiler/models/project.model';
import { mapValues } from 'lodash';

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

    const color = openProfilerConfig.color || '11843b';
    if (!('color' in openProfilerConfig)) {
      Object.assign(openProfilerConfig, { color });
    }

    this.openProfilerConfig = this.mapOpenProfilerConfig(color);
  }

  private mapOpenProfilerConfig(color: string): Partial<OpenProfilerModel> {
    return mapValues(openProfilerConfig, (value, key) => {
      switch (key) {
        case 'base':
          return this.mapBaseModel(value as BaseModel);
        case 'projects':
          return (value as ProjectModel[]).map((project) => this.mapProjectModel(project, color));
        case 'badges':
          return mapValues(value as BadgesModel, (area) =>
            this.getLinkIcon<BadgeModel>(area, color),
          );
        case 'experiences':
          return (value as ExperienceModel[]).map((experience) =>
            this.mapExperienceModel(experience, color),
          );
        default:
          return value;
      }
    }) as never;
  }

  private mapBaseModel = (baseModel: BaseModel): BaseModel => ({
    ...baseModel,
    ...(baseModel.socials && {
      socials: this.getLinkIcon<IconModel>(baseModel.socials as IconModel[], 'fff'),
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
}
