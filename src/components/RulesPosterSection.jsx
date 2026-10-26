import React, { useState } from "react";
import { MANDATORY_RULES, DISQUALIFICATION_TRIGGERS, REPORT_REQUIREMENTS, EVENT_CONFIG } from "../content";
import { Shield, AlertTriangle, Mail, Copy, Check, ExternalLink, FileText } from "lucide-react";

export default function RulesPosterSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EVENT_CONFIG.OFFICIAL_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="rules" className="py-16 bg-black border-t border-blue-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-[#00A3FF] text-xs font-semibold uppercase mb-3">
            <span>RULES OF ENGAGEMENT • ETHICAL COMPLIANCE</span>
          </div>
          <h2 className="font-poster text-3xl sm:text-5xl font-black text-white tracking-wide uppercase">
            MANDATORY RULES &amp; GUIDELINES
          </h2>
          <p className="mt-3 text-sm text-slate-300 font-sans leading-relaxed">
            This is an authorized security research initiative. Compliance with all 10 rules is strictly mandatory.
          </p>
          <div className="mt-5">
            <a
              href={EVENT_CONFIG.RULES_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-poster font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,128,255,0.3)] hover:scale-105 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download &amp; Read Official Rules PDF (Google Drive)</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
            </a>
          </div>
        </div>

        {/* 10 Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {MANDATORY_RULES.map((rule, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#060D1E] border border-blue-900/40 hover:border-[#0080FF] transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-xs font-bold text-[#00A3FF] px-2.5 py-0.5 rounded bg-blue-950 border border-blue-800/60">
                  {rule.num}
                </span>
                <h3 className="font-poster text-base font-bold text-white">
                  {rule.title}
                </h3>
              </div>
              <p className="text-xs font-sans text-slate-300 leading-relaxed pl-1">
                {rule.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Disqualification Clause Box */}
        <div className="mb-12 p-6 rounded-2xl bg-[#140608] border-2 border-rose-600/60 shadow-[0_0_25px_rgba(225,29,72,0.15)]">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-rose-400" />
            <h3 className="font-poster text-xl font-bold text-white uppercase tracking-wider">
              Immediate Grounds for Disqualification
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-sans text-slate-200">
            {DISQUALIFICATION_TRIGGERS.map((trig, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-black/70 p-3 rounded-xl border border-slate-800">
                <span className="text-rose-400 font-bold">⛔</span>
                <span className="leading-relaxed">{trig}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vulnerability Reporting Channel */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#060D1E] border border-blue-800/60 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-blue-950">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#00A3FF] font-bold uppercase mb-1">
                <Mail className="w-4 h-4" />
                <span>OFFICIAL DISCLOSURE CHANNEL</span>
              </div>
              <h3 className="font-poster text-2xl font-bold text-white">
                How to Submit Your Vulnerability Report
              </h3>
              <p className="text-xs text-slate-300 mt-1 font-sans">
                All findings must be emailed directly to the official address from your registered student email.
              </p>
            </div>

            {/* Email Box with One-Click Copy */}
            <div className="flex items-center gap-3 bg-black px-4 py-2.5 rounded-xl border border-blue-700/60 shrink-0">
              <span className="text-sm font-mono text-[#00A3FF] font-bold select-all">
                {EVENT_CONFIG.OFFICIAL_EMAIL}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-blue-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Report Requirements Checklist */}
          <div className="mt-6">
            <h4 className="font-poster text-sm font-bold text-slate-200 uppercase tracking-wider mb-3">
              Mandatory Information to Include in Every Report:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs text-slate-300 font-sans">
              {REPORT_REQUIREMENTS.map((req, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-black/60 border border-slate-800 flex items-center gap-2">
                  <span className="text-[#00A3FF] font-bold">✓</span>
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
