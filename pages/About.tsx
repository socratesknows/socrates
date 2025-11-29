import React from 'react';
import { ABOUT_TEXT } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 fade-in max-w-lg">
      <h1 className="text-white font-medium text-lg mb-8">About</h1>
      <div className="space-y-6 text-neutral-400 leading-relaxed font-light">
        {ABOUT_TEXT.split('\n\n').map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
