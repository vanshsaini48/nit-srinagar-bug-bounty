import React, { useState, useEffect } from "react";
import { EVENT_CONFIG } from "../content";
import { 
  Shield, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Users, 
  AlertCircle,
  Mail,
  Send,
  FileText
} from "lucide-react";

export default function PosterHero({ onOpenEmailModal, onScrollToSection }) {
  // Live Countdown to 28 October 2026 5:00 PM IST
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const target = new Date(EVENT_CONFIG.REGISTRATION_DEADLINE_ISO).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-6 pb-16 overflow-hidden bg-black">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#0080FF]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0052CC]/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Status & Deadlines Strip (ONE LINE ONLY) */}
        <div className="max-w-5xl mx-auto mb-6 p-1.5 sm:p-2 rounded-full bg-[#060D1E] border border-blue-600/40 shadow-[0_0_25px_rgba(0,128,255,0.2)]">
          <div className="flex items-center justify-between gap-4 px-3 sm:px-6 text-xs whitespace-nowrap overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <span className="flex h-2.5 w-2.5 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0080FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0080FF]"></span>
              </span>
              <span className="text-[#00A3FF] font-bold tracking-wider uppercase shrink-0">
                REGISTRATIONS LIVE
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">
                Deadline: <strong className="text-white">28 October 2026, before 5:00 PM IST</strong>
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-slate-400 font-medium hidden lg:inline">
                Bureau of Indian Standards × NIT Srinagar
              </span>
              <button
                onClick={onOpenEmailModal}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-700/60 text-[#00A3FF] hover:bg-[#0080FF] hover:text-white transition-all text-xs font-semibold cursor-pointer shadow-sm shrink-0"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Announcement</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bold Title Section: BUG BOUNTY */}
        <div className="text-center mb-8">
          <h1 className="font-poster text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase select-none drop-shadow-2xl">
            <span>BUG</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] via-[#0080FF] to-blue-400">
              BOUNTY
            </span>
          </h1>

          <p className="mt-2 text-xl sm:text-2xl lg:text-3xl font-poster font-bold tracking-widest text-[#00A3FF] uppercase">
            FIND THE FLAW. SECURE THE FUTURE.
          </p>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl mx-auto font-sans leading-relaxed">
            Authorized Cybersecurity Research Initiative organized by NIT Srinagar in collaboration with Bureau of Indian Standards (BIS) Student Chapter.
          </p>
        </div>

        {/* Central 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-8">
          
          {/* Left Column: Quick Event Information & Eligibility */}
          <div className="lg:col-span-3 space-y-4 text-left order-2 lg:order-1">
            
            <div className="p-4 rounded-xl bg-[#060D1E] border border-blue-900/60 shadow-lg">
              <span className="text-[11px] font-bold text-[#00A3FF] tracking-wider uppercase block mb-1">
                Event Motto
              </span>
              <p className="text-sm font-bold text-white uppercase font-poster">
                Small Finds. Big Impact.
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Discover genuine vulnerabilities, strengthen institutional infrastructure, and win bounties.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#060D1E] border border-blue-900/60 shadow-lg">
              <span className="text-[11px] font-bold text-[#00A3FF] tracking-wider uppercase block mb-1">
                Core Ethos
              </span>
              <p className="text-sm font-bold text-white uppercase font-poster">
                Hack • Learn • Patch • Repeat
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Ethical vulnerability assessment and responsible disclosure.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#060D1E] border border-blue-900/60 text-left shadow-lg">
              <div className="text-[11px] text-[#00A3FF] uppercase tracking-wider mb-1.5 font-bold flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#00A3FF]" />
                <span>Eligibility Status</span>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                Open exclusively to <strong className="text-white">currently enrolled NIT Srinagar students</strong> (UG, PG, PhD).
              </p>
              <div className="mt-2.5 text-[11px] font-medium text-red-300 bg-red-950/40 border border-red-800/60 px-2.5 py-1.5 rounded flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>Faculty and staff are NOT eligible to participate.</span>
              </div>
            </div>

          </div>

          {/* Center Column: Cyber Scarab Bug with Magnifying Glass HUD */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
              
              <div className="absolute inset-0 rounded-full border border-blue-600/20 animate-radar pointer-events-none" />
              <div className="absolute inset-6 rounded-full border border-dashed border-blue-500/25 pointer-events-none" />
              
              <div className="relative w-[280px] h-[280px] sm:w-[330px] sm:h-[330px] rounded-full border-4 border-[#0080FF] bg-gradient-to-b from-[#0B5394]/25 via-black/90 to-black shadow-[0_0_50px_rgba(0,128,255,0.35)] flex items-center justify-center overflow-hidden">
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full h-[1px] bg-blue-500/20" />
                  <div className="h-full w-[1px] bg-blue-500/20 absolute" />
                  <div className="w-20 h-20 rounded-full border border-blue-400/30 absolute" />
                </div>

                <div className="absolute top-4 left-6 text-[10px] text-[#00A3FF] tracking-wider font-bold">
                  ACTIVE SCAN
                </div>
                <div className="absolute top-4 right-6 text-[10px] text-blue-300 tracking-wider font-bold">
                  &lt; BUG DETECTED &gt;
                </div>
                <div className="absolute bottom-4 left-6 text-[10px] text-slate-400 tracking-wider">
                  PORT: 8080 // SSL
                </div>
                <div className="absolute bottom-4 right-6 text-[10px] text-amber-400 tracking-wider font-semibold">
                  SEV: CRITICAL
                </div>

                {/* Cyber Scarab Bug */}
                <div className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 transform hover:scale-105 transition-transform duration-300">
                  <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-[0_0_15px_rgba(0,128,255,0.7)]">
                    <defs>
                      <linearGradient id="bisBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00A3FF" />
                        <stop offset="50%" stopColor="#0066FF" />
                        <stop offset="100%" stopColor="#0B5394" />
                      </linearGradient>
                      <linearGradient id="shellGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#061229" />
                        <stop offset="50%" stopColor="#0C2554" />
                        <stop offset="100%" stopColor="#061229" />
                      </linearGradient>
                    </defs>

                    <path d="M 90 40 Q 75 15 55 20" stroke="#00A3FF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <circle cx="55" cy="20" r="3" fill="#00A3FF" />

                    <path d="M 110 40 Q 125 15 145 20" stroke="#00A3FF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <circle cx="145" cy="20" r="3" fill="#00A3FF" />

                    <path d="M 70 70 L 40 55 L 20 65" stroke="#00A3FF" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <circle cx="40" cy="55" r="3" fill="#00A3FF" />
                    <path d="M 65 95 L 30 95 L 15 110" stroke="#00A3FF" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <circle cx="30" cy="95" r="3" fill="#00A3FF" />
                    <path d="M 70 120 L 35 135 L 25 160" stroke="#00A3FF" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <circle cx="35" cy="135" r="3" fill="#00A3FF" />

                    <path d="M 130 70 L 160 55 L 180 65" stroke="#00A3FF" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <circle cx="160" cy="55" r="3" fill="#00A3FF" />
                    <path d="M 135 95 L 170 95 L 185 110" stroke="#00A3FF" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <circle cx="170" cy="95" r="3" fill="#00A3FF" />
                    <path d="M 130 120 L 165 135 L 175 160" stroke="#00A3FF" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <circle cx="165" cy="135" r="3" fill="#00A3FF" />

                    <polygon points="85,40 115,40 125,58 75,58" fill="url(#bisBlueGrad)" stroke="#00A3FF" strokeWidth="1.5" />
                    <circle cx="85" cy="48" r="3.5" fill="#FFFFFF" />
                    <circle cx="115" cy="48" r="3.5" fill="#FFFFFF" />

                    <polygon points="72,62 128,62 135,85 65,85" fill="#081836" stroke="#00A3FF" strokeWidth="2" />

                    <path d="M 65 88 Q 100 85 135 88 Q 142 135 125 165 Q 100 178 75 165 Q 58 135 65 88 Z" fill="url(#shellGrad)" stroke="#00A3FF" strokeWidth="2.5" />
                    <line x1="100" y1="88" x2="100" y2="175" stroke="#00A3FF" strokeWidth="2.5" />

                    <path d="M 80 100 L 75 115 L 85 130" stroke="#00A3FF" strokeWidth="1.5" fill="none" />
                    <circle cx="85" cy="130" r="2" fill="#00A3FF" />
                    <path d="M 120 100 L 125 115 L 115 130" stroke="#00A3FF" strokeWidth="1.5" fill="none" />
                    <circle cx="115" cy="130" r="2" fill="#00A3FF" />

                    <rect x="91" y="112" width="18" height="15" rx="3" fill="#00A3FF" />
                    <path d="M 94 112 V 106 A 6 6 0 0 1 106 106 V 112" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <circle cx="100" cy="119" r="2" fill="#000000" />
                  </svg>
                </div>
              </div>

              <div className="absolute -bottom-3 px-4 py-1.5 rounded-full bg-black border border-blue-500 text-[#00A3FF] font-semibold text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(0,128,255,0.3)]">
                SCAN • REPORT • PATCH • REPEAT
              </div>
            </div>
          </div>

          {/* Right Column: REGISTRATION ACTION CARD */}
          <div className="lg:col-span-4 space-y-4 text-left order-3">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#091530] via-[#050C1C] to-black border-2 border-[#0080FF] shadow-[0_0_30px_rgba(0,128,255,0.25)] relative overflow-hidden">
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#00A3FF] uppercase tracking-wider">
                  REGISTRATION PORTAL
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-600/30 border border-blue-500/50 text-[#00A3FF] text-[11px] font-semibold">
                  LIVE &amp; OPEN
                </span>
              </div>

              <h3 className="font-poster text-xl sm:text-2xl font-bold text-white mb-2">
                Join NIT Srinagar Bug Bounty 2026
              </h3>
              
              <p className="text-xs text-slate-300 font-sans leading-relaxed mb-5">
                Register your entry before the official deadline. Test authorized assets, report vulnerabilities responsibly, and win bounties.
              </p>

              {/* PRIMARY REGISTRATION BUTTON */}
              <div className="space-y-3">
                <a
                  href={EVENT_CONFIG.REGISTRATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#0066FF] via-[#0080FF] to-[#00A3FF] hover:brightness-110 text-white font-poster font-bold text-base tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,128,255,0.5)] transition-all cursor-pointer group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>REGISTER ON GOOGLE FORM</span>
                </a>

                <a
                  href={EVENT_CONFIG.RULES_DRIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#061024] hover:bg-[#0A1A3B] border border-blue-600/40 text-slate-200 hover:text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#00A3FF]" />
                  <span>Download Rules &amp; Scope Document</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              {/* Key Event Details */}
              <div className="mt-5 pt-4 border-t border-blue-900/40 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="w-4 h-4 text-[#00A3FF] shrink-0" />
                  <span>Deadline: <strong className="text-white">28 Oct 2026, 5:00 PM IST</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Users className="w-4 h-4 text-[#00A3FF] shrink-0" />
                  <span>Team Size: <strong className="text-white">1 to 3 Members</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-[#00A3FF] shrink-0" />
                  <span>Final Day Venue: <strong className="text-white">NIT Srinagar (TBA)</strong></span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Live Countdown Bar */}
        <div className="max-w-2xl mx-auto my-4 p-4 rounded-xl bg-[#060D1E] border border-blue-900/60 shadow-xl text-center">
          <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0080FF] animate-pulse" />
            <span>REGISTRATION WINDOW CLOSES IN</span>
          </div>

          <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto">
            <div className="p-2.5 rounded-lg bg-black border border-blue-950">
              <span className="font-poster text-2xl font-bold text-white block">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-[#00A3FF] uppercase font-semibold">Days</span>
            </div>
            <div className="p-2.5 rounded-lg bg-black border border-blue-950">
              <span className="font-poster text-2xl font-bold text-white block">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-[#00A3FF] uppercase font-semibold">Hours</span>
            </div>
            <div className="p-2.5 rounded-lg bg-black border border-blue-950">
              <span className="font-poster text-2xl font-bold text-white block">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-[#00A3FF] uppercase font-semibold">Minutes</span>
            </div>
            <div className="p-2.5 rounded-lg bg-black border border-blue-950">
              <span className="font-poster text-2xl font-bold text-[#00A3FF] block">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-[#00A3FF] uppercase font-semibold">Seconds</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
