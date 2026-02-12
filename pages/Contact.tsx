
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-[#1B365D] text-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h1 className="text-7xl md:text-9xl font-black mb-12 tracking-tighter uppercase">SAY<br />HELLO.</h1>
              <div className="space-y-12">
                <div>
                  <p className="text-[#2B88D9] font-bold uppercase tracking-widest mb-2 text-sm">Direct Line</p>
                  <p className="text-4xl md:text-5xl font-black text-white hover:text-[#FF6B35] transition-colors">
                    +265 888 202 484
                  </p>
                </div>
                <div>
                  <p className="text-[#2B88D9] font-bold uppercase tracking-widest mb-2 text-sm">Email Inquiry</p>
                  <p className="text-3xl md:text-4xl font-black text-white hover:text-[#FF6B35] transition-colors">
                    info@ctgroup.mw
                  </p>
                </div>
                <div>
                  <p className="text-[#2B88D9] font-bold uppercase tracking-widest mb-2 text-sm">Headquarters</p>
                  <p className="text-xl md:text-2xl font-bold leading-relaxed text-white">
                    Plot 12, Chichiri Area,<br />
                    Near Stadium View,<br />
                    Blantyre, Malawi.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 border-2 border-[#FFFFFF]">
              <h3 className="text-3xl font-black text-[#1B365D] mb-8 uppercase">Drop a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#1B365D] mb-2">Full Name</label>
                    <input type="text" className="w-full bg-[#E5E7EB] border-2 border-[#E5E7EB] p-4 text-[#1B365D] font-bold focus:border-[#2B88D9] outline-none transition-colors" placeholder="John Banda" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#1B365D] mb-2">Email Address</label>
                    <input type="email" className="w-full bg-[#E5E7EB] border-2 border-[#E5E7EB] p-4 text-[#1B365D] font-bold focus:border-[#2B88D9] outline-none transition-colors" placeholder="john@example.mw" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#1B365D] mb-2">Branch of Interest</label>
                    <div className="relative">
                      <select className="w-full bg-[#E5E7EB] border-2 border-[#E5E7EB] p-4 text-[#1B365D] font-bold focus:border-[#2B88D9] outline-none appearance-none">
                        <option>Business Consultants</option>
                        <option>Tutors & Learning Centre</option>
                        <option>Web & Infrastructure</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-[#1B365D]" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#1B365D] mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-[#E5E7EB] border-2 border-[#E5E7EB] p-4 text-[#1B365D] font-bold focus:border-[#2B88D9] outline-none resize-none transition-colors" placeholder="How can we help?"></textarea>
                  </div>
                </div>
                <button className="w-full bg-[#FF6B35] text-white py-5 font-black uppercase tracking-widest hover:bg-[#E55A2B] transition-colors border-2 border-[#FF6B35]">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6 border-t-2 border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div>
            <h2 className="text-4xl font-black text-[#1B365D] uppercase tracking-tighter">Authorized Professionals.</h2>
            <p className="text-[#333333] font-bold uppercase tracking-widest text-xs mt-2">Certified ICAM & MRA Partners</p>
          </div>
          <div className="flex gap-8 border-l-4 border-[#FF6B35] pl-8">
            <div className="text-center">
              <span className="block text-3xl font-black text-[#1B365D]">08:00</span>
              <span className="text-[10px] font-bold uppercase opacity-50">Opening</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-black text-[#1B365D]">17:00</span>
              <span className="text-[10px] font-bold uppercase opacity-50">Closing</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
