"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bell,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clapperboard,
  Command,
  Handshake,
  HeartHandshake,
  Layers3,
  MessageCircle,
  MousePointer2,
  Play,
  Search,
  Send,
  Sparkles,
  Star,
  Users,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const navLinks = ["Features", "Creators", "Brands", "How it Works", "Testimonials"];

const stats = [
  { value: "20K+", label: "campaign reach" },
  { value: "1.2M", label: "creator audience" },
  { value: "95%", label: "faster matching" },
];

const brandLogos = ["Aura", "NOVA", "Lumen", "Fable", "Kite"];

const problemSolutions = [
  {
    icon: Search,
    title: "Brands struggle finding creators",
    copy: "Replace cold searches and messy spreadsheets with guided discovery, fit signals, and creator profiles built for action.",
    solution: "Smart creator discovery",
  },
  {
    icon: CircleDollarSign,
    title: "Creators struggle getting deals",
    copy: "Creators get a polished profile, relevant campaigns, and a clear path from application to paid collaboration.",
    solution: "High-intent campaign access",
  },
  {
    icon: Layers3,
    title: "Campaign management is messy",
    copy: "Briefs, approvals, messaging, performance, and next steps stay together so each side knows what is moving.",
    solution: "Unified workflow",
  },
];

const creatorFeatures = [
  { icon: Sparkles, title: "Discover campaigns", copy: "Curated launches from brands that match your audience and voice." },
  { icon: WalletCards, title: "Track earnings", copy: "Know what is pending, approved, and paid from one calm workspace." },
  { icon: MessageCircle, title: "Brand messaging", copy: "Keep every brief, question, and update in context." },
  { icon: Send, title: "Instant applications", copy: "Apply with your profile, rates, and past work already attached." },
];

const brandFeatures = [
  { icon: Users, title: "Find creators fast", copy: "Filter by niche, audience, location, and collaboration style." },
  { icon: BriefcaseBusiness, title: "Manage campaigns", copy: "Launch briefs, review applicants, and move creators through stages." },
  { icon: BarChart3, title: "Track performance", copy: "See reach, engagement, deliverables, and campaign momentum." },
  { icon: Handshake, title: "Collaborate in real time", copy: "Turn interest into shipped campaigns without fragmented DMs." },
];

const creatorSteps = ["Create Profile", "Apply to Campaigns", "Get Paid"];
const brandSteps = ["Launch Campaign", "Match with Creators", "Scale Reach"];

const testimonials = [
  {
    quote: "Bridge completely changed how we run influencer campaigns. It feels focused, fast, and built for the way creators actually work.",
    name: "Maya R.",
    role: "Lifestyle creator",
  },
  {
    quote: "We found creator matches in hours, not weeks. The collaboration layer is what made the whole campaign feel effortless.",
    name: "Evan Chen",
    role: "Growth lead, Nova Labs",
  },
  {
    quote: "The product makes brand deals feel more professional without losing the energy of creator culture.",
    name: "Ari Kapoor",
    role: "Creator strategist",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 80],
    ["rgba(7, 8, 18, 0)", "rgba(7, 8, 18, 0.76)"],
  );
  const navBorder = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.12)"],
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bridge-bg)] text-white">
      <div className="noise-layer" />
      <div className="ambient-light" />

      <motion.header
        style={{ backgroundColor: navBackground, borderColor: navBorder }}
        className="fixed left-1/2 top-3 z-50 w-[calc(100%-1rem)] max-w-7xl -translate-x-1/2 border px-3 py-3 shadow-[0_16px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:top-5 sm:w-[calc(100%-2rem)] sm:px-4"
      >
        <nav className="flex items-center justify-between gap-5">
          <a href="#" className="flex items-center gap-3" aria-label="Bridge home">
            <BridgeMark className="h-9 w-auto" />
            <span className="text-base font-semibold">Bridge</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-white/62 lg:flex">
            {navLinks.map((link) => (
              <a key={link} href={`#${slugify(link)}`} className="transition hover:text-white">
                {link}
              </a>
            ))}
          </div>

          <a
            href="#join"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/12 bg-white px-4 text-sm font-semibold text-[#090a14] shadow-[0_0_36px_rgba(242,100,34,0.22)] transition hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(245,178,27,0.28)]"
          >
            Join Waitlist
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </nav>
      </motion.header>

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,0.94fr)_minmax(440px,1.06fr)]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase text-white/70 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-[var(--bridge-yellow)]" />
              Built for the next generation creator economy.
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Where brands and creators build viral campaigns together.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
              Bridge helps brands discover creators, launch campaigns, and collaborate seamlessly - all in one platform.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#join"
                className="animated-button inline-flex min-h-13 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white"
              >
                Join Waitlist
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#showcase"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-6 text-sm font-semibold text-white/88 backdrop-blur-xl transition hover:border-white/24 hover:bg-white/[0.1]"
              >
                <Play className="h-4 w-4 fill-white/80" />
                Watch Demo
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-white/52">
              <div className="flex -space-x-3">
                {["#F26422", "#F5B21B", "#4B3FA3", "#fefefe"].map((color, index) => (
                  <span
                    key={color}
                    className="h-10 w-10 rounded-full border-2 border-[#090a14]"
                    style={{ background: color, transform: `translateY(${index % 2 ? 5 : 0}px)` }}
                  />
                ))}
              </div>
              <span>500+ creators already joined</span>
            </div>
          </motion.div>

          <HeroScene />
        </div>
      </section>

      <SocialProof />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <AppShowcase />
      <Testimonials />
      <FinalCta />
      <Footer />
    </main>
  );
}

function HeroScene() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto h-[640px] w-full max-w-[620px] sm:h-[690px]"
    >
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [-1.5, 1.2, -1.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-10 z-20 w-[250px] -translate-x-1/2 sm:w-[280px]"
      >
        <PhoneMockup />
      </motion.div>

      <FloatingCard className="left-0 top-16 z-30 w-[230px] rotate-[-4deg]" delay={0}>
        <CardHeader icon={BadgeCheck} label="Creator Match" />
        <div className="mt-4 flex items-center gap-3">
          <AvatarStack />
          <div>
            <p className="font-semibold">Maya Jordan</p>
            <p className="text-xs text-white/48">Fashion + lifestyle</p>
          </div>
        </div>
        <div className="mt-4 h-2 rounded-full bg-white/10">
          <div className="h-full w-[92%] rounded-full bg-[linear-gradient(90deg,var(--bridge-orange),var(--bridge-yellow))]" />
        </div>
        <p className="mt-3 text-xs text-white/48">92% campaign fit</p>
      </FloatingCard>

      <FloatingCard className="right-0 top-24 z-30 w-[238px] rotate-[3deg]" delay={0.2}>
        <CardHeader icon={BriefcaseBusiness} label="Campaign Live" />
        <p className="mt-4 text-lg font-semibold">Glow launch</p>
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-white/58">
          <span className="rounded-md bg-white/[0.07] px-3 py-2">UGC</span>
          <span className="rounded-md bg-white/[0.07] px-3 py-2">$4.8k</span>
        </div>
      </FloatingCard>

      <FloatingCard className="bottom-28 left-3 z-30 w-[245px] rotate-[3deg]" delay={0.4}>
        <CardHeader icon={BarChart3} label="Momentum" />
        <div className="mt-5 flex items-end gap-2">
          {[38, 64, 48, 78, 92, 70].map((height, index) => (
            <span
              key={index}
              className="w-full rounded-t-sm bg-[linear-gradient(180deg,var(--bridge-purple),rgba(255,255,255,0.12))]"
              style={{ height }}
            />
          ))}
        </div>
        <p className="mt-4 text-xs text-white/48">Reach trending up 34%</p>
      </FloatingCard>

      <FloatingCard className="bottom-20 right-4 z-30 w-[250px] rotate-[-3deg]" delay={0.6}>
        <CardHeader icon={WalletCards} label="Creator Earnings" />
        <p className="mt-3 text-3xl font-semibold">$12,840</p>
        <p className="mt-1 text-xs text-white/48">Paid collaborations this month</p>
      </FloatingCard>

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-12 top-[330px] z-40 flex items-center gap-2 rounded-full border border-white/12 bg-[#10111e]/80 px-4 py-3 text-sm text-white/82 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
      >
        <Bell className="h-4 w-4 text-[var(--bridge-yellow)]" />
        Brand sent an offer
      </motion.div>

      <div className="absolute inset-x-10 bottom-0 top-28 z-0 border border-white/8 bg-white/[0.03] shadow-[0_40px_160px_rgba(75,63,163,0.28)] backdrop-blur-2xl" />
    </motion.div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative rounded-[2.5rem] border border-white/16 bg-[#090a14] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
      <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,#17162a,#0b0c17)] px-4 pb-5 pt-9">
        <div className="flex items-center justify-between">
          <BridgeMark className="h-8 w-auto" />
          <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/68">Live</span>
        </div>
        <p className="mt-6 text-2xl font-semibold">Campaigns that fit your world.</p>
        <div className="mt-5 flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.06] px-3 py-3 text-sm text-white/42">
          <Search className="h-4 w-4" />
          Beauty, travel, fitness
        </div>
        <div className="mt-4 space-y-3">
          <MobileCampaign title="Aura Beauty Drop" price="$2.4k" match="96%" color="orange" />
          <MobileCampaign title="Arcade Sneaker Lab" price="$5.1k" match="89%" color="purple" />
          <MobileCampaign title="Kite Matcha" price="$1.8k" match="84%" color="yellow" />
        </div>
      </div>
    </div>
  );
}

function SocialProof() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <MotionSection className="grid gap-8 border-y border-white/8 py-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-medium uppercase text-white/42">Trusted by early creator teams</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {brandLogos.map((logo) => (
              <div key={logo} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/64">
                {logo}
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-5">
              <p className="text-3xl font-semibold">{stat.value}</p>
              <p className="mt-2 text-sm text-white/48">{stat.label}</p>
            </div>
          ))}
        </div>
      </MotionSection>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="From friction to flow"
        title="The creator economy finally gets a collaboration layer."
        copy="Bridge turns the messiest parts of influencer marketing into a guided, beautiful workflow for both sides."
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {problemSolutions.map((item, index) => (
          <MotionSection key={item.title} delay={index * 0.08} className="glass-card group min-h-[320px] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/18 hover:shadow-[0_0_70px_rgba(242,100,34,0.14)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/[0.07] text-[var(--bridge-yellow)]">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
            <p className="mt-4 leading-7 text-white/54">{item.copy}</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[rgba(75,63,163,0.25)] px-4 py-2 text-sm font-medium text-white/82">
              <Check className="h-4 w-4 text-[var(--bridge-yellow)]" />
              {item.solution}
            </div>
          </MotionSection>
        ))}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <FeatureColumn
          id="creators"
          eyebrow="For Creators"
          title="Turn your influence into cleaner opportunities."
          features={creatorFeatures}
          accent="orange"
        />
        <FeatureColumn
          id="brands"
          eyebrow="For Brands"
          title="Launch creator campaigns without the operational drag."
          features={brandFeatures}
          accent="purple"
        />
      </div>
    </section>
  );
}

