import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Vinay Kumar | Senior AI Engineer — Enterprise Agent Systems & Platforms',
  description:
    'Senior AI Engineer portfolio of Vinay Kumar. Specializing in bespoke Agent Execution Engines, gVisor Sandboxes, Model Context Protocol (MCP) Platforms, and production GenAI solutions.',
  keywords: [
    'Vinay Kumar',
    'Senior AI Engineer',
    'Agent Systems',
    'MCP Platform',
    'Model Context Protocol',
    'gVisor Sandbox',
    'GenAI Engineer',
    'Infosys AI Engineer',
    'Next.js Portfolio',
    'Machine Learning Engineer',
  ],
  authors: [{ name: 'Vinay Kumar' }],
  creator: 'Vinay Kumar',
  openGraph: {
    title: 'Vinay Kumar | Senior AI Engineer',
    description:
      'Enterprise AI Platform Engineer building foundational Agent Execution Harnesses, gVisor sandboxes, and MCP platforms.',
    url: 'https://viinai.dev',
    siteName: 'Vinay Kumar — Senior AI Engineer Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#09090b] text-slate-100 font-sans antialiased selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
