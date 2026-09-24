# Tazmify website

A React + Vite marketing site for Tazmify, the creator × brand collaboration platform. The layout, type, colour and motion system are extracted from the [OneFin reference](https://onefin.framer.website/) and documented in `DESIGN.md`. Read that file before changing anything visual.

## Run locally

```powershell
npm install
npm run dev
```

Open http://localhost:5180. Vite uses another available port if 5180 is occupied; check its terminal output.

## Production build

```powershell
npm run build
npm run preview
```

Deploy the generated `dist` directory to a static host. The site is a single-page app with client-side routing, so the host must serve `index.html` for unknown paths:

- Netlify: `public/_redirects` is copied into `dist` automatically.
- Vercel: `vercel.json` rewrites every path to `index.html`.
- GitHub Pages and similar: the build copies `index.html` to `dist/404.html`.

No environment variables or server API are required.

## Check the site

With a development server running:

```powershell
npm run check
npm run check:animations
npm run check:growth
npm run check:hero
```

Set `SITE_URL` to point at a different port, for example `SITE_URL=http://127.0.0.1:5181 npm run check`.

The animation checks cover feature autoplay, pause/resume, manual selection, collaboration step navigation, keyboard focus, phone/badge spacing, mobile layouts and reduced motion. Feature scenes animate once per selection; the collaboration section advances with scrolling on desktop and becomes three separate cards on mobile.

The browser check covers the home interactions (nav collapse, accordion, Connects pack prices, FAQ), client-side navigation from the nav, every page (one `h1`, valid internal links, no horizontal overflow at 320–1440px), the blog post and job post detail pages, the blog filter, the contact form, the mobile menu, image loading and browser errors. Screenshots are saved to `artifacts/`. The check uses Chrome when installed at its standard Windows location; otherwise run `npx playwright install chromium`.

## Pages

| Route                                                | Contents                                                                                                                                                                                                                                          |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                                                  | Hero with the app splash animation, creator-niche ticker, benefits, scroll statement, pinned results marquee, key features, pinned collaboration carousel, growth cards, integrations arc, testimonial pile, pricing, blog, FAQ, download, footer |
| `/about`                                             | Values, results marquee, story & mission, team carousel, testimonials, download                                                                                                                                                                   |
| `/features`                                          | Benefits, key features, collaboration carousel, growth cards, how it works, integrations, download                                                                                                                                                |
| `/pricing`                                           | Connects top-up packs (10, 30, 100), pack comparison table, FAQ, download                                                                                                                                                                         |
| `/blog`, `/blog/:slug`                               | Subscribe hero, featured post, filterable grid; article with table of contents and related posts                                                                                                                                                  |
| `/careers`, `/careers/:slug`                         | Why join, ideal teammates, open roles; job detail with facts panel                                                                                                                                                                                |
| `/contact`                                           | Office details and contact form                                                                                                                                                                                                                   |
| `/changelog`, `/terms-of-service`, `/privacy-policy` | Long-form pages                                                                                                                                                                                                                                   |
| anything else                                        | 404 page                                                                                                                                                                                                                                          |

All page content lives in `src/data/` (posts, jobs, changelog, legal, team) and at the top of each section file.

## Motion

Animations use `framer-motion`. Every recipe (spring bounce and duration, tween easing, scroll ranges) is listed in `DESIGN.md` section 7 and implemented in `src/motion.jsx` and the section files. `prefers-reduced-motion: reduce` disables transforms, freezes scroll-linked effects at their end state and stops the tickers; the check script runs in that mode.

The growth cards rotate automatically every five seconds. Click a side card to bring it forward, or use arrows, dots, keyboard arrows/Home/End, or a mobile swipe. Hover, keyboard focus and the pause control hold playback; selecting a card gives it a fresh interval. Autoplay stops offscreen and with reduced motion. Run `npm run check:growth` to verify this carousel.

## App mockups

Every phone in the hero, collaboration, growth, integrations, story and download sections now uses the supplied `Iphone16Pro` SVG frame. `src/sections/Phone.jsx` connects it to nine vector app illustrations in `src/components/tazmify/phone-screens.tsx`. These are marketing examples adapted from the Tazmify app, with illustrative names and figures; they are not live app data or screenshots. Text and icons remain sharp when resized, with no raster bezel, baked shadow or blurred overlay. Existing section copy and motion remain in place.

The home hero uses `src/components/tazmify/splash-phone.tsx`, ported from the app's `src/screens/auth/SplashScreen.tsx` and `src/components/ui/Logo.tsx`. It preserves the violet screen, opposing liquid-fill logo, fonts and timed wordmark/tagline reveals. The animation plays once and holds; reduced motion shows the finished splash. The smaller phone is 300px wide on desktop, 280px on tablet and up to 220px on mobile. The four original cards fan out behind it with staggered springs and scroll parallax. The phone remains transparent outside its frame, without the old glass panel or rectangular shadow. Run `npm run check:hero` to verify animation, layering, transparency and responsive spacing.

Open http://localhost:5180/scripts/phone-preview.html to review all nine screens and the image-based demos. This development fixture is not included in the production build. The original Figma exports remain in `public/images/mockups/` as archived source assets.

The earnings screen uses the saved `earnings.webp` Figma export: the purple header, balance card with mascot, pending balance and payout history. Its interior is cropped in SVG so the original bezel, status bar and shadow do not appear inside the shared iPhone frame. The growth-card badge matches the design's ₹84,500 available balance. This uses the local export; comparison with the requested live Figma node `450:195` remains pending access.

## TypeScript, Tailwind and shadcn/ui

The existing Vite app now supports TypeScript alongside its JSX files. `npm run typecheck` checks the TypeScript components; the build runs this check automatically. Tailwind v4 uses the Vite plugin. Its theme and utilities are loaded in `src/styles/tailwind.css`; the existing site reset is retained to keep the established layout intact.

Reusable UI lives in **`src/components/ui`**, imported as `@/components/ui`. The `@` alias maps to `src` in both Vite and TypeScript. This is the project's `/components/ui` folder: keeping reusable UI here gives shadcn's CLI a predictable install path and avoids mixing it with page sections in `src/sections`. Global styles enter through `src/styles.css`; shadcn theme tokens live in `src/styles/tailwind.css`. `components.json` records these paths, and `src/lib/utils.ts` provides `cn`.

Setup is already installed. For a fresh checkout, run `npm install`; no new project is needed. On a separate, unconfigured Vite project, the equivalent setup is:

```sh
npm install clsx tailwind-merge class-variance-authority
npm install -D typescript @types/react @types/react-dom @types/node tailwindcss @tailwindcss/vite @vitejs/plugin-react tw-animate-css
# Configure the Vite plugin, TypeScript @ alias and Tailwind stylesheet first.
npx shadcn@latest init
# In this configured project, add future components directly:
npx shadcn@latest add button
```

Follow the [official shadcn Vite setup](https://ui.shadcn.com/docs/installation/vite) and [Tailwind Vite guide](https://tailwindcss.com/docs/installation/using-vite) for a separate project. This integration configured the existing site manually, so running `init` here again is unnecessary.

`Iphone16Pro` accepts the supplied `width`, `height`, `src` and SVG props. Optional `title` provides an accessible image name; optional SVG `children` render app artwork on a 390 × 849 screen. It uses only React's `useId` for unique clip paths, with no state store or context provider. A fixed 200 × 400 viewBox keeps the device proportional at any rendered size. `demo.tsx` retains the supplied image demo and adds an [Unsplash mountain wallpaper](https://images.unsplash.com/photo-1519681393784-d120267933ba) example using the downloaded `public/images/phone-demo.jpg`.

Run `npm run check:phones` to check the nine screens, image demos, clipping IDs, custom sizes, Tailwind utilities and responsive integration.

## Content and placeholders

- Branding: `public/logo-mark.svg` and the Urbanist wordmark come from the Tazmify app. The nav shows the white mark on the hero and the coloured mark once it collapses. Display type is Roboto Condensed 900, body type is Geist, both via `@fontsource-variable`.
- Photography and mascots come from the app (`public/images/`).
- The benefit-card visuals, three number-card gradient backgrounds, aurora glow and four restored hero cards (`public/images/ref/`) are reference-template assets. The old hero phone, glow and texture remain archived there.
- Placeholders to replace before launch: the numbers in the results cards, testimonial names and quotes, blog posts, job listings, team names and photos, office address, the legal copy (have counsel review), and all plan prices. Store buttons point at the download section until real store URLs exist. The contact and subscribe forms only show a confirmation state; wire them to a backend or form service.
- The download section's phone artwork (`public/images/ref/cta-phone.webp`) is also the reference template's; the coin over it is rendered in CSS with the Tazmify mark.

### Blog cover photos

All blog covers in `public/images/blog/` are CC0 / public-domain photos (no attribution required; credits kept here for the record), cropped to 3:2 and re-encoded as WebP:

| File                           | Photo                                       | Source                                                                                       |
| ------------------------------ | ------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `briefing-creators.webp`       | “Writing Papers” by Helloquence             | StockSnap (`Y01VDYAX63`)                                                                     |
| `future-of-creator-deals.webp` | “Man holding a smartphone” by Markus Spiske | [rawpixel](https://www.rawpixel.com/image/432991/free-photo-image-phone-internet-smartphone) |
| `creator-discovery.webp`       | “Business Working” by Negative Space        | StockSnap (`S3JE5YAMND`)                                                                     |
| `pricing-a-campaign.webp`      | “Bank Finance” by Artsy Crafty              | StockSnap (`OLL4BSGLBE`)                                                                     |
| `creator-habits.webp`          | “Man Camera” by Mike Moloney                | StockSnap (`WCBSZOLB8B`)                                                                     |
| `good-pitch.webp`              | “Business Team” by Direct Media             | StockSnap (`W6PNBNYHM6`)                                                                     |
| `campaign-calendar.webp`       | “Open calendar, pen”                        | [rawpixel](https://www.rawpixel.com/image/5912649/image-paper-book-public-domain)            |
| `connects-explained.webp`      | “Credit card payment, shopping”             | [rawpixel](https://www.rawpixel.com/image/8809237/credit-card-payment-shopping)              |
| `long-term-partnerships.webp`  | “Work Business” by Kristin Hardwick         | StockSnap (`J5LXKNDREC`)                                                                     |

StockSnap photos are at `https://stocksnap.io/photo/<slug>-<id>`. The older `public/images/*.jpg` photos are still used by the careers page and the feature scenes.

## Edit

- `src/App.jsx` and `src/Layout.jsx`: routes, page titles, scroll handling.
- `src/pages/*.jsx`: page composition.
- `src/sections/*.jsx`: one file per section; content at the top of each file.
- `src/data/*.js`: posts, jobs, changelog, legal text, team.
- `src/motion.jsx`: shared animation primitives (`Reveal`, `Pop`, `BlurText`, `SectionTag`).
- `src/styles/*.css`: one stylesheet per section or page plus `base.css` for tokens, buttons, tags and sheets. `src/styles.css` imports them in order.
- `scripts/check-site.mjs`: browser checks. `scripts/process-mockups.mjs`: Figma export processing.

Run `npm run format` to format the source.

### Testimonial avatars

The four testimonial portraits in `public/images/avatars/` are free-licence photos from [Unsplash](https://unsplash.com/license), face-cropped to 160px WebP. The names and quotes are placeholders; replace them with real customers and their own photos (with consent) before launch.

| File                 | Unsplash photo                                                                          |
| -------------------- | --------------------------------------------------------------------------------------- |
| `ananya-sharma.webp` | https://unsplash.com/photos/a-young-woman-with-dark-wavy-hair-and-earrings-kec3kPQZ42A  |
| `rohan-mehta.webp`   | https://unsplash.com/photos/a-smiling-young-man-in-a-dark-blue-sweater-rifCUO-4X8k      |
| `kavya-reddy.webp`   | https://unsplash.com/photos/a-woman-with-an-umbrella-smiling-for-the-camera-Sa0YZta_Fb8 |
| `priya-nair.webp`    | https://unsplash.com/photos/woman-with-glasses-smiles-looking-upwards-n45Wbm8gpm0       |

### Figma assets added

| Asset                                                           | Figma node                 | Used in                                                             |
| --------------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------- |
| `public/app-icon.svg`, `favicon-32.png`, `apple-touch-icon.png` | 340:5 App Store icon, clipped to a 22% rounded square | Nav logo (all states) and favicon                                   |
| `public/images/icons/connects-240.webp`, `connects-64.webp`     | 297:2 Connects coin        | Pricing cards, pack comparison, Benefits wallet badge, About ticker |
| `public/images/mockups/role-select-gold.webp`                   | 484:85 role-select phone   | About story visual (violet canvas removed)                          |
| `public/images/mockups/mascot-brand-tablet.webp`                | 486:76 "I am a Brand" card | Role card rebuilt in HTML/CSS over the About phone                  |

### Careers team-life photos

The 14 tiles in the careers strip (`public/images/careers/`) are free-licence photos from [Unsplash](https://unsplash.com/license), cropped to 260px squares.

| File | Photo | Unsplash page |
| --- | --- | --- |
| `team-01.webp` | Two men dancing at a party with purple lights | https://unsplash.com/photos/two-men-dancing-at-a-party-with-purple-lights-8w-WuvMiz7s |
| `team-02.webp` | a woman sitting in front of a laptop computer | https://unsplash.com/photos/a-woman-sitting-in-front-of-a-laptop-computer-aqwHzP5qaJU |
| `team-03.webp` | People in party hats dancing in an office at-work celebration | https://unsplash.com/photos/people-in-party-hats-dancing-in-an-office-at-work-celebration-Mgja3hOHoL8 |
| `team-04.webp` | group of people posing for photo | https://unsplash.com/photos/group-of-people-posing-for-photo-TGoLeUkmj-A |
| `team-05.webp` | Diverse team celebrating by throwing papers in office | https://unsplash.com/photos/diverse-team-celebrating-by-throwing-papers-in-office-c4fyUMzHdVk |
| `team-06.webp` | a man and woman with headsets on looking at a laptop | https://unsplash.com/photos/a-man-and-woman-with-headsets-on-looking-at-a-laptop-4GyrlS5-PGM |
| `team-07.webp` | A group of women standing next to each other at a table | https://unsplash.com/photos/a-group-of-women-standing-next-to-each-other-at-a-table-_yvXowJsSNc |
| `team-08.webp` | man in white polo shirt standing in front of black video camera | https://unsplash.com/photos/man-in-white-polo-shirt-standing-in-front-of-black-video-camera-FJK2EY52jTw |
| `team-09.webp` | Diverse team celebrates success with a huddle | https://unsplash.com/photos/diverse-team-celebrates-success-with-a-huddle-eXe186bFR5Q |
| `team-10.webp` | Modern lounge area with comfortable seating and mural | https://unsplash.com/photos/modern-lounge-area-with-comfortable-seating-and-mural-zbkBJNSQw0U |
| `team-11.webp` | man in blue shirt beside woman in black and white floral shirt | https://unsplash.com/photos/man-in-blue-shirt-beside-woman-in-black-and-white-floral-shirt-rSC5dnSyggQ |
| `team-12.webp` | A diverse group of colleagues celebrating success in an office | https://unsplash.com/photos/a-diverse-group-of-colleagues-celebrating-success-in-an-office-Kxo17w7BurY |
| `team-13.webp` | a group of people covered in colored powder | https://unsplash.com/photos/a-group-of-people-covered-in-colored-powder-WTE7HKuXZlM |
| `team-14.webp` | a couple of men standing next to each other | https://unsplash.com/photos/a-couple-of-men-standing-next-to-each-other-z-AiHlNo_ss |

The second benefits card art (`public/images/ref/smart-action-duo.png`) adds the Figma photo from node 197:3 above the reference artwork, and replaces the bottom portrait with an Unsplash photo of a creator filming with a ring light (https://unsplash.com/photos/a-person-sitting-on-a-bed-7waCnaAjUjY).
