import React from 'react';
import { Settings } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between mb-4">
      <h1 className="text-lg font-semibold text-white/90">Nokri Controller</h1>
      <Settings className="w-5 h-5 text-gray-400" />
    </header>
  );
};