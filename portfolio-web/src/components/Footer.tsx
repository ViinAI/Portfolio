'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black/[0.08] bg-[#f5f5f7] py-12 text-[#86868b] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <div className="font-semibold text-[#1d1d1f] text-sm">Vinay Kumar</div>
          <div className="text-[11px] text-[#86868b]">Senior AI Engineer • Enterprise AI Platforms</div>
        </div>

        {/* Deliverables Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[#6e6e73]">
          <a
            href={portfolioData.deliverables.pdf}
            download="Vinay_Kumar_CV.pdf"
            className="hover:text-[#0071e3] transition-colors"
          >
            PDF Resume
          </a>
          <span>•</span>
          <a
            href={portfolioData.deliverables.docx}
            download="Vinay_Kumar_CV.docx"
            className="hover:text-[#0071e3] transition-colors"
          >
            Word Resume
          </a>
          <span>•</span>
          <a
            href={portfolioData.deliverables.html}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1d1d1f] transition-colors"
          >
            Web Resume
          </a>
          <span>•</span>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0071e3] transition-colors flex items-center gap-1"
          >
            <LinkedinIcon className="w-3 h-3 text-[#0071e3]" />
            <span>LinkedIn</span>
          </a>
          <span>•</span>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1d1d1f] transition-colors flex items-center gap-1"
          >
            <GithubIcon className="w-3 h-3 text-[#1d1d1f]" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Right / Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-[#86868b]">
            © {new Date().getFullYear()} Vinay Kumar.
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white border border-black/[0.08] hover:bg-[#e8e8ed] text-[#1d1d1f] transition-colors shadow-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
