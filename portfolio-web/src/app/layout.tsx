import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Vinay Kumar — Senior AI Engineer',
  description:
    'Enterprise AI Platform Engineer specializing in bespoke Agent Execution Engines, gVisor MicroVM Sandboxes, Model Context Protocol (MCP) Platforms, and production GenAI architectures.',
  keywords: [
    'Vinay Kumar',
    'Senior AI Engineer',
    'Agent Systems',
    'MCP Platform',
    'Model Context Protocol',
    'gVisor Sandbox',
    'GenAI Engineer',
    'Infosys AI Engineer',
  ],
  authors: [{ name: 'Vinay Kumar' }],
  creator: 'Vinay Kumar',
  openGraph: {
    title: 'Vinay Kumar — Senior AI Engineer',
    description:
      'Enterprise AI Platform Engineer building foundational Agent Execution Harnesses, gVisor sandboxes, and MCP platforms.',
    url: 'https://viinai.dev',
    siteName: 'Vinay Kumar — Senior AI Engineer',
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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-[#1d1d1f] font-sans antialiased selection:bg-[#0071e3] selection:text-white">
        {children}
      </body>
    </html>
  );
}
