import React from "react";
import { SCOPE_INVENTORY } from "../content";
import { 
  ShieldAlert, 
  CheckCircle, 
  XCircle, 
  ExternalLink
} from "lucide-react";

export default function ScopePosterSection() {
  return (
    <section id="scope" className="py-16 bg-[#030712] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-poster text-3xl sm:text-5xl font-black text-white tracking-wide uppercase">
            TARGET SCOPE
          </h2>
          <p className="mt-3 text-sm text-slate-300 font-sans leading-relaxed">
            Testing is permitted only against specifically authorized targets. All other digital assets, networks, and services are out of scope.
          </p>
        </div>

        {/* OUT-OF-SCOPE NOTICE BANNER */}
        <div className="mb-10 p-6 rounded-2xl bg-[#140608] border-2 border-rose-600/60 shadow-[0_0_30px_rgba(225,29,72,0.15)]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="p-3.5 rounded-xl bg-rose-950/80 border border-rose-600 text-rose-400 shrink-0">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="px-2.5 py-0.5 rounded bg-rose-600 text-white font-bold text-xs uppercase">
                  STRICTLY OUT-OF-SCOPE
                </span>
              </div>
              <h3 className="font-poster text-lg sm:text-xl font-bold text-white mb-2">
                Official NIT Srinagar Website (<code className="text-rose-300 bg-black/60 px-2 py-0.5 rounded font-mono">nitsri.ac.in</code>) is OUT-OF-SCOPE
              </h3>
              <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
                The primary institutional domain <code className="text-rose-300 bg-black/60 px-1.5 py-0.5 rounded mx-1 font-mono">nitsri.ac.in</code> is strictly 
                prohibited from testing. Any security activity directed at <code className="text-rose-300 font-mono">nitsri.ac.in</code> 
                or unlisted subdomains constitutes an immediate violation, leading to instant disqualification.
              </p>
            </div>
          </div>
        </div>

        {/* IN-SCOPE TARGETS LIST */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-poster text-xl sm:text-2xl font-bold text-white uppercase tracking-wider flex items-center gap-2.5">
              <CheckCircle className="w-6 h-6 text-[#00A3FF]" />
              <span>In-Scope Targets</span>
            </h3>
            <span className="text-xs text-slate-400 font-sans">Authorized for testing</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SCOPE_INVENTORY.inScope.map((asset, idx) => (
              <div
                key={asset.id}
                className="p-5 rounded-xl bg-[#060D1E] border border-blue-900/50 hover:border-[#0080FF] transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-[#00A3FF] px-2.5 py-0.5 rounded bg-blue-950 border border-blue-800/60">
                      TARGET 0{idx + 1}
                    </span>
                    <span className="text-[11px] font-bold text-blue-300 uppercase">
                      IN-SCOPE
                    </span>
                  </div>

                  <h4 className="font-poster text-lg font-bold text-white group-hover:text-[#00A3FF] transition-colors">
                    {asset.name}
                  </h4>

                  <div className="my-2.5 p-2 rounded bg-black border border-slate-800 text-xs font-mono text-blue-300 break-all flex items-center justify-between">
                    <span>{asset.url}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0 ml-1" />
                  </div>

                  <p className="text-xs font-sans text-slate-300 leading-relaxed mb-3">
                    {asset.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-900 text-xs text-slate-400 flex items-center justify-between">
                  <span>Category: {asset.category}</span>
                  <span className="text-blue-400 font-semibold">{asset.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OUT-OF-SCOPE SPECIFICATIONS */}
        <div className="p-6 rounded-2xl bg-[#060D1E] border border-blue-900/50">
          <h4 className="font-poster text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <XCircle className="w-5 h-5 text-rose-400" />
            <span>Out-of-Scope Targets &amp; Prohibitions</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            {SCOPE_INVENTORY.outOfScope.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-black/70 border border-slate-800">
                <span className="font-bold text-rose-400 block mb-1">
                  • {item.target}
                </span>
                <span className="text-slate-300 leading-relaxed">{item.reason}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
