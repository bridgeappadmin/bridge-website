// Open roles. Placeholder listings; replace before publishing.
export const jobs = [
  {
    slug: 'growth-and-partnerships-lead',
    title: 'Growth & Partnerships Lead',
    location: 'On-site',
    type: 'Full-time',
    department: 'Business',
    salary: 'Up to ₹32L/year',
    closes: 'Mar 12, 2026',
    sections: [
      {
        heading: 'Job description',
        paragraphs: [
          'At Tazmify, we are building the place where creators and brands find each other and get the work done. As Growth & Partnerships Lead you will own the brand side of the marketplace: bringing new brands onto the platform, helping them run their first campaigns and turning them into long-term programs.',
        ],
        strong:
          'You will work closely with the founders, product and design to:',
        bullets: [
          'Build and run the brand acquisition funnel',
          'Design onboarding that gets a first campaign live in a week',
          'Shape pricing and Connects plans with real usage data',
          'Represent Tazmify with agencies and creator networks',
        ],
      },
      {
        heading: 'Key responsibilities',
        bullets: [
          'Own monthly targets for new brands and live campaigns.',
          'Run partnership conversations from first call to signed program.',
          'Collect and route brand feedback into the product roadmap.',
          'Build playbooks that let the team scale outreach without losing quality.',
        ],
      },
      {
        heading: 'Qualifications',
        strong: 'Must-have:',
        bullets: [
          '4+ years in growth, partnerships or B2B sales at a marketplace or SaaS company.',
          'Experience working with marketing teams or agencies.',
          'Comfort with ambiguity and early-stage pace.',
        ],
        strong2: 'Nice-to-have:',
        bullets2: [
          'Creator economy or influencer marketing background.',
          'Experience with two-sided marketplaces.',
        ],
      },
    ],
  },
  {
    slug: 'product-designer',
    title: 'Product Designer',
    location: 'Hybrid',
    type: 'Contract',
    department: 'Design',
    salary: 'Up to ₹24L/year',
    closes: 'Feb 28, 2026',
    sections: [
      {
        heading: 'Job description',
        paragraphs: [
          'You will design the flows that creators and brands use every day: discovery, briefs, chat, deliverables and payouts. The app already has a clear direction; your job is to make every screen feel inevitable.',
        ],
        strong: 'You will work closely with the founders and engineering to:',
        bullets: [
          'Turn research into flows, prototypes and production-ready specs',
          'Maintain and extend the Tazmify design system in Figma',
          'Run quick usability sessions with creators and brand teams',
        ],
      },
      {
        heading: 'Key responsibilities',
        bullets: [
          'Own end-to-end design for two product areas.',
          'Ship weekly alongside engineering.',
          'Keep the component library and tokens in sync with the app.',
        ],
      },
      {
        heading: 'Qualifications',
        strong: 'Must-have:',
        bullets: [
          '3+ years designing mobile products.',
          'A portfolio that shows systems thinking, not just screens.',
          'Fluency in Figma, prototyping and hand-off.',
        ],
        strong2: 'Nice-to-have:',
        bullets2: [
          'Motion design experience.',
          'Marketplace or fintech background.',
        ],
      },
    ],
  },
  {
    slug: 'founding-ai-engineer',
    title: 'Founding AI Engineer',
    location: 'On-site',
    type: 'Full-time',
    department: 'Engineering',
    salary: 'Up to ₹45L/year',
    closes: 'Mar 30, 2026',
    sections: [
      {
        heading: 'Job description',
        paragraphs: [
          'Matching is the heart of Tazmify. You will build the models that rank campaigns for creators and creators for campaigns, using niche, audience and delivery history rather than follower counts.',
        ],
        strong: 'You will work closely with the founders and product to:',
        bullets: [
          'Design the matching and ranking pipeline',
          'Build evaluation that reflects real hiring outcomes',
          'Ship models into a production mobile app',
        ],
      },
      {
        heading: 'Key responsibilities',
        bullets: [
          'Architect, train and deploy ranking models from prototype to production.',
          'Build data pipelines for collection, cleaning and transformation.',
          'Own model performance in low-latency environments.',
          'Set the technical culture for a growing team.',
        ],
      },
      {
        heading: 'Qualifications',
        strong: 'Must-have:',
        bullets: [
          '4+ years in machine learning or applied AI.',
          'Python and a modern ML framework in production.',
          'Solid backend and cloud fundamentals.',
        ],
        strong2: 'Nice-to-have:',
        bullets2: [
          'Recommendation or marketplace ranking experience.',
          'Familiarity with LLM-based feature extraction.',
        ],
      },
    ],
  },
  {
    slug: 'full-stack-engineer',
    title: 'Full-Stack Engineer',
    location: 'Remote',
    type: 'Full-time',
    department: 'Engineering',
    salary: 'Up to ₹36L/year',
    closes: 'Apr 15, 2026',
    sections: [
      {
        heading: 'Job description',
        paragraphs: [
          'You will build across the Tazmify stack: the mobile app creators and brands use, the services behind campaigns and Connects, and the tooling that keeps everything observable.',
        ],
        strong: 'You will work closely with design and product to:',
        bullets: [
          'Ship features end to end, from schema to screen',
          'Keep the app fast on real devices',
          'Improve reliability of payments and messaging',
        ],
      },
      {
        heading: 'Key responsibilities',
        bullets: [
          'Own features from design review to release.',
          'Write tests that protect the money-moving paths.',
          'Pair with the AI engineer on serving models in the app.',
        ],
      },
      {
        heading: 'Qualifications',
        strong: 'Must-have:',
        bullets: [
          '3+ years with TypeScript across client and server.',
          'Experience with React Native or a comparable mobile stack.',
          'Comfort owning infrastructure basics.',
        ],
        strong2: 'Nice-to-have:',
        bullets2: [
          'Payments or ledger experience.',
          'Realtime messaging systems.',
        ],
      },
    ],
  },
];

export const findJob = (slug) => jobs.find((j) => j.slug === slug);
