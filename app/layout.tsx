import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bridge | Influencer Marketplace",
  description:
    "Bridge is an influencer marketplace connecting brands and creators through onboarding, campaign management, profile tools, and messaging.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full font-sans text-[var(--bridge-ink)]">
        {children}
      </body>
    </html>
  );
}
