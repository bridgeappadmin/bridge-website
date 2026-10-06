// Legal pages. Privacy Policy (v1.0, 27 Sep 2026) and Terms & Conditions
// come from the finalised company documents (src/data/legal-docs.json).
// The data-deletion page keeps the copy from the previous live site.
// URLs: /privacy-policy, /terms-and-conditions, /data-deletion.
import React from 'react';
import docs from './legal-docs.json';

export const supportEmail = 'contact@tazmify.com';
export const lastUpdated = 'August 11, 2026';

function LegalEmail() {
  return <a href={`mailto:${supportEmail}`}>{supportEmail}</a>;
}
function LegalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}



const deletionSections = [
  {
    title: "Account and Data Deletion",
    body: (
      <>
        Users may request deletion of their Tazmify account and associated data at
        any time. This includes connected social account data (Instagram and
        YouTube analytics) stored by Tazmify, subject to limited retention where
        required for legal, security,
        fraud-prevention, or compliance purposes.
      </>
    ),
  },
  {
    title: "Delete Your Account In The App",
    items: [
      "Open the Tazmify application.",
      "Navigate to Settings.",
      "Select Delete Account.",
      "Confirm the deletion request.",
    ],
  },
  {
    title: "Disconnect Instagram",
    body: (
      <>
        Users may disconnect their Instagram account at any time through account
        settings. Disconnecting Instagram removes the active Instagram connection
        from Tazmify and prevents Tazmify from continuing to access Instagram data
        through that connection.
      </>
    ),
  },
  {
    title: "Disconnect YouTube",
    body: (
      <>
        Users may disconnect their YouTube channel at any time through account
        settings. Disconnecting removes the stored Google OAuth token from Tazmify
        and prevents Tazmify from continuing to access YouTube data through that
        connection. Users may also revoke access at any time via the Google security
        settings page at{" "}
        <LegalLink href="https://myaccount.google.com/permissions">
          myaccount.google.com/permissions
        </LegalLink>
        .
      </>
    ),
  },
  {
    title: "Request Deletion By Email",
    body: (
      <>
        If you are unable to access your account, request deletion by contacting
        Tazmify Support at <LegalEmail />. Include the email address associated
        with your Tazmify account so the request can be verified.
      </>
    ),
  },
  {
    title: "After Deletion Is Processed",
    items: [
      "Connected Instagram and YouTube tokens are removed.",
      "Stored Instagram and YouTube analytics data is deleted.",
      "Account access is permanently disabled.",
      "Some limited information may be retained where required for legal, security, fraud-prevention, or compliance purposes.",
    ],
  },
  {
    title: "Confirmation and Timing",
    body: (
      <>
        Tazmify will review and process verified deletion requests within a
        reasonable period. If additional verification is needed, Tazmify Support may
        contact the requester using the account email or the email used to submit
        the request.
      </>
    ),
  },
];

const toProse = (sections) =>
  sections.map((s, i) => ({
    heading: `${i + 1}. ${s.title}`,
    paragraphs: s.body ? [s.body] : [],
    bullets: s.items,
  }));

export const legal = {
  privacy: {
    title: 'Privacy policy',
    updated: docs.privacy.updated,
    intro: docs.privacy.intro,
    sections: docs.privacy.sections,
  },
  terms: {
    title: 'Terms & conditions',
    updated: docs.terms.updated,
    intro: docs.terms.intro,
    sections: docs.terms.sections,
  },
  deletion: {
    title: 'Data deletion',
    updated: `Last updated on ${lastUpdated}.`,
    intro: [
      'How users can delete Tazmify accounts and connected Instagram data.',
      'Tazmify users can delete their account from settings, disconnect Instagram at any time, or contact support if they cannot access their account.',
    ],
    sections: toProse(deletionSections),
  },
};
