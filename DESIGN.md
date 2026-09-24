# Tazmify — Design System

Extracted 2026-09-14 from the reference https://onefin.framer.website/ (Framer template "OneFin") and adapted to Tazmify, the creator × brand collaboration platform. Every value below was measured from the reference's computed styles, not eyeballed.

## 1. Visual Theme & Atmosphere

A dark-grounded product site where light "sheets" with 80–100px corners float over near-black. Motion is the point: elements spring in with visible bounce, section headings blur in letter by letter, and several sections pin to the viewport and play out as you scroll (word-by-word colour reveal, stacked number cards, fanning phone cards, a testimonial pile that spreads apart). Type is brutal and tall: a 900-weight condensed display face set in uppercase at 72–224px next to a quiet geometric sans. Density is low; each section carries one headline, one paragraph and one visual idea. The aesthetic risk it takes is scroll-jacking: four sections hold the viewport for 2–3 screen heights. It works only because every pinned section keeps changing while pinned.

## 2. Color Palette & Roles

| Token          | Hex         | Role                                                                                                            |
| -------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| `--ink-950`    | `#121214`   | Page ground for dark sections; hero heading line 2; button text on light                                        |
| `--ink-900`    | `#1b1b1f`   | Dark card surface; FAQ container; giant marquee text                                                            |
| `--ink-800`    | `#212124`   | Body text on light; active FAQ/accordion row on dark                                                            |
| `--ink-700`    | `#292929`   | Secondary text on light cards                                                                                   |
| `--ink-500`    | `#525252`   | Muted text on light; section-tag pill background                                                                |
| `--ink-400`    | `#8f8f8f`   | Muted text on dark (captions, review counts)                                                                    |
| `--ink-200`    | `#d9d9d9`   | Unrevealed statement words; section-tag text on dark pill                                                       |
| `--ink-100`    | `#efefef`   | Section-tag number chip                                                                                         |
| `--ink-50`     | `#f5f5f5`   | Light card surface; pricing container                                                                           |
| `--white`      | `#ffffff`   | Light sheet ground; white cards; text on dark                                                                   |
| `--violet-900` | `#28119c`   | Primary button gradient end; deep shadow tint                                                                   |
| `--violet-800` | `#381ac9`   | Hero heading line 1; icon frames on dark; link colour; primary button inner gradient end                        |
| `--violet-500` | `#6262fe`   | Primary accent: floating icon tiles, featured blog card, active FAQ button, primary button inner gradient start |
| `--violet-300` | `#9696ff`   | Eyebrow labels on dark; second lavender sheet                                                                   |
| `--violet-200` | `#bebeff`   | Lavender card surface; first lavender sheet; testimonial card 5                                                 |
| `--green`      | `#009c68`   | "Save 10%" only                                                                                                 |
| `--white-80`   | `#ffffffcc` | Body text on dark                                                                                               |
| `--white-60`   | `#ffffff99` | Secondary text on dark                                                                                          |
| `--white-20`   | `#ffffff33` | Active nav pill; arc icon tiles on dark                                                                         |
| `--white-5`    | `#ffffff0d` | Inactive icon frames on dark                                                                                    |

Accent rule: `#6262fe` is for interactive or featured things (buttons, active states, the one featured card, floating icon tiles). It never appears as body text, as a section background, or on more than one card in a grid.

Home hero gradient (top to bottom): `#9696ff 0%, #f5f5fa 38%, #fff 68%, #bebeff 86%, #6262fe 100%`. The near-white band keeps the heading readable. Four original cards fan out behind the phone; no extra glass, texture or glow images surround it. Inner-page heroes retain the original blue gradient.

## 3. Typography Rules

- Display: `'Roboto Condensed Variable'`, weight 900, uppercase, `text-wrap: balance`. Fallback `Impact, 'Arial Narrow', sans-serif`.
- Body: `'Geist Variable'`, weights 400 / 500 / 600 / 700. Fallback `Inter, system-ui, sans-serif`.
- Utility (nav counters, small mono labels): `'Fragment Mono'` 400.

| Style               | Face    | Size / line                       | Weight               | Letter-spacing      |
| ------------------- | ------- | --------------------------------- | -------------------- | ------------------- |
| Hero H1             | Display | `clamp(64px, 8.9vw, 128px)` / 0.9 | 900                  | -0.05em             |
| Marquee giant       | Display | 224px / 240px                     | 900                  | -0.05em             |
| Section H2          | Display | `clamp(44px, 5vw, 72px)` / 1.0    | 900                  | -0.05em             |
| Footer column title | Display | 36px / 36px                       | 900                  | 0                   |
| Section tag         | Display | 14px / 14px                       | 900                  | 0                   |
| Eyebrow (dark)      | Display | 14px / 16.8px                     | 900                  | 0, colour `#9696ff` |
| Statement           | Body    | 56px / 67.2px                     | 400                  | -0.03em             |
| Stat number         | Body    | 56px / 67.2px                     | 400                  | -0.03em             |
| Feature H3          | Body    | 36px / 43.2px                     | 600                  | -0.02em             |
| Blog featured H3    | Body    | 32px / 38.4px                     | 500                  | -0.02em             |
| Statement pill      | Body    | 24px / 36px                       | 500                  | -0.01em             |
| FAQ question        | Body    | 24px / 33.6px                     | 600                  | -0.01em             |
| Card title          | Body    | 20px / 30px                       | 500                  | -0.02em             |
| Lead paragraph      | Body    | 18px / 27px                       | 400                  | -0.01em             |
| Accordion title     | Body    | 18px / 27px                       | 600                  | -0.02em             |
| Body / button       | Body    | 16px / 24px                       | 400 (600 in buttons) | -0.02em             |
| Small               | Body    | 14px / 21px                       | 400                  | -0.01em             |
| Caption             | Body    | 12px / 18px                       | 400                  | -0.05em             |

Measure: paragraphs max `560px` (centered lead) or `440px` (in cards). Headings `text-wrap: balance`.

## 4. Component Stylings

**Primary button** (violet, 3D). Outer: `padding 2px; border-radius 22px; background linear-gradient(#6d55e2, #28119c); box-shadow 0 1px 2px #28109f5e, 0 3px 3px #28109f52, 0 8px 5px #28109f30, 0 13px 5px #28109f0f`. Inner: `padding 12px 24px; border-radius 20px; background linear-gradient(#6262fe, #381ac9); box-shadow inset 0 1px 1px #fff, inset 0 -2px 2px #28109b, inset 0 0 8px #cbc4ea80`. Text 16/600 white. Height 60px. Hover: inner brightens (`filter: brightness(1.06)`), outer `translateY(-1px)`; press `translateY(1px)`; 180ms ease.

**Secondary button** (black, 3D). Outer gradient `#282828 → #060606`, shadows `0 1px 2px #0000005e, 0 3px 3px #00000052, 0 7px 4px #00000030, 0 12px 5px #0000000f`. Inner `#282828`, `inset 0 1px 1px #fffc, inset 0 -2px 2px #000`. Height 60px (56px in pricing).

**Tertiary button** (white pill). Outer `padding 2px; radius 22px; gradient #e0e0e033 → #e0e0e066; shadow 0 10px 4px #c2c2c208, 0 6px 3px #c2c2c21c, 0 2px 2px #c2c2c230, 0 1px 1px #c2c2c238`. Inner white, `inset 0 -2px 1px #1a143340`, `padding 12px 20px 14px; radius 20px`. Text 16/600 `#212124`. Height 52px.

**Store button** (dark). Outer `#0000001a; padding 4px; radius 24px`. Inner `#0c0c0c; radius 20px; padding 12px 24px; inset 0 0 1px #ffffff80, inset 0 -4px 1px #00000080`. Height 80px.

**Nav**. Fixed, 116px tall zone, content at `top: 32px`. Menu pill: `height 48px; padding 4px; radius 20px; background #00000040 (light hero: #ffffff26); backdrop-filter blur(80px)`. Link: `padding 8px 20px; radius 16px; 16/400 white`; active link `#ffffff33` with a 4px white dot. Logo tile (scrolled state): `48px; radius 20px; #000`. Scrolled state: whole bar centers, width 723px, logo becomes tile, spring `stiffness 260 damping 30`.

**Section tag**. Two rotated chips: number chip `#efefef` text `#525252` 14/900 display, `padding 4px 8px; radius 8px; rotate -17°`; name chip `#525252` text `#d9d9d9`, `padding 8px 12px; radius 8px; rotate 9°`. Chips overlap by 4px.

**Light card**. `#f5f5f5; radius 48px; padding 32px`. Title 20/500 centered.
**Dark card**. `#1b1b1f; radius 48px; padding 48px`.
**Lavender card**. `#bebeff; radius 48px`.
**Number card**. `radius 48px; shadow 0 4px 8px #0807310f, 0 14px 14px #0807310d`; gradient fills (lavender→white, sky→white, pink→lavender); rotations -3°, 7°, -8°.
**Testimonial card**. `radius 40px; padding 32px; shadow 0 15px 25px #0000000d`. Fills: dark `linear-gradient(#1b1b1f, #000)`, blue `#0b3ad9`, magenta `#c236d9`, sky `linear-gradient(160deg, #bfd2ff, #fff)`, lavender `linear-gradient(#bebeff, #fff)`.
**Statement pill**. `height 84px; padding 0 32px; radius 28px; #fff; backdrop blur(20px); shadow inset 0 2px 2px #fff, inset 0 0 40px #0000001f`. Dark variant `#121214`, `inset 0 0 40px #ffffff80`.
**Floating icon tile**. `#6262fe; radius 24px; shadow inset 0 0 10.67px #4747471a`; sizes 64–121px; white icon.
**Icon frame** (dark sections). `40px or 56px; radius 14px/20px; #ffffff0d; inset 0 0 6.67px #4747471a`; active `#381ac9`.
**Accordion row**. `padding 20px 24px; radius 24px`; active `#212124`. Title 18/600, description 14/400 `#ffffff99`.
**FAQ item**. Number badge `32px circle #ffffff0d` text 14/500; toggle `48px; radius 16px; #ffffff0d`, active `#381ac9` with a minus.
**Phone frame**. Use the shared `Iphone16Pro` SVG from `src/components/ui`; see section 14. Do not add a second CSS or raster bezel.
**Media**. Photos live only inside rounded cards (`radius 48px`), never full-bleed.

## 5. Layout Principles

- Page gutter `48px` (desktop), `32px` (tablet 810–1199), `16px` (mobile < 810). Content max `1344px`.
- Breakpoints exactly as reference: desktop `≥1200px`, tablet `810–1199.98px`, phone `≤809.98px`.
- Section rhythm: header block (tag → 24px → H2 → 24px → lead) then `72px` to the visual. Sections are separated by `120px` on desktop, `80px` on mobile.
- Sheets: light sections sit on the dark ground with `border-radius: 80px` where they meet dark (`100px` at the hero → benefits seam). Consecutive dark sections are separated by an inner container with `radius 80px` on `#1b1b1f`, not by gaps.
- Pinned sections: statement `200vh`, performance `334vh`, deals carousel `260vh`, testimonials `100vh` pinned inside a `200vh` track.
- Grids: benefits `4 × 1fr gap 24px`; key features `1fr 1fr gap 24px`; blog `4 × 1fr gap 12px` (`2 × 1fr` tablet, `1fr` phone); pricing `3 × 1fr gap 0` inside one container; footer `2 × 1fr gap 16px`.
- One visual per section. No section has more than one paragraph of body text outside cards.

## 6. Depth & Elevation

One device per surface. Cards use fill contrast and one soft shadow (`0 4px 8px #0807310f, 0 14px 14px #0807310d` on light; `0 1px 50px #00000040` for phone frames on dark). Buttons use stacked micro-shadows plus inset highlights to read as physical. Glass = `backdrop-filter: blur(20–80px)` on white or black at 15–40% alpha, always with an inset top highlight. Glows are radial gradients with `filter: blur(60–120px)` and `#6262fe`/`#381ac9`, placed behind, never on, content. No borders except the 3px phone bezel and 1px `#ffffff1a` rules inside dark lists.

## 7. Motion

Springs are Framer springs: `{ type: 'spring', bounce, duration }` (implemented via framer-motion). Tween ease is `[0.44, 0, 0.56, 1]`.

| Element                        | From                                                                                                   | Spring / tween                       | Delay             |
| ------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------ | ----------------- |
| Nav bar (load)                 | `y: -150, opacity 0`                                                                                   | tween 1s                             | 0.2s              |
| H1 line 1 / line 2 (load)      | `scale .5, y 50, opacity 0`                                                                            | spring bounce .6, 1.2s               | 0.4s / 0.6s       |
| Hero phone (load)              | `y: 108`                                                                                               | spring bounce .2, 2.5s               | 0.2s              |
| Hero splash logo               | opposing liquid fill, level 0 → 1                                                                      | app easing [.45, 0, .25, 1], 1.4s    | 0                 |
| Hero splash wordmark / tagline | opacity 0, y 10 / 8                                                                                    | app easing [.22, 1, .36, 1], .45s    | 1.5s / 1.9s       |
| Hero subhead + buttons         | `y: 150, opacity 0`                                                                                    | spring bounce .2, 0.4s               | 0                 |
| Section tag (in view)          | `scale 0, rotate ±30°`                                                                                 | spring bounce .5, 0.8s               | 0                 |
| H2 letters (in view)           | `opacity 0, filter blur(12px), y 8`                                                                    | tween .5s, stagger .025s             | 0.1s              |
| Lead paragraph (in view)       | `y 40, opacity 0`                                                                                      | tween .6s                            | 0.25s             |
| Cards (in view)                | `scale .5, opacity 0`                                                                                  | spring bounce .3, 1s, stagger .08s   | 0.1s              |
| Statement words                | colour `#d9d9d9 → #121214`                                                                             | linked to scroll progress 0.1 → 0.9  | —                 |
| Statement icon tiles           | `y ±120, rotate ±20°`                                                                                  | linked to scroll (parallax)          | —                 |
| Marquee text                   | `x: 0 → -40%`                                                                                          | linked to scroll progress            | —                 |
| Number cards                   | stack: card n sticks at `top 50/100/50px`, rotates -3/7/-8°, previous card scales `.96` and fades `.6` | linked to scroll                     | —                 |
| Growth phone cards             | center scale 1; side cards scale .84, rotate ±10° (mobile ±7°); select or autoplay changes center      | spring bounce .2, 1.2s               | 0                 |
| Arc icon tiles                 | from center `scale .6, opacity 0` to arc positions                                                     | spring bounce .3, 1.2s, stagger .05s | 0                 |
| Testimonial cards              | from centre pile (`rotate` -16/9/-5/-7/6°, `scale .9`) to spread positions                             | linked to scroll progress 0 → 0.6    | —                 |
| Logo ticker                    | `translateX(0 → -50%)`                                                                                 | CSS linear 44s infinite              | —                 |
| Nav collapse                   | expanded ↔ compact                                                                                     | spring stiffness 260 damping 30      | on `scrollY > 80` |
| Hover (buttons, nav links)     | `background, transform, opacity, box-shadow`                                                           | 180ms ease                           | —                 |
| Accordion / FAQ                | height auto                                                                                            | spring stiffness 300 damping 34      | —                 |

Respect `prefers-reduced-motion: reduce`: all springs become 0.01s, scroll-linked transforms freeze at their end state, the ticker stops.

## 8. Do's and Don'ts

