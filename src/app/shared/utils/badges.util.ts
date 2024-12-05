import { environments } from '@open-profiler/env/environments';

export const setLinkIcon = <T extends { icon: string }>(badges: T[], color: string): T[] =>
  badges.map((social) => ({
    ...social,
    link: `${environments.simpleIcon}${social['icon']}/${color}`,
  }));
