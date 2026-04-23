const roleCards = [
  {
    title: "For Influencers",
    eyebrow: "Creator flow",
    accent: "coral" as const,
    summary:
      "Browse live campaigns, review details, manage your profile, and keep every brand conversation inside one calm mobile workspace.",
    points: [
      "Role-based onboarding",
      "Editable creator profile",
      "Campaign discovery and detail views",
      "Chat list and one-to-one messaging",
    ],
  },
  {
    title: "For Brands",
    eyebrow: "Brand flow",
    accent: "sky" as const,
    summary:
      "Launch structured campaigns, organize requirements, and manage creator communication without spreadsheets or fragmented DM threads.",
    points: [
      "Brand signup and company profile",
      "Create campaign workflow",
      "My Campaigns dashboard",
      "Campaign detail and messaging",
    ],
  },
];

const productPillars = [
  {
    title: "Authentication and onboarding",
    description:
      "Splash, role selection, signup, login, forgot password, and a clean first-run experience for both user types.",
    metric: "6 shared screens",
  },
  {
    title: "Profile management",
    description:
      "Editable influencer bios, categories, and follower counts plus brand company information, logo, and industry fields.",
    metric: "2 profile systems",
  },
  {
    title: "Campaign management",
    description:
      "Brands publish campaigns with budgets, requirements, and timelines while influencers browse and inspect details with confidence.",
    metric: "2 role-specific flows",
  },
  {
    title: "Messaging",
    description:
      "Recent conversations, individual chat threads, and a notification-ready chat architecture that supports execution after discovery.",
    metric: "1 shared communication layer",
  },
];

const screenGroups = [
  {
    title: "Common",
    total: "6 screens",
    accent: "sand" as const,
    screens: [
      "Splash Screen",
      "Role Selection",
      "Login",
      "Signup",
      "Forgot Password",
      "Settings",
    ],
  },
  {
    title: "Influencer",
    total: "6 screens",
    accent: "coral" as const,
    screens: [
      "Dashboard / Home Feed",
      "Campaign Listing",
      "Campaign Detail",
      "Influencer Profile",
      "Chat List",
      "Chat Detail",
    ],
  },
  {
    title: "Brand",
    total: "7 screens",
    accent: "sky" as const,
    screens: [
      "Dashboard / Home Feed",
      "Create Campaign",
      "My Campaigns",
      "Campaign Detail",
      "Brand Profile",
      "Chat List",
      "Chat Detail",
    ],
  },
];

const storyCards = [
  {
    title: "What Bridge is",
    description:
      "Bridge is a mobile-first influencer marketplace where brands create campaigns and influencers discover, evaluate, and respond to them in one product.",
  },
  {
    title: "What problem it solves",
    description:
      "Today, brand-creator collaboration is often fragmented across spreadsheets, direct messages, email threads, and disconnected campaign briefs. Bridge brings those steps into one clear workflow.",
  },
  {
    title: "Why this matters",
    description:
      "Bridge already shows the full marketplace loop: onboarding, profiles, campaign creation, campaign discovery, and messaging between both sides.",
  },
];

const roadmap = [
  "Campaign editing and deletion for brands",
  "Influencer apply-to-campaign action and application tracking",
  "Advanced campaign search and filtering",
  "Payments, contracts, and structured approvals",
  "Ratings and review loops after campaign completion",
];

const investorSignals = [
  {
    title: "Two-sided from day one",
    points: [
      "Dedicated brand and influencer flows",
      "Role-based onboarding and profile systems",
      "Shared messaging layer between both sides",
    ],
  },
  {
    title: "Operationally clear",
    points: [
      "Campaign briefs with budget, duration, and requirements",
      "Browse-and-detail flow for influencer discovery",
      "Centralized chat for campaign communication",
    ],
  },
  {
    title: "Built to expand",
    points: [
      "Natural path to applications and approvals",
      "Future-ready search, filters, payments, and reviews",
      "Strong narrative for investor demos and partner outreach",
    ],
  },
];

