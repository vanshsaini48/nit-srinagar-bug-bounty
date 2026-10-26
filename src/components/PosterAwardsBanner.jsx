import React from "react";
import { AWARDS } from "../content";
import { Trophy, Gift } from "lucide-react";

export default function PosterAwardsBanner({ onScrollToHallOfFame }) {
  return (
    <section id="awards" className="relative py-14 bg-black border-y border-blue-900/40">
      {/* Background Ambient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0080FF]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Frame */}
        <div className="text-center mb-10">
          <div className="inline-block relative">
            <div className="px-10 py-2.5 rounded-t-xl bg-gradient-to-r from-[#060D1E] via-[#0B214A] to-[#060D1E] border-t-2 border-x-2 border-[#0080FF] shadow-[0_0_25px_rgba(0,128,255,0.3)]">
              <span className="font-poster text-xl sm:text-2xl font-black tracking-widest text-white uppercase flex items-center justify-center gap-3">
                <Trophy className="w-6 h-6 text-[#FFB800]" />
                <span>AWARDS &amp; BOUNTIES</span>
                <Trophy className="w-6 h-6 text-[#FFB800]" />
              </span>
            </div>
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#0080FF] to-transparent" />
          </div>
          <p className="mt-2 text-xs text-slate-400 font-sans">
            Institutional Cash Bounties • NIT Srinagar Security Hall of Fame
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1st Prize */}
          <div className="relative group rounded-xl p-6 bg-gradient-to-b from-[#1E1906] via-[#0A0D18] to-black border-2 border-[#FFB800] shadow-[0_0_30px_rgba(255,184,0,0.2)] flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="absolute -top-3.5 px-3 py-0.5 rounded-full bg-[#FFB800] text-black font-poster font-bold text-[11px] tracking-wider uppercase shadow">
              GRAND CHAMPION
            </div>
            
            <div className="w-16 h-16 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/50 flex items-center justify-center my-3 shadow-[0_0_15px_rgba(255,184,0,0.25)]">
              <Trophy className="w-9 h-9 text-[#FFB800]" />
            </div>

            <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">
              1st PRIZE
            </div>
            <div className="font-poster text-4xl sm:text-5xl font-black text-[#FFB800] my-2 drop-shadow">
              ₹10,000
            </div>
            <div className="text-xs text-slate-400 leading-relaxed font-sans">
              Cash Bounty + Trophy + Hall of Fame Rank #1
            </div>
          </div>

          {/* 2nd Prize (₹7,500) */}
          <div className="relative group rounded-xl p-6 bg-gradient-to-b from-[#0F1B33] via-[#080E1C] to-black border-2 border-blue-400/80 shadow-[0_0_20px_rgba(0,128,255,0.15)] flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="absolute -top-3.5 px-3 py-0.5 rounded-full bg-blue-500 text-white font-poster font-bold text-[11px] tracking-wider uppercase shadow">
              FIRST RUNNER-UP
            </div>

            <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-400/40 flex items-center justify-center my-3 shadow-[0_0_15px_rgba(0,128,255,0.2)]">
              <Trophy className="w-9 h-9 text-blue-300" />
            </div>

            <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">
              2nd PRIZE
            </div>
            <div className="font-poster text-4xl sm:text-5xl font-black text-white my-2 drop-shadow">
              ₹7,500
            </div>
            <div className="text-xs text-slate-400 leading-relaxed font-sans">
              Cash Bounty + Trophy + Hall of Fame Rank #2
            </div>
          </div>

          {/* 3rd Prize */}
          <div className="relative group rounded-xl p-6 bg-gradient-to-b from-[#0F1B33] via-[#080E1C] to-black border-2 border-blue-500/60 shadow-[0_0_20px_rgba(0,128,255,0.15)] flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="absolute -top-3.5 px-3 py-0.5 rounded-full bg-blue-600 text-white font-poster font-bold text-[11px] tracking-wider uppercase shadow">
              SECOND RUNNER-UP
            </div>

            <div className="w-16 h-16 rounded-full bg-blue-600/10 border border-blue-500/40 flex items-center justify-center my-3 shadow-[0_0_15px_rgba(0,128,255,0.2)]">
              <Trophy className="w-9 h-9 text-blue-400" />
            </div>

            <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">
              3rd PRIZE
            </div>
            <div className="font-poster text-4xl sm:text-5xl font-black text-blue-300 my-2 drop-shadow">
              ₹5,000
            </div>
            <div className="text-xs text-slate-400 leading-relaxed font-sans">
              Cash Bounty + Trophy + Hall of Fame Rank #3
            </div>
          </div>

          {/* Gadgets + Consolation */}
          <div className="relative group rounded-xl p-6 bg-gradient-to-b from-[#0B1E42] via-[#060D1E] to-black border-2 border-[#0080FF] shadow-[0_0_25px_rgba(0,128,255,0.2)] flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="absolute -top-3.5 px-3 py-0.5 rounded-full bg-[#0080FF] text-white font-poster font-bold text-[11px] tracking-wider uppercase shadow">
              SPECIAL MERIT
            </div>

            <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-400/50 flex items-center justify-center my-3 shadow-[0_0_15px_rgba(0,128,255,0.25)]">
              <Gift className="w-9 h-9 text-[#00A3FF]" />
            </div>

            <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">
              ADDITIONAL REWARDS
            </div>
            <div className="font-poster text-2xl sm:text-3xl font-black text-[#00A3FF] my-2">
              GADGETS &amp; SWAG
            </div>
            <div className="text-xs text-slate-400 leading-relaxed font-sans">
              Hardware Security Toolkits + Official Certificates + Hall of Fame Citations
            </div>
          </div>

        </div>

        {/* Poster Bottom Slogan Strip */}
        <div className="mt-10 pt-5 border-t border-slate-900 text-center">
          <p className="font-poster font-bold text-sm sm:text-base text-[#00A3FF] tracking-widest uppercase">
            SAME STANDARDS. A SAFER DIGITAL INDIA.
          </p>
        </div>

      </div>
    </section>
  );
}
