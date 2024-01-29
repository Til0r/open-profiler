import { IconModel } from './icon.model';

export interface ProjectModel {
  name: string;
  heroLink?: string;
  redirect?: string;
  description: string;
  socials?: IconModel[];
}
