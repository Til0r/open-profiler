import { BadgesModel } from './badges.model';
import { BannerModel } from './banner.model';
import { ColorModel } from './color.model';
import { ContactModel } from './contact.model';
import { ExperienceModel } from './experience.model';
import { ProjectModel } from './project.model';

export interface OpenProfilerModel {
  about: string;
  banner: BannerModel;
  badges: BadgesModel;
  contact: ContactModel;
  projects: ProjectModel[];
  color: Partial<ColorModel>;
  education: ExperienceModel[];
  experiences: ExperienceModel[];
}
