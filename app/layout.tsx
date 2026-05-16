import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The AI Vault | Private AI Workspace",
  description:
    "A private, premium workspace for organizing AI tools, prompts, templates, workflows, content systems, business intelligence, and repeatable AI assets.",
  openGraph: {
    title: "The AI Vault",
    description:
      "Organize AI tools, prompts, templates, workflows, content systems, and repeatable AI assets in one premium workspace.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
