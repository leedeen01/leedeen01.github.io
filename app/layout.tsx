import "./globals.css";
import InteractiveElements from "../components/InteractiveElements";
import type { Metadata } from "next";
import Link from "next/link";
import { Syne, DM_Mono } from "next/font/google";

// 1. Configure your Google Fonts
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--sans", // Maps to var(--sans) in your CSS
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--mono", // Maps to var(--mono) in your CSS
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lee De En — Computer Science Student @ NUS",
  description: "Personal portfolio of Lee De En, a penultimate Computer Science student at the National University of Singapore specializing in web development, machine learning, and cloud solutions.",
  openGraph: {
    title: "Lee De En — CS @ NUS",
    description: "Penultimate CS student building things at the intersection of web, ML, and cloud.",
    type: "website",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 2. Inject the font variables into the HTML tag
    <html lang="en" className={`${syne.variable} ${dmMono.variable}`} style={{ scrollBehavior: "smooth" }}>
      <body>
        <InteractiveElements />
        {children}
        
        <footer>
          <p className="footer-left"><span>Lee De En</span> &mdash; 2026</p>
          <ul className="footer-nav">
            <li><Link href="/#home">Home</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#timeline">Journey</Link></li>
            <li><Link href="/#projects">Projects</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </footer>
      </body>
    </html>
  );
}