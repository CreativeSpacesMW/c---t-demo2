
import React from 'react';

const Tutors: React.FC = () => {
  const schedule = [
    { day: "Monday", time: "17:30 - 19:30", course: "ACCA - Performance Management (PM)", level: "Skills" },
    { day: "Tuesday", time: "17:30 - 19:30", course: "ICAM - Financial Accounting", level: "Technician" },
    { day: "Wednesday", time: "17:30 - 19:30", course: "MBA - Strategic Management", level: "Master's Support" },
    { day: "Thursday", time: "17:30 - 19:30", course: "ACCA - Audit & Assurance (AA)", level: "Skills" },
    { day: "Saturday", time: "08:30 - 12:30", course: "ICAM - Management Accounting", level: "Professional" }
  ];

  const benefits = [
    { title: "Exam-Focused", desc: "Intensive revision sessions using current ICAM/ACCA past papers." },
    { title: "Small Cohorts", desc: "Capped class sizes to ensure personalized attention and mentoring." },
    { title: "Blantyre Central", desc: "Conveniently located in Chichiri for easy access after work hours." },
    { title: "MBA Research", desc: "Expert guidance for thesis development and strategic coursework." }
  ];

  return (
    <div className="animate-in slide-in-from-right-10 duration-500">
      <section className="bg-white py-24 px-6 border-b-2 border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-7xl font-black text-[#1B365D] leading-none mb-8">LEARNING<br />CENTRE.</h1>
              <p className="text-xl text-[#333333] leading-relaxed mb-8">
                Professional qualification support for ICAM, ACCA, and MBA candidates. We translate complex theory into exam-room success.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-[#2B88D9] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest">ICAM Technician</span>
                <span className="bg-[#2B88D9] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest">ACCA Skills/Pro</span>
                <span className="bg-[#2B88D9] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest">MBA Strategy</span>
              </div>
            </div>
            <div className="md:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#1B365D] text-white p-10 flex flex-col justify-center border-2 border-[#1B365D]">
                <span className="text-6xl font-black block mb-2">95%</span>
                <span className="text-xs uppercase font-bold tracking-[0.2em]">Exam Pass Rate</span>
              </div>
              <div className="bg-[#E5E7EB] p-10 flex flex-col justify-center border-2 border-[#1B365D]">
                <span className="text-6xl font-black block mb-2 text-[#1B365D]">2023</span>
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#1B365D]">Founded in Blantyre</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E5E7EB] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black text-[#1B365D] uppercase tracking-tighter">Current Schedule</h2>
              <p className="text-[#333333] mt-2 font-bold uppercase text-xs tracking-widest opacity-60">Blantyre Chichiri Campus</p>
            </div>
          </div>

          <div className="grid gap-4">
            {schedule.map((item, idx) => (
              <div key={idx} className="bg-white border-2 border-[#1B365D] p-8 flex flex-col md:flex-row md:items-center justify-between transition-transform hover:-translate-y-1">
                <div className="flex gap-8 items-center mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-[#2B88D9] text-white flex items-center justify-center font-bold text-lg uppercase">
                    {item.day.slice(0, 3)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#1B365D] uppercase">{item.course}</h3>
                    <p className="text-[#FF6B35] text-xs font-black uppercase tracking-widest">{item.level} Level</p>
                  </div>
                </div>
                <div className="text-right border-t md:border-t-0 md:border-l-2 border-[#E5E7EB] pt-4 md:pt-0 md:pl-8">
                  <span className="block text-2xl font-black text-[#1B365D]">{item.time}</span>
                  <span className="text-xs font-bold text-[#333333] uppercase">Interactive Seminar</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-[#1B365D] mb-16 text-center uppercase">Our Pedagogy</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="border-2 border-[#E5E7EB] p-8 hover:border-[#2B88D9] transition-colors">
                <h4 className="text-xl font-black text-[#1B365D] mb-4 uppercase">{benefit.title}</h4>
                <p className="text-sm text-[#333333] leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B365D] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter">Invest in Your Career</h3>
          <p className="text-lg mb-12 opacity-80">Registration for the upcoming ICAM/ACCA semester is now open. Secure your seat at the premier learning centre in the Southern Region.</p>
          <button className="bg-[#FF6B35] text-white px-12 py-6 font-bold uppercase tracking-widest hover:bg-[#E55A2B] border-2 border-[#FF6B35] transition-all">
            Inquire About Fees & Enrollment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Tutors;
