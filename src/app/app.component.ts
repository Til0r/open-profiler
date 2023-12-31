import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { openProfilerConfig } from '@open-profiler/config/open-profiler.config';
import { ThemeConstant } from '@open-profiler/constants/theme.constant';
import { BadgesComponent } from '@open-profiler/elements/badges/badges.component';
import { ExperienceComponent } from '@open-profiler/elements/experience/experience.component';
import { environments } from '@open-profiler/env/environments';
import { BadgeModel } from '@open-profiler/models/badge.model';
import { BadgesModel } from '@open-profiler/models/badges.model';
import { BaseModel } from '@open-profiler/models/base.model';
import { ExperienceModel } from '@open-profiler/models/experience.model';
import { mapValues } from 'lodash';

@Component({
  standalone: true,
  selector: 'open-profiler-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet, NgOptimizedImage, BadgesComponent, ExperienceComponent],
})
export class AppComponent implements OnInit {
  localStorage = localStorage;
  ThemeConstant = ThemeConstant;
  openProfilerConfig = openProfilerConfig;

  currentYear = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {
    this.initColorScheme();

    let color = openProfilerConfig.color;
    if (!color) {
      color = '11843b';
      Object.assign(openProfilerConfig, { color });
    }

    this.openProfilerConfig = mapValues(openProfilerConfig, (config, key) => {
      if (key === 'base') {
        return {
          ...(config as BaseModel),
          socials: (config as BaseModel).socials.map((social) => ({
            ...social,
            link: `${environments.simpleIcon}${social.icon}/fff`,
          })),
        };
      } else if (key === 'badges') {
        return mapValues(config as BadgesModel, (area) =>
          (area as BadgeModel[]).map((badge) => ({
            ...badge,
            link: `${environments.simpleIcon}${badge.icon}/${color}`,
          })),
        );
      } else if (key === 'experiences') {
        return (config as ExperienceModel[]).map((experience) => ({
          ...experience,
          ...('badges' in experience && {
            badges: experience?.badges?.map((badge) => ({
              ...badge,
              link: `${environments.simpleIcon}${badge.icon}/${color}`,
            })),
          }),
        }));
      }

      return config;
    }) as never;
  }

  private initColorScheme(): void {
    const themeLocalStorage = this.getThemeLocalStorage();
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (!themeLocalStorage) {
      localStorage.setItem(
        ThemeConstant.THEME,
        prefersDarkMode ? ThemeConstant.DARK : ThemeConstant.LIGHT,
      );
    }

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
