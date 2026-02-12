
import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { label: 'Home', value: Page.HOME },
    { label: 'Consultants', value: Page.CONSULTANTS },
    { label: 'Learning Centre', value: Page.TUTORS },
    { label: 'Web Design', value: Page.WEB_DESIGN },
    { label: 'Contact', value: Page.CONTACT },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1B365D] text-white">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="text-2xl font-extrabold cursor-pointer tracking-tighter"
          onClick={() => onNavigate(Page.HOME)}
        >
          C&T <span className="text-[#2B88D9]">GROUP</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.value}
              href={`#${item.value}`}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-[#FF6B35] ${
                currentPage === item.value ? 'text-[#FF6B35] border-b-2 border-[#FF6B35]' : 'text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button 
          onClick={() => onNavigate(Page.CONTACT)}
          className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-6 py-2 font-bold text-sm uppercase transition-colors"
        >
          Connect
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
