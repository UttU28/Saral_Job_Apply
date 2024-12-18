import { BUTTON_CONFIG } from '../config/buttonConfig';

export interface Button {
  id: string;
  text: string;
  value: string;
}

export interface ButtonGroup {
  id: string;
  buttons: Button[];
}

// Type for button variant
export type ButtonVariant = typeof BUTTON_CONFIG.variant;