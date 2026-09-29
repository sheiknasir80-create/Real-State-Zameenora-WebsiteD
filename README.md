# 🏡 Zameenora — Real Estate & Property Marketplace

I built Zameenora as a front-end real estate marketplace — the kind of full property portal you'd see in the wild, but built entirely from scratch with plain HTML, CSS, and JavaScript. No frameworks, no build tools, no npm install. Just the fundamentals.

The idea was to cover the whole user journey: browsing and filtering properties, comparing them, reserving one through a simulated escrow checkout, and — on the flip side — managing your own listings from a seller dashboard.

**🔗 Live Demo:** https://real-state-zameenora-website-d.vercel.app

**📦 Source Code:** https://github.com/sheiknasir80-create/Real-State-Zameenora-WebsiteD

---

## What it does

**Finding a property**
- Hero search with tabs for All Listings / Buy / Rent / Commercial / Land
- Sidebar filters — city, type, price range, bedrooms, bathrooms, amenities, verified-only
- Sorting (price, area, newest, popularity) and live result counts
- Category browsing — houses, apartments, villas, plots, offices, plazas, farmland, farmhouses

**Looking at a property**
- Multi-angle photo gallery in a preview modal
- Full spec sheet, description, amenities, and a simulated vicinity map
- Save to favorites (slide-out drawer)
- Side-by-side comparison across multiple properties at once

**Reserving one**
- Simulated escrow checkout with three payment tabs — card, bank/Raast transfer, mobile wallet
- Generates a proper receipt with transaction ID and timestamp, printable

**Listing your own**
- A 5-step wizard that changes its fields depending on category (residential vs. land vs. commercial)
- Photo selection, amenities checklist, live preview before you hit publish
- Once published, it shows up in the explorer immediately

**Managing listings (seller dashboard)**
- Overview metrics — total listings, views, active bookings
- Listings table, inquiries panel, bookings/deposits panel
- Editable profile (name, phone, agency, avatar) — saved in `localStorage`

**Getting in touch**
- Click-to-call and WhatsApp links with pre-filled, properly URL-encoded messages
- A minimal inquiry/tour-booking form — I kept this deliberately light on required fields

Everything's responsive, including a proper mobile nav drawer.

---

## Who this solves problems for

I designed Zameenora around real pain points different types of users run into with property platforms:

| User | Problem | How Zameenora addresses it |
|---|---|---|
| **Home Buyers** | Sifting through hundreds of listings with vague photos and no way to compare options | Multi-angle galleries, advanced filters, and a side-by-side comparison tool |
| **Renters** | Hard to filter listings by what actually matters — budget, amenities, verified status | Dedicated rent/buy tabs, amenity checklists, verified-only filtering |
| **Property Sellers / Landlords** | No easy way to list a property with the right fields for its type (house vs. land vs. commercial) | A guided 5-step wizard with fields that adapt to the property category |
| **Real Estate Agents** | Juggling listings, inquiries, and bookings across scattered tools | A single dashboard with listings, inquiries, and bookings/deposits in one place |
| **Investors** | Uncertainty and lack of trust around reserving a property remotely | A simulated escrow checkout flow with a verifiable receipt and transaction record |
| **First-time Property Buyers** | Intimidated by contacting agents directly or unsure how to reach out | Low-friction WhatsApp and call links, plus a minimal-field inquiry form |

---

## Stack

Plain HTML5, custom CSS3 (variables, flexbox/grid — no framework), and vanilla ES6+ JavaScript. State (favorites, comparisons, listings, inquiries, bookings) is persisted with `localStorage` since there's no backend. Fonts are Plus Jakarta Sans and Playfair Display from Google Fonts. Hosted on Vercel.

I went with vanilla JS on purpose here rather than reaching for React — wanted to actually work through the DOM manipulation, state handling, and rendering logic by hand instead of letting a framework paper over it.

---

## Project structure

```
Real-State-Zameenora-WebsiteD/
├── index.html          # Homepage — hero search, categories, featured listings
├── properties.html     # Property explorer — filters, sorting, comparison
├── dashboard.html       # Seller dashboard
├── zameen.css           # Design system & component styles
├── zameen.js            # App logic — state, rendering, filtering, modals
└── image/               # Property & UI images
```

---

## Running it locally

No dependencies, no build step.

```bash
git clone https://github.com/sheiknasir80-create/Real-State-Zameenora-WebsiteD.git
cd Real-State-Zameenora-WebsiteD
```

Then just open `index.html` in a browser, or serve it with something like VS Code's Live Server extension (recommended, so relative paths behave properly).

---

## Things I'd add next

- A real backend instead of `localStorage` (Node/Express + a database)
- Actual authentication — right now login is just simulated
- A real payment gateway instead of the simulated escrow flow
- Image upload in the listing wizard instead of picking from a preset library
- Some basic tests around the filtering/comparison logic

---

## Note

Everything here — listings, agents, inquiries, payments — is simulated and stored locally in your browser. No real transactions or personal data involved. This is a portfolio project.

---

## Author

**Muhammad Ibraheem**
GitHub: [@sheiknasir80-create](https://github.com/sheiknasir80-create)