import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeConstant } from '@open-profiler/constants/theme.constant';
import { environments } from '@open-profiler/env/environments';
import { BadgesModel } from '@open-profiler/models/badges.model';
import { ExperienceModel } from '@open-profiler/models/experience.model';
import { IconModel } from '@open-profiler/models/icon.model';
import { ProjectModel } from '@open-profiler/models/project.model';
import { mapValues } from 'lodash';

@Component({
  selector: 'open-profiler-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  localStorage = localStorage;
  ThemeConstant = ThemeConstant;

  color = Math.floor(Math.random() * 16777215).toString(16);
  title = 'open-profiler';

  socials: IconModel[] = [
    { icon: 'linkedin', redirect: '#' },
    { icon: 'twitter', redirect: '#' },
    { icon: 'github', redirect: '#' },
    { icon: 'gitlab', redirect: '#' },
    { icon: 'medium', redirect: '#' },
  ];

  badges: BadgesModel = {
    frontend: [
      { label: 'angular', icon: 'angular' },
      { label: 'typescript', icon: 'typescript' },
      { label: 'javascript', icon: 'javascript' },
      { label: 'tailwindcss', icon: 'tailwindcss' },
      { label: 'bootstrap', icon: 'bootstrap' },
      { label: 'redux', icon: 'redux' },
      { label: 'electron', icon: 'Electron' },
      { label: 'npm', icon: 'npm' },
      { label: 'Ionic', icon: 'Ionic' },
      { label: 'socket.io', icon: 'socket.io' },
      { label: 'webpack', icon: 'webpack' },
      { label: 'web3.js', icon: 'web3.js' },
      { label: 'Firebase', icon: 'Firebase' },
    ],
    backend: [
      { label: 'socket.io', icon: 'socket.io' },
      { label: 'python', icon: 'python' },
      { label: 'flask', icon: 'flask' },
      { label: 'web3.js', icon: 'web3.js' },
      { label: 'solidity', icon: 'solidity' },
      { label: 'mysql', icon: 'mysql' },
      { label: 'docker', icon: 'docker' },
    ],
    empty: [],
  };

  experiences: ExperienceModel[] = [
    {
      title: 'Experience',
      company: 'Hooli',
      date: {
        end: 'Present',
        start: '02/2020',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      title: 'Experience',
      company: 'Hooli',
      date: {
        end: 'Present',
        start: '02/2020',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      title: 'Experience',
      company: 'Hooli',
      date: {
        end: 'Present',
        start: '02/2020',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      title: 'Experience',
      company: 'Hooli',
      date: {
        end: 'Present',
        start: '02/2020',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      title: 'Experience',
      company: 'Hooli',
      date: {
        end: 'Present',
        start: '02/2020',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      title: 'Experience',
      company: 'Hooli',
      date: {
        end: 'Present',
        start: '02/2020',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      title: 'Experience',
      company: 'Hooli',
      date: {
        end: 'Present',
        start: '02/2020',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      title: 'Experience',
      company: 'Hooli',
      date: {
        end: 'Present',
        start: '02/2020',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ];

  projects: ProjectModel[] = [
    {
      name: 'Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      heroLink: './assets/project.jpg',
    },
    {
      name: 'Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      heroLink: './assets/project.jpg',
    },
    {
      name: 'Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      heroLink: './assets/project.jpg',
    },
    {
      name: 'Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      heroLink: './assets/project.jpg',
    },
    {
      name: 'Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      heroLink: './assets/project.jpg',
    },
    {
      name: 'Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      heroLink: './assets/project.jpg',
    },
    {
      name: 'Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      heroLink: './assets/project.jpg',
    },
    {
      name: 'Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      heroLink: './assets/project.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {
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

    this.socials = this.socials.map((social) => ({
      ...social,
      link: `${environments.simpleIcon}${social.icon}/fff`,
    }));

    this.badges = mapValues(this.badges, (area, key) =>
      this.badges[key].map((badge) => ({
        ...badge,
        link: `${environments.simpleIcon}${badge.icon}/${this.color}`,
      })),
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
