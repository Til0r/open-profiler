import { environments } from '@open-profiler/env/environments';

export class BadgesUtil {
  public static setLinkIcon = <T extends { icon: string }>(badges: T[], color: string) =>
    badges.map((social) => ({
      ...social,
      link: `${environments.simpleIcon}${social['icon']}/${color}`,
    }));
}
