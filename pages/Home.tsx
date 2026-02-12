
import React from 'react';
import Button from '../components/Button';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const branches = [
    {
      title: "Business Consultants",
      description: "Driving operational efficiency through expert tax compliance and internal controls.",
      target: Page.CONSULTANTS,
      icon: (
        <svg className="w-12 h-12 text-[#2B88D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Tutors & Learning",
      description: "Professional qualification support for ACCA, ICAM, and MBA students in Blantyre.",
      target: Page.TUTORS,
      icon: (
        <svg className="w-12 h-12 text-[#2B88D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Web & Infrastructure",
      description: "Custom digital solutions for Malawian SMEs. Database and inventory systems.",
      target: Page.WEB_DESIGN,
      icon: (
        <svg className="w-12 h-12 text-[#2B88D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="bg-white border-b-2 border-[#E5E7EB] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl md:text-8xl font-black text-[#1B365D] leading-tight mb-8">
              PRECISION.<br />
              GROWTH.<br />
              <span className="text-[#2B88D9]">MALAWI.</span>
            </h1>
            <p className="text-xl text-[#333333] mb-12 max-w-lg leading-relaxed">
              Founded in 2023, C&T Group of Partners delivers authoritative consulting, specialized education, and robust digital infrastructure from the heart of Blantyre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => onNavigate(Page.CONSULTANTS)}>Our Expertise</Button>
              <Button variant="outline" onClick={() => onNavigate(Page.CONTACT)}>Contact Blantyre Office</Button>
            </div>
          </div>
          <div className="hidden md:block bg-[#E5E7EB] h-[500px] border-2 border-[#1B365D] relative overflow-hidden p-8">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="text-9xl font-black text-[#1B365D]">C&T</div>
            </div>
            <div className="relative h-full flex flex-col justify-end">
              <div className="bg-[#1B365D] text-white p-6 border-2 border-[#FFFFFF]">
                <h3 className="text-2xl font-bold mb-2">Efficiency & Compliance</h3>
                <p className="text-sm">Strategic partners for modern commerce in the Southern Region.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Branches */}
      <section className="bg-[#E5E7EB] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-[#1B365D] mb-16 text-center uppercase tracking-tighter">Integrated Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {branches.map((branch, idx) => (
              <div key={idx} className="bg-white border-2 border-[#1B365D] p-10 flex flex-col items-start transition-transform hover:-translate-y-2">
                <div className="mb-6">{branch.icon}</div>
                <h3 className="text-2xl font-black text-[#1B365D] mb-4 uppercase">{branch.title}</h3>
                <p className="text-[#333333] mb-8 leading-relaxed flex-grow">{branch.description}</p>
                <button 
                  onClick={() => onNavigate(branch.target)}
                  className="text-[#FF6B35] font-bold text-sm uppercase tracking-widest hover:underline"
                >
                  Learn More &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-16 border-t-2 border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-[#1B365D] flex items-center justify-center border-2 border-[#1B365D]">
              <span className="text-white font-bold text-center text-xs px-2">QB PRO ADVISOR</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#1B365D]">QuickBooks Online ProAdvisor</h4>
              <p className="text-sm text-[#333333]">Certified experts in digital accounting systems.</p>
            </div>
          </div>
          <div className="flex gap-12 grayscale opacity-50">
             <div className="font-bold text-2xl text-[#1B365D]">MRA COMPLIANT</div>
             <div className="font-bold text-2xl text-[#1B365D]">ICAM RECOGNIZED</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
