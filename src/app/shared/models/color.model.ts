import { BgModel } from './bg.model';

export interface ColorModel {
  badges: string; // Color of badges icon
  primary: string; // Main color
  dark: Partial<BgModel>;
  light: Partial<BgModel>;
}
