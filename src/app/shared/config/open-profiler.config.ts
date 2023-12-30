import { OpenProfilerModel } from '@open-profiler/models/open-profiler.model';

export const openProfilerConfig: Partial<OpenProfilerModel> = {
  base: {
    name: 'John Smit',
    role: 'Senior FrontEnd Developer',
    socials: [
      { icon: 'linkedin', redirect: '#' },
      { icon: 'twitter', redirect: '#' },
      { icon: 'github', redirect: '#' },
      { icon: 'gitlab', redirect: '#' },
      { icon: 'medium', redirect: '#' },
    ],
  },
  about:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis auctor eros, non eleifend felis. Suspendisse non semper massa, et ornare lacus. Proin efficitur id lectus sed tristique. Duis velit lacus, iaculis a auctor eu, sodales in erat. Duis blandit nec velit vitae interdum. Sed maximus non ipsum aliquet fringilla. Donec a egestas nibh, vitae ullamcorper sem. Aenean tincidunt massa quis ullamcorper varius. Morbi feugiat lacus tellus, eget venenatis nulla dignissim a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque accumsan posuere facilisis. Praesent in convallis urna. Integer vulputate justo ut nisi faucibus, id volutpat eros tincidunt. Mauris vel ex dictum augue pretium pretium ornare id orci. Curabitur tincidunt mi ut scelerisque rutrum. Duis pulvinar et est quis accumsan.',
  badges: {
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
  },
  experiences: [
    {
      title: 'Experience',
      company: 'Hooli',
      date: {
        end: '',
        start: '01/02/2020',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      badges: [
        { label: 'socket.io', icon: 'socket.io' },
        { label: 'python', icon: 'python' },
        { label: 'flask', icon: 'flask' },
      ],
    },
    {
      title: 'Experience',
      company: 'Hooli',
      date: {
        end: '01/03/2023',
        start: '01/02/2020',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      title: 'Experience',
      company: 'Hooli',
      date: {
        end: '01/03/2023',
        start: '01/02/2020',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      title: 'Experience',
      company: 'Hooli',
      date: {
        end: '01/03/2023',
        start: '01/02/2020',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      title: 'Experience',
      company: 'Hooli',
      date: {
        end: '01/03/2023',
        start: '01/02/2020',
      },
      badges: [
        { label: 'socket.io', icon: 'socket.io' },
        { label: 'python', icon: 'python' },
        { label: 'flask', icon: 'flask' },
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ],
  projects: [
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
  ],
  contact: {
    mail: 'mail@mail.com',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis auctor eros, non eleifend felis. Suspendisse non semper massa, et ornare lacus.',
  },
  education: [
    {
      title: 'Education',
      company: 'Hooli',
      date: {
        end: '01/03/2023',
        start: '01/02/2020',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      title: 'Education',
      company: 'Hooli',
      date: {
        end: '01/03/2023',
        start: '01/02/2020',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ],
};
