import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'open-profiler-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'open-profiler';

  badges = [
    { name: 'angular', iconName: 'angular' },
    { name: 'typescript', iconName: 'typescript' },
    { name: 'javascript', iconName: 'javascript' },
    { name: 'tailwindcss', iconName: 'tailwindcss' },
    { name: 'bootstrap', iconName: 'bootstrap' },
    { name: 'reactivex', iconName: 'reactivex' },
    { name: 'redux', iconName: 'redux' },
    { name: 'Electron', iconName: 'Electron' },
    { name: 'npm', iconName: 'npm' },
    { name: 'Ionic', iconName: 'Ionic' },
    { name: 'socket.io', iconName: 'socket.io' },
    { name: 'python', iconName: 'python' },
    { name: 'flask', iconName: 'flask' },
    { name: 'webpack', iconName: 'webpack' },
    { name: 'web3.js', iconName: 'web3.js' },
    { name: 'solidity', iconName: 'solidity' },
    { name: 'Firebase', iconName: 'Firebase' },
    { name: 'mysql', iconName: 'mysql' },
    { name: 'docker', iconName: 'docker' },
    { name: 'Arduino', iconName: 'Arduino' },
    { name: 'RaspberryPi', iconName: 'RaspberryPi' },
  ];

  projects = [
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
}