const launchStats = [
  { value: "2", label: "user roles" },
  { value: "19", label: "core screens" },
  { value: "4", label: "core product pillars" },
  { value: "1", label: "shared marketplace workflow" },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,74,0.16),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(78,140,255,0.16),_transparent_28%),linear-gradient(180deg,_rgba(255,253,248,0.98),_rgba(248,244,236,0.9)_42%,_rgba(245,249,255,0.96)_100%)]" />
      <GridGlow />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-14 pt-5 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-20 -mx-2 mb-8 px-2 py-3 backdrop-blur-sm sm:mb-12">
          <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[var(--bridge-line)] bg-[rgba(255,253,248,0.86)] px-4 py-3 shadow-[0_18px_40px_rgba(21,32,51,0.08)] sm:px-5">
            <div className="flex items-center gap-3">
              <BridgeLogo className="h-8 w-auto" />
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[var(--bridge-sky)]">
                  Influencer marketplace
                </p>
                <p className="text-sm font-semibold text-[var(--bridge-ink)]">
                  Bridge
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-5 text-sm font-medium text-[var(--bridge-muted)] lg:flex">
              <a href="#roles" className="transition hover:text-[var(--bridge-ink)]">
                Roles
              </a>
              <a href="#story" className="transition hover:text-[var(--bridge-ink)]">
                Story
              </a>
              <a href="#architecture" className="transition hover:text-[var(--bridge-ink)]">
                Product
              </a>
              <a href="#screens" className="transition hover:text-[var(--bridge-ink)]">
                Screens
              </a>
              <a href="#roadmap" className="transition hover:text-[var(--bridge-ink)]">
                Roadmap
              </a>
            </nav>

            <a
              href="#story"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--bridge-ink)] px-4 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
            >
              See What Bridge Is
            </a>
          </div>
        </header>

        <div className="grid flex-1 items-center gap-10 pb-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--bridge-line-strong)] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--bridge-coral)] shadow-[0_8px_24px_rgba(255,107,74,0.12)]">
              Product website direction
            </div>

            <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-display)] text-[3rem] leading-[0.92] tracking-[-0.05em] text-[var(--bridge-ink)] sm:text-[4.6rem] lg:text-[5.5rem]">
              Bridge is the marketplace where brands and influencers run campaigns together.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--bridge-muted)] sm:text-lg">
              Bridge helps brands launch campaigns and helps influencers discover,
              evaluate, and discuss those opportunities inside one mobile-first
              product. This website is now structured to explain that clearly to
              investors, partners, and early users.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#story"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--bridge-coral)] px-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(255,107,74,0.26)] transition hover:translate-y-[-1px]"
              >
                What Is Bridge?
              </a>
              <a
                href="#architecture"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--bridge-line-strong)] bg-white/85 px-6 text-sm font-semibold text-[var(--bridge-ink)] transition hover:bg-white"
              >
                Explore Product Scope
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-4">
              {launchStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.6rem] border border-[var(--bridge-line)] bg-[rgba(255,255,255,0.82)] p-4 shadow-[0_18px_40px_rgba(21,32,51,0.06)]"
                >
                  <p className="text-2xl font-semibold tracking-[-0.05em] text-[var(--bridge-ink)]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[var(--bridge-muted)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <HeroProductPanel />
        </div>
      </section>

      <section
        id="story"
        className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <SectionIntro
          eyebrow="What is Bridge"
          title="Bridge turns campaign discovery, coordination, and communication into one product."
          description="For an investor or partner, the simplest way to understand Bridge is this: it is the operating layer between a brand brief and an influencer delivering the campaign."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {storyCards.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.9rem] border border-[var(--bridge-line)] bg-white/88 p-5 shadow-[0_16px_40px_rgba(21,32,51,0.06)]"
            >
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--bridge-ink)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--bridge-muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {investorSignals.map((item) => (
            <SignalPanel key={item.title} title={item.title} points={item.points} />
          ))}
        </div>
      </section>

      <section
        id="roles"
        className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <SectionIntro
          eyebrow="Role strategy"
          title="Designed around the two people who make the marketplace work."
          description="The website now explains Bridge through the lens of the two user roles, which makes the product easier to understand for investors, partners, and future users."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {roleCards.map((card) => (
            <RoleCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section
        id="architecture"
        className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="rounded-[2.5rem] border border-[var(--bridge-line)] bg-[linear-gradient(135deg,_rgba(255,255,255,0.84),_rgba(246,249,255,0.92))] p-6 shadow-[0_28px_70px_rgba(21,32,51,0.08)] sm:p-8">
          <SectionIntro
            eyebrow="Product architecture"
            title="Four pillars shape the first release."
            description="Instead of selling Bridge as a vague collaboration tool, the page spells out the exact capabilities that define the mobile product."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {productPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[1.8rem] border border-[var(--bridge-line)] bg-white/90 p-5 shadow-[0_16px_40px_rgba(21,32,51,0.05)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="max-w-sm text-xl font-semibold tracking-[-0.03em] text-[var(--bridge-ink)]">
                    {pillar.title}
                  </h3>
                  <span className="rounded-full bg-[var(--bridge-sand)] px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--bridge-ink)]">
                    {pillar.metric}
                  </span>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--bridge-muted)]">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="screens"
        className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <SectionIntro
          eyebrow="Screen system"
          title="Bridge is organized into 19 production-ready screens."
          description="This section turns your functional requirements into a clearer information architecture and makes the scope legible at a glance."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {screenGroups.map((group) => (
            <ScreenGroupCard key={group.title} {...group} />
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="rounded-[2.2rem] border border-[var(--bridge-line)] bg-[linear-gradient(180deg,_rgba(20,31,49,0.98),_rgba(24,40,64,0.96))] p-6 text-white shadow-[0_24px_60px_rgba(17,26,40,0.22)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[rgba(255,191,71,0.76)]">
              Product story
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl tracking-[-0.04em] sm:text-4xl">
              A marketplace with clearer movement from discovery to delivery.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
              Brands launch a campaign. Influencers discover it, evaluate the fit,
              and open direct conversations. The design language on the site now
              reinforces that sequence through structured cards, flow summaries, and
              asset-ready preview areas.
            </p>

            <div className="mt-8 grid gap-3">
              <FlowStrip
                index="01"
                title="Enter through role-based onboarding"
                description="The first decision clarifies the entire downstream UI and content model."
              />
              <FlowStrip
                index="02"
                title="Move into campaigns and profile depth"
                description="Profiles and campaign cards carry the credibility data users need to act."
              />
              <FlowStrip
                index="03"
                title="Close the loop through messaging"
                description="Bridge is strongest when discovery and communication live in one system."
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <MockPanel
              eyebrow="Brand dashboard"
              title="Campaign command center"
              accent="sky"
              points={["Brief builder", "Budget range", "Timeline", "Applications"]}
            />
            <MockPanel
              eyebrow="Influencer dashboard"
              title="Curated discovery feed"
              accent="coral"
              points={["Campaign listing", "Saved jobs", "Profile fit", "Quick apply"]}
            />
            <MockPanel
              eyebrow="Messaging"
              title="Chat-driven execution"
              accent="mint"
              points={["Recent conversations", "Direct threads", "Notification hooks", "Delivery follow-up"]}
            />
            <MockPanel
              eyebrow="Profiles"
              title="Trust signals built in"
              accent="sand"
              points={["Follower count", "Bio and categories", "Company details", "Industry context"]}
            />
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-[2.5rem] border border-[var(--bridge-line)] bg-[linear-gradient(135deg,_rgba(255,245,240,0.8),_rgba(255,255,255,0.92)_36%,_rgba(238,247,255,0.88)_100%)] p-6 shadow-[0_30px_80px_rgba(21,32,51,0.08)] sm:p-8">
          <SectionIntro
            eyebrow="Why Bridge is investable"
            title="Bridge already demonstrates a full marketplace loop."
            description="This is not just a landing page idea. The product structure already defines how both sides enter the platform, how campaigns are created and discovered, and how communication happens after interest is established."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <InvestorCard
              title="Entry"
              description="Users start with role selection, authentication, and profile setup, which creates the foundation for a structured two-sided product."
            />
            <InvestorCard
              title="Core transaction"
              description="Brands create campaigns. Influencers browse and inspect them. That is the central marketplace interaction Bridge is built around."
            />
            <InvestorCard
              title="Execution layer"
              description="Messaging gives both sides a direct channel once discovery happens, which keeps coordination inside Bridge instead of moving off-platform."
            />
          </div>
        </div>
      </section>

      <section
        id="roadmap"
        className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16"
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="overflow-hidden rounded-[2.6rem] bg-[linear-gradient(135deg,_#13233c,_#1b3558_54%,_#ff6b4a_130%)] px-6 py-8 text-white shadow-[0_32px_90px_rgba(19,35,60,0.28)] sm:px-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/68">
              Future roadmap
            </p>
            <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-3xl tracking-[-0.04em] sm:text-4xl">
              The next phase expands Bridge from marketplace coordination into a stronger transaction platform.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/74 sm:text-base">
              The roadmap shows how the product can move from campaign discovery and chat into applications, approvals, search, payments, and long-term trust systems.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {roadmap.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-white/14 bg-white/10 px-4 py-4 text-sm leading-6 text-white/84 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-[var(--bridge-line)] bg-white/88 p-6 shadow-[0_18px_40px_rgba(21,32,51,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--bridge-sky)]">
              Share-ready summary
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--bridge-ink)]">
              Bridge is now presented as a clear investor-facing product.
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--bridge-muted)]">
              The site now explains what the product is, who it serves, how the
              marketplace works, what Bridge includes, and how the roadmap expands
              from there. Real product imagery will still improve trust, but the core
              narrative is already strong enough to share.
            </p>

            <a
              href="mailto:hello@bridge.app"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--bridge-ink)] px-6 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
            >
              Contact Bridge
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--bridge-sky)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl tracking-[-0.04em] text-[var(--bridge-ink)] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[var(--bridge-muted)]">
        {description}
      </p>
    </div>
  );
}

