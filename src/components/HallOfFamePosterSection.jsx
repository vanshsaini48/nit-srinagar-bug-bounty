import React, { useState } from "react";
import { HALL_OF_FAME } from "../content";
import { Trophy, Award, Medal, CheckCircle2, Crown } from "lucide-react";

export default function HallOfFamePosterSection() {
  const [activeTab, setActiveTab] = useState("tiers");

  return (
    <section id="hall-of-fame" className="py-16 bg-black border-t border-blue-900/30 relative">
      {/* Subtle Black Cyber Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#0080FF]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-[#00A3FF] text-xs font-semibold uppercase mb-3">
            <Crown className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>PERMANENT INSTITUTIONAL RECOGNITION</span>
          </div>
          <h2 className="font-poster text-3xl sm:text-5xl font-black text-white tracking-wide uppercase">
            SECURITY HALL OF FAME
          </h2>
          <p className="mt-3 text-sm text-slate-300 font-sans leading-relaxed">
            {HALL_OF_FAME.description}
          </p>

          {/* Toggle Tabs */}
          <div className="mt-6 inline-flex rounded-xl bg-[#060D1E] p-1.5 border border-blue-900/50">
            <button
              onClick={() => setActiveTab("tiers")}
              className={`px-5 py-2 rounded-lg font-poster text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "tiers"
                  ? "bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Recognition Tiers &amp; Prizes
            </button>
            <button
              onClick={() => setActiveTab("leaderboard")}
              className={`px-5 py-2 rounded-lg font-poster text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "leaderboard"
                  ? "bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              2026 Inductee Board (Live)
            </button>
          </div>
        </div>

        {/* Tab 1: Recognition Tiers & Prizes */}
        {activeTab === "tiers" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HALL_OF_FAME.tiers.map((tier, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#060D1E] border border-blue-900/60 hover:border-[#0080FF] transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-end mb-3">
                    <span className="p-1.5 rounded-lg bg-black border border-slate-800">
                      {idx === 0 ? (
                        <Crown className="w-5 h-5 text-[#FFB800]" />
                      ) : idx === 1 ? (
                        <Trophy className="w-5 h-5 text-blue-300" />
                      ) : idx === 2 ? (
                        <Medal className="w-5 h-5 text-blue-400" />
                      ) : (
                        <Award className="w-5 h-5 text-[#00A3FF]" />
                      )}
                    </span>
                  </div>

                  <h3 className="font-poster text-xl font-bold text-white mb-1">
                    {tier.tier}
                  </h3>

                  <div className="inline-block px-3 py-1 rounded bg-black border border-blue-900/50 text-xs text-[#00A3FF] font-semibold my-2">
                    {tier.badge}
                  </div>

                  <div className="font-poster text-lg font-bold text-white my-2">
                    {tier.prize}
                  </div>

                  <p className="text-xs font-sans text-slate-300 leading-relaxed mt-2">
                    {tier.requirements}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3FF] shrink-0" />
                  <span>Permanent listing on NIT Srinagar RVDP portal</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: 2026 Inductee Board */}
        {activeTab === "leaderboard" && (
          <div className="p-6 rounded-2xl bg-[#060D1E] border border-blue-900/60 max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
              <div>
                <h3 className="font-poster text-xl font-bold text-white uppercase tracking-wider">
                  2026 Inductee Slots
                </h3>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  Slots will be officially awarded at the Valedictory Ceremony following technical verification.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-950 border border-blue-700/50 text-[#00A3FF] text-xs font-semibold">
                EVALUATION PENDING
              </span>
            </div>

            <div className="space-y-3">
              {HALL_OF_FAME.sampleInductees.map((slot, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-black border border-slate-800 flex items-center justify-between gap-4 hover:border-[#0080FF] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-poster text-xl font-black text-[#00A3FF] w-10">
                      {slot.rank}
                    </span>
                    <div>
                      <div className="font-poster font-bold text-white text-base">
                        {slot.handle}
                      </div>
                      <div className="text-xs text-slate-400 font-sans">
                        {slot.score}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-poster font-bold text-white text-sm">
                      {slot.bounty}
                    </div>
                    <span className="text-[11px] text-blue-300 bg-blue-950/60 border border-blue-800/40 px-2.5 py-0.5 rounded font-medium">
                      Reserved for Winner
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center text-xs text-slate-400 bg-black/60 p-3 rounded-xl border border-slate-800 font-sans">
              Top submissions with reproducible Proof of Concept and practical remediation will earn induction.
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
