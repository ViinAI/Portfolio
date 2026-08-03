'use client';

import React, { useState, useEffect } from 'react';
import { Download, FileText, ExternalLink, Menu, X, ArrowUpRight } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 20);
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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-2xl shadow-indigo-950/20 border-white/10'
            : 'bg-zinc-950/60 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            VK
          </div>
          <div>
            <span className="font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
              Vinay Kumar
            </span>
            <span className="hidden sm:inline-block text-xs text-slate-400 ml-2 px-2 py-0.5 rounded-full bg-white/5 border border-white/5">
              Senior AI Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-indigo-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Live CV Modal Trigger */}
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-xl text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:border-indigo-500/40"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-400" />
            <span>Live CV</span>
          </button>

          {/* Download Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCvDropdownOpen(!cvDropdownOpen)}
              onBlur={() => setTimeout(() => setCvDropdownOpen(false), 200)}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 shadow-md shadow-indigo-600/20 border border-indigo-400/30 transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>

            {cvDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 py-2 bg-zinc-900/95 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95">
                <a
                  href={portfolioData.deliverables.pdf}
                  download="Vinay_Kumar_CV.pdf"
                  className="flex items-center justify-between px-4 py-2 text-xs text-slate-200 hover:bg-indigo-600/20 hover:text-white transition-colors"
                >
                  <span className="font-medium">PDF (1-Page Vector)</span>
                  <ArrowUpRight className="w-3 h-3 text-indigo-400" />
                </a>
                <a
                  href={portfolioData.deliverables.docx}
                  download="Vinay_Kumar_CV.docx"
                  className="flex items-center justify-between px-4 py-2 text-xs text-slate-200 hover:bg-indigo-600/20 hover:text-white transition-colors"
                >
                  <span className="font-medium">Word (Editable DOCX)</span>
                  <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                </a>
                <div className="border-t border-white/5 my-1" />
                <a
                  href={portfolioData.deliverables.html}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2 text-xs text-slate-400 hover:bg-white/5 hover:text-slate-200 transition-colors"
                >
                  <span>Standalone HTML</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 p-5 glass-panel rounded-2xl md:hidden shadow-2xl border-white/10 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-3 text-slate-200 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="border-t border-white/10 my-2 pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                View Full Live CV
              </button>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={portfolioData.deliverables.pdf}
                  download="Vinay_Kumar_CV.pdf"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white"
                >
                  <Download className="w-3.5 h-3.5" />
                  PDF Resume
                </a>
                <a
                  href={portfolioData.deliverables.docx}
                  download="Vinay_Kumar_CV.docx"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white"
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
