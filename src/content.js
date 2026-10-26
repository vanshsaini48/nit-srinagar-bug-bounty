// NIT Srinagar Cyber Security Bug Hunt 2026 — Official Poster Edition

export const EVENT_CONFIG = {
  TITLE: "NIT Srinagar Cyber Security Bug Hunt 2026",
  TAGLINE: "Find the Flaw. Secure the Future.",
  ORGANIZER: "National Institute of Technology Srinagar",
  PARTNER: "Bureau of Indian Standards (BIS) — BIS Student Chapter",
  
  // Registration and timeline details
  REGISTRATION_OPENS: "26 October 2026",
  REGISTRATION_DEADLINE: "28 October 2026, before 5:00 PM IST",
  REGISTRATION_DEADLINE_ISO: "2026-10-28T17:00:00+05:30",
  FINAL_DAY_VENUE: "To Be Announced (Campus Auditorium / IT Centre)",
  
  // Official Links
  REGISTRATION_FORM_URL: "https://docs.google.com/forms/d/e/1FAIpQLSfXv0C6aVCpENLNp_BZDONdAC7REY3GMBgBhLtAl0kBMzK6vw/viewform?usp=send_form",
  REGISTRATION_SHORT_URL: "https://forms.gle/CrJHD1yncQzVQRgD9",
  RULES_DRIVE_URL: "https://drive.google.com/file/d/137j-k6woNHsXJ8LpiDfqTel4lvuou4Tr/view?pli=1",
  OFFICIAL_EMAIL: "responsibledisclosure@nitsri.ac.in",
  
  // Team specifications
  TEAM_SIZE: "Individual or teams of up to 3 members",
  TEAM_REQUIREMENT: "For team registrations, the form must be submitted using the Team Leader's email ID.",
};

export const LOGOS = {
  nitSrinagar: {
    src: "/assets/nit-srinagar-official.png",
    alt: "National Institute of Technology Srinagar (NIT Srinagar)",
    name: "NIT Srinagar",
  },
  bis: {
    src: "/assets/bis-official.png",
    alt: "Bureau of Indian Standards (BIS)",
    name: "Bureau of Indian Standards (BIS)",
  },
};

// Poster Slogans
export const POSTER_SLOGANS = [
  "FIND THE FLAW. SECURE THE FUTURE.",
  "SMALL FINDS. BIG IMPACT.",
  "HACK LEARN BUILD REPEAT",
  "SECURE STANDARDS. SAFER INDIA.",
  "SAME STANDARDS. A SAFER DIGITAL INDIA.",
  "BUG HUNTER MODE: ON",
  "HACK WITH A PURPOSE.",
  "SPOT VULNERABILITIES. BUILD A SAFER TOMORROW.",
];

// Core Pillars
export const POSTER_CORE_PILLARS = [
  {
    tag: "EXPLORE",
    title: "Real-World Security Challenges",
    desc: "Engage in authorized vulnerability assessments against real campus web portals, APIs, and enterprise systems.",
    icon: "Search",
  },
  {
    tag: "GAIN",
    title: "Practical Experience",
    desc: "Sharpen offensive security, web pentesting, code audit, and professional vulnerability reporting techniques.",
    icon: "Lightbulb",
  },
  {
    tag: "CONTRIBUTE",
    title: "To a More Secure Ecosystem",
    desc: "Strengthen the Institute's cybersecurity posture by proactively uncovering flaws before malicious actors do.",
    icon: "Shield",
  },
  {
    tag: "OPEN TO",
    title: "All Enrolled Students",
    desc: "Open to B.Tech, M.Tech, M.Sc, MCA, and PhD scholars of NIT Srinagar. (Faculty & staff are strictly not eligible).",
    icon: "Users",
  },
];

// Awards (1st: ₹10,000, 2nd: ₹7,500, 3rd: ₹5,000; Rank 1, 2, 3 do NOT get gadgets)
export const AWARDS = [
  {
    rank: "1st PRIZE",
    title: "Grand Champion",
    amount: "₹10,000",
    numeric: 10000,
    trophy: "Gold",
    color: "#FFB800",
    bgBorder: "border-[#FFB800]",
    perks: [
      "₹10,000 Cash Prize",
      "NIT Srinagar Security Hall of Fame Rank #1",
      "Official Trophy & Citation of Excellence",
    ],
  },
  {
    rank: "2nd PRIZE",
    title: "Runner-Up",
    amount: "7,500",
    numeric: 7500,
    trophy: "Silver",
    color: "#E2E8F0",
    bgBorder: "border-slate-300",
    perks: [
      "₹7,500 Cash Prize",
      "NIT Srinagar Security Hall of Fame Rank #2",
      "Official Trophy & Citation of Merit",
    ],
  },
  {
    rank: "3rd PRIZE",
    title: "Second Runner-Up",
    amount: "5,000",
    numeric: 5000,
    trophy: "Bronze",
    color: "#0080FF",
    bgBorder: "border-blue-500",
    perks: [
      "₹5,000 Cash Prize",
      "NIT Srinagar Security Hall of Fame Rank #3",
      "Official Trophy & Citation of Merit",
    ],
  },
  {
    rank: "ADDITIONAL REWARDS",
    title: "Gadgets + Consolation Prizes",
    amount: "Gadgets & Swag",
    numeric: 0,
    trophy: "Gift",
    color: "#00A3FF",
    bgBorder: "border-[#00A3FF]",
    perks: [
      "Exciting Tech Gadgets & Security Toolkits",
      "Consolation Cash & Swag Rewards",
      "Official Certificates of Recognition for verified bugs",
      "Induction into the NIT Srinagar Security Hall of Fame",
    ],
  },
];

// Authorized In-Scope Targets
export const SCOPE_INVENTORY = {
  notice: "Testing is authorized ONLY against systems explicitly listed in the scope below. The official main domain nitsri.ac.in is OUT-OF-SCOPE.",
  inScope: [
    {
      id: "nit-asia",
      name: "NIT Srinagar Website",
      url: "https://nitsri.asia/",
      domain: "nitsri.asia",
      category: "Web Application",
      description: "Official public-facing portal for NIT Srinagar hosted on the .asia top-level domain.",
      status: "In-Scope",
    },
    {
      id: "partav",
      name: "Partav Portal",
      url: "http://172.17.27.8:8080/partav/",
      domain: "172.17.27.8:8080/partav/",
      category: "Internal Academic System",
      description: "Testing strictly restricted to host 172.17.27.8, port 8080, and path /partav/. No broader network scanning permitted.",
      status: "Restricted Path & Port Only",
    },
    {
      id: "gaasherp",
      name: "GaaSherp ERP Portal",
      url: "https://gaasherp.nitsri.ac.in",
      domain: "gaasherp.nitsri.ac.in",
      category: "Enterprise Resource Planning",
      description: "Student, academic, fee, and administrative ERP database and web application.",
      status: "In-Scope",
    },
    {
      id: "hostels",
      name: "Hostel Management Portal",
      url: "https://hostels.nitsri.ac.in/",
      domain: "hostels.nitsri.ac.in",
      category: "Campus Services Portal",
      description: "Hostel allotment, residential records, and mess management web service.",
      status: "In-Scope",
    },
    {
      id: "life",
      name: "Life Portal",
      url: "https://life.nitsri.ac.in/",
      domain: "life.nitsri.ac.in",
      category: "Student Life & Activities",
      description: "Student life, campus clubs, events, and co-curricular engagement platform.",
      status: "In-Scope",
    },
    {
      id: "hpc",
      name: "HPC Portal",
      url: "https://hpc.nitsri.ac.in/",
      domain: "hpc.nitsri.ac.in",
      category: "High Performance Computing",
      description: "Institute computational cluster access, job submission, and user interface portal.",
      status: "In-Scope",
    },
    {
      id: "janibbashir",
      name: "Janib Bashir Subdomain",
      url: "https://janibbashir.nitsri.ac.in/",
      domain: "janibbashir.nitsri.ac.in",
      category: "Department / Research Service",
      description: "Designated institutional web application subdomain under nitsri.ac.in.",
      status: "In-Scope",
    },
  ],
  outOfScope: [
    {
      target: "Official NIT Srinagar Website (nitsri.ac.in)",
      reason: "The main institutional domain nitsri.ac.in is strictly Out-of-scope.",
    },
    {
      target: "Unlisted Subdomains & Wildcards (*.nitsri.ac.in)",
      reason: "Participants shall not assume that unlisted subdomains or services are in scope merely because they belong to NIT Srinagar.",
    },
    {
      target: "Internal Network Scanning around Partav",
      reason: "Inclusion of 172.17.27.8:8080/partav/ does NOT authorize scanning the internal network or other ports.",
    },
    {
      target: "Third-Party & External Systems",
      reason: "Third-party cloud providers, payment gateways, and government portals are strictly prohibited.",
    },
    {
      target: "Personal Devices of Faculty, Staff, or Students",
      reason: "Personal laptops, smartphones, emails, and accounts are forbidden from testing.",
    },
  ],
};

// Eligibility Rules
export const ELIGIBILITY = {
  title: "Eligibility & Participation Guidelines",
  allowed: [
    "Currently enrolled students of NIT Srinagar across all academic programmes.",
    "Undergraduate (B.Tech), Postgraduate (M.Tech, M.Sc, MBA), and Doctoral (PhD) scholars.",
    "Students from any branch or department of the Institute.",
    "Participation permitted individually OR in teams of up to 3 members.",
    "For team registrations, the form must be submitted using the Team Leader's email ID.",
  ],
  strictlyProhibited: [
    "Faculty members are strictly NOT allowed to participate as competitors.",
    "Permanent and contractual Institute staff members are NOT allowed.",
    "External individuals, alumni, or non-enrolled persons are NOT eligible.",
    "Testing without prior registration and acceptance of official guidelines is prohibited.",
  ],
};

// Security Hall of Fame Structure
export const HALL_OF_FAME = {
  title: "NIT Srinagar Security Hall of Fame",
  subtitle: "Permanent Institutional Recognition for Ethical Security Researchers",
  description: "The Bug Bounty 2026 establishes the permanent NIT Srinagar Responsible Vulnerability Disclosure Programme (RVDP). Top bug hunters and responsible researchers will be permanently memorialized on the Institute's security page.",
  tiers: [
    {
      tier: "Grand Champion (Rank #1)",
      badge: "Bug Bounty Champion 2026",
      prize: "₹10,000 + Trophy",
      requirements: "Highest verified vulnerability score or most critical finding chain.",
      glow: "border-[#FFB800] shadow-[0_0_20px_rgba(255,184,0,0.3)]",
    },
    {
      tier: "First Runner-Up (Rank #2)",
      badge: "Elite Security Researcher",
      prize: "₹7,500 + Trophy",
      requirements: "Second highest validated score or high-impact critical discovery.",
      glow: "border-slate-300 shadow-[0_0_20px_rgba(226,232,240,0.25)]",
    },
    {
      tier: "Second Runner-Up (Rank #3)",
      badge: "Senior Vulnerability Hunter",
      prize: "₹5,000 + Trophy",
      requirements: "Third highest validated score with reproducible PoC submissions.",
      glow: "border-blue-500 shadow-[0_0_20px_rgba(0,128,255,0.25)]",
    },
    {
      tier: "Special Impact & Chaining",
      badge: "Vulnerability Chaining Specialist",
      prize: "Gadgets + Consolation Prizes",
      requirements: "Demonstrating compound attack vectors (Info Disclosure -> Credential -> PrivEsc).",
      glow: "border-blue-400 shadow-[0_0_20px_rgba(0,163,255,0.25)]",
    },
    {
      tier: "Responsible Disclosers",
      badge: "Hall of Fame Inductee",
      prize: "Official Citation & Certificate of Recognition",
      requirements: "Reporting genuine security flaws adhering 100% to responsible disclosure guidelines.",
      glow: "border-slate-400 shadow-[0_0_20px_rgba(148,163,184,0.25)]",
    },
  ],
  sampleInductees: [
    { rank: "#01", handle: "[Grand Champion 2026]", bounty: "₹10,000", score: "Awaiting Live Evaluation", status: "Open" },
    { rank: "#02", handle: "[Runner-Up 2026]", bounty: "₹7,500", score: "Awaiting Live Evaluation", status: "Open" },
    { rank: "#03", handle: "[2nd Runner-Up 2026]", bounty: "₹5,000", score: "Awaiting Live Evaluation", status: "Open" },
    { rank: "#04", handle: "[Gadget & Consolation]", bounty: "Gadgets", score: "Technical Excellence", status: "Open" },
  ]
};

