import { OpenProfilerModel } from '@open-profiler/models/open-profiler.model';

export const openProfilerConfig: Partial<OpenProfilerModel> = {
  color: '12110a',
  base: {
    name: 'Jane Doe',
    role: 'Full Stack Developer',
    socials: [
      { icon: 'linkedin', redirect: 'https://www.linkedin.com/janedoe' },
      { icon: 'twitter', redirect: 'https://twitter.com/janedoe' },
      { icon: 'github', redirect: 'https://github.com/janedoe' },
      { icon: 'gitlab', redirect: 'https://gitlab.com/janedoe' },
      { icon: 'medium', redirect: 'https://medium.com/@janedoe' },
    ],
    avatarUrl: './assets/avatar.jpg',
  },
  about:
    'Passionate and results-driven Full Stack Developer with expertise in building scalable web applications. Proven track record of delivering high-quality software solutions in fast-paced environments.',
  badges: {
    frontend: [
      { label: 'angular', icon: 'angular' },
      { label: 'typescript', icon: 'typescript' },
      { label: 'javascript', icon: 'javascript' },
      { label: 'tailwindcss', icon: 'tailwindcss' },
      { label: 'bootstrap', icon: 'bootstrap' },
      { label: 'redux', icon: 'redux' },
      { label: 'npm', icon: 'npm' },
      { label: 'webpack', icon: 'webpack' },
      { label: 'graphql', icon: 'graphql' },
      { label: 'Firebase', icon: 'Firebase' },
    ],
    backend: [
      { label: 'nodejs', icon: 'nodedotjs' },
      { label: 'python', icon: 'python' },
      { label: 'django', icon: 'django' },
      { label: 'flask', icon: 'flask' },
      { label: 'mongodb', icon: 'mongodb' },
      { label: 'mysql', icon: 'mysql' },
      { label: 'docker', icon: 'docker' },
    ],
    empty: [],
  },
  experiences: [
    {
      title: 'Senior Developer',
      company: 'TechCo',
      date: {
        end: '01/03/2022',
        start: '01/02/2019',
      },
      description:
        'Led a team of developers in the successful delivery of multiple web applications.',
      badges: [
        { label: 'angular', icon: 'angular' },
        { label: 'nodejs', icon: 'nodedotjs' },
        { label: 'docker', icon: 'docker' },
      ],
    },
    {
      title: 'Software Engineer',
      company: 'InnoCorp',
      date: {
        end: '01/03/2019',
        start: '01/02/2017',
      },
      description: 'Contributed to the development of a cutting-edge e-commerce platform.',
    },
  ],
  projects: [
    {
      name: 'E-commerce Platform',
      description:
        'Built a scalable and responsive e-commerce platform with integrated payment gateways.',
      heroLink: './assets/ecommerce.jpg',
      socials: [
        { icon: 'github', redirect: 'https://github.com/janedoe' },
        { icon: 'gitlab', redirect: 'https://gitlab.com/janedoe' },
        { icon: 'medium', redirect: 'https://medium.com/@janedoe' },
      ],
    },
    {
      name: 'Social Networking App',
      description:
        'Developed a feature-rich social networking app with real-time messaging functionality.',
      heroLink: './assets/socialapp.jpg',
    },
  ],
  contact: {
    mail: 'jane.doe@mail.com',
    description:
      'Feel free to reach out to me if you have any questions or collaboration opportunities. I am open to new challenges and projects.',
  },
  education: [
    {
      title: 'Bachelor of Science in Computer Science',
      company: 'University of Tech',
      date: {
        end: '01/05/2016',
        start: '01/09/2012',
      },
      description:
        'Studied computer science with a focus on web development and software engineering.',
    },
    {
      title: 'Web Development Bootcamp',
      company: 'Code Academy',
      date: {
        end: '01/08/2017',
        start: '01/06/2017',
      },
      description:
        'Completed an intensive web development bootcamp, gaining hands-on experience in modern web technologies.',
    },
  ],
};
