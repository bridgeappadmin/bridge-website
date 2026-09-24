// Legal copy ported verbatim from the previous live site
// (bridgeappadmin/bridge-website, app/legal-content.tsx, updated Aug 11, 2026).
// URLs are kept the same: /privacy-policy, /terms-and-conditions, /data-deletion.
import React from 'react';
import { Link } from 'react-router-dom';

export const supportEmail = 'tazmifyappadmin@gmail.com';
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

const privacySections = [
  {
    title: "Introduction",
    body: (
      <>
        Tazmify is a creator-brand marketplace platform that helps content creators
        and businesses discover, connect, and collaborate on marketing campaigns.
        This Privacy Policy explains how we collect, use, store, and protect user
        information when using Tazmify and its related services. By using Tazmify,
        you agree to the practices described in this Privacy Policy.
      </>
    ),
  },
  {
    title: "Information We Collect",
    body: (
      <>
        We may collect the following information when users create an account,
        complete a profile, connect social accounts, create campaigns, apply to
        opportunities, upload media, message other users, or contact support.
      </>
    ),
    items: [
      "Account information: name, email address, phone number, address, profile image, and account role such as Creator or Brand.",
      "Profile information: bio, niche or category information, social media links, brand details, creator details, portfolio content, and other information users choose to provide.",
      "Campaign and collaboration data: campaign creation details, applications, pitches, messages between users, uploaded files, and media.",
      "Support and operational data: requests sent to Tazmify support, device or usage information needed to secure and operate the platform, and notification preferences.",
    ],
  },
  {
    title: "Instagram Integration",
    body: (
      <>
        Tazmify allows creators to voluntarily connect their Instagram account using
        Instagram&apos;s official OAuth authorization system. With user permission,
        Tazmify may access analytics data provided through the Instagram Graph API.
        Tazmify does not access or store Instagram passwords.
      </>
    ),
    items: [
      "Follower count, reach, impressions, profile visits, and media performance metrics.",
      "Instagram analytics may be used to help brands evaluate creator profiles, improve creator discovery, support campaign collaboration decisions, and provide analytics insights within the platform.",
      "Users may disconnect their Instagram account at any time through account settings.",
      "When an Instagram account is disconnected or a deletion request is completed, Tazmify removes connected Instagram tokens and deletes stored Instagram analytics data unless limited retention is required for legal or security purposes.",
    ],
  },
  {
    title: "YouTube Integration",
    body: (
      <>
        Tazmify allows creators to voluntarily connect their YouTube channel using
        Google&apos;s official OAuth authorization system. With user permission,
        Tazmify accesses data through the YouTube Data API and the YouTube Analytics
        API. Tazmify does not access or store Google or YouTube passwords.
        Tazmify&apos;s use of YouTube API Services is subject to the{" "}
        <LegalLink href="https://www.youtube.com/t/terms">
          YouTube Terms of Service
        </LegalLink>
        , and Google&apos;s handling of your data is described in the{" "}
        <LegalLink href="https://policies.google.com/privacy">
          Google Privacy Policy
        </LegalLink>
        . Tazmify&apos;s use and transfer of information received from Google APIs
        adheres to the{" "}
        <LegalLink href="https://developers.google.com/terms/api-services-user-data-policy">
          Google API Services User Data Policy
        </LegalLink>
        , including the Limited Use requirements.
      </>
    ),
    items: [
      "Channel information: channel title, subscriber count, total view count, and video count.",
      "Channel analytics for the creator's own channel over the last 30 days: views, estimated watch time, average view duration, subscribers gained, likes, and comments.",
      "YouTube analytics may be used to help brands evaluate creator profiles, improve creator discovery, support campaign collaboration decisions, and provide analytics insights within the platform.",
      "Users may disconnect their YouTube channel at any time through account settings, and may revoke Tazmify's access at any time via the Google security settings page at https://myaccount.google.com/permissions.",
      "When a YouTube channel is disconnected or a deletion request is completed, Tazmify removes the stored Google OAuth token and deletes stored YouTube analytics data unless limited retention is required for legal or security purposes.",
    ],
  },
  {
    title: "How We Use Information",
    items: [
      "Create, authenticate, and manage user accounts.",
      "Provide marketplace, campaign, collaboration, profile, analytics, and messaging features.",
      "Display creator analytics and profile information to support marketplace discovery.",
      "Send notifications, product updates, security messages, and support communications.",
      "Improve platform performance, user experience, fraud prevention, and platform security.",
      "Maintain platform integrity, investigate misuse, enforce terms, and comply with legal obligations.",
    ],
  },
  {
    title: "Data Sharing",
    body: (
      <>
        Tazmify does not sell personal information. Certain profile, campaign, and
        analytics information may be visible to other Tazmify users as part of the
        marketplace experience.
      </>
    ),
    items: [
      "Tazmify may use trusted service providers for cloud hosting, authentication, file storage, notifications, analytics, and infrastructure services.",
      "Information may be disclosed if required by law or when necessary to protect platform security, users, or legal rights.",
      "Creator profile and analytics information may be visible to brands where required for creator discovery and campaign collaboration.",
      "Brand profile and campaign information may be visible to creators where required for campaign discovery and applications.",
    ],
  },
  {
    title: "Data Retention",
    body: (
      <>
        Tazmify retains user information for as long as needed to provide the
        platform, comply with legal obligations, resolve disputes, enforce
        agreements, maintain security, and support legitimate business operations.
        Users may request account deletion at any time as described below.
      </>
    ),
  },
  {
    title: "Data Security",
    body: (
      <>
        Tazmify uses reasonable technical and organizational safeguards to protect
        user information, including secure infrastructure, encrypted storage
        practices, and authenticated access controls. No online service can
        guarantee absolute security.
      </>
    ),
  },
  {
    title: "Account Deletion",
    body: (
      <>
        Users may request deletion of their account and associated data through
        platform settings or by contacting support. Instagram and YouTube
        connections can also be disconnected at any time. Deletion requests can be
        sent to{" "}
        <LegalEmail /> if a user cannot access the Tazmify application.
      </>
    ),
  },
  {
    title: "Third-Party Services",
    body: (
      <>
        Tazmify may integrate with third-party platforms and services including
        Instagram / Meta, YouTube / Google (YouTube Data API and YouTube Analytics
        API), Google Sign-In, and Apple Sign-In. Use of third-party
        services may also be subject to their respective privacy policies and
        terms. Tazmify is not responsible for the privacy practices of third-party
        services.
      </>
    ),
  },
  {
    title: "Changes to This Policy",
    body: (
      <>
        We may update this Privacy Policy from time to time. Updated versions will
        be posted on this page with a revised Last Updated date. Continued use of
        Tazmify after updates constitutes acceptance of the revised policy.
      </>
    ),
  },
  {
    title: "Contact",
    body: (
      <>
        For privacy-related questions or support requests, contact Tazmify Support
        at <LegalEmail />.
      </>
    ),
  },
];

const termsSections = [
  {
    title: "Introduction",
    body: (
      <>
        Welcome to Tazmify. Tazmify is a platform that connects content creators and
        brands for influencer marketing collaborations, campaign discovery,
        communication, and analytics-driven partnerships. By accessing or using
        Tazmify, you agree to these Terms & Conditions. If you do not agree, please
        do not use the platform.
      </>
    ),
  },
  {
    title: "Eligibility",
    body: (
      <>
        Users must be legally permitted to use the platform under applicable laws
        in their jurisdiction.
      </>
    ),
    items: [
      "The information you provide must be accurate and current.",
      "You must be authorized to use any connected social accounts.",
      "You agree to use Tazmify lawfully and responsibly.",
      "You are responsible for complying with all laws, platform policies, advertising rules, disclosure requirements, and contractual obligations that apply to your collaborations.",
    ],
  },
  {
    title: "User Accounts",
    body: (
      <>
        Users are responsible for maintaining the security of their account,
        keeping login credentials confidential, and all activity conducted through
        their account. Tazmify may suspend or terminate accounts involved in
        unauthorized, abusive, fraudulent, or harmful activity.
      </>
    ),
  },
  {
    title: "Platform Usage",
    body: (
      <>
        Tazmify provides tools that allow creators to showcase profiles and
        analytics, brands to create campaigns and discover creators, and users to
        communicate and collaborate within the platform.
      </>
    ),
    items: [
      "Tazmify does not guarantee campaign success, partnership outcomes, financial results, engagement performance, or creator or brand authenticity beyond available platform information.",
      "Users are responsible for independently evaluating collaborations, agreements, deliverables, payments, and legal obligations.",
      "Tazmify may update, improve, restrict, suspend, or discontinue features as needed to operate and protect the platform.",
    ],
  },
  {
    title: "Instagram Integration",
    body: (
      <>
        Tazmify may allow creators to connect Instagram accounts through
        Instagram&apos;s official OAuth authorization system. By connecting
        Instagram, users authorize Tazmify to access permitted analytics and profile
        data through the Instagram Graph API. Tazmify is not affiliated with,
        endorsed by, or operated by Instagram or Meta. Users may disconnect
        Instagram integrations at any time through account settings.
      </>
    ),
  },
  {
    title: "YouTube Integration",
    body: (
      <>
        Tazmify may allow creators to connect their YouTube channel through
        Google&apos;s official OAuth authorization system. By connecting YouTube,
        users authorize Tazmify to access permitted channel and analytics data
        through the YouTube Data API and the YouTube Analytics API. By using the
        YouTube integration, you also agree to be bound by the{" "}
        <LegalLink href="https://www.youtube.com/t/terms">
          YouTube Terms of Service
        </LegalLink>
        . Tazmify is not affiliated with, endorsed by, or operated by YouTube or
        Google. Users may disconnect YouTube integrations at any time through
        account settings.
      </>
    ),
  },
  {
    title: "Prohibited Activities",
    items: [
      "Provide false or misleading information.",
      "Impersonate another person, creator, or business.",
      "Misuse platform messaging features.",
      "Scrape, copy, or exploit platform data without authorization.",
      "Upload illegal, harmful, abusive, or infringing content.",
      "Attempt unauthorized access to systems or accounts.",
      "Interfere with platform security, availability, or operations.",
    ],
  },
  {
    title: "User Content",
    body: (
      <>
        Users retain ownership of content they upload to Tazmify, including profile
        information, campaign content, media uploads, and messages. By uploading
        content, users grant Tazmify a limited right to store, display, and process
        such content solely for operating, securing, improving, and supporting
        platform functionality. Users are responsible for ensuring they have rights
        to the content they upload.
      </>
    ),
  },
  {
    title: "Privacy",
    body: (
      <>
        Use of Tazmify is also governed by our{" "}
        <Link to="/privacy-policy">
          Privacy Policy
        </Link>
        . By using the platform, users acknowledge and agree to the collection and
        use of information as described in the Privacy Policy.
      </>
    ),
  },
  {
    title: "Third-Party Services",
    body: (
      <>
        Tazmify may integrate with third-party services including Instagram / Meta,
        YouTube / Google (YouTube Data API and YouTube Analytics API), Google
        Sign-In, and Apple Sign-In. Use of third-party services may also be
        subject to those providers&apos; own terms and policies. Tazmify is not
        responsible for third-party services or platforms.
      </>
    ),
  },
  {
    title: "Limitation of Liability",
    body: (
      <>
        Tazmify is provided on an as available basis. To the maximum extent
        permitted by law, Tazmify shall not be liable for indirect or consequential
        damages, business losses, lost profits, collaboration disputes between
        users, platform interruptions, or data loss. Users use the platform at
        their own discretion and risk.
      </>
    ),
  },
  {
    title: "Termination",
    body: (
      <>
        Tazmify may suspend or terminate access to the platform at any time if
        users violate these Terms & Conditions or engage in harmful or unlawful
        activity. Users may stop using the platform or delete their account at any
        time.
      </>
    ),
  },
  {
    title: "Changes to These Terms",
    body: (
      <>
        Tazmify may update these Terms & Conditions from time to time. Updated
        versions will be posted on this page with a revised Last Updated date.
        Continued use of Tazmify after changes constitutes acceptance of the
        updated terms.
      </>
    ),
  },
  {
    title: "Contact",
    body: (
      <>
        For questions regarding these Terms & Conditions, contact Tazmify Support
        at <LegalEmail />.
      </>
    ),
  },
];

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
    updated: `Last updated on ${lastUpdated}.`,
    intro: [
      'How Tazmify collects, uses, protects, and deletes user information.',
      'This policy explains the information Tazmify collects for creator-brand marketplace features, Instagram analytics, collaboration workflows, support, and platform security.',
    ],
    sections: toProse(privacySections),
  },
  terms: {
    title: 'Terms & conditions',
    updated: `Last updated on ${lastUpdated}.`,
    intro: [
      'The rules for using the Tazmify creator-brand marketplace.',
      'These Terms & Conditions explain eligibility, user accounts, platform usage, integrations, prohibited activities, user content, and liability.',
    ],
    sections: toProse(termsSections),
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
