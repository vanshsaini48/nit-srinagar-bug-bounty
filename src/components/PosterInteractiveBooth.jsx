import React, { useState } from "react";
import { Shield, Check, Copy, ExternalLink } from "lucide-react";
import { LOGOS, EVENT_CONFIG } from "../content";

export default function PosterInteractiveBooth() {
  const [copiedHashtags, setCopiedHashtags] = useState(false);

  const hashtags = "#BugBounty #SecureIndia #BIS #NITSRINAGAR #HackerWithPurpose";

  const handleCopyHashtags = () => {
    navigator.clipboard.writeText(hashtags);
    setCopiedHashtags(true);
    setTimeout(() => setCopiedHashtags(false), 2000);
  };

  return (
    <section className="py-16 bg-[#040814] border-t border-blue-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-[#00A3FF] text-xs font-semibold uppercase mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>NATIONAL STANDARDS &amp; CYBER INTEGRITY</span>
          </div>
          <h2 className="font-poster text-2xl sm:text-4xl font-bold text-white tracking-wide uppercase">
            SECURE STANDARDS. SAFER INDIA.
          </h2>
          <p className="mt-2 text-sm text-slate-300 font-sans leading-relaxed">
            Cultivating institutional security excellence through the joint leadership of NIT Srinagar and the Bureau of Indian Standards (BIS) Student Chapter.
          </p>
        </div>

        {/* Professional 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto p-6 sm:p-8 rounded-2xl bg-black border border-blue-900/50 shadow-2xl">
          
          {/* Left Column: BIS Student Chapter Mission */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-poster text-xl font-bold text-white uppercase tracking-wider">
              About the BIS Student Chapter Initiative
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              The Bureau of Indian Standards (BIS) Student Chapter at NIT Srinagar bridges the gap between academic technical talent and standardized national cybersecurity defenses. Through structured vulnerability disclosure, students engage in hands-on audit methodologies while strictly observing legal and ethical boundaries.
            </p>

            <div className="pt-2 space-y-2 text-xs font-sans text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-[#00A3FF] font-bold">✓</span>
                <span>Proactive identification of vulnerabilities across 7 authorized digital assets.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00A3FF] font-bold">✓</span>
                <span>Creation of a permanent, sustainable Responsible Vulnerability Disclosure Programme (RVDP).</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00A3FF] font-bold">✓</span>
                <span>Institutional recognition, cash bounties, and Security Hall of Fame inductions.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center">
              <button
                onClick={handleCopyHashtags}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-950/80 border border-blue-800/60 text-[#00A3FF] hover:bg-[#0080FF] hover:text-white transition-all text-xs font-semibold cursor-pointer"
              >
                {copiedHashtags ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedHashtags ? "Copied Hashtags" : "Copy #SecureIndia Hashtags"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Sleek BIS Security Seal Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full rounded-2xl p-6 bg-gradient-to-b from-[#0A1633] via-[#060D1E] to-black border-2 border-blue-600/60 shadow-[0_0_30px_rgba(0,128,255,0.2)] text-center">
              
              {/* Official BIS Logo */}
              <div className="p-2 sm:p-2.5 rounded-2xl bg-white border-2 border-blue-400/90 shadow-[0_0_25px_rgba(0,128,255,0.3)] flex items-center justify-center h-20 w-32 sm:h-24 sm:w-40 mx-auto mb-4 hover:scale-105 transition-transform duration-200 overflow-hidden">
                <img
                  src={LOGOS.bis.src}
                  alt={LOGOS.bis.alt}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="text-xs font-bold text-[#00A3FF] uppercase tracking-wider mb-1">
                INSTITUTIONAL PARTNERSHIP
              </div>

              <div className="font-poster text-xl font-bold text-white mb-2">
                BIS × NIT SRINAGAR
              </div>

              <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                Upholding Indian standards in digital security, software assurance, and ethical research.
              </p>

              <div className="p-3 rounded-xl bg-black border border-blue-950 text-xs font-semibold text-blue-200">
                &ldquo;Small Finds. Big Impact. Secure the Future.&rdquo;
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