function FeatureColumn({
  id,
  eyebrow,
  title,
  features,
  accent,
}: {
  id: string;
  eyebrow: string;
  title: string;
  features: { icon: LucideIcon; title: string; copy: string }[];
  accent: "orange" | "purple";
}) {
  return (
    <MotionSection id={id} className="glass-panel p-5 sm:p-7">
      <p className={`text-sm font-semibold uppercase ${accent === "orange" ? "text-[var(--bridge-orange)]" : "text-[var(--bridge-yellow)]"}`}>
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      <div className="mt-7 grid gap-3">
        {features.map((feature) => (
          <article key={feature.title} className="group rounded-lg border border-white/8 bg-white/[0.035] p-5 transition hover:border-white/18 hover:bg-white/[0.06]">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/[0.07]">
                <feature.icon className="h-5 w-5 text-white/82" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/52">{feature.copy}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="How it works"
        title="Two paths. One shared campaign rhythm."
        copy="Creators and brands move through a simple sequence that keeps momentum visible from first match to final result."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <StepTimeline title="Creators" steps={creatorSteps} icon={Clapperboard} />
        <StepTimeline title="Brands" steps={brandSteps} icon={BriefcaseBusiness} />
      </div>
    </section>
  );
}

function AppShowcase() {
  return (
    <section id="showcase" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <MotionSection className="relative overflow-hidden border border-white/10 bg-[#0b0c17]/78 px-5 py-10 shadow-[0_40px_160px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-8 lg:px-12">
        <div className="showcase-grid" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-[var(--bridge-yellow)]">App showcase</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              A cinematic workspace for creator campaigns.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-white/58">
              Profile depth, campaign context, match signals, messaging, and performance are layered into a focused product experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Match Score", "Live Briefs", "Creator CRM", "Paid Collabs"].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/68">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px]">
            <div className="absolute left-2 top-12 w-[220px] rotate-[-7deg] sm:left-12">
              <PhoneMockup />
            </div>
            <div className="absolute right-0 top-0 hidden w-[300px] rotate-[5deg] rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:block">
              <CardHeader icon={Command} label="Brand command" />
              <div className="mt-5 grid gap-3">
                <ShowcaseRow label="Applications" value="248" tone="orange" />
                <ShowcaseRow label="Approved creators" value="38" tone="yellow" />
                <ShowcaseRow label="Projected reach" value="2.4M" tone="purple" />
              </div>
            </div>
            <div className="absolute bottom-10 right-5 w-[310px] rounded-lg border border-white/10 bg-[#111222]/86 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.42)] backdrop-blur-xl">
              <CardHeader icon={MessageCircle} label="Collaboration" />
              <div className="mt-4 space-y-3">
                <MessageBubble side="left" text="The concept is approved. Can you post Friday?" />
                <MessageBubble side="right" text="Yes. Sending final caption now." />
              </div>
            </div>
          </div>
        </div>
      </MotionSection>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Testimonials"
        title="Built for the people turning attention into outcomes."
        copy="Early users want campaign work to feel more intentional, more transparent, and more premium."
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <MotionSection key={testimonial.name} delay={index * 0.08} className="glass-card p-6">
            <div className="flex gap-1 text-[var(--bridge-yellow)]">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-6 min-h-36 text-lg leading-8 text-white/76">
              {testimonial.quote}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-11 w-11 rounded-full border border-white/12 bg-[linear-gradient(135deg,var(--bridge-orange),var(--bridge-purple))]" />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-white/42">{testimonial.role}</p>
              </div>
            </div>
          </MotionSection>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="join" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <MotionSection className="relative overflow-hidden border border-white/10 bg-[linear-gradient(135deg,rgba(242,100,34,0.18),rgba(75,63,163,0.22)_48%,rgba(245,178,27,0.12))] px-6 py-16 text-center shadow-[0_40px_150px_rgba(242,100,34,0.14)] backdrop-blur-2xl sm:px-10">
        <div className="relative mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase text-[var(--bridge-yellow)]">Join Bridge</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
            Ready to build your next viral campaign?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/62">
            Join the early marketplace where creators and brands meet, match, collaborate, and grow together.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="mailto:bridgeappadmin@gmail.com" className="animated-button inline-flex min-h-13 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white">
              Join Waitlist
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="mailto:bridgeappadmin@gmail.com?subject=Start%20as%20Creator" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-6 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/[0.11]">
              Start as Creator
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </MotionSection>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 border-t border-white/8 pt-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <BridgeMark className="h-9 w-auto" />
          <div>
            <p className="font-semibold">Bridge</p>
            <p className="text-sm text-white/42">Creator campaigns, connected.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-white/48">
          <a href="#features" className="hover:text-white">Product</a>
          <a href="#creators" className="hover:text-white">Creators</a>
          <a href="#brands" className="hover:text-white">Brands</a>
          <a href="mailto:bridgeappadmin@gmail.com" className="hover:text-white">Contact</a>
          <a href="/privacy-policy" className="hover:text-white">Privacy</a>
        </div>
        <div className="flex items-center gap-3 text-white/48">
          <Sparkles className="h-5 w-5" />
          <MousePointer2 className="h-5 w-5" />
          <HeartHandshake className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-8 text-sm text-white/32">Copyright 2026 Bridge. All rights reserved.</p>
    </footer>
  );
}

function StepTimeline({ title, steps, icon: Icon }: { title: string; steps: string[]; icon: LucideIcon }) {
  return (
    <MotionSection className="glass-panel p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.07]">
          <Icon className="h-5 w-5 text-[var(--bridge-yellow)]" />
        </div>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step} className="relative">
            {index < steps.length - 1 ? (
              <motion.div
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
                className="absolute left-[calc(50%+24px)] top-6 hidden h-px w-[calc(100%-48px)] origin-left bg-[linear-gradient(90deg,var(--bridge-orange),var(--bridge-yellow))] sm:block"
              />
            ) : null}
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-[#111222] text-sm font-semibold">
              {index + 1}
            </div>
            <p className="mt-4 text-lg font-semibold">{step}</p>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <MotionSection className="max-w-3xl">
      <p className="text-sm font-semibold uppercase text-[var(--bridge-yellow)]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-white/56">{copy}</p>
    </MotionSection>
  );
}

function MotionSection({
  children,
  className,
  id,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}) {
  return (
    <motion.div
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FloatingCard({ children, className, delay }: { children: React.ReactNode; className: string; delay: number }) {
  return (
    <motion.div
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: 6 + delay, delay, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute rounded-lg border border-white/12 bg-[#111222]/82 p-4 shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

function CardHeader({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold uppercase text-white/48">
      <Icon className="h-4 w-4 text-[var(--bridge-yellow)]" />
      {label}
    </div>
  );
}

function MobileCampaign({ title, price, match, color }: { title: string; price: string; match: string; color: "orange" | "purple" | "yellow" }) {
  const bg =
    color === "orange"
      ? "from-[rgba(242,100,34,0.28)]"
      : color === "purple"
        ? "from-[rgba(75,63,163,0.38)]"
        : "from-[rgba(245,178,27,0.22)]";

  return (
    <div className={`rounded-lg border border-white/10 bg-gradient-to-br ${bg} to-white/[0.04] p-4`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p className="mt-1 text-xs text-white/42">Brand collaboration</p>
        </div>
        <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px]">{match}</span>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-white/56">
        <span>{price}</span>
        <span>Apply</span>
      </div>
    </div>
  );
}

function ShowcaseRow({ label, value, tone }: { label: string; value: string; tone: "orange" | "yellow" | "purple" }) {
  const color =
    tone === "orange" ? "var(--bridge-orange)" : tone === "yellow" ? "var(--bridge-yellow)" : "var(--bridge-purple)";
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.05] px-4 py-3">
      <span className="text-sm text-white/54">{label}</span>
      <span className="font-semibold" style={{ color }}>
        {value}
      </span>
    </div>
  );
}

function MessageBubble({ side, text }: { side: "left" | "right"; text: string }) {
  return (
    <div className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[82%] rounded-lg px-4 py-3 text-sm leading-6 ${side === "right" ? "bg-[var(--bridge-orange)] text-white" : "bg-white/[0.08] text-white/70"}`}>
        {text}
      </div>
    </div>
  );
}

function AvatarStack() {
  return (
    <div className="flex -space-x-2">
      {["var(--bridge-orange)", "var(--bridge-yellow)", "var(--bridge-purple)"].map((color) => (
        <span key={color} className="h-9 w-9 rounded-full border-2 border-[#111222]" style={{ background: color }} />
      ))}
    </div>
  );
}

function BridgeMark({ className }: { className?: string }) {
  return (
    <Image
      src="/bridge-logo.svg"
      alt="Bridge"
      width={60}
      height={32}
      className={className}
      priority
    />
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}
