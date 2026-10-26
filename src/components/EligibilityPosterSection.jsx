import React from "react";
import { ELIGIBILITY, EVENT_CONFIG } from "../content";
import { Users, UserX, CheckCircle, AlertCircle, Send } from "lucide-react";

export default function EligibilityPosterSection() {
  return (
    <section id="eligibility" className="py-16 bg-[#030712] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-[#00A3FF] text-xs font-semibold uppercase mb-3">
            <span>PARTICIPATION GUIDELINES</span>
          </div>
          <h2 className="font-poster text-3xl sm:text-5xl font-black text-white tracking-wide uppercase">
            WHO CAN PARTICIPATE
          </h2>
          <p className="mt-3 text-sm text-slate-300 font-sans leading-relaxed">
            Participation is open strictly to bona fide enrolled NIT Srinagar students. Faculty and staff are strictly NOT eligible.
          </p>
        </div>

        {/* Two Columns: Allowed vs Prohibited */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* Column 1: Eligible Students (Blue / White) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#060D1E] border border-blue-600/50 shadow-[0_0_25px_rgba(0,128,255,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-blue-900/40">
                <div className="p-3 rounded-xl bg-blue-950/80 border border-blue-600 text-[#00A3FF]">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#00A3FF] uppercase tracking-wider">
                    AUTHORIZED TO PARTICIPATE
                  </span>
                  <h3 className="font-poster text-xl sm:text-2xl font-bold text-white">
                    Enrolled NIT Srinagar Students
                  </h3>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm font-sans text-slate-200">
                {ELIGIBILITY.allowed.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#00A3FF] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-900/40 bg-black/50 p-3 rounded-xl border border-blue-950 text-xs text-slate-300">
              👥 <strong>Team Structure:</strong> Individual or teams of up to 3 members. Leader submits the Google form.
            </div>
          </div>

          {/* Column 2: Strictly Prohibited Individuals (VIBRANT RED FOR FACULTY & NON-ENROLLED) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#22070B] via-[#140406] to-black border-2 border-red-600 shadow-[0_0_35px_rgba(239,68,68,0.3)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-red-900/50">
                <div className="p-3 rounded-xl bg-red-950 border-2 border-red-500 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                  <UserX className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                    STRICTLY PROHIBITED
                  </span>
                  <h3 className="font-poster text-xl sm:text-2xl font-bold text-white">
                    Faculty &amp; Non-Enrolled Persons
                  </h3>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm font-sans text-slate-200">
                {ELIGIBILITY.strictlyProhibited.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-red-900/50 bg-red-950/60 p-3.5 rounded-xl border border-red-700/80 text-xs text-red-200">
              ⛔ <strong>Strict Policy:</strong> Faculty and administrative staff cannot compete or submit findings.
            </div>
          </div>

        </div>

        {/* Team Registration Protocol Callout */}
        <div className="p-6 rounded-2xl bg-[#060D1E] border border-blue-900/60 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-poster font-bold text-white text-base">
              Important Registration Form Note for Teams
            </h4>
            <p className="text-xs text-slate-300 font-sans mt-0.5">
              For team registrations, the form must be submitted using the <strong>Team Leader’s email ID only</strong>.
            </p>
          </div>

          <a
            href={EVENT_CONFIG.REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00A3FF] hover:brightness-110 text-white font-poster font-bold text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 transition-all cursor-pointer shadow-lg"
          >
            <span>Open Registration Form</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
