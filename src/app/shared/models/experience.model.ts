import { BadgeModel } from './badge.model';

export interface ExperienceModel {
  title: string;
  company: string;
  date: {
    end: string;
    start: string;
  };
  description: string;
  badges?: BadgeModel[];
}
