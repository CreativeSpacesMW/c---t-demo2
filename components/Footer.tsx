
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1B365D] text-white py-20 px-6 border-t-8 border-[#2B88D9]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-black mb-6 tracking-tighter">C&T GROUP OF PARTNERS</h2>
          <p className="text-[#2B88D9] font-bold mb-8 max-w-sm">
            Professional excellence in Business Consulting, Education, and Digital Strategy. Proudly founded in Blantyre, 2023.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white flex items-center justify-center text-[#1B365D] font-bold">f</div>
            <div className="w-10 h-10 bg-white flex items-center justify-center text-[#1B365D] font-bold">in</div>
            <div className="w-10 h-10 bg-white flex items-center justify-center text-[#1B365D] font-bold">X</div>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase font-bold tracking-widest text-[#FF6B35] mb-6">Quick Links</h4>
          <ul className="space-y-4 font-bold text-sm">
            <li><a href="#home" onClick={() => onNavigate(Page.HOME)} className="hover:text-[#2B88D9]">Home</a></li>
            <li><a href="#consultants" onClick={() => onNavigate(Page.CONSULTANTS)} className="hover:text-[#2B88D9]">Consultants</a></li>
            <li><a href="#tutors" onClick={() => onNavigate(Page.TUTORS)} className="hover:text-[#2B88D9]">Learning Centre</a></li>
            <li><a href="#web-design" onClick={() => onNavigate(Page.WEB_DESIGN)} className="hover:text-[#2B88D9]">Web Design</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase font-bold tracking-widest text-[#FF6B35] mb-6">Contact Us</h4>
          <address className="not-italic text-sm font-bold space-y-4">
            <p>Chichiri, Blantyre, Malawi</p>
            <p>+265 888 202 484</p>
            <p>info@ctgroup.mw</p>
          </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold tracking-[0.2em] opacity-50">
        <p>&copy; 2024 C&T Group of Partners. All Rights Reserved.</p>
        <p>MRA Compliance Guaranteed | Blantyre, MW</p>
      </div>
    </footer>
  );
};

export default Footer;
