import React from 'react';
import { Button } from './Button';
import { ButtonGroup as ButtonGroupType } from '../types/button';
import { getButtonWidth } from '../utils/buttonUtils';

interface ButtonGroupProps {
  group: ButtonGroupType;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ group }) => {
  const formatGroupId = (id: string) => {
    return id
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  return (
    <div className="mb-6">
      <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2.5 px-0.5">
        {formatGroupId(group.id)}
      </h2>
      <div className="grid grid-cols-2 gap-2">
        {group.buttons.map((button, index) => (
          <Button
            key={button.id}
            button={button}
            width={getButtonWidth(group.buttons.length, index)}
          />
        ))}
      </div>
    </div>
  );
};