import React, { useState } from "react";
import { EVENT_CONFIG } from "../content";
import { X, Copy, Check, Mail, Send, ExternalLink } from "lucide-react";

export default function EmailAnnouncementModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [format, setFormat] = useState("preview"); // "preview" | "markdown"

  if (!isOpen) return null;

  const emailSubject = "🚨 REGISTRATIONS ARE NOW OPEN! — NIT SRINAGAR BUG BOUNTY 2026 🐞🔐";

  const emailBodyMarkdown = `Subject: ${emailSubject}

*BUG BOUNTY IS LIVE* 🟢
*Find the Flaw. Secure the Future.*

The wait is over! We are excited to announce that *NIT Srinagar Cyber Security Bug Hunt 2026*, organized by *NIT Srinagar* in collaboration with the *Bureau of Indian Standards (BIS) — BIS Student Chapter*, is officially LIVE, and registrations are now open! 🎯

This is your opportunity to put your cybersecurity skills to the test, identify security vulnerabilities in authorized NIT Srinagar digital assets, and contribute directly to strengthening the Institute’s cybersecurity posture.

Whether you are passionate about ethical hacking, web application security, penetration testing, network security, or vulnerability research, this is your chance to turn your technical knowledge into meaningful real-world impact.

📅 Registration Details

📌 *Registration Opens:* 26 October 2026
⏳ *Registration Deadline:* 28 October 2026, before 5:00 PM IST
📍 *Final Day Venue:* To Be Announced
👥 *Participation:* Individual or teams of up to 3 members

🔗 *Register Here:* ${EVENT_CONFIG.REGISTRATION_FORM_URL}
*(Short link: ${EVENT_CONFIG.REGISTRATION_SHORT_URL})*

⚠️ *Important Team Registration Rule:* For team registrations, the registration form must be submitted using the *Team Leader’s email ID only*. Submissions made using other team members’ email IDs may not be considered.

⚠️ *Eligibility Notice:* Participation is open *strictly to currently enrolled students* of NIT Srinagar (Undergraduate, Postgraduate, and Doctoral/PhD). *Faculty and administrative staff are strictly NOT eligible to participate as competitors.*

🎯 What Can You Do?

Registered participants will have the opportunity to identify and responsibly report security vulnerabilities in specifically authorized NIT Srinagar digital assets.

The authorized proposed testing scope includes ONLY the following 7 assets:

1. NIT Srinagar Website — [https://nitsri.asia/]
2. Partav Portal — [http://172.17.27.8:8080/partav/] *(Strictly restricted to port 8080 & path /partav/)*
3. GaaSherp ERP — [https://gaasherp.nitsri.ac.in]
4. Hostel Management Portal — [https://hostels.nitsri.ac.in/]
5. Life Portal — [https://life.nitsri.ac.in/]
6. HPC Portal — [https://hpc.nitsri.ac.in/]
7. Janib Bashir Subdomain — [https://janibbashir.nitsri.ac.in/]

⛔ *STRICT PROHIBITION — OUT OF SCOPE:*
The Official NIT Srinagar Website (*nitsri.ac.in*) is strictly OUT-OF-SCOPE.
Scanning the broader internal network around 172.17.27.8, testing unlisted subdomains, or probing third-party systems is strictly prohibited. Only explicitly authorized assets, URLs, ports, and services may be tested.

🏆 Exciting Rewards Await!

Bring your best skills, discover genuine vulnerabilities, and compete for exciting rewards!

🥇 *1st Prize:* ₹10,000 + Trophy + Permanent Induction in NIT Srinagar Security Hall of Fame (Rank #1)
🥈 *2nd Prize:* ₹7,500 + Trophy + Permanent Induction in NIT Srinagar Security Hall of Fame (Rank #2)
🥉 *3rd Prize:* ₹5,000 + Trophy + Permanent Induction in NIT Srinagar Security Hall of Fame (Rank #3)
🎁 *Additional Rewards:* Exciting Hardware Gadgets, Consolation Prizes, and Official Certificates of Recognition!

🔍 How to Participate

1. Complete the registration form before the deadline (28 October 2026, 5:00 PM IST).
2. Read and accept the official Bug Bounty Rules and Guidelines.
3. Wait for the officially published scope and authorization before beginning any testing.
4. Identify genuine vulnerabilities using safe and responsible testing methods.
5. Prepare clear reproduction steps, supporting evidence (HTTP requests/responses, screenshots), impact assessment, and remediation recommendations.
6. Submit your findings directly to the official channel: *responsibledisclosure@nitsri.ac.in*
7. Let the Technical Committee validate your findings and determine their severity and score.

🚨 Strict Rules — Read Before Participating

This is an *authorized security research initiative, not an unrestricted hacking exercise.*

✅ Test only assets explicitly included in the officially published scope.
✅ Use safe, minimal proof-of-concept testing.
✅ Report findings responsibly and maintain strict confidentiality.
✅ Respect other participants and the Institute’s systems.

❌ No out-of-scope scanning or testing (nitsri.ac.in is OUT OF SCOPE).
❌ No DoS/DDoS attacks, service disruption, or destructive testing.
❌ No unauthorized persistence, malware, backdoors, or web shells.
❌ No unauthorized social engineering, phishing, or physical intrusion.
❌ No unnecessary access to confidential data, credentials, or personal information.
❌ No public disclosure of vulnerabilities without written Institute authorization.

*STRICT ENFORCEMENT:* Any vulnerability discovered through out-of-scope testing will be ineligible for the competition, scoring, prizes, certificates, and recognition. Participants who violate scope restrictions may face immediate disqualification and referral for disciplinary and/or legal action, as applicable.

📖 *COMPLETE OFFICIAL RULES DRIVE LINK:*
${EVENT_CONFIG.RULES_DRIVE_URL}

🚀 Your Skills. Your Responsibility. Your Impact.

This is more than a competition. It is an opportunity to apply ethical hacking skills responsibly, discover meaningful security weaknesses, and help build a safer digital environment at NIT Srinagar.

Prepare your tools. Sharpen your skills. Document your findings responsibly.

*Find the Flaw. Secure the Future.*

🔗 *Register Now:* ${EVENT_CONFIG.REGISTRATION_SHORT_URL}

EVENT IS LIVE 🟢
📢 Registrations close on *28 October 2026, before 5:00 PM*. Do not miss this opportunity!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(emailBodyMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#060D1E] border-2 border-blue-600 rounded-2xl shadow-[0_0_50px_rgba(0,128,255,0.3)] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-blue-900/60 bg-black">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-950 border border-blue-700/60 text-[#00A3FF]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-poster text-lg sm:text-xl font-bold text-white uppercase tracking-wider">
                Official Broadcast Email Announcement
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                No Sparsh/Iqra • Scope strictly 7 assets • Faculty excluded • Ready to copy &amp; broadcast
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-white font-poster font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-white" />
                  <span>Copy Text</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-black/60 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFormat("preview")}
              className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                format === "preview" ? "bg-blue-600 text-white font-semibold" : "text-slate-400 hover:text-white"
              }`}
            >
              Formatted Preview
            </button>
            <button
              onClick={() => setFormat("markdown")}
              className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                format === "markdown" ? "bg-blue-600 text-white font-semibold" : "text-slate-400 hover:text-white"
              }`}
            >
              Raw Markdown
            </button>
          </div>
          <span className="text-[#00A3FF] text-xs font-semibold hidden sm:inline">
            Status: 🟢 Ready to Broadcast
          </span>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs font-sans text-slate-200 leading-relaxed bg-[#030712]">
          {format === "preview" ? (
            <div className="space-y-4 max-w-3xl mx-auto font-sans">
              <div className="p-3.5 rounded-xl bg-black border border-slate-800 text-xs">
                <span className="text-slate-400 font-semibold">Subject: </span>
                <span className="text-white font-bold">{emailSubject}</span>
              </div>

              <div className="text-center py-2 border-b border-slate-800">
                <span className="font-poster text-xl font-bold text-[#00A3FF] block">
                  BUG BOUNTY IS LIVE 🟢
                </span>
                <span className="font-poster text-sm text-slate-300">
                  Find the Flaw. Secure the Future.
                </span>
              </div>

              <p>
                The wait is over! We are excited to announce that <strong>NIT Srinagar Cyber Security Bug Hunt 2026</strong>, organized by <strong>NIT Srinagar</strong> in collaboration with the <strong>Bureau of Indian Standards (BIS) — BIS Student Chapter</strong>, is officially LIVE, and registrations are now open! 🎯
              </p>

              <div className="p-4 rounded-xl bg-black border border-blue-900/60 space-y-2 text-xs">
                <div className="font-bold text-[#00A3FF] font-poster uppercase">📅 Key Registration Details</div>
                <div>📌 <strong>Registration Opens:</strong> 26 October 2026</div>
                <div>⏳ <strong>Registration Deadline:</strong> 28 October 2026, before 5:00 PM IST</div>
                <div>📍 <strong>Final Day Venue:</strong> To Be Announced</div>
                <div>👥 <strong>Participation:</strong> Individual or teams of up to 3 members</div>
                <div>🔗 <strong>Form Link:</strong> <a href={EVENT_CONFIG.REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer" className="text-[#00A3FF] underline">{EVENT_CONFIG.REGISTRATION_SHORT_URL}</a></div>
              </div>

              <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-700/50 text-blue-200 text-xs">
                ⚠️ <strong>Important Team Submission Rule:</strong> For team registrations, the form must be submitted using the <strong>Team Leader’s email ID only</strong>.
              </div>

              <div className="p-3 rounded-xl bg-black border border-slate-800 text-slate-300 text-xs">
                ⛔ <strong>Eligibility Notice:</strong> Exclusively open to currently enrolled students of NIT Srinagar. <strong>Faculty and staff are strictly NOT eligible.</strong>
              </div>

              <div>
                <h4 className="font-poster font-bold text-white text-sm uppercase mb-2">
                  🎯 Authorized Target Scope (7 Assets):
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300 font-sans">
                  <li>NIT Srinagar Website — <a href="https://nitsri.asia/" className="text-blue-400 underline">https://nitsri.asia/</a></li>
                  <li>Partav Portal — <a href="http://172.17.27.8:8080/partav/" className="text-blue-400 underline">http://172.17.27.8:8080/partav/</a> <em>(Restricted to port 8080 &amp; path /partav/)</em></li>
                  <li>GaaSherp ERP — <a href="https://gaasherp.nitsri.ac.in" className="text-blue-400 underline">https://gaasherp.nitsri.ac.in</a></li>
                  <li>Hostel Management Portal — <a href="https://hostels.nitsri.ac.in/" className="text-blue-400 underline">https://hostels.nitsri.ac.in/</a></li>
                  <li>Life Portal — <a href="https://life.nitsri.ac.in/" className="text-blue-400 underline">https://life.nitsri.ac.in/</a></li>
                  <li>HPC Portal — <a href="https://hpc.nitsri.ac.in/" className="text-blue-400 underline">https://hpc.nitsri.ac.in/</a></li>
                  <li>Janib Bashir Subdomain — <a href="https://janibbashir.nitsri.ac.in/" className="text-blue-400 underline">https://janibbashir.nitsri.ac.in/</a></li>
                </ul>
                <div className="mt-2 text-rose-400 text-xs">
                  ⛔ <strong>CRITICAL:</strong> Official website <code>nitsri.ac.in</code> is strictly OUT-OF-SCOPE!
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black border border-blue-900/60">
                <h4 className="font-poster font-bold text-white text-sm uppercase mb-2">
                  🏆 Exciting Rewards &amp; Bounties:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#060D1E] border border-[#FFB800]">
                    🥇 <strong>1st Prize:</strong> ₹10,000 + Trophy + Hall of Fame Rank #1
                  </div>
                  <div className="p-3 rounded-lg bg-[#060D1E] border border-blue-400">
                    🥈 <strong>2nd Prize:</strong> ₹7,500 + Trophy + Hall of Fame Rank #2
                  </div>
                  <div className="p-3 rounded-lg bg-[#060D1E] border border-blue-600">
                    🥉 <strong>3rd Prize:</strong> ₹5,000 + Trophy + Hall of Fame Rank #3
                  </div>
                </div>
                <div className="mt-2.5 text-xs text-[#00A3FF]">
                  🎁 Additional Rewards: Hardware Security Gadgets + Consolation Prizes!
                </div>
              </div>

              <div className="pt-2 text-slate-400 text-xs border-t border-slate-800">
                Official Rules Drive: <a href={EVENT_CONFIG.RULES_DRIVE_URL} target="_blank" rel="noopener noreferrer" className="text-[#00A3FF] underline">{EVENT_CONFIG.RULES_DRIVE_URL}</a>
              </div>
            </div>
          ) : (
            <pre className="p-4 rounded-xl bg-black border border-slate-800 text-xs font-mono text-blue-200 whitespace-pre-wrap select-all leading-relaxed">
              {emailBodyMarkdown}
            </pre>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-blue-900/40 bg-black flex items-center justify-between">
          <span className="text-xs text-slate-400 font-sans">
            Ready to copy and distribute to student groups and portals.
          </span>
          <button
            onClick={handleCopy}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-white font-poster font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg"
          >
            {copied ? "Copied to Clipboard!" : "Copy Full Announcement"}
          </button>
        </div>

      </div>
    </div>
  );
}
