
import React from 'react';

const Consultants: React.FC = () => {
  const services = [
    { name: "Tax Compliance", focus: "MRA Regulations", frequency: "Monthly/Annual", details: "WHT, VAT, PAYE, and Corporate Tax returns with FIP and TCC management." },
    { name: "External Audit", focus: "Financial Transparency", frequency: "Year-End", details: "Independent verification of fiscal statements for bank and regulatory requirements." },
    { name: "Internal Controls", focus: "Risk Management", frequency: "Ongoing", details: "Designing SOPs and fraud prevention systems for robust oversight." },
    { name: "Company Secretarial", focus: "Legal Adherence", frequency: "As Needed", details: "PACRA filings, annual returns, and statutory board documentation." }
  ];

  const roadmapSteps = [
    { step: "01", title: "Gap Analysis", desc: "We review your current MRA and PACRA standing to identify any latent liabilities or compliance gaps." },
    { step: "02", title: "Framework Design", desc: "Implementation of internal control systems that align with Malawian labor laws and Teveta requirements." },
    { step: "03", title: "Ongoing Monitoring", desc: "Monthly reconciliation and proactive filing to ensure a valid Tax Compliance Certificate (TCC) year-round." }
  ];

  return (
    <div className="animate-in slide-in-from-bottom-10 duration-500">
      <section className="bg-[#1B365D] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">Efficiency & Compliance</h1>
          <p className="text-xl text-[#2B88D9] font-bold max-w-2xl border-l-4 border-[#FF6B35] pl-6 leading-relaxed">
            Authorized partners in navigating the Malawian fiscal landscape. We ensure your B2B operations are lean, legal, and locally optimized.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-[#1B365D] mb-12 uppercase tracking-tight">Core B2B Offerings</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-2 border-[#E5E7EB] text-left">
              <thead className="bg-[#E5E7EB] text-[#1B365D]">
                <tr>
                  <th className="p-6 font-black uppercase text-sm border-r-2 border-[#FFFFFF]">Service Area</th>
                  <th className="p-6 font-black uppercase text-sm border-r-2 border-[#FFFFFF]">Primary Focus</th>
                  <th className="p-6 font-black uppercase text-sm border-r-2 border-[#FFFFFF]">Engagement</th>
                  <th className="p-6 font-black uppercase text-sm">Key Deliverables</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s, idx) => (
                  <tr key={idx} className="border-t-2 border-[#E5E7EB] hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-[#1B365D] border-r-2 border-[#E5E7EB]">{s.name}</td>
                    <td className="p-6 text-[#333333] border-r-2 border-[#E5E7EB]">{s.focus}</td>
                    <td className="p-6 text-[#333333] border-r-2 border-[#E5E7EB]">{s.frequency}</td>
                    <td className="p-6 text-[#333333]">{s.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-[#1B365D] mb-16 uppercase text-center">Our Compliance Roadmap</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {roadmapSteps.map((item, i) => (
              <div key={i} className="bg-white border-2 border-[#1B365D] p-10 relative">
                <span className="text-6xl font-black text-[#E5E7EB] absolute top-4 right-4">{item.step}</span>
                <h3 className="text-2xl font-black text-[#1B365D] mb-4 relative z-10">{item.title}</h3>
                <p className="text-[#333333] relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6 border-t-2 border-[#1B365D]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-4xl font-black text-[#1B365D] mb-8 uppercase">Why Choose C&T?</h3>
            <p className="text-[#333333] leading-relaxed mb-6">
              In a rapidly evolving economic environment, Blantyre's industrial and commercial sectors require more than just bookkeeping. We provide strategic foresight.
            </p>
            <ul className="space-y-4">
              {['MRA Tax E-Filing Experts', 'Certified Internal Control Professionals', 'QuickBooks Cloud Integration', 'Southern Region Specialist Knowledge'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-[#1B365D] font-bold">
                  <span className="w-6 h-6 bg-[#FF6B35] flex items-center justify-center text-white text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#1B365D] text-white p-10 flex flex-col justify-center border-2 border-[#1B365D]">
            <h4 className="text-2xl font-black mb-4 uppercase">Direct B2B Inquiry</h4>
            <p className="mb-8 opacity-80">Request a high-level consultation for your corporate tax and audit needs.</p>
            <button className="bg-[#FF6B35] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#E55A2B] transition-colors border-2 border-[#FF6B35]">
              Contact Senior Partner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultants;
