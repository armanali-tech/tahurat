import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tahurat Jahan – Professional Inquiry Portfolio",
  description:
    "Differentiated Questioning for Inclusive Participation and Deeper Thinking in Grade 6 Science",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        className="min-h-screen flex flex-col"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)", color: "#e2e8f0" }}
      >
        <Navigation />
        <main className="flex-1 w-full max-w-[1120px] mx-auto px-4">{children}</main>
        <footer className="border-t border-white/5 text-center text-sm py-8 text-slate-500">
          <p>© 2026 Tahurat Jahan · Professional Inquiry Portfolio</p>
          <p className="mt-1 text-xs text-slate-600">
            EDU7440 – Reflecting in Professional Contexts
          </p>
        </footer>
      </body>
    </html>
  );
}
