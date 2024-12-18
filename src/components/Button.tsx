import React from 'react';
import { toast } from 'react-toastify';
import { Button as ButtonType } from '../types/button';
import { formatButtonText } from '../utils/textUtils';
import { BUTTON_CONFIG } from '../config/buttonConfig';

const baseURL = 'http://192.168.1.163:3000' ;

interface ButtonProps {
  button: ButtonType;
  width: string;
}

export const Button: React.FC<ButtonProps> = ({ button, width }) => {
  const handleClick = async () => {
    try {
      console.log('Button pressed:', button.value);
  
      // Retry logic for robustness
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          const response = await fetch(`${baseURL}/typeThis`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value: button.value }),
          });
  
          if (response.ok) {
            const data = await response.json();
            console.log('Response from server:', data);
            toast.success(`Clicked: ${button.text} - Response: ${data.message || 'Success'}`);
            break; // Exit retry loop on success
          } else {
            throw new Error(`Attempt ${attempt}: Request failed with status ${response.status}`);
          }
        } catch (err) {
          console.error(`Attempt ${attempt} failed:`, err);
          if (attempt === 3) {
            toast.error(`Error: ${err}`);
          }
        }
      }
    } catch (error) {
      console.error('Error occurred:', error);
      toast.error(`Error: ${error}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${width} group relative flex flex-col items-start justify-center 
        bg-gray-800/40 hover:bg-gray-700/60 text-white p-2.5 rounded-lg 
        transition-all duration-200 backdrop-blur-sm border border-gray-700/20
        hover:border-gray-600/30 shadow-sm hover:shadow-md min-h-[4rem]`}
    >
      <span className="text-xs font-medium text-gray-400 mb-0.5">
        {button.text}
      </span>
      <span className="text-sm text-white/90 truncate w-full">
        {formatButtonText(button.value)}
      </span>
    </button>
  );
};