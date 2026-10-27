import React, { useState } from "react";
import { LOGOS, EVENT_CONFIG } from "../content";
import { FileText, Send, ExternalLink, Menu, X, ChevronRight } from "lucide-react";

export default function PosterHeader({ onScrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    onScrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-[#0066FF]/30 shadow-2xl">
      {/* Main Header Container: smoothly scaled padding across all device sizes */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3.5">
        {/* Top Row: Prominent Institute & Organization Logos */}
        <div className="flex items-center justify-between gap-2 md:gap-4 lg:gap-6">
          
          {/* LEFT: NIT Srinagar Logo (Scales fluidly from phone up to massive desktop) */}
          <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4 lg:gap-5 shrink-0 min-w-0">
            <div className="p-1 sm:p-1.5 md:p-2 lg:p-2.5 rounded-xl sm:rounded-2xl bg-white border border-blue-400/80 sm:border-2 sm:border-blue-400/90 shadow-[0_0_15px_rgba(0,128,255,0.25)] sm:shadow-[0_0_25px_rgba(0,128,255,0.35)] flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 2xl:h-36 2xl:w-36 shrink-0 hover:scale-105 transition-transform duration-200 overflow-hidden">
              <img
                src={LOGOS.nitSrinagar.src}
                alt={LOGOS.nitSrinagar.alt}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="text-[8.5px] sm:text-[10px] md:text-xs xl:text-sm font-bold text-[#00A3FF] uppercase tracking-wider whitespace-nowrap">
                HOST INSTITUTE
              </div>
              <div className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-black text-white tracking-tight leading-tight mt-0.5 whitespace-nowrap">
                NIT Srinagar
              </div>
              <div className="text-[10px] md:text-xs xl:text-sm text-slate-400 font-sans mt-0.5 hidden sm:block">
                National Institute of Technology Srinagar
              </div>
            </div>
          </div>

          {/* RIGHT: BIS Logo (Scales fluidly from phone up to massive desktop) */}
          <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4 lg:gap-5 justify-end shrink-0 min-w-0">
            <div className="text-right min-w-0">
              <div className="text-[8.5px] sm:text-[10px] md:text-xs xl:text-sm font-bold text-[#00A3FF] uppercase tracking-wider whitespace-nowrap">
                IN COLLABORATION WITH
              </div>
              <div className="text-[10.5px] sm:text-xs md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-black text-white tracking-tight leading-tight mt-0.5 whitespace-normal sm:whitespace-normal">
                Bureau of Indian Standards
              </div>
              <div className="text-[10px] md:text-xs xl:text-sm text-slate-400 font-sans mt-0.5 hidden sm:block">
                BIS Student Chapter CSE | IT
              </div>
            </div>
            <div className="p-1 sm:p-1.5 md:p-2 lg:p-2.5 rounded-xl sm:rounded-2xl bg-white border border-blue-400/80 sm:border-2 sm:border-blue-400/90 shadow-[0_0_15px_rgba(0,128,255,0.25)] sm:shadow-[0_0_25px_rgba(0,128,255,0.35)] flex items-center justify-center h-12 w-16 sm:h-16 sm:w-20 md:h-20 md:w-28 lg:h-24 lg:w-32 xl:h-32 xl:w-44 2xl:h-36 2xl:w-48 shrink-0 hover:scale-105 transition-transform duration-200 overflow-hidden">
              <img
                src={LOGOS.bis.src}
                alt={LOGOS.bis.alt}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

        </div>

        {/* CENTER TITLE: Balanced and legible across all viewports */}
        <div className="mt-1 sm:mt-2 lg:mt-2.5 text-center max-w-4xl mx-auto px-1 sm:px-2">
          <div className="text-[8.5px] sm:text-[10px] md:text-xs xl:text-sm font-bold tracking-wider text-slate-300 uppercase leading-tight">
            BUREAU OF INDIAN STANDARDS (BIS) &bull; BIS STUDENT CHAPTER CSE | IT
          </div>
          <div className="font-poster text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-black text-white tracking-wide uppercase mt-0.5 leading-snug">
            <span className="text-[#00A3FF]">NIT SRINAGAR</span> CYBER SECURITY BUG HUNT 2026
          </div>
        </div>

        {/* Desktop & Laptop Navigation Bar (Visible on screens >= 1024px: laptops, large tablets, desktops) */}
        <div className="hidden lg:flex mt-3 xl:mt-4 pt-2.5 xl:pt-3 border-t border-slate-800/80 items-center justify-between text-xs xl:text-sm gap-4">
          <nav className="flex items-center gap-4 xl:gap-8 text-slate-300 font-medium shrink-0">
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

          <div className="flex items-center gap-2.5 xl:gap-3 shrink-0">
            <a
              href={EVENT_CONFIG.RULES_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 xl:px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:border-[#0080FF] hover:text-[#00A3FF] transition-colors text-xs font-semibold"
            >
              <FileText className="w-3.5 h-3.5 text-[#00A3FF]" />
              <span>Rules PDF</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href={EVENT_CONFIG.REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 xl:px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-white font-bold hover:brightness-110 shadow-[0_0_15px_rgba(0,128,255,0.4)] transition-all text-xs cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Register Now</span>
            </a>
          </div>
        </div>

        {/* Mobile & Tablet Navigation & Quick Action Bar (Visible on phones & tablets < 1024px) */}
        <div className="lg:hidden mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
          {/* Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs sm:text-sm font-semibold hover:border-[#0080FF] hover:text-[#00A3FF] active:scale-95 transition-all"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00A3FF]" />
            ) : (
              <Menu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00A3FF]" />
            )}
            <span>{mobileMenuOpen ? "Close" : "Menu"}</span>
          </button>

          {/* Quick Action CTAs */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href={EVENT_CONFIG.RULES_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:border-[#0080FF] hover:text-[#00A3FF] transition-colors text-xs sm:text-sm font-semibold"
            >
              <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00A3FF]" />
              <span>Rules</span>
              <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
            </a>

            <a
              href={EVENT_CONFIG.REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-white font-bold text-xs sm:text-sm shadow-[0_0_12px_rgba(0,128,255,0.4)] active:scale-95 transition-all"
            >
              <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Register</span>
            </a>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 pt-1 pb-2 border-t border-slate-800/80 flex flex-col gap-1 bg-black/95">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              <button
                onClick={() => handleNavClick('scope')}
                className="text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 hover:text-[#00A3FF] active:bg-[#0066FF]/20 text-xs sm:text-sm font-semibold transition-colors flex items-center justify-between"
              >
                <span>In-Scope Targets</span>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-slate-500">7 Targets</span>
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                </div>
              </button>
              <button
                onClick={() => handleNavClick('awards')}
                className="text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 hover:text-[#00A3FF] active:bg-[#0066FF]/20 text-xs sm:text-sm font-semibold transition-colors flex items-center justify-between"
              >
                <span>Awards &amp; Prizes</span>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-[#00A3FF]">₹22,500 Pool</span>
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                </div>
              </button>
              <button
                onClick={() => handleNavClick('hall-of-fame')}
                className="text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 hover:text-[#00A3FF] active:bg-[#0066FF]/20 text-xs sm:text-sm font-semibold transition-colors flex items-center justify-between"
              >
                <span>Security Hall of Fame</span>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-slate-500">Leaderboard</span>
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                </div>
              </button>
              <button
                onClick={() => handleNavClick('rules')}
                className="text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 hover:text-[#00A3FF] active:bg-[#0066FF]/20 text-xs sm:text-sm font-semibold transition-colors flex items-center justify-between"
              >
                <span>Rules &amp; Reporting</span>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-slate-500">Guidelines</span>
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                </div>
              </button>
              <button
                onClick={() => handleNavClick('eligibility')}
                className="text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 hover:text-[#00A3FF] active:bg-[#0066FF]/20 text-xs sm:text-sm font-semibold transition-colors flex items-center justify-between sm:col-span-2"
              >
                <span>Eligibility Criteria</span>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-slate-500">Students Only</span>
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