function HeroProductPanel() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <div className="absolute -left-4 top-6 h-32 w-32 rounded-full bg-[rgba(255,107,74,0.18)] blur-3xl" />
      <div className="absolute -right-3 top-20 h-36 w-36 rounded-full bg-[rgba(78,140,255,0.18)] blur-3xl" />

      <div className="relative rounded-[2.4rem] border border-[var(--bridge-line)] bg-[linear-gradient(180deg,_rgba(255,255,255,0.92),_rgba(246,249,255,0.94))] p-4 shadow-[0_30px_90px_rgba(21,32,51,0.12)]">
        <div className="rounded-[2rem] border border-[var(--bridge-line)] bg-white p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--bridge-coral)]">
                App preview
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[var(--bridge-ink)]">
                Bridge mobile platform
              </h2>
            </div>
            <div className="rounded-full border border-[var(--bridge-line)] bg-[var(--bridge-sand)] p-3">
              <BridgeLogo className="h-5 w-auto" />
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[1.8rem] bg-[linear-gradient(180deg,_#172845,_#213a64)] p-4 text-white">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/56">
                    Influencer dashboard
                  </p>
                  <p className="mt-2 text-xl font-semibold">Good morning, Maya</p>
                </div>
                <span className="rounded-full bg-white/12 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/72">
                  Live
                </span>
              </div>

              <div className="mt-4 rounded-[1.3rem] bg-white/10 px-4 py-3 text-sm text-white/72">
                Search campaigns, brands, or categories
              </div>

              <div className="mt-4 rounded-[1.5rem] bg-white/8 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold">Glow Soda Summer Launch</p>
                    <p className="mt-1 text-xs text-white/60">Lifestyle creators wanted</p>
                  </div>
                  <span className="rounded-full bg-[rgba(255,191,71,0.18)] px-3 py-1 text-[0.7rem] font-semibold text-[var(--bridge-gold)]">
                    ₹ 20k
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-white/72">
                  <div className="rounded-2xl bg-white/10 px-3 py-3">7 day timeline</div>
                  <div className="rounded-2xl bg-white/10 px-3 py-3">3 deliverables</div>
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-[1.5rem] border border-[var(--bridge-line)] bg-[var(--bridge-sand)] p-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--bridge-coral)]">
                  Brand tools
                </p>
                <p className="mt-2 text-lg font-semibold text-[var(--bridge-ink)]">
                  Create campaign
                </p>
                <div className="mt-4 space-y-2">
                  <div className="h-2 rounded-full bg-white/80" />
                  <div className="h-2 w-4/5 rounded-full bg-white/80" />
                  <div className="h-2 w-3/5 rounded-full bg-white/80" />
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--bridge-line)] bg-white p-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--bridge-sky)]">
                  Messaging
                </p>
                <div className="mt-3 space-y-2">
                  <ChatRow name="Nova Skin" time="2m" unread />
                  <ChatRow name="Aster Lab" time="18m" />
                  <ChatRow name="Sway Coffee" time="1h" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <MetricBadge value="128" label="Live campaigns" />
                <MetricBadge value="92%" label="Match score" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoleCard({
  title,
  eyebrow,
  summary,
  points,
  accent,
}: {
  title: string;
  eyebrow: string;
  summary: string;
  points: string[];
  accent: "coral" | "sky";
}) {
  const accentStyles =
    accent === "coral"
      ? {
          pill: "bg-[rgba(255,107,74,0.12)] text-[var(--bridge-coral)]",
          dot: "bg-[var(--bridge-coral)]",
        }
      : {
          pill: "bg-[rgba(78,140,255,0.12)] text-[var(--bridge-sky)]",
          dot: "bg-[var(--bridge-sky)]",
        };

  return (
    <article className="rounded-[2.1rem] border border-[var(--bridge-line)] bg-white/88 p-6 shadow-[0_18px_44px_rgba(21,32,51,0.06)]">
      <div className={`inline-flex rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${accentStyles.pill}`}>
        {eyebrow}
      </div>
      <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--bridge-ink)]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[var(--bridge-muted)] sm:text-base">
        {summary}
      </p>

      <div className="mt-6 grid gap-3">
        {points.map((point) => (
          <div
            key={point}
            className="flex items-center gap-3 rounded-[1.25rem] bg-[rgba(255,255,255,0.72)] px-4 py-3 shadow-[inset_0_0_0_1px_var(--bridge-line)]"
          >
            <span className={`h-2.5 w-2.5 rounded-full ${accentStyles.dot}`} />
            <span className="text-sm font-medium text-[var(--bridge-ink)]">{point}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

function ScreenGroupCard({
  title,
  total,
  accent,
  screens,
}: {
  title: string;
  total: string;
  accent: "sand" | "coral" | "sky";
  screens: string[];
}) {
  const tone =
    accent === "coral"
      ? "bg-[rgba(255,107,74,0.12)] text-[var(--bridge-coral)]"
      : accent === "sky"
        ? "bg-[rgba(78,140,255,0.12)] text-[var(--bridge-sky)]"
        : "bg-[var(--bridge-sand)] text-[var(--bridge-ink)]";

  return (
    <article className="rounded-[2rem] border border-[var(--bridge-line)] bg-white/88 p-5 shadow-[0_18px_40px_rgba(21,32,51,0.06)]">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--bridge-ink)]">
          {title}
        </h3>
        <span className={`rounded-full px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] ${tone}`}>
          {total}
        </span>
      </div>

      <div className="mt-5 grid gap-2">
        {screens.map((screen) => (
          <div
            key={screen}
            className="rounded-[1.2rem] border border-[var(--bridge-line)] bg-[rgba(255,255,255,0.7)] px-4 py-3 text-sm text-[var(--bridge-ink)]"
          >
            {screen}
          </div>
        ))}
      </div>
    </article>
  );
}

function FlowStrip({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/8 px-4 py-4 backdrop-blur">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--bridge-gold)]">
        {index}
      </p>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-white/68">{description}</p>
    </div>
  );
}

function MockPanel({
  eyebrow,
  title,
  accent,
  points,
}: {
  eyebrow: string;
  title: string;
  accent: "sky" | "coral" | "mint" | "sand";
  points: string[];
}) {
  const accentTone =
    accent === "coral"
      ? "bg-[rgba(255,107,74,0.12)] text-[var(--bridge-coral)]"
      : accent === "sky"
        ? "bg-[rgba(78,140,255,0.12)] text-[var(--bridge-sky)]"
        : accent === "mint"
          ? "bg-[rgba(73,198,165,0.16)] text-[var(--bridge-mint-deep)]"
          : "bg-[var(--bridge-sand)] text-[var(--bridge-ink)]";

  return (
    <div className="rounded-[1.9rem] border border-[var(--bridge-line)] bg-white/86 p-5 shadow-[0_16px_36px_rgba(21,32,51,0.06)]">
      <div className={`inline-flex rounded-full px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] ${accentTone}`}>
        {eyebrow}
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--bridge-ink)]">
        {title}
      </h3>
      <div className="mt-5 grid gap-2">
        {points.map((point) => (
          <div
            key={point}
            className="rounded-[1.2rem] border border-[var(--bridge-line)] bg-[rgba(250,250,250,0.86)] px-4 py-3 text-sm text-[var(--bridge-ink)]"
          >
            {point}
          </div>
        ))}
      </div>
    </div>
  );
}

function SignalPanel({
  title,
  points,
}: {
  title: string;
  points: string[];
}) {
  return (
    <article className="rounded-[1.9rem] border border-[var(--bridge-line)] bg-white/84 p-4 shadow-[0_16px_40px_rgba(21,32,51,0.06)]">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--bridge-coral)]">
        Investor signal
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--bridge-ink)]">
        {title}
      </h3>
      <div className="mt-4 grid gap-2">
        {points.map((point) => (
          <div
            key={point}
            className="rounded-[1.15rem] border border-[var(--bridge-line)] bg-[rgba(255,255,255,0.74)] px-4 py-3 text-sm leading-6 text-[var(--bridge-ink)]"
          >
            {point}
          </div>
        ))}
      </div>
    </article>
  );
}

function InvestorCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-[1.8rem] border border-[var(--bridge-line)] bg-white/86 p-5 shadow-[0_16px_36px_rgba(21,32,51,0.05)]">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--bridge-sky)]">
        {title}
      </p>
      <p className="mt-3 text-sm leading-7 text-[var(--bridge-muted)]">{description}</p>
    </article>
  );
}

function MetricBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.25rem] border border-[var(--bridge-line)] bg-[rgba(255,255,255,0.88)] px-4 py-4">
      <p className="text-xl font-semibold tracking-[-0.04em] text-[var(--bridge-ink)]">
        {value}
      </p>
      <p className="mt-1 text-xs leading-5 text-[var(--bridge-muted)]">{label}</p>
    </div>
  );
}

