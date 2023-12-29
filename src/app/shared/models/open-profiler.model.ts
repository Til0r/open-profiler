import { BadgesModel } from './badges.model';
import { BaseModel } from './base.model';
import { ExperienceModel } from './experience.model';
import { ProjectModel } from './project.model';

export interface OpenProfilerModel {
  about: string;
  base: BaseModel;
  badges: BadgesModel;
  projects: ProjectModel[];
  experiences: ExperienceModel[];
}
