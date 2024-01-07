import { IconModel } from './icon.model';

export interface BaseModel {
  name: string;
  role: string;
  city: string;
  avatarUrl?: string;
  socials?: IconModel[];
}
