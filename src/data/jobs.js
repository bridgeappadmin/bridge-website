// Open roles. Add new roles here; each one gets its own page at
// /careers/<slug>. Applications go by email (see applyEmail below).
export const applyEmail = 'contact@tazmify.com';
export const applyPhone = '+91 97338 77693';

export const jobs = [
  {
    slug: 'brand-scout',
    title: 'Brand Scout',
    location: 'Bangalore',
    type: 'Field role',
    department: 'Offline Marketing',
    salary: 'Monthly salary + target-based bonus',
    tags: ['Field role', 'Target-based bonus'],
    sections: [
      {
        heading: 'About the role',
        paragraphs: [
          'Tazmify is hiring Brand Scouts in Bangalore. You will be on the ground, meeting cafés, restaurants and stores around the city and bringing them onto Tazmify to work with creators.',
        ],
      },
      {
        heading: 'What you’ll do',
        bullets: [
          'Visit cafés, restaurants and stores around the city.',
          'Pitch and onboard brands on Tazmify.',
          'Hit your monthly targets.',
        ],
      },
      {
        heading: 'What you get',
        bullets: [
          'Monthly salary provided (inclusive of public transport expenses).',
          'Target-based bonus.',
        ],
      },
      {
        heading: 'Who we’re looking for',
        bullets: [
          'College students and freshers are welcome.',
          'Good communication skills.',
          'Self-driven and energetic.',
          'Based in Bangalore.',
        ],
      },
      {
        heading: 'How to apply',
        paragraphs: [
          `Email your CV to ${applyEmail} with “Brand Scout” in the subject line, or call ${applyPhone}.`,
        ],
      },
    ],
  },
];

export const findJob = (slug) => jobs.find((j) => j.slug === slug);
