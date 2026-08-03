'use client';

import React from 'react';
import {
  ArrowRight,
  Download,
  FileText,
  Mail,
  MapPin,
  ChevronRight,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export function Hero({ onOpenResumeModal }: HeroProps) {
  const { personal, stats } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow / Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f5f7] border border-black/[0.04] text-[#1d1d1f] text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[#34c759] inline-block" />
            <span>Senior AI Engineer • Infosys</span>
          </div>

          {/* Apple Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] mb-6 leading-[1.08]">
            Enterprise Agent Systems.
            <span className="block text-[#86868b] font-normal mt-1">
              Engineered for mission-critical scale.
            </span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-base sm:text-lg md:text-xl text-[#6e6e73] font-normal leading-relaxed max-w-2xl mb-10">
            Designing foundational <strong className="text-[#1d1d1f] font-semibold">Event-Driven Agent Engines</strong>,
            isolated <strong className="text-[#1d1d1f] font-semibold">gVisor Sandboxes</strong>, and enterprise-scale{' '}
            <strong className="text-[#1d1d1f] font-semibold">Model Context Protocol (MCP)</strong> platforms across multi-million dollar transformations.
          </p>

          {/* Apple Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
            <a
              href="#architecture"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-white bg-[#0071e3] hover:bg-[#0077ed] transition-all shadow-sm"
            >
              <span>Explore Architecture</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm text-[#1d1d1f] bg-[#f5f5f7] hover:bg-[#e8e8ed] border border-black/[0.06] transition-all"
            >
              <FileText className="w-4 h-4 text-[#0071e3]" />
              <span>Inspect Live CV</span>
            </button>

            <a
              href={portfolioData.deliverables.pdf}
              download="Vinay_Kumar_CV.pdf"
              className="flex items-center gap-1.5 px-4 py-3 rounded-full text-xs font-medium text-[#0071e3] hover:text-[#0077ed] hover:bg-[#f5f5f7] transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>

          {/* Clean Contact & Social Metadata */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#6e6e73] mb-16">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#86868b]" />
              <span>{personal.location}</span>
            </div>
            <span>•</span>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-1.5 hover:text-[#0071e3] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#86868b]" />
              <span>{personal.email}</span>
            </a>
            <span>•</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#0071e3] transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span>•</span>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#0071e3] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Minimalist Bento Stats Grid */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="apple-card p-6 rounded-2xl text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[#86868b] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
