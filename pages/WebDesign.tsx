
import React from 'react';

const WebDesign: React.FC = () => {
  const capabilities = [
    { title: "SME Web Portals", desc: "SEO-optimized, mobile-first websites for the local Malawian market." },
    { title: "Inventory Databases", desc: "Bespoke SQL/NoSQL systems for real-time stock and POS integration." },
    { title: "Custom CRMs", desc: "Localized client management tools for Southern Region commerce." },
    { title: "Cybersecurity", desc: "Robust data encryption and secure backup protocols for business data." }
  ];

  const processSteps = [
    { step: "01", name: "Audit", desc: "Analyzing your current paper-based or legacy digital systems." },
    { step: "02", name: "Arch", desc: "Designing a data architecture that scales with your growth." },
    { step: "03", name: "Build", desc: "Clean, flat-design UI coupled with high-performance backends." },
    { step: "04", name: "Host", desc: "Local and cloud hosting with 99.9% uptime for Malawian clients." }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-white border-b-2 border-[#E5E7EB] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-6xl md:text-8xl font-black text-[#1B365D] leading-[0.9] mb-8">DIGITAL<br />INFRA.</h1>
              <p className="text-xl text-[#333333] mb-12 max-w-lg font-medium">
                We move beyond 'design' to deliver robust digital systems. Specializing in data-heavy applications for the modern firm.
              </p>
              <div className="bg-[#1B365D] text-white p-10 border-2 border-[#1B365D]">
                <h3 className="text-2xl font-black mb-4 uppercase">The C&T Stack</h3>
                <p className="text-sm opacity-80 leading-relaxed mb-6">Our development team utilizes modern frameworks to ensure speed, security, and local accessibility even on low-bandwidth connections.</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'PostgreSQL', 'Node.js', 'CloudFlare'].map(t => (
                    <span key={t} className="border border-[#2B88D9] px-3 py-1 text-[10px] uppercase font-bold text-[#2B88D9]">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {capabilities.map((cap, i) => (
                <div key={i} className="bg-[#E5E7EB] p-8 border-2 border-[#1B365D] hover:bg-[#2B88D9] hover:text-white transition-all group">
                  <h4 className="text-2xl font-black text-[#1B365D] mb-2 uppercase group-hover:text-white">{cap.title}</h4>
                  <p className="text-[#333333] group-hover:text-white/80">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-24 px-6 border-y-2 border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-[#1B365D] mb-16 uppercase text-center">Development Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {processSteps.map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-[#1B365D] text-white flex items-center justify-center text-2xl font-black mx-auto mb-6">{p.step}</div>
                <h4 className="text-xl font-black text-[#1B365D] mb-2 uppercase">{p.name}</h4>
                <p className="text-xs text-[#333333] uppercase font-bold tracking-widest">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B365D] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-16 uppercase tracking-tighter text-center">Infrastructure Showcase</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white border-4 border-white aspect-video relative overflow-hidden group">
                <img src={`https://picsum.photos/seed/ctinfra${item}/800/600`} alt="Project" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-[#FF6B35] bg-opacity-0 group-hover:bg-opacity-90 transition-all p-8 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100">
                  <h4 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">Internal System {item}</h4>
                  <p className="text-xs text-white font-bold uppercase tracking-widest">Database Optimization</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center border-4 border-[#1B365D] p-16">
          <h3 className="text-4xl font-black text-[#1B365D] mb-6 uppercase tracking-tighter">Digitize Your Business</h3>
          <p className="text-xl text-[#333333] mb-12">Stop struggling with inefficient systems. We build tools that work as hard as you do.</p>
          <button className="bg-[#FF6B35] text-white px-12 py-5 font-black uppercase tracking-widest hover:bg-[#1B365D] transition-colors border-2 border-[#FF6B35] hover:border-[#1B365D]">
            Request Technical Proposal
          </button>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;
