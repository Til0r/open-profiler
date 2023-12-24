import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  title = 'open-profiler';
  color = '052e16';

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
}
