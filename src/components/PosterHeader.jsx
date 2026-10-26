import React from "react";
import { LOGOS, EVENT_CONFIG } from "../content";
import { FileText, Send, ExternalLink } from "lucide-react";

export default function PosterHeader({ onScrollToSection }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-[#0066FF]/30 shadow-2xl">
      {/* Main Header with EXTRA LARGE Prominent Logos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Top Row: Prominent Institute & Organization Logos */}
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          
          {/* LEFT: NIT Srinagar Logo (MASSIVE & PROMINENT) */}
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="p-2 sm:p-2.5 rounded-2xl bg-white border-2 border-blue-400/90 shadow-[0_0_30px_rgba(0,128,255,0.35)] flex items-center justify-center h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44 shrink-0 hover:scale-105 transition-transform duration-200 overflow-hidden">
              <img
                src={LOGOS.nitSrinagar.src}
                alt={LOGOS.nitSrinagar.alt}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#00A3FF] uppercase tracking-wider">
                HOST INSTITUTE
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mt-0.5">
                NIT Srinagar
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-sans mt-0.5 hidden sm:block">
                National Institute of Technology Srinagar
              </div>
            </div>
          </div>

          {/* RIGHT: BIS Logo (MASSIVE & PROMINENT) */}
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="text-right">
              <div className="text-xs sm:text-sm font-bold text-[#00A3FF] uppercase tracking-wider">
                IN COLLABORATION WITH
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mt-0.5">
                Bureau of Indian Standards
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-sans mt-0.5 hidden sm:block">
                National Standards Body of India
              </div>
            </div>
            <div className="p-2 sm:p-2.5 rounded-2xl bg-white border-2 border-blue-400/90 shadow-[0_0_30px_rgba(0,128,255,0.35)] flex items-center justify-center h-28 w-36 sm:h-36 sm:w-48 lg:h-44 lg:w-56 shrink-0 hover:scale-105 transition-transform duration-200 overflow-hidden">
              <img
                src={LOGOS.bis.src}
                alt={LOGOS.bis.alt}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

        </div>

        {/* CENTER TITLE: Seamlessly fits in the space below with NO divider line */}
        <div className="mt-2 sm:mt-3 text-center max-w-4xl mx-auto px-2">
          <div className="text-xs sm:text-sm font-bold tracking-widest text-slate-300 uppercase">
            BUREAU OF INDIAN STANDARDS (BIS) &bull; BIS STUDENT CHAPTER
          </div>
          <div className="font-poster text-lg sm:text-xl lg:text-2xl font-black text-white tracking-wider uppercase mt-0.5">
            <span className="text-[#00A3FF]">NIT SRINAGAR</span> CYBER SECURITY BUG HUNT 2026
          </div>
        </div>

        {/* Clean, Elegant Navigation Bar */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-sm overflow-x-auto gap-4 no-scrollbar">
          <nav className="flex items-center gap-6 sm:gap-8 text-slate-300 font-medium shrink-0">
            <button
              onClick={() => onScrollToSection('scope')}
              className="hover:text-[#00A3FF] transition-colors py-1 cursor-pointer"
            >
              In-Scope Targets
            </button>
            <button
              onClick={() => onScrollToSection('awards')}
              className="hover:text-[#00A3FF] transition-colors py-1 cursor-pointer"
            >
              Awards &amp; Prizes
            </button>
            <button
              onClick={() => onScrollToSection('hall-of-fame')}
              className="hover:text-[#00A3FF] transition-colors py-1 cursor-pointer"
            >
              Security Hall of Fame
            </button>
            <button
              onClick={() => onScrollToSection('rules')}
              className="hover:text-[#00A3FF] transition-colors py-1 cursor-pointer"
            >
              Rules &amp; Reporting
            </button>
            <button
              onClick={() => onScrollToSection('eligibility')}
              className="hover:text-[#00A3FF] transition-colors py-1 cursor-pointer"
            >
              Eligibility
            </button>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={EVENT_CONFIG.RULES_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:border-[#0080FF] hover:text-[#00A3FF] transition-colors text-xs font-semibold"
            >
              <FileText className="w-3.5 h-3.5 text-[#00A3FF]" />
              <span>Rules PDF</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href={EVENT_CONFIG.REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-white font-bold hover:brightness-110 shadow-[0_0_15px_rgba(0,128,255,0.4)] transition-all text-xs cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Register Now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
