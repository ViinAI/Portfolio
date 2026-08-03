'use client';

import React from 'react';
import {
  ArrowRight,
  Download,
  FileText,
  Mail,
  MapPin,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export function Hero({ onOpenResumeModal }: HeroProps) {
  const { personal, stats } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="glow-ambient bg-indigo-600 top-[-10%] left-[20%]" />
      <div className="glow-ambient bg-cyan-600 top-[20%] right-[10%]" />
      <div className="glow-ambient bg-purple-700 bottom-[5%] left-[5%]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-8 backdrop-blur-md animate-pulse">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block -ml-3" />
            <span>Senior AI Engineer • Enterprise AI Platforms & Agent Systems</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            <span className="block text-slate-100">Engineering Enterprise</span>
            <span className="gradient-text-electric">Agent Platforms & GenAI</span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mb-10">
            Hi, I’m <strong className="text-white font-semibold">{personal.name}</strong>. I design and build
            foundational <span className="text-indigo-300 font-medium">Event-Driven Agent Execution Engines</span>,
            isolated <span className="text-cyan-300 font-medium">gVisor Sandboxes</span>, and enterprise-grade{' '}
            <span className="text-emerald-300 font-medium">Model Context Protocol (MCP)</span> platforms at Infosys.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#architecture"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 shadow-xl shadow-indigo-600/30 border border-indigo-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore AI Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/40 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>Inspect Live CV</span>
            </button>

            <a
              href={portfolioData.deliverables.pdf}
              download="Vinay_Kumar_CV.pdf"
              className="flex items-center gap-2 px-4 py-3.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download PDF</span>
            </a>
          </div>

          {/* Social & Contact Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 mb-16">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{personal.location}</span>
            </div>

            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-indigo-500/30 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>{personal.email}</span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-cyan-500/30 text-slate-300 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-purple-500/30 text-slate-300 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-purple-400" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Metrics & Highlights Grid */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl border-white/10 hover:border-indigo-500/30 transition-colors text-center"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-cyan-200 to-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