function ChatRow({
  name,
  time,
  unread,
}: {
  name: string;
  time: string;
  unread?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-[1rem] bg-[rgba(246,249,255,0.9)] px-3 py-3">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-[linear-gradient(135deg,_rgba(255,107,74,0.2),_rgba(78,140,255,0.24))]" />
        <div>
          <p className="text-sm font-semibold text-[var(--bridge-ink)]">{name}</p>
          <p className="text-xs text-[var(--bridge-muted)]">Campaign updates</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {unread ? <span className="h-2.5 w-2.5 rounded-full bg-[var(--bridge-coral)]" /> : null}
        <span className="text-xs text-[var(--bridge-muted)]">{time}</span>
      </div>
    </div>
  );
}

function GridGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-[92rem] bg-[linear-gradient(to_right,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_calc(100%-1px),rgba(19,35,60,0.04)_calc(100%-1px)),linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_calc(100%-1px),rgba(19,35,60,0.04)_calc(100%-1px))] bg-[size:72px_72px] opacity-40 [mask-image:linear-gradient(180deg,rgba(0,0,0,0.52),transparent_82%)]"
    />
  );
}

function BridgeLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 184 88"
      aria-label="Bridge logo"
      role="img"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 30C26 18 34 18 45 30L67 54C73 61 80 61 86 54"
        stroke="#FFBF47"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M170 30C158 18 150 18 139 30L117 54C111 61 104 61 98 54"
        stroke="#FFBF47"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 24L76 58C82 63 89 63 95 58L144 22"
        stroke="#1C5D99"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 40C35 40 48 8 61 8C71 8 76 29 87 54C89 58 92 58 94 54C106 27 110 8 121 8C134 8 145 40 156 40"
        stroke="#FF6B4A"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