// Mandatory Guidelines
export const MANDATORY_RULES = [
  {
    num: "Rule 1",
    title: "Authorized Security Testing Only",
    desc: "Conduct security testing only against systems and assets explicitly included in the approved scope. Testing outside that scope is strictly prohibited.",
  },
  {
    num: "Rule 2",
    title: "Minimal Proof-of-Concept & Stop",
    desc: "Once sufficient evidence establishes that a vulnerability exists, stop further exploitation immediately. Do not access unnecessary data or cause impact.",
  },
  {
    num: "Rule 3",
    title: "Reproducible Evidence (PoC)",
    desc: "Include clear, sequential reproduction steps, HTTP requests/responses, screenshots, or screen recordings that allow independent committee verification.",
  },
  {
    num: "Rule 4",
    title: "No Modification or Manipulation",
    desc: "Never modify, delete, corrupt, or alter files, databases, application records, user accounts, system configs, or audit logs.",
  },
  {
    num: "Rule 5",
    title: "No Persistence or Backdoors",
    desc: "Do not plant web shells, backdoors, persistent accounts, scheduled tasks, startup scripts, or unauthorized binaries.",
  },
  {
    num: "Rule 6",
    title: "Sensitive Credentials Protocol",
    desc: "If credentials or tokens are inadvertently found, do not download or use them to access other systems. Report immediately.",
  },
  {
    num: "Rule 7",
    title: "Protection of Personal Data",
    desc: "Do not intentionally access, download, or disclose personal data of students, faculty, or staff. Report exposure immediately.",
  },
  {
    num: "Rule 8",
    title: "No DoS / Traffic Flooding",
    desc: "Denial-of-Service (DoS/DDoS), stress testing, and aggressive automated scanner flooding are strictly prohibited.",
  },
  {
    num: "Rule 9",
    title: "Responsible Hunter Conduct",
    desc: "Never attack, interfere with, target, or disrupt other participants' machines, accounts, or network sessions.",
  },
  {
    num: "Rule 10",
    title: "Strict Confidentiality & Non-Disclosure",
    desc: "All findings must remain confidential. Public disclosure (social media, GitHub, forums) before written Institute clearance is strictly prohibited.",
  },
];

// Disqualification grounds
export const DISQUALIFICATION_TRIGGERS = [
  "Attacking systems outside authorized scope (e.g., nitsri.ac.in or external services)",
  "Performing disruptive Denial of Service (DoS/DDoS) attacks",
  "Modifying, deleting, or altering institutional data or audit logs",
  "Planting persistent access mechanisms, web shells, or malware",
  "Social engineering, phishing, or physical intrusion attempts",
  "Publicly disclosing findings before Institute authorization",
  "Plagiarizing another participant's vulnerability report or fabricating findings",
];

// Reporting Requirements
export const REPORT_REQUIREMENTS = [
  "1. Name and classification of the vulnerability",
  "2. Affected domain, IP address, URL endpoint, or service",
  "3. Suggested vulnerability severity (Critical / High / Medium / Low)",
  "4. Detailed step-by-step reproduction instructions",
  "5. Safe Proof of Concept (PoC) — screenshots, HTTP logs, minimal payload",
  "6. Technical security impact analysis",
  "7. Concrete remediation / mitigation recommendations",
  "8. Date & exact timestamp of discovery",
  "9. Participant / Team registration details and contact info",
];
