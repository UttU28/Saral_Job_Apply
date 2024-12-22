/**
 * Utility functions for button-related calculations and operations
 */

export const getButtonWidth = (totalButtons: number, buttonIndex: number): string => {
  // If it's a single button or the last button in an odd-numbered group
  if (totalButtons === 1 || (buttonIndex === totalButtons - 1 && totalButtons % 2 !== 0)) {
    return 'col-span-2';
  }
  
  // Default width for regular buttons
  return 'col-span-1';
};