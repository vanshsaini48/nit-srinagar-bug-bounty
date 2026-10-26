import React, { useState, useEffect } from "react";
import PosterHeader from "./components/PosterHeader";
import PosterHero from "./components/PosterHero";
import PosterAwardsBanner from "./components/PosterAwardsBanner";
import PosterFourPillars from "./components/PosterFourPillars";
import ScopePosterSection from "./components/ScopePosterSection";
import HallOfFamePosterSection from "./components/HallOfFamePosterSection";
import EligibilityPosterSection from "./components/EligibilityPosterSection";
import RulesPosterSection from "./components/RulesPosterSection";
import PosterInteractiveBooth from "./components/PosterInteractiveBooth";
import PosterFooter from "./components/PosterFooter";
import EmailAnnouncementModal from "./components/EmailAnnouncementModal";

export default function App() {
  const [emailModalOpen, setEmailModalOpen] = useState(false);

  // Quick keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === "e" || e.key === "E") && e.altKey) {
        e.preventDefault();
        setEmailModalOpen((prev) => !prev);
      } else if (e.key === "Escape" && emailModalOpen) {
        setEmailModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [emailModalOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-slate-100 font-sans selection:bg-[#00E5FF]/30 selection:text-[#00E5FF] overflow-x-hidden">
      {/* Top Fixed Header with Large Logos */}
      <PosterHeader
        onOpenEmailModal={() => setEmailModalOpen(true)}
        onScrollToSection={scrollToSection}
      />

      <main className="relative z-20">
        {/* Hero with Glitch Title, Cyber Bug Scarab & Magnifying Glass */}
        <PosterHero
          onOpenEmailModal={() => setEmailModalOpen(true)}
          onScrollToSection={scrollToSection}
        />

        {/* The Iconic Poster Awards Banner (₹10,000, ₹7,500, ₹5,000) */}
        <PosterAwardsBanner
          onScrollToHallOfFame={() => scrollToSection("hall-of-fame")}
        />

        {/* The 4 Core Pillars from Poster Page 1 */}
        <PosterFourPillars />

        {/* Strict Scope: ONLY 7 Proposed Assets, nitsri.ac.in OUT-OF-SCOPE */}
        <ScopePosterSection />

        {/* Security Hall of Fame (Black Background as requested) */}
        <HallOfFamePosterSection />

        {/* Eligibility: Students only, Faculty strictly NOT allowed */}
        <EligibilityPosterSection />

        {/* Mandatory Rules of Engagement & Reporting */}
        <RulesPosterSection />

        {/* Poster Photo-Booth & Prop Stickers (From Poster Page 5) */}
        <PosterInteractiveBooth />
      </main>

      {/* Footer with Large NIT Srinagar & BIS Logos */}
      <PosterFooter onOpenEmailModal={() => setEmailModalOpen(true)} />

      {/* Broadcast Email Announcement Modal */}
      <EmailAnnouncementModal
        isOpen={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
      />
    </div>
  );
}
