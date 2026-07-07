import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Smartphone, CreditCard, ShieldCheck, Check, Sparkles } from "lucide-react";

export default function Work() {
  return (
    <section id="work" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col gap-16">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-blue-600 font-display font-extrabold tracking-widest text-xs uppercase">
            <Sparkles size={14} className="fill-blue-600" />
            <span>SELECTED WORK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-slate-900 mt-1">
            Featured Case Studies
          </h2>
        </div>

        {/* CASE STUDY 01 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#1e88e5] to-[#64b5f6] rounded-[32px] p-8 md:p-14 text-white overflow-hidden shadow-2xl flex flex-col lg:flex-row gap-12 items-center min-h-[600px] group border border-white/20"
        >
          {/* Subtle clouds background helper */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

          {/* Left Text details */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 z-10">
            {/* Number and Year */}
            <div className="flex items-center justify-between text-sm font-semibold text-sky-100 uppercase tracking-widest">
              <span className="bg-white/15 px-3 py-1.5 rounded-full backdrop-blur-md">01 / CASE STUDY</span>
              <span>2025</span>
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight leading-tight">
              The checkout, rebuilt for 5M+ homes
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {["Payments", "iOS & Android", "UI Redesign"].map((tag) => (
                <span
                  key={tag}
                  className="bg-white/20 border border-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sky-50 text-base sm:text-lg leading-relaxed font-medium">
              A checkout redesign focused on reducing friction, improving payment adoption, and supporting over 1M+ monthly transactions across multiple home service categories.
            </p>

            {/* Action Button */}
            <button className="flex items-center gap-3 bg-white text-blue-600 px-6 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all w-fit cursor-pointer group-hover:scale-105 active:scale-95 duration-300">
              <span>View Case Study</span>
              <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-white">
                <ArrowRight size={14} />
              </div>
            </button>
          </div>

          {/* Right interactive mobile mockup */}
          <div className="w-full lg:w-1/2 flex justify-center items-center z-10 relative">
            {/* Simulated 3D smartphone mockup */}
            <motion.div
              whileHover={{ y: -10, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-[310px] h-[610px] bg-slate-900 rounded-[44px] p-2.5 shadow-2xl border-4 border-slate-800 flex flex-col select-none"
            >
              {/* Phone Inner Border & Screen */}
              <div className="relative w-full h-full bg-slate-950 rounded-[36px] overflow-hidden p-4 flex flex-col justify-between text-slate-800 border border-white/10">
                
                {/* Dynamic Island Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-slate-900 rounded-full ml-auto mr-3"></div>
                </div>

                {/* Simulated StatusBar */}
                <div className="flex justify-between items-center text-[10px] font-bold text-white z-20 pt-1">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-2 bg-white/20 rounded-sm inline-block relative border border-white/40">
                      <span className="absolute left-0.5 top-0.5 bottom-0.5 right-1 bg-white rounded-2xs"></span>
                    </span>
                  </div>
                </div>

                {/* iPhone App Content */}
                <div className="bg-slate-50 absolute inset-0 top-0 pt-10 px-4 pb-4 overflow-y-auto flex flex-col gap-4 text-xs">
                  
                  {/* Top Bar inside app */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <div>
                      <h4 className="font-extrabold text-sm text-slate-900">Pay Now</h4>
                      <p className="text-[10px] text-slate-500">A-503 • Society Dues</p>
                    </div>
                    <span className="text-red-500 font-bold bg-red-50 px-2 py-0.5 rounded text-[10px]">Overdue</span>
                  </div>

                  {/* Payment Amount Badge */}
                  <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-3.5 text-center flex flex-col gap-1">
                    <p className="text-[10px] text-blue-800 font-bold uppercase tracking-wider">Amount Payable</p>
                    <p className="text-2xl font-black text-slate-900">₹ 9,500.00</p>
                    <div className="flex items-center justify-center gap-1 text-[9px] text-emerald-600 font-bold">
                      <ShieldCheck size={10} className="fill-emerald-100" />
                      <span>Secure Payment Gateway</span>
                    </div>
                  </div>

                  {/* Saved Cards Header */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-bold text-slate-800 text-[11px]">Saved Cards</span>
                      <span className="text-[9px] text-blue-600 font-bold cursor-pointer">Manage</span>
                    </div>
                    
                    {/* Simulated Bank Cards Carousel */}
                    <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
                      {/* Card 1 */}
                      <div className="min-w-[125px] h-20 bg-gradient-to-br from-rose-600 to-amber-500 rounded-xl p-2.5 text-white flex flex-col justify-between shadow-md">
                        <span className="text-[7px] font-black tracking-widest uppercase">AXIS BANK</span>
                        <div className="flex flex-col">
                          <span className="text-[9px] font-mono">•••• 6355</span>
                          <span className="text-[6px] text-white/70">06/29 | CREDIT</span>
                        </div>
                      </div>
                      {/* Card 2 */}
                      <div className="min-w-[125px] h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-2.5 text-white flex flex-col justify-between shadow-md">
                        <span className="text-[7px] font-black tracking-widest uppercase">HSBC</span>
                        <div className="flex flex-col">
                          <span className="text-[9px] font-mono">•••• 2140</span>
                          <span className="text-[6px] text-white/70">08/27 | CREDIT</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Other Payment Options */}
                  <div className="flex flex-col gap-1.5">
                    <span className="font-bold text-slate-800 text-[11px] mb-0.5">Other Payment Modes</span>
                    
                    {/* UPI */}
                    <div className="flex items-center justify-between p-2.5 bg-white border border-slate-200/80 rounded-xl shadow-sm hover:border-slate-300 transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                          <Smartphone size={12} />
                        </div>
                        <div>
                          <p className="font-bold text-[10px] text-slate-800">Pay with CRED UPI</p>
                          <p className="text-[8px] text-slate-400">Instant validation</p>
                        </div>
                      </div>
                      <span className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100"></span>
                      </span>
                    </div>

                    {/* Rupay UPI */}
                    <div className="flex items-center justify-between p-2.5 bg-white border border-slate-200/80 rounded-xl shadow-sm hover:border-slate-300 transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600">
                          <CreditCard size={12} />
                        </div>
                        <div>
                          <p className="font-bold text-[10px] text-slate-800">Rupay Credit Card on UPI</p>
                          <p className="text-[8px] text-teal-600 font-medium">Earn 2x rewards</p>
                        </div>
                      </div>
                      <span className="w-4 h-4 rounded-full border border-slate-300"></span>
                    </div>
                  </div>

                  {/* Security footer */}
                  <p className="text-[8px] text-slate-400 text-center mt-auto">
                    By continuing, you agree to our terms and conditions.
                  </p>
                </div>

                {/* iPhone Home Indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/60 rounded-full z-30"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CASE STUDY 02 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative bg-gradient-to-br from-[#0288d1] to-[#26c6da] rounded-[32px] p-8 md:p-14 text-white overflow-hidden shadow-2xl flex flex-col lg:flex-row gap-12 items-center min-h-[600px] group border border-white/20"
        >
          {/* Subtle clouds background helper */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

          {/* Left Text details */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 z-10">
            {/* Number and Year */}
            <div className="flex items-center justify-between text-sm font-semibold text-sky-100 uppercase tracking-widest">
              <span className="bg-white/15 px-3 py-1.5 rounded-full backdrop-blur-md">02 / CASE STUDY</span>
              <span>2026</span>
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight leading-tight">
              Bills for the whole household, not just you
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {["Payments", "Bills & Recharges", "iOS & Android"].map((tag) => (
                <span
                  key={tag}
                  className="bg-white/20 border border-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sky-50 text-base sm:text-lg leading-relaxed font-medium">
              Simplifying utilities administration with visual bills tracking, automatic division, and collective payments for apartments and shared living.
            </p>

            {/* Action Button */}
            <button className="flex items-center gap-3 bg-white text-blue-600 px-6 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all w-fit cursor-pointer group-hover:scale-105 active:scale-95 duration-300">
              <span>View Case Study</span>
              <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-white">
                <ArrowRight size={14} />
              </div>
            </button>
          </div>

          {/* Right interactive mobile mockup with bill overlap */}
          <div className="w-full lg:w-1/2 flex justify-center items-center z-10 relative h-[450px]">
            {/* Background Paper Bill Mockup */}
            <motion.div
              initial={{ rotate: -8, x: -30, y: 10 }}
              whileInView={{ rotate: -12, x: -50, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring" }}
              className="absolute w-[240px] h-[320px] bg-white text-slate-800 rounded-2xl p-4 shadow-xl border border-slate-200 flex flex-col justify-between select-none"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between border-b border-dashed border-slate-300 pb-2">
                  <div className="flex items-center gap-1 font-bold text-xs uppercase text-slate-950">
                    <span className="w-3 h-3 bg-blue-600 rounded-full inline-block"></span>
                    <span>Electricity Bill</span>
                  </div>
                  <span className="text-[8px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-bold">15 APR 2026</span>
                </div>

                <div className="flex flex-col gap-1 text-[8px] text-slate-500">
                  <p>Consumer: <span className="text-slate-800 font-bold">Anjaneya Kumar G M R V</span></p>
                  <p>Account: <span className="text-slate-800 font-bold">3601 2568 7410</span></p>
                  <p>Billing Period: <span className="text-slate-800 font-bold">01 Mar 2026 - 31 Mar 2026</span></p>
                </div>

                <div className="border-t border-dashed border-slate-200 pt-2 flex justify-between items-center">
                  <span className="text-[10px] font-extrabold text-slate-900">Total Due:</span>
                  <span className="text-sm font-black text-slate-950">₹ 3,450.00</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-2 flex items-center gap-1.5 text-amber-800 text-[8px] font-bold">
                <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-ping"></span>
                <span>Split auto-calculated for 3 roommates</span>
              </div>
            </motion.div>

            {/* Foreground Mobile Phone Mockup */}
            <motion.div
              whileHover={{ y: -10, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-[280px] h-[550px] bg-slate-900 rounded-[40px] p-2 shadow-2xl border-4 border-slate-800 flex flex-col select-none z-20"
            >
              <div className="relative w-full h-full bg-slate-950 rounded-[32px] overflow-hidden p-3.5 flex flex-col justify-between text-slate-800 border border-white/10">
                
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30"></div>

                {/* Status Bar */}
                <div className="flex justify-between items-center text-[9px] font-bold text-white z-20">
                  <span>9:41</span>
                  <span className="text-[9px] text-emerald-400 font-black">● LIVE</span>
                </div>

                {/* Content */}
                <div className="bg-slate-50 absolute inset-0 top-0 pt-9 px-3.5 pb-3 overflow-y-auto flex flex-col gap-3 text-xs">
                  
                  {/* Top bar */}
                  <div className="flex items-center justify-between pb-1">
                    <span className="font-extrabold text-sm text-slate-900">Bills & Recharges</span>
                    <span className="text-[9px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">3 Active</span>
                  </div>

                  {/* Roommates Avatar Cluster */}
                  <div className="bg-white border border-slate-150 rounded-xl p-3 shadow-sm flex items-center justify-between">
                    <div>
                      <p className="font-extrabold text-[10px] text-slate-800">C-402 Roomies</p>
                      <p className="text-[8px] text-slate-400">3 Members • Auto-splitting</p>
                    </div>
                    {/* Avatars */}
                    <div className="flex -space-x-2">
                      <img className="w-5 h-5 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="" referrerPolicy="no-referrer" />
                      <img className="w-5 h-5 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="" referrerPolicy="no-referrer" />
                      <div className="w-5 h-5 rounded-full ring-2 ring-white bg-slate-200 text-[6px] font-bold text-slate-600 flex items-center justify-center">S</div>
                    </div>
                  </div>

                  {/* Active Bills List */}
                  <div className="flex flex-col gap-2">
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Unpaid Bills</p>
                    
                    {/* Bill 1 */}
                    <div className="p-2.5 bg-white border border-slate-200 rounded-xl flex justify-between items-center">
                      <div>
                        <p className="font-bold text-[9px] text-slate-800">Electricity (Mar)</p>
                        <p className="text-[8px] text-slate-400">Your Share: ₹ 1,150.00</p>
                      </div>
                      <button className="bg-blue-600 text-white font-bold text-[8px] px-2.5 py-1 rounded-lg">Pay</button>
                    </div>

                    {/* Bill 2 */}
                    <div className="p-2.5 bg-white border border-slate-200 rounded-xl flex justify-between items-center">
                      <div>
                        <p className="font-bold text-[9px] text-slate-800">High-Speed Wifi</p>
                        <p className="text-[8px] text-emerald-600 font-bold flex items-center gap-0.5">
                          <Check size={8} /> Roommate Paid
                        </p>
                      </div>
                      <span className="text-[8px] text-slate-400 font-medium">Settled</span>
                    </div>
                  </div>
                </div>

                {/* Indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/60 rounded-full z-30"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
