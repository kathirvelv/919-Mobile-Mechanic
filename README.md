# 🚗 919 Mobile Mechanic (Cary & Triangle Area)

> **Professional Auto Diagnostics & Repairs—Right in Your Driveway.**  
> Serving high-end vehicles across Cary, Morrisville, Apex, and the Triangle Area with certified dealership-grade expertise, 100% diagnostic fee credit, and transparent upfront pricing.

---

## 🌟 Overview & Key Features

This project is a high-converting, mobile-responsive **multi-page React application** engineered strictly according to the **Website Content Blueprint**:

1. **Header & Emergency Navigation Structure**
   - 🚨 Sticky Emergency Top Bar: Direct click-to-call roadside dispatch hotline `(919) 888-0919`.
   - Sleek responsive navbar with mobile drawer navigation: `Home`, `Our Pricing`, `Our Guarantees`, `Services`, `Service Areas`, and `Book Diagnostics Now`.
2. **Hero Section (Above the Fold)**
   - Main Headline: *"Professional Auto Diagnostics & Repairs—Right in Your Driveway."*
   - Sub-headline: *"Skip the shop wait times. Serving high-end vehicles across Cary, Morrisville, and the Triangle Area with certified expertise and transparent, upfront pricing."*
   - Primary CTA Button: `[ Book Diagnostic Inspection ]` (Smooth-scrolls straight to Intake Widget).
   - Secondary CTA Button: `[ Emergency Roadside Help ]` (Direct emergency roadside dispatch).
3. **The Trust Builder: Fee & Warranty Badges**
   - **Diagnostic Fee Credit:** Flat-rate diagnostic inspection fee ($99) is 100% credited directly toward final repair cost.
   - **12-Month / 12,000-Mile Warranty:** Rock-solid quality guarantee on parts and labor.
   - **Certified Mobile Mechanics:** ASE-Master certified technicians with dealership-grade bi-directional scanners.
   - **"No Greasy Driveways" Cleanliness Guarantee:** Drip-tray containment and EPA-compliant fluid recovery.
4. **Interactive Intake & Instant Booking Widget**
   - Vehicle VIN or Year / Make / Model lookup (BMW, Porsche, Mercedes, Audi, Lexus, Tesla, etc.).
   - Primary Symptom selection (Check Engine Light, Brakes, No-Start, Battery, Overheating, etc.).
   - Preferred Date & Time Window (Morning, Mid-Day, Afternoon, Emergency ASAP).
   - **Simulated SMS Alert Transmission:** Live mock of the automated SMS confirmation dispatched from under the car to the user's mobile device.
5. **Interactive Pricing Calculator & Comparison**
   - Live repair scenario estimator showing real-time $99 diagnostic credit deduction.
   - Comparison matrix: 919 Mobile Mechanic vs Dealerships vs Traditional Brick-and-Mortar Shops.
6. **Footer & Local SEO Footprint**
   - Social Anchor: `Find us on Facebook: @TriangleMobileMechanic919`
   - Service Area Footprint: Cary (27511, 27513, 27519), Morrisville (27560), Apex (27502), Raleigh, RTP, and Holly Springs.
   - Copyright: `© 2026 919 Mobile Mechanic. All rights reserved.`

---

## 🎨 Custom Logo & Branding

- Custom vector logo created in SVG format (`/public/logo.svg`, `/public/logo-icon.svg`, and dynamic React component `/src/components/Logo.jsx`).
- Features a hexagonal titanium plate, crossed wrench & precision diagnostic pulse, high-voltage area code badge ("919"), and Cary / Triangle Area tagline.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Routing:** React Router v7 (Multi-Page SPA)
- **Styling:** Tailwind CSS with custom automotive color palette (Safety Amber `#F59E0B`, Performance Orange `#FF5A1F`, Dark Plate `#0B0F17`)
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- Node.js (v18 or newer recommended, v22 tested)
- npm (v9+ or v10+)

### 2. Installation
```bash
# Clone the repository
git clone <your-github-repo-url>
cd "919 Mobile Mechanic"

# Install dependencies
npm install
```

### 3. Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port shown in terminal).

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be created in the `dist/` directory.

---

## 📦 GitHub Push Instructions

To push this repository to your GitHub account:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Add all files
git add .

# 3. Create your initial commit
git commit -m "feat: complete multi-page 919 Mobile Mechanic website with booking widget and logo"

# 4. Rename the branch to main
git branch -M main

# 5. Create a new repository on GitHub (e.g. '919-mobile-mechanic') and add the remote:
git remote add origin https://github.com/<YOUR-USERNAME>/919-mobile-mechanic.git

# 6. Push to GitHub
git push -u origin main
```

---

## ▲ Vercel Deployment Instructions

This project is fully configured for zero-config Vercel deployment with client-side SPA routing (`vercel.json` included).

### Method A: Deploy via GitHub (Recommended)
1. Push your repository to GitHub following the instructions above.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** &rarr; **"Project"**.
4. Import your GitHub repository (`919-mobile-mechanic`).
5. Vercel automatically detects **Vite**:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **"Deploy"**. Your live URL will be ready in under 60 seconds!

### Method B: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Run vercel deploy
vercel

# For production deployment
vercel --prod
```

The included `vercel.json` contains:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
This ensures all multi-page routes (`/pricing`, `/guarantees`, `/services`, `/book`, `/service-areas`, `/emergency`) route properly to the SPA on direct page refreshes.

---

## 📄 License & Attribution
© 2026 919 Mobile Mechanic. All rights reserved.
Built for high-end vehicle owners in Cary, Morrisville, and the Triangle Area.
