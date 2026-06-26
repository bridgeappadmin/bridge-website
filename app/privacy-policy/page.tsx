import type { Metadata } from "next";
import { LegalPage, privacySections } from "../legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy | Tazmify",
  description:
    "Tazmify Privacy Policy for account data, marketplace profiles, campaign collaboration data, Instagram analytics, third-party services, and account deletion.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="How Tazmify collects, uses, protects, and deletes user information."
      description="This policy explains the information Tazmify collects for creator-brand marketplace features, Instagram analytics, collaboration workflows, support, and platform security."
      sections={privacySections}
    />
  );
}
