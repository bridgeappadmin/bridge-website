import type { Metadata } from "next";
import { LegalPage, termsSections } from "../legal-content";

export const metadata: Metadata = {
  title: "Terms & Conditions | Bridge",
  description:
    "Bridge Terms & Conditions for creator and brand accounts, marketplace usage, Instagram integration, user content, prohibited activities, and third-party services.",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="Terms & Conditions"
      title="The rules for using Bridge as a creator-brand marketplace."
      description="These terms describe eligibility, account responsibilities, platform usage, Instagram integration, user content, prohibited activity, and limitations of liability."
      sections={termsSections}
    />
  );
}
