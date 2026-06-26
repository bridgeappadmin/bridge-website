import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tazmify | Brand and Creator Campaigns",
  description:
    "Tazmify is a premium influencer marketplace where brands and creators discover, launch, and collaborate on campaigns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full font-sans text-[var(--tazmify-ink)]">
        {children}
      </body>
    </html>
  );
}
