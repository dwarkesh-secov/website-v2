import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Secov | SOC 2 Compliance Automation Platform",
  description:
    "Get audit-ready faster with Secov. Automate your SOC 2 certification, build customer trust, and safeguard data with expert-driven compliance services tailored to your business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-slate-900 bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
