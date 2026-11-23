import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Esan Samuel — Backend & AI Engineer",
  description: "I build backend systems, AI-powered applications, and software infrastructure.",
  openGraph: {
    title: "Esan Samuel — Backend & AI Engineer",
    description: "Building intelligent software and engineering reliable systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
