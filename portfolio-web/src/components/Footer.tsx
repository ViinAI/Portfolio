'use client';

import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-zinc-950 py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-bold text-white text-xs">
            VK
          </div>
          <div>
            <div className="font-semibold text-slate-200">Vinay Kumar</div>
            <div className="text-[11px] text-slate-400">Senior AI Engineer • Enterprise AI Platforms</div>
          </div>
        </div>

        {/* Center Deliverables Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
          <a
            href={portfolioData.deliverables.pdf}
            download="Vinay_Kumar_CV.pdf"
            className="hover:text-indigo-300 transition-colors"
          >
            PDF Resume
          </a>
          <span>•</span>
          <a
            href={portfolioData.deliverables.docx}
            download="Vinay_Kumar_CV.docx"
            className="hover:text-cyan-300 transition-colors"
          >
            Word Resume
          </a>
          <span>•</span>
          <a
            href={portfolioData.deliverables.html}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Web Resume
          </a>
          <span>•</span>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <LinkedinIcon className="w-3 h-3 text-cyan-400" />
            <span>LinkedIn</span>
          </a>
          <span>•</span>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <GithubIcon className="w-3 h-3 text-purple-400" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Right / Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} Vinay Kumar. Built with Next.js 15.
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
