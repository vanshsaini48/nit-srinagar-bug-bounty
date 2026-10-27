import React from "react";
import { LOGOS, EVENT_CONFIG } from "../content";
import { ExternalLink } from "lucide-react";

export default function PosterFooter() {
  return (
    <footer className="bg-black border-t-2 border-blue-900/40 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-[#0080FF]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Logos Showcase (Prominent as Requested) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#060D1E] border border-blue-900/50 mb-12 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#00A3FF] uppercase tracking-widest">
              ORGANIZING BODIES • OFFICIAL COLLABORATION
            </span>
            <h3 className="font-poster text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider mt-1.5">
              NIT SRINAGAR &times; BUREAU OF INDIAN STANDARDS (BIS)
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {/* NIT Srinagar */}
            <div className="flex flex-col items-center text-center">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-white border-2 border-blue-400/90 shadow-xl flex items-center justify-center h-28 w-28 sm:h-36 sm:w-36 mb-3 hover:scale-105 transition-transform duration-200 overflow-hidden">
                <img
                  src={LOGOS.nitSrinagar.src}
                  alt={LOGOS.nitSrinagar.alt}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-poster text-lg font-bold text-white">
                NIT Srinagar
              </span>
              <span className="text-xs text-slate-400 font-sans">
                Host Institute • Technical Review Committee
              </span>
            </div>

            <div className="font-poster text-2xl font-bold text-[#00A3FF] uppercase">
              &times;
            </div>

            {/* BIS */}
            <div className="flex flex-col items-center text-center">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-white border-2 border-blue-400/90 shadow-xl flex items-center justify-center h-28 w-36 sm:h-36 sm:w-48 mb-3 hover:scale-105 transition-transform duration-200 overflow-hidden">
                <img
                  src={LOGOS.bis.src}
                  alt={LOGOS.bis.alt}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-poster text-lg font-bold text-white">
                Bureau of Indian Standards
              </span>
              <span className="text-xs text-slate-400 font-sans">
                BIS Student Chapter CSE | IT • National Standards Body
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links & Contact Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-slate-900 text-xs font-sans">
          
          {/* Col 1 */}
          <div>
            <h4 className="font-poster font-bold text-sm text-white uppercase mb-3 text-[#00A3FF]">
              Event Operations
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>Status: <span className="text-[#00A3FF] font-bold">REGISTRATIONS LIVE</span></li>
              <li>Registration Deadline: <strong>28 Oct 2026, 5:00 PM IST</strong></li>
              <li>Participation: Individual or teams of up to 3</li>
              <li className="text-slate-400">Faculty and staff are strictly NOT eligible</li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-poster font-bold text-sm text-white uppercase mb-3 text-[#00A3FF]">
              Official Portals
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a
                  href={EVENT_CONFIG.REGISTRATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00A3FF] transition-colors flex items-center gap-1.5"
                >
                  <span>Google Registration Form</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={EVENT_CONFIG.RULES_DRIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00A3FF] transition-colors flex items-center gap-1.5"
                >
                  <span>Official Rules Drive (PDF)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-poster font-bold text-sm text-white uppercase mb-3 text-[#00A3FF]">
              Vulnerability Disclosure
            </h4>
            <p className="text-slate-300 mb-2 leading-relaxed">
              Submit reproducible reports, PoC logs, and remediation guidance to:
            </p>
            <a
              href={`mailto:${EVENT_CONFIG.OFFICIAL_EMAIL}`}
              className="text-[#00A3FF] hover:underline font-bold text-xs font-mono"
            >
              {EVENT_CONFIG.OFFICIAL_EMAIL}
            </a>
          </div>

        </div>

        {/* Bottom copyright & poster tagline */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-500">
          <div>
            &copy; 2026 National Institute of Technology Srinagar &times; BIS Student Chapter CSE | IT. All rights reserved.
          </div>
          <div className="text-slate-400 font-poster uppercase tracking-wider">
            FIND THE FLAW. SECURE THE FUTURE.
          </div>
        </div>

      </div>
    </footer>
  );
}