- Do set the page ground to `#121214` and let light sections be rounded sheets on top of it.
- Do set display type in uppercase at 900 weight with -0.05em tracking. Never below 44px.
- Do use exactly one pinned interaction per section and keep something changing while pinned.
- Do keep body copy at 16–18px `#212124` on light and `#ffffffcc` on dark.
- Don't put a gradient behind body text. The hero gradient sits behind the phone; the heading sits on the white band of it.
- Don't add borders to cards. Use fill contrast.
- Don't use emoji as bullets, don't centre everything (card interiors and accordions are left-aligned), don't apply `rounded-lg` to everything — radii are 8 (chips), 14–24 (icons/rows), 40–48 (cards), 80–100 (sheets and phones).
- Don't make three equal icon cards. The benefits grid is four cards with four different visuals; the growth cards are fanned, not a row.
- Don't use lorem or unlabeled stock photos. Placeholder partner logos and blog posts are labelled as such in the README.
- Don't use `#6262fe` for text or as a section background.

## 9. Responsive Behavior

- `≤ 1199px`: gutter 32px; hero H1 `clamp` scales; benefits grid `2 × 1fr`; key features stack; pricing container becomes three stacked cards; footer link cards stack.
- `≤ 809px`: gutter 16px; nav becomes a full-width glass bar (`#ffffff26`, radius 24px, 64px tall) with logo left and a 44px hamburger tile right; menu opens as a dark glass sheet. Marquee giant text drops to 96px. Pinned sections keep their behaviour but tracks shorten to 160vh / 240vh / 200vh / 160vh. Number cards stack with 24px offsets. Growth cards retain a compact carousel with side peeks and swipe controls (section 15). Testimonial cards render as a horizontally scrolling row (`scroll-snap-type: x mandatory`) instead of a pile. Arc icons become a two-row grid.
- Touch targets ≥ 44px. FAQ toggles are 48px. Nav links are 40px tall with 20px horizontal padding.
- Safe areas: `padding-bottom: env(safe-area-inset-bottom)` on the mobile menu sheet.
- No horizontal overflow at 320, 360, 390, 768, 1024, 1440 (checked by `npm run check`).

## 10. Agent Prompt Guide

1. Read this file before touching anything in `src/`. Sections 2–3 are the token source of truth; `src/styles/base.css` mirrors them as CSS variables. If they disagree, fix the CSS.
2. Every colour, radius, shadow and type size you write must already exist above. If you need a new one, add it here first with a role.
3. Every entrance animation uses a recipe from section 7. Do not invent new easings or durations; reuse `spring(bounce, duration)` and the `[0.44, 0, 0.56, 1]` tween.
4. New sections follow the header block pattern: tag → H2 (blur-in) → lead → 72px → one visual.
5. Light content is a rounded sheet on the dark ground. Never place a light section directly against a dark one without an 80px radius seam.
6. When unsure, remove rather than add. One visual idea per section.
7. Run `npm run check` after changes; it verifies links, toggles, images, overflow and takes screenshots into `artifacts/`.

## 11. Pages (added 2026-09-14)

Every page except the home page opens with the **page hero**: the original blue gradient without a white band, `min-height 640px`, a centred white display title at `clamp(52px, 8.9vw, 128px)` that springs in line by line, an optional 20px subtitle, and a white sheet that overlaps it by 110px with `border-radius: 100px 100px 80px 80px`. Article and job detail pages use the short hero (`min-height 360px`, no title) and put the title inside the sheet.

Reusable page sections and their reference counterparts: values cards (`#f5f5f5`, radius 48, 160px violet icon tile), story & mission (white text card with violet emphasis and a pill ticker beside a lavender mockup card), team carousel (`#f5f5f5` cards, lavender photo panel radius 32, 48px arrow buttons), how it works (four `#f5f5f5` cards radius 48 with a numbered chip and a grey icon), plan compare (`#1b1b1f` radius 80 container with `#24232c` group headers and `#1f1e25` row groups), blog featured card (`#f5f5f5` radius 56 with a violet media panel), blog filter (violet-800 active pill), careers dark box (radius 80, glass perk pills, avatar ticker), job rows (white radius 32 inside `#f5f5f5` radius 48), contact form (`#f5f5f5` radius 48, white inputs radius 20, violet gradient submit) and the prose column (720px, display headings at `clamp(32px, 3.4vw, 48px)`, grey tip boxes).

