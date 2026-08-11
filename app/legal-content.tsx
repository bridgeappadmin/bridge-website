import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

export const supportEmail = "tazmifyappadmin@gmail.com";
export const lastUpdated = "August 11, 2026";

type LegalSection = {
  title: string;
  body?: ReactNode;
  items?: string[];
};

export const privacySections: LegalSection[] = [
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

export const termsSections: LegalSection[] = [
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
        <Link href="/privacy-policy" className="font-semibold text-[var(--tazmify-yellow)] transition hover:text-white">
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

export const deletionSections: LegalSection[] = [
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

export function LegalPage({
  eyebrow,
  title,
  description,
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  sections: LegalSection[];
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--tazmify-bg)] text-white">
      <div className="noise-layer" />
      <div className="ambient-light" />
      <div className="pointer-events-none absolute left-[-10rem] top-24 h-80 w-80 rounded-full bg-[rgba(242,100,34,0.18)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-40 h-96 w-96 rounded-full bg-[rgba(75,63,163,0.24)] blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <LegalHeader />

        <section className="grid gap-8 py-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(280px,0.22fr)] lg:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--tazmify-yellow)]">
              {eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/62 sm:text-lg">
              {description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/privacy-policy" className="legal-pill">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="legal-pill">
                Terms & Conditions
              </Link>
              <Link href="/data-deletion" className="legal-pill">
                Data Deletion
              </Link>
            </div>
          </div>

          <aside className="h-fit rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--tazmify-yellow)]">
              Document status
            </p>
            <dl className="mt-4 grid gap-4 text-sm">
              <div>
                <dt className="font-semibold text-white">Last Updated</dt>
                <dd className="mt-1 text-white/54">{lastUpdated}</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Platform</dt>
                <dd className="mt-1 text-white/54">Tazmify creator-brand marketplace</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Support</dt>
                <dd className="mt-1">
                  <LegalEmail />
                </dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="grid gap-4 pb-16">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(135deg,var(--tazmify-orange),var(--tazmify-purple))] text-sm font-semibold text-white shadow-[0_0_36px_rgba(242,100,34,0.2)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                    {section.title}
                  </h2>
                  {section.body ? (
                    <p className="mt-3 text-sm leading-7 text-white/62 sm:text-base">
                      {section.body}
                    </p>
                  ) : null}
                  {section.items ? (
                    <ul className="mt-4 grid gap-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-md border border-white/8 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-white/72"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

function LegalHeader() {
  return (
    <header className="sticky top-3 z-20 rounded-full border border-white/10 bg-[#070812]/76 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:px-5">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <TazmifyMark className="h-9 w-auto" />
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--tazmify-yellow)]">
              Legal center
            </p>
            <p className="text-sm font-semibold text-white">Tazmify</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium text-white/52 md:flex">
          <Link href="/privacy-policy" className="transition hover:text-white">
            Privacy
          </Link>
          <Link href="/terms-and-conditions" className="transition hover:text-white">
            Terms
          </Link>
          <Link href="/data-deletion" className="transition hover:text-white">
            Data Deletion
          </Link>
        </nav>

        <Link
          href="/"
          className="inline-flex min-h-10 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-[#090a14] transition hover:translate-y-[-1px]"
        >
          Home
        </Link>
      </div>
    </header>
  );
}

function LegalEmail() {
  return (
    <a
      href={`mailto:${supportEmail}`}
      className="font-semibold text-[var(--tazmify-yellow)] transition hover:text-white"
    >
      {supportEmail}
    </a>
  );
}

function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-[var(--tazmify-yellow)] transition hover:text-white"
    >
      {children}
    </a>
  );
}

function TazmifyMark({ className }: { className?: string }) {
  return (
    <Image
      src="/tazmify-logo.svg"
      alt="Tazmify"
      width={60}
      height={32}
      className={className}
      priority
    />
  );
}
