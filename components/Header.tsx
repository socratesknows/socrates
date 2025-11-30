import React from 'react';
import { PageView } from '../types';

interface HeaderProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const linkClass = (view: PageView) => 
    `cursor-pointer text-sm transition-colors duration-200 ${
      currentView === view ? 'text-white font-medium' : 'text-neutral-500 hover:text-neutral-300'
    }`;

  return (
    <header className="flex justify-between items-center py-12 mb-8">
      <div 
        onClick={() => onNavigate(PageView.ARCHIVE)}
        className="text-white font-bold tracking-tight cursor-pointer select-none text-lg"
      >
        socrates
      </div>
      <nav className="flex gap-6 font-mono text-s lowercase tracking-wider">
        <span 
          onClick={() => onNavigate(PageView.ARCHIVE)} 
          className={linkClass(PageView.ARCHIVE)}
        >
          archives
        </span>
        <span 
          onClick={() => onNavigate(PageView.ABOUT)} 
          className={linkClass(PageView.ABOUT)}
        >
          about
        </span>
        <span 
          onClick={() => onNavigate(PageView.CONTACT)} 
          className={linkClass(PageView.CONTACT)}
        >
          contact
        </span>
      </nav>
    </header>
  );
};
