import { BgModel } from './bg.model';

export interface ColorModel {
  dark: BgModel;
  badges: string; // Color of badges icon
  light: BgModel;
  primary: string; // Main color
}
