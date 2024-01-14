import { IconModel } from './icon.model';

export interface BannerModel {
  name: string;
  role: string;
  city: string;
  avatarUrl?: string;
  socials?: IconModel[];
}