Phone screens use the shared SVG component described in section 14. The Figma device exports remain archived in `public/images/mockups/`.

## 12. Campaign feature animation

The key-feature lavender panel uses four original HTML/SVG scenes: a campaign folder with fanning briefs, a creator shortlist, a collaboration timeline, and a pitch notification. These are illustrative examples, using Tazmify's existing photos and logo. No financial charts or balances appear in this artwork.

Art is composed on a 520 × 540 logical canvas, scaled uniformly to the panel with 28px side clearance and 152px reserved for controls/caption. Scene controls have 44px touch targets. Artwork uses existing ink, white, lavender, violet and green tokens; photographic overlays use ink at 0–80% opacity. Scene headings use body 28px/34px, weight 600; micro labels use mono 10px/14px. Layer borders are fine white highlights, used only for the physical folder and paper illustration. The folder has a 32px radius and a 24px/48px soft ink shadow; status pills use a full radius.

Each scene runs once and then holds. Briefs fan in over 1.4s, notifications enter over .6s with .25s stagger, connectors draw over 1.2s, and the bell settles after a 1.2s ring. Transitions reuse the existing tween easing and spring recipes. A 6.8s autoplay tour advances the selected feature and its progress indicator only while the artwork is in view and the browser tab is visible. Pause freezes the current scene and timer; selecting a feature ends autoplay and plays that scene once. A start control resumes the tour. All artwork animations pause offscreen. Reduced motion shows completed static compositions and disables autoplay while retaining manual selection.

## 13. Direct-collaboration scene cleanup

The chat, brief and trust copy remains unchanged. Each scene contains one unobstructed SVG phone, two supporting accents at most, and one low-contrast background orbit. Remove the old full-size translucent overlays and the step ladder over the artwork. Compact step buttons sit below the copy with 44px hit areas.

Desktop uses a single pinned stage over 260vh: the selected scene replaces the previous one with the existing .4s tween. Devices settle over 1.4s with a gentle 5px overshoot, using the shared easing; supporting accents enter with .6s tweens, .25s apart. Signals animate once on scene entry, then settle. Motion pauses outside the viewport. On mobile, the three steps flow vertically and reveal individually, giving each screen and paragraph room. Reduced motion shows all three finished static scenes with no pinning or looping.

Visuals keep existing lavender, ink and white tokens and 24px icon radii. Outer/inner frame corners are 64px/54px on desktop, 56px/46px on tablet and 44px/36px on mobile. The device stays above background accents, with text badges placed beside it on desktop or in a dedicated footer inside the art on smaller screens. No decorative layer crosses the screen.

## 14. Shared iPhone 16 Pro

At the user's request, all phones use the supplied iPhone 16 Pro SVG paths, with a fixed 200 × 400 viewBox, a 171.98 × 374.37 clipped screen at (14.08, 12.81), and an instance-specific clip ID. The same frame is used for images and original vector screen artwork. Screen artwork uses a 390 × 849 artboard. It is illustrative product UI, not live account data. Keep a single subtle external shadow, except the shadow-free hero described in section 16; do not render a raster device inside this frame.

The phone interior follows the app palette: ink #19152c, muted #817b94, violet #7053ff, dark violet #33216c, cloud #f8f7fc, tint #eeeaff, divider #e9e5f3, success #239869. Instagram/brand accents use #e93486/#f33894 and YouTube uses #ee404d. Phone type uses Geist with body 15–17px, labels 12–14px, headings 24–35px and metric figures 31–52px on the logical artboard. Screen panels have 14–28px radii. The supplied hardware uses #303333, black and #080d4c for the camera. Chat messages enter in .6s using the shared easing with .3s stagger, pause offscreen and remain static with reduced motion.

