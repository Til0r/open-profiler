import { IconModel } from './icon.model';

export interface ProjectModel {
  name: string;
  heroLink?: string;
  description: string;
  socials?: IconModel[];
}
