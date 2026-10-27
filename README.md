# NIT Srinagar Cyber Security Bug Hunt 2026 🐞🔐

Official website and portal for **NIT Srinagar Cyber Security Bug Hunt 2026**, organized by **National Institute of Technology Srinagar (NIT Srinagar)** in collaboration with **Bureau of Indian Standards (BIS) Student Chapter CSE | IT**.

> **"Find the Flaw. Secure the Future."**

---

## 🏆 Key Event Details

- **Registration Opens:** 26 October 2026
- **Registration Deadline:** 28 October 2026, before 5:00 PM IST
- **Final Day Venue:** To Be Announced
- **Participation:** Individual or teams of up to 3 members (submitted via Team Leader's email)
- **Eligibility:** Currently enrolled NIT Srinagar students (UG, PG, Ph.D.). **Faculty and staff are strictly not allowed to participate.**
- **Bounties:**
  - 🥇 **1st Prize:** ₹10,000 + Trophy & Certificate
  - 🥈 **2nd Prize:** ₹7,500 + Trophy & Certificate
  - 🥉 **3rd Prize:** ₹5,000 + Trophy & Certificate
  - 🎁 **Consolation & Additional Rewards:** Security Gadgets & Official Recognition

---

## 🔗 Official Links

- **Registration Form:** [Google Forms Link](https://docs.google.com/forms/d/e/1FAIpQLSfXv0C6aVCpENLNp_BZDONdAC7REY3GMBgBhLtAl0kBMzK6vw/viewform?usp=send_form) (Short: [https://forms.gle/CrJHD1yncQzVQRgD9](https://forms.gle/CrJHD1yncQzVQRgD9))
- **Official Rules & Guidelines Document:** [Google Drive Link](https://drive.google.com/file/d/137j-k6woNHsXJ8LpiDfqTel4lvuou4Tr/view?pli=1)
- **Vulnerability Reporting Channel:** `responsibledisclosure@nitsri.ac.in`

---

## 🎯 Authorized Scope (Rule 2.2)

Only security testing on the following **7 explicitly authorized assets** is permitted:

1. `https://nitsri.asia/` — NIT Srinagar Website
2. `http://172.17.27.8:8080/partav/` — Partav Portal
3. `https://gaasherp.nitsri.ac.in` — Gaash ERP Portal
4. `https://hostels.nitsri.ac.in/` — Hostel Management Portal
5. `https://life.nitsri.ac.in/` — Life Portal
6. `https://hpc.nitsri.ac.in/` — HPC Portal
7. `https://janibbashir.nitsri.ac.in/` — Janib Bashir Subdomain

> ⚠️ **Strict Exclusion:** The root domain `nitsri.ac.in` and any unlisted subdomains/systems are **strictly OUT-OF-SCOPE**.

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Create production build
npm run build

# 4. Preview production build locally
npm run preview
```

---

## ⚡ Deployment to Vercel (Zero Config)

This repository is pre-configured for direct 1-click deployment on [Vercel](https://vercel.com):

1. Initialize Git and push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: NIT Srinagar Cyber Security Bug Hunt 2026 Portal"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects the **Vite** framework preset:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **"Deploy"**. Your portal will be live globally in seconds!

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite 6
- **Styling:** Tailwind CSS + PostCSS
- **Icons:** Lucide React
- **Animations:** Framer Motion + Canvas Confetti
- **Typography:** Chakra Petch, Rajdhani, JetBrains Mono, Inter
