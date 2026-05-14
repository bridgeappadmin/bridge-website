import type { Metadata } from "next";
import { LegalPage, deletionSections } from "../legal-content";

export const metadata: Metadata = {
  title: "Data Deletion Instructions | Bridge",
  description:
    "Instructions for deleting a Bridge account, disconnecting Instagram, removing Instagram tokens, and requesting account data deletion by email.",
};

export default function DataDeletionPage() {
  return (
    <LegalPage
      eyebrow="Data Deletion Instructions"
      title="How users can delete Bridge accounts and connected Instagram data."
      description="Bridge users can delete their account from settings, disconnect Instagram at any time, or contact support if they cannot access their account."
      sections={deletionSections}
    />
  );
}