Tailwind theme/utility layers coexist with the original site CSS, without introducing a second reset. The existing reset is imported into the base layer and section styles into the components layer, so explicit Tailwind utilities can override component defaults. The shadcn component path is `src/components/ui`, aliased to `@/components/ui`; its theme entry is `src/styles/tailwind.css`. The original section-level styles and animation helpers remain the layout source of truth.

## 15. Growth card carousel

The three growth cards form an interactive, circular fan. Selecting a card brings it to the center with the shared 1.2s spring (bounce .2); the others settle at ±10° and .84 scale behind it. Cards share one size, up to 484 × 648px on desktop and 340 × 560px on mobile, so moving to the center changes depth without reflowing content. Corners are 64px outer/54px inner on desktop and 44px/36px on mobile. Colors, shadows and type use existing section tokens. Mobile retains the carousel with side peeks, swipe gestures and 44px controls.

Autoplay advances 1 → 2 → 3 every five seconds, only while the stage is visible and the page is foregrounded. Pause, hover, keyboard focus and touch interaction hold both the timer and progress indicator. Manual selection restarts the five-second interval and preserves the playback preference. Previous/next buttons, card buttons, dots, arrow keys, Home/End and touch swipes are supported. Reduced motion disables autoplay and changes positions immediately. Card text and phone artwork remain unchanged.

## 16. Home splash phone

The hero screen uses the app's splash animation from `D:/Tazmify/src/screens/auth/SplashScreen.tsx` and logo paths from `src/components/ui/Logo.tsx`. The screen is #6D57FC with a white left mark and #C9BFFF right mark. The 86.6 × 104px logo fills down on the left and up on the right over 1.4s, with opposing sine waves that flatten as filling completes. The wordmark follows at 1.5s and the tagline at 1.9s, both revealing over .45s. These native app timings and easings take precedence over generic site animation recipes. Play once on entry and hold the finished brand; reduced motion renders it immediately.

On the 390 × 849 screen, use Urbanist Bold 44px with -1.8px tracking for Tazmify and Inter Regular 14px at .72 opacity for the tagline. The shared SVG clips all content to the phone screen. Keep the outside canvas transparent without the old glass layer, texture images or drop-shadow rectangle. The device fades from 70% to 86% of its height where it meets the headline; the complete brand lockup stays above this fade. At the user's request, device width is reduced to 300px on desktop, 280px on tablet and at most 220px on mobile, with top clearance of 104px / 96px. Scroll drift is limited to 32px to preserve brand clearance.

The four original balance, expense, pay and revenue card assets return behind the splash phone. They fan out from its center with the existing 2.5s spring (bounce .2), staggered .1–.3s, and settle at -17°, 16°, 24° and -5°. Two depth groups drift by -32px / 48px across the first 900px of scroll. All card sizes and offsets scale with the phone; mobile shows side peeks. Keep the phone above every card and every card above the headline's top edge. Reduced motion shows their final positions immediately and freezes parallax. Tighten the bottom spacing and ticker gap along with the device size.

## 17. Earnings design

The earnings phone uses the saved Figma earnings export, `public/images/mockups/earnings.webp`, as screen artwork inside the shared iPhone 16 Pro. Its purple header, ₹84,500 available-balance card, mascot, ₹40,000 pending-clearance label and four history rows come from that export. The carousel badge reads Available / ₹84,500 to match the screen. Carousel layout, text, selection and autoplay remain unchanged.

The source is 840 × 1736 and includes a device frame. Display only its interior crop (x 30, y 80, width 780, height 1432) at (0, 40), 390 × 716 on the logical screen. Recreate the status/header backdrop with #262052 → #3a2e86 → #403586 and footer with #fafafe, sampled from the export, with the shared status icons and home indicator. This avoids nesting the old device, island, home indicator or shadow inside the new frame. It is a high-resolution image exception to the otherwise vector phone screens. Figma node `450:195` was requested; live comparison remains pending until Figma access is available.
