import React from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, Sparkles, Watch, Smartphone, ShieldCheck } from "lucide-react";

export default function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32 bg-black overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col gap-16">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-blue-400 font-display font-extrabold tracking-widest text-xs uppercase bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800 shadow-xs">
            <Sparkles size={12} className="fill-blue-400" />
            <span>RESUME</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white leading-none mt-1">
            the journey so far
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-medium leading-relaxed mt-2">
            From insurance tech to community tech — two roles and counting.
          </p>
        </div>

        {/* Timeline Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mt-6">
          
          {/* INTERNSHIP CARD 1: MYGATE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-xl flex flex-col justify-between gap-8 hover:shadow-2xl transition-shadow relative overflow-hidden group"
          >
            <div className="flex flex-col gap-5">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-900 text-amber-200 rounded-2xl flex items-center justify-center font-black text-lg shadow-inner select-none">
                    mg
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-white">Product Design Intern</h3>
                    <p className="text-sm font-semibold text-gray-400">Mygate</p>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-1">
                  <span className="bg-zinc-800 text-gray-300 font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1.5 w-fit select-none">
                    <Calendar size={12} />
                    <span>Dec '23 - Apr '24</span>
                  </span>
                  <span className="text-xs text-gray-500 font-medium flex items-center gap-1 sm:justify-end">
                    <MapPin size={12} />
                    <span>Bengaluru, KA</span>
                  </span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="flex flex-col gap-4 text-gray-300 font-medium text-sm sm:text-base leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0"></span>
                  <span>Designed features and improvements for <strong className="text-white font-bold">smart locks</strong> and connected device experiences.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0"></span>
                  <span>Led design for the <strong className="text-white font-bold">Smart MVP</strong>, mapping early concepts, flows, and interface prototypes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0"></span>
                  <span>Worked across mobile touchpoints to improve onboarding and daily usage flows for millions of apartments.</span>
                </li>
              </ul>
            </div>

            {/* Overlapping/Floating Device Illustrations matching Screen 6 */}
            <div className="h-44 relative mt-4 select-none overflow-hidden rounded-2xl border border-zinc-800 bg-black flex justify-center items-center">
              {/* Apple Watch Illustration */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2, y: -5 }}
                className="absolute left-6 bottom-[-20px] w-28 aspect-[3/4] bg-zinc-950 rounded-[28px] p-1.5 border border-zinc-700 shadow-lg transform rotate-[-8deg] z-20"
              >
                <div className="w-full h-full bg-black rounded-[22px] p-2 flex flex-col justify-between text-[8px] text-white overflow-hidden relative">
                  <div className="flex justify-between items-center text-[6px] text-gray-400">
                    <span>10:09</span>
                    <Watch size={6} className="text-blue-400" />
                  </div>
                  <div className="text-center my-auto flex flex-col items-center gap-1">
                    <span className="w-4 h-4 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                    </span>
                    <p className="font-bold">Unlocking...</p>
                    <p className="text-[5px] text-gray-400">Front Door</p>
                  </div>
                </div>
              </motion.div>

              {/* iPhone App Lock Screen Illustration */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2, y: -5 }}
                className="absolute right-6 bottom-[-50px] w-[130px] h-[220px] bg-zinc-950 rounded-[30px] p-1.5 border-2 border-zinc-700 shadow-xl transform rotate-[6deg] z-10"
              >
                <div className="w-full h-full bg-black rounded-[24px] p-2.5 flex flex-col justify-between text-gray-200">
                  <div className="flex justify-between items-center text-[6px]">
                    <span>9:41</span>
                    <Smartphone size={6} />
                  </div>
                  <div className="bg-zinc-900 rounded-xl p-1.5 flex flex-col gap-1 text-[7px] text-white">
                    <div className="flex justify-between items-center border-b border-zinc-700 pb-1">
                      <span className="font-bold">Front Gate Lock</span>
                      <span className="text-[5px] bg-emerald-500 text-white px-1 rounded">Active</span>
                    </div>
                    <div className="bg-blue-900 p-1 rounded-lg flex flex-col items-center gap-1 text-center">
                      <span className="font-black text-blue-200">CONNECTED</span>
                      <button className="bg-blue-600 text-white rounded py-0.5 px-2 font-bold text-[5px]">Tap to Unlock</button>
                    </div>
                  </div>
                  <div className="w-10 h-0.5 bg-white/40 rounded-full mx-auto"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* INTERNSHIP CARD 2: GIDA TECHNOLOGIES */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-xl flex flex-col justify-between gap-8 hover:shadow-2xl transition-shadow relative overflow-hidden group"
          >
            <div className="flex flex-col gap-5">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-900 text-indigo-200 rounded-2xl flex items-center justify-center font-black text-lg shadow-inner select-none">
                    gd
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-white">UI / UX Design Intern</h3>
                    <p className="text-sm font-semibold text-gray-400">Gida Technologies</p>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-1">
                  <span className="bg-zinc-800 text-gray-300 font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1.5 w-fit select-none">
                    <Calendar size={12} />
                    <span>Jul '23 - Nov '23</span>
                  </span>
                  <span className="text-xs text-gray-500 font-medium flex items-center gap-1 sm:justify-end">
                    <MapPin size={12} />
                    <span>Bengaluru, KA</span>
                  </span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="flex flex-col gap-4 text-gray-300 font-medium text-sm sm:text-base leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0"></span>
                  <span>Designed key mobile application experiences for the <strong className="text-white font-bold">HDFC Ergo Here App</strong>, simplifying complex health insurance purchase journeys.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0"></span>
                  <span>Led the end-to-end design layout for <strong className="text-white font-bold">Here Pets</strong>, supporting the highly anticipated public launch of insurance services for pet owners.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0"></span>
                  <span>Created highly cohesive design system component sets for widgets, tab-menus, and responsive tables.</span>
                </li>
              </ul>
            </div>

            {/* Overlapping/Floating Insurance Mockups */}
            <div className="h-44 relative mt-4 select-none overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 flex justify-center items-center">
              {/* Pet Insurance Card Mockup */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute left-6 bottom-[-20px] w-48 h-32 bg-zinc-900 rounded-2xl p-3.5 shadow-xl border border-zinc-700 flex flex-col justify-between rotate-[-4deg] z-10"
              >
                <div className="flex justify-between items-start border-b border-zinc-700 pb-1.5">
                  <div>
                    <h5 className="font-bold text-[9px] text-white">Here Pets</h5>
                    <p className="text-[7px] text-gray-400">Comprehensive Pet Cover</p>
                  </div>
                  <span className="w-5 h-5 bg-indigo-950 text-indigo-300 rounded-lg flex items-center justify-center text-[10px]">🐾</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex flex-col">
                    <span className="text-[7px] text-gray-400">Yearly Premium</span>
                    <span className="text-[11px] font-black text-indigo-400">₹ 2,499</span>
                  </div>
                  <button className="bg-indigo-600 text-white font-bold text-[8px] py-1 px-2.5 rounded-lg">Buy Now</button>
                </div>
              </motion.div>

              {/* Shield Insurance App Mockup */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute right-6 bottom-[-30px] w-[110px] h-[180px] bg-zinc-950 rounded-[24px] p-1.5 border border-zinc-700 shadow-xl rotate-[5deg] z-20"
              >
                <div className="w-full h-full bg-black rounded-[18px] p-2 flex flex-col justify-between text-gray-200">
                  <div className="flex items-center justify-between text-[5px]">
                    <ShieldCheck size={7} className="text-indigo-400" />
                    <span>Verified</span>
                  </div>
                  <div className="bg-zinc-800 text-white rounded-lg p-1.5 flex flex-col gap-1 text-[6px]">
                    <p className="font-black">HDFC Ergo Here</p>
                    <div className="h-[1px] bg-zinc-700"></div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>No-claim bonus active</span>
                    </div>
                  </div>
                  <div className="w-8 h-0.5 bg-white/40 rounded-full mx-auto"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
