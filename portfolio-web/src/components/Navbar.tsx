'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Download, FileText, Menu, X, ArrowUpRight, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export function Navbar({ onOpenResumeModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Introduction', href: '/' },
    { name: 'Experience', href: '/experience' },
    { name: 'Skills', href: '/skills' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/[0.08]">
      <nav className="w-full h-12 flex items-center justify-between px-4 sm:px-6 max-w-[1024px] mx-auto">
        {/* Brand */}
        <Link href="/" className="flex items-center group">
          <span className="font-bold text-sm tracking-tight text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
            Vinay Kumar
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-center flex-1 mx-8 gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[12px] transition-opacity tracking-wide ${
                  isActive ? 'font-semibold text-[#1d1d1f]' : 'font-normal text-[#1d1d1f] hover:opacity-70'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenResumeModal}
            className="text-[12px] font-normal text-[#1d1d1f] hover:opacity-70 transition-opacity tracking-wide flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            Live CV
          </button>

          <div className="relative">
            <button
              onClick={() => setCvDropdownOpen(!cvDropdownOpen)}
              onBlur={() => setTimeout(() => setCvDropdownOpen(false), 200)}
              className="text-[12px] font-normal text-[#1d1d1f] hover:opacity-70 transition-opacity tracking-wide flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </button>

            {cvDropdownOpen && (
              <div className="absolute right-0 mt-3 w-52 py-1.5 bg-white border border-black/[0.08] rounded-2xl shadow-xl animate-in fade-in zoom-in-95">
                <a
                  href={portfolioData.deliverables.pdf}
                  download="Vinay_Kumar_CV.pdf"
                  className="flex items-center justify-between px-4 py-2 text-xs text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
                >
                  <span>PDF (1-Page Vector)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#0071e3]" />
                </a>
                <a
                  href={portfolioData.deliverables.docx}
                  download="Vinay_Kumar_CV.docx"
                  className="flex items-center justify-between px-4 py-2 text-xs text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
                >
                  <span>Word (Editable DOCX)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#0071e3]" />
                </a>
                <div className="border-t border-black/[0.06] my-1" />
                <a
                  href={portfolioData.deliverables.html}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2 text-xs text-[#86868b] hover:bg-[#f5f5f7] hover:text-[#1d1d1f] transition-colors"
                >
                  <span>Standalone Web Resume</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#1d1d1f] hover:opacity-70"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-white border-t border-black/[0.08] shadow-lg animate-in fade-in">
          <div className="flex flex-col gap-1 text-[#1d1d1f] text-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-3 border-b border-black/[0.04] transition-colors ${
                    isActive ? 'font-semibold bg-[#ffffff]' : 'hover:bg-[#f5f5f7]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-3 flex flex-col gap-2 px-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#ffffff] text-xs font-semibold text-[#1d1d1f]"
              >
                <FileText className="w-4 h-4 text-[#0071e3]" />
                View Live Resume
              </button>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <a
                  href={portfolioData.deliverables.pdf}
                  download="Vinay_Kumar_CV.pdf"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#0071e3] text-xs font-semibold text-white"
                >
                  <Download className="w-3.5 h-3.5" />
                  PDF Resume
                </a>
                <a
                  href={portfolioData.deliverables.docx}
                  download="Vinay_Kumar_CV.docx"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#ffffff] border border-black/[0.08] text-xs font-semibold text-[#1d1d1f]"
                >
                  <Download className="w-3.5 h-3.5" />
                  Word (DOCX)
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
