import { IconModel } from './icon.model';

export interface BaseModel {
  name: string;
  role: string;
  avatarUrl?: string;
  socials?: IconModel[];
}
