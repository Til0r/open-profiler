import { BadgesModel } from './badges.model';
import { BaseModel } from './base.model';
import { ContactModel } from './contact.model';
import { ExperienceModel } from './experience.model';
import { ProjectModel } from './project.model';

export interface OpenProfilerModel {
  color: string;
  about: string;
  base: BaseModel;
  badges: BadgesModel;
  contact: ContactModel;
  projects: ProjectModel[];
  education: ExperienceModel[];
  experiences: ExperienceModel[];
}
