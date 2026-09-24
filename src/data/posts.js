// Blog content. Placeholder editorial written for the Tazmify creator × brand
// platform; replace with real posts before launch. Cover photos are CC0
// (public domain) from StockSnap and rawpixel; credits are in README.md.
const tip = (text) => ({ tip: text });

export const posts = [
  {
    slug: 'briefing-creators-a-step-by-step-guide',
    title: 'Briefing creators: a step-by-step guide',
    date: 'Jan 19, 2026',
    category: 'Brand playbook',
    tags: ['Brands', 'Briefs'],
    image: 'blog/briefing-creators.webp',
    excerpt:
      'A clear brief is the difference between a campaign that ships and one that stalls. Here is the structure we see work again and again.',
    intro:
      'Great creator work rarely starts with a great idea. It starts with a great brief. When creators know the goal, the audience and the boundaries, they bring their own voice to the rest. These five steps turn a vague ask into a brief people want to answer.',
    sections: [
      {
        heading: 'Start with the outcome, not the deliverable',
        paragraphs: [
          'Before you write “two Reels and a Story”, write what the campaign needs to change: awareness in a new city, sign-ups for a launch, trust for a new product line. Creators pitch better when they know why the work exists.',
        ],
        bullets: [
          'One sentence on the business goal.',
          'One sentence on who should feel differently afterwards.',
        ],
        ...tip(
          'Put the outcome at the very top of the Tazmify brief. It is the first thing creators read on the campaign card.',
        ),
      },
      {
        heading: 'Describe the audience like a person',
        paragraphs: [
          'Demographics are a starting point, not a description. Tell creators what your customer is trying to do this month and what they scroll past without noticing.',
        ],
        bullets: [
          'Where they already spend attention.',
          'What they distrust about brands like yours.',
        ],
      },
      {
        heading: 'Set the guardrails once',
        paragraphs: [
          'List the claims you cannot make, the words you avoid and the visual rules that matter. Everything else is the creator’s call. The more precise the guardrails, the more freedom you can give.',
        ],
        ...tip(
          'Attach brand assets to the brief rather than sending them over chat later. Applicants see them before they pitch.',
        ),
      },
      {
        heading: 'Be explicit about money and timing',
        paragraphs: [
          'A budget range and a delivery date filter out mismatched pitches before anyone spends time. Tazmify holds payment in Connects until deliverables are approved, so state exactly what approval means.',
        ],
        bullets: [
          'Fee per deliverable or per bundle.',
          'Usage rights and how long they last.',
          'Draft deadline, feedback window, final deadline.',
        ],
      },
      {
        heading: 'Final takeaway',
        paragraphs: [
          'A brief is a promise about how the collaboration will run. Write it the way you would like to be briefed, publish it, and let the pitches show you who understood it best.',
        ],
      },
    ],
  },
  {
    slug: 'the-future-of-creator-deals',
    title: 'The future of creator deals: what it means for you',
    date: 'Jan 6, 2026',
    category: 'Creators',
    tags: ['Creators', 'Trends'],
    image: 'blog/future-of-creator-deals.webp',
    excerpt:
      'Deals are moving from DMs and spreadsheets into shared workspaces. Here is what changes for creators when the whole collaboration lives in one thread.',
    intro:
      'For a decade, creator deals happened in the gaps between tools: a DM here, an invoice there, a brief buried in email. That is changing fast. Platforms that hold the whole collaboration are becoming the default, and the shift rewards creators who show their work clearly.',
    sections: [
      {
        heading: 'Pitches replace cold outreach',
        paragraphs: [
          'Brands publish campaigns and creators apply with a pitch, portfolio and quote. The best pitch wins, not the loudest inbox.',
        ],
        ...tip(
          'Keep three pitch templates ready: one for product reviews, one for launches, one for long-term ambassadorships.',
        ),
      },
      {
        heading: 'Protected payments become standard',
        paragraphs: [
          'When the agreed fee is held before work begins and released on approval, both sides stop chasing. Expect this to be table stakes within a year.',
        ],
      },
      {
        heading: 'Proof travels with you',
        paragraphs: [
          'Completed campaigns, ratings and performance sit on your profile. Every finished collaboration makes the next pitch stronger.',
        ],
      },
    ],
  },
  {
    slug: 'how-ai-is-changing-creator-discovery',
    title: 'How AI is changing creator discovery',
    date: 'Jan 4, 2026',
    category: 'Brands',
    tags: ['Brands', 'Matching'],
    image: 'blog/creator-discovery.webp',
    excerpt:
      'Follower counts were never the right filter. Matching on niche, audience overlap and past work is finally practical.',
    intro:
      'Discovery used to mean scrolling hashtags and hoping. Smart matching looks at what a creator actually makes, who watches it and how past campaigns performed, then ranks fit instead of fame.',
    sections: [
      {
        heading: 'Fit beats reach',
        paragraphs: [
          'A creator with twelve thousand engaged followers in your exact niche routinely outperforms a general account with a million. Matching surfaces the former.',
        ],
      },
      {
        heading: 'Compare on the things that matter',
        paragraphs: [
          'Side-by-side comparison of audience, rates and delivery history turns a week of shortlisting into an afternoon.',
        ],
        ...tip(
          'Use the Compare view in Tazmify to line up three applicants before you shortlist.',
        ),
      },
    ],
  },
  {
    slug: 'how-to-price-a-campaign-that-actually-works',
    title: 'How to price a campaign that actually works',
    date: 'Jan 5, 2026',
    category: 'Earnings',
    tags: ['Earnings', 'Creators'],
    image: 'blog/pricing-a-campaign.webp',
    excerpt:
      'Pricing is a conversation about value, deliverables and rights. Here is a simple model creators can defend.',
    intro:
      'Underpricing is the most common mistake we see from new creators, and it is rarely about confidence. It is about not having a model. This one takes five minutes.',
    sections: [
      {
        heading: 'Price the deliverable, then the rights',
        paragraphs: [
          'Start with a base rate per format, then add for usage rights, exclusivity and rush timelines. Each addition is a line, not a negotiation.',
        ],
        bullets: [
          'Base: production time and your audience.',
          'Rights: how long and where the brand can reuse the work.',
          'Exclusivity: what you cannot post for competitors, and for how long.',
        ],
      },
      {
        heading: 'Show the math in your pitch',
        paragraphs: [
          'Brands accept clear numbers faster than round ones. A pitch that itemises deliverables gets approved with fewer back-and-forths.',
        ],
        ...tip(
          'Tazmify quotes are itemised by default, so the breakdown is already in the brief when the brand reviews it.',
        ),
      },
    ],
  },
  {
    slug: 'five-habits-of-creators-brands-rehire',
    title: 'Five habits of creators brands keep rehiring',
    date: 'Jan 7, 2026',
    category: 'Creators',
    tags: ['Creators'],
    image: 'blog/creator-habits.webp',
    excerpt:
      'Repeat work is where creator income becomes stable. These habits show up in every profile with a high rehire rate.',
    intro:
      'We looked at the creators on Tazmify who get invited back most often. Their audiences vary wildly. Their habits do not.',
    sections: [
      {
        heading: 'They confirm the brief back',
        paragraphs: [
          'A two-line summary of what they understood, sent before work starts, catches most misunderstandings for free.',
        ],
      },
      {
        heading: 'They deliver drafts early',
        paragraphs: [
          'Early drafts give brands time to react without moving the launch date. It is the cheapest trust you can buy.',
        ],
        ...tip(
          'Set your own internal deadline two days before the brief deadline in Tazmify.',
        ),
      },
      {
        heading: 'They report what happened',
        paragraphs: [
          'A short results note after the campaign turns a one-off into a relationship.',
        ],
      },
    ],
  },
  {
    slug: 'the-psychology-behind-a-good-pitch',
    title: 'The psychology behind a good pitch',
    date: 'Jan 3, 2026',
    category: 'Creators',
    tags: ['Creators', 'Pitching'],
    image: 'blog/good-pitch.webp',
    excerpt:
      'Brands read dozens of pitches per campaign. The ones that win share a structure you can copy.',
    intro:
      'A pitch is not a cover letter. It is a plan the brand can picture. The winning ones answer three questions in the first four lines.',
    sections: [
      {
        heading: 'Why this brand, why now',
        paragraphs: [
          'Reference something specific about the campaign. Generic enthusiasm reads as a template.',
        ],
      },
      {
        heading: 'What the audience will see',
        paragraphs: [
          'Describe the first three seconds of the content. Brands can evaluate an idea they can picture.',
        ],
        ...tip('Attach one past example that matches the format. Not five.'),
      },
    ],
  },
  {
    slug: 'simple-ways-to-take-control-of-your-campaign-calendar',
    title: 'Simple ways to take control of your campaign calendar',
    date: 'Jan 2, 2026',
    category: 'Brands',
    tags: ['Brands', 'Planning'],
    image: 'blog/campaign-calendar.webp',
    excerpt:
      'Always-on creator programs fail on scheduling, not on ideas. A calendar with three lanes fixes most of it.',
    intro:
      'Most teams run creator work as a series of emergencies. The fix is not more people. It is a calendar that separates evergreen content from launches from experiments.',
    sections: [
      {
        heading: 'Three lanes, one view',
        paragraphs: [
          'Evergreen collaborations keep the channel alive. Launch campaigns cluster around dates. Experiments test new creators cheaply. Plan each lane on its own rhythm.',
        ],
      },
      {
        heading: 'Brief a month ahead',
        paragraphs: [
          'Creators need time to pitch, shoot and revise. Publishing briefs four weeks out gets you better applicants and calmer launches.',
        ],
        ...tip(
          'Duplicate a past campaign in Tazmify to reuse its brief, deliverables and budget structure.',
        ),
      },
    ],
  },
  {
    slug: 'connects-explained',
    title: 'Connects explained: how payments stay protected',
    date: 'Jan 2, 2026',
    category: 'Earnings',
    tags: ['Earnings', 'Trust'],
    image: 'blog/connects-explained.webp',
    excerpt:
      'Connects hold the agreed fee until deliverables are approved. Here is exactly how the flow works for both sides.',
    intro:
      'Connects are the part of Tazmify people ask about most. The idea is simple: money is committed before the work starts and released when the work is approved, so neither side has to chase.',
    sections: [
      {
        heading: 'Committing a fee',
        paragraphs: [
          'When a brand hires a creator, the agreed fee is committed to the campaign. The creator sees it as protected before filming anything.',
        ],
      },
      {
        heading: 'Approval releases payment',
        paragraphs: [
          'Deliverables are submitted in the campaign thread. Once approved, the payout is released to the creator’s earnings and shows up in their tracking.',
        ],
        ...tip(
          'Agree on what “approved” means in the brief. Tazmify shows the definition on the approval screen.',
        ),
      },
    ],
  },
  {
    slug: 'the-rise-of-long-term-partnerships',
    title: 'The rise of long-term creator partnerships',
    date: 'Jan 1, 2026',
    category: 'Trends',
    tags: ['Trends', 'Brands'],
    image: 'blog/long-term-partnerships.webp',
    excerpt:
      'One-off posts are giving way to ambassadorships. The economics favour both sides once the tooling keeps up.',
    intro:
      'A single sponsored post is easy to buy and easy to forget. Multi-month partnerships compound: the audience learns the brand, the creator learns the product and the content gets better every round.',
    sections: [
      {
        heading: 'Why brands are switching',
        paragraphs: [
          'Repeat collaborations cost less per deliverable and perform better over time. The overhead used to be the blocker. Shared workspaces remove most of it.',
        ],
      },
      {
        heading: 'Why creators should ask for them',
        paragraphs: [
          'Predictable income changes how you plan your work. Pitch a three-month arc instead of a single post when the fit is obvious.',
        ],
      },
    ],
  },
];

export const categories = [
  'All',
  ...Array.from(new Set(posts.map((p) => p.category))),
];

export const findPost = (slug) => posts.find((p) => p.slug === slug);
