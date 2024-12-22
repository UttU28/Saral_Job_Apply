/**
 * Utility functions for text handling
 */

export const formatButtonText = (value: string): string => {
  if (!value) return '';
  
  // For password, return asterisks
  if (value.includes('password') || value.includes('Password')) {
    return '*'.repeat(8);
  }

  // For long text (like descriptions), truncate with ellipsis
  if (value.length > 40) {
    return value.substring(0, 40) + '...';
  }

  return value;
};