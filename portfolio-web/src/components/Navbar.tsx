'use client';

import React, { useState, useEffect } from 'react';
import { Download, FileText, ExternalLink, Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export function Navbar({ onOpenResumeModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Architecture', href: '#architecture' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'apple-glass py-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
            : 'bg-white/90 backdrop-blur-md py-4 border-b border-black/[0.04]'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="font-semibold text-base sm:text-lg text-[#1d1d1f] tracking-tight group-hover:text-[#0071e3] transition-colors">
              Vinay Kumar
            </span>
            <span className="hidden sm:inline-block text-[11px] font-medium text-[#86868b] px-2 py-0.5 rounded-full bg-[#f5f5f7] border border-black/[0.04]">
              Senior AI Engineer
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 text-xs font-normal text-[#6e6e73]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#1d1d1f] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Live CV Modal Trigger */}
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full text-[#1d1d1f] bg-[#f5f5f7] hover:bg-[#e8e8ed] border border-black/[0.06] transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#0071e3]" />
              <span>Live CV</span>
            </button>

            {/* Download Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCvDropdownOpen(!cvDropdownOpen)}
                onBlur={() => setTimeout(() => setCvDropdownOpen(false), 200)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-full text-white bg-[#0071e3] hover:bg-[#0077ed] transition-all shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
                <ChevronDown className="w-3 h-3 ml-0.5 opacity-80" />
              </button>

              {cvDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 py-1.5 bg-white border border-black/[0.08] rounded-2xl shadow-xl backdrop-blur-xl animate-in fade-in zoom-in-95">
                  <a
                    href={portfolioData.deliverables.pdf}
                    download="Vinay_Kumar_CV.pdf"
                    className="flex items-center justify-between px-4 py-2 text-xs text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
                  >
                    <span className="font-medium">PDF (1-Page Vector)</span>
                    <ArrowUpRight className="w-3 h-3 text-[#0071e3]" />
                  </a>
                  <a
                    href={portfolioData.deliverables.docx}
                    download="Vinay_Kumar_CV.docx"
                    className="flex items-center justify-between px-4 py-2 text-xs text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
                  >
                    <span className="font-medium">Word (Editable DOCX)</span>
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
            className="md:hidden p-2 rounded-xl text-[#1d1d1f] hover:bg-[#f5f5f7]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-3 pb-6 bg-white border-b border-black/[0.08] shadow-lg animate-in fade-in">
            <div className="flex flex-col gap-2.5 text-[#1d1d1f] font-normal text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-[#f5f5f7] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="border-t border-black/[0.06] my-2 pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#f5f5f7] text-xs font-medium text-[#1d1d1f]"
                >
                  <FileText className="w-4 h-4 text-[#0071e3]" />
                  View Live Resume
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={portfolioData.deliverables.pdf}
                    download="Vinay_Kumar_CV.pdf"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#0071e3] text-xs font-medium text-white"
                  >
                    <Download className="w-3.5 h-3.5" />
                    PDF Resume
                  </a>
                  <a
                    href={portfolioData.deliverables.docx}
                    download="Vinay_Kumar_CV.docx"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#f5f5f7] border border-black/[0.08] text-xs font-medium text-[#1d1d1f]"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Word (DOCX)
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
