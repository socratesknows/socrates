import React from 'react';
import { TWITTER_HANDLE, TWITTER_URL } from '../constants';

export const Contact: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 fade-in">
       <h1 className="text-white font-medium text-lg mb-8">Contact</h1>
       <div className="flex flex-col gap-4 items-start">
         <p className="text-neutral-400">
           You can find me on Twitter.
         </p>
         <a 
          href={TWITTER_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-mono text-sm text-white border-b border-neutral-700 pb-0.5 hover:border-white transition-colors"
         >
           {TWITTER_HANDLE}
         </a>
       </div>
    </div>
  );
};
