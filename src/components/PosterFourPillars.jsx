import React from "react";
import { POSTER_CORE_PILLARS } from "../content";
import { Search, Lightbulb, Shield, Users, AlertCircle } from "lucide-react";

export default function PosterFourPillars() {
  const getIcon = (tag) => {
    switch (tag) {
      case "EXPLORE":
        return <Search className="w-6 h-6 text-[#00A3FF]" />;
      case "GAIN":
        return <Lightbulb className="w-6 h-6 text-[#00A3FF]" />;
      case "CONTRIBUTE":
        return <Shield className="w-6 h-6 text-[#00A3FF]" />;
      case "OPEN TO":
        return <Users className="w-6 h-6 text-[#00A3FF]" />;
      default:
        return <Shield className="w-6 h-6 text-[#00A3FF]" />;
    }
  };

  return (
    <section className="py-14 bg-black border-b border-blue-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-[#00A3FF] text-xs font-semibold uppercase mb-2">
            <span>CORE EVENT PILLARS</span>
          </div>
          <h2 className="font-poster text-2xl sm:text-4xl font-bold text-white tracking-wide uppercase">
            WHY PARTICIPATE IN NIT SRINAGAR BUG BOUNTY
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xl mx-auto">
            A real-world, sanctioned initiative bridging academic knowledge with institutional cybersecurity.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {POSTER_CORE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#060D1E] border border-blue-900/50 hover:border-[#0080FF] transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-950/70 border border-blue-800/50 group-hover:border-[#0080FF] flex items-center justify-center transition-colors">
                    {getIcon(pillar.tag)}
                  </div>
                  <span className="font-semibold text-xs px-2.5 py-1 rounded bg-blue-950/80 text-[#00A3FF] border border-blue-700/40 tracking-wider">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="font-poster text-lg font-bold text-white group-hover:text-[#00A3FF] transition-colors mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs font-sans text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              {pillar.tag === "OPEN TO" && (
                <div className="mt-4 pt-3 border-t border-blue-950 text-[11px] text-slate-400 flex items-center gap-1.5 font-sans">
                  <AlertCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Faculty &amp; staff are strictly NOT eligible.</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
