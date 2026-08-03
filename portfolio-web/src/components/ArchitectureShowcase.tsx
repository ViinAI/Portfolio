'use client';

import React, { useState } from 'react';
import {
  Cpu,
  Shield,
  Layers,
  Sparkles,
  Workflow,
  Terminal,
  Database,
  CheckCircle2,
  TrendingUp,
  Box,
  Radio,
} from 'lucide-react';
import { portfolioData, ProjectOrPillar } from '../data/portfolioData';

export function ArchitectureShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Platform Core', 'Enterprise Product', 'Solution Architecture', 'GenAI & ML'];

  const filteredPillars =
    activeCategory === 'All'
      ? portfolioData.pillars
      : portfolioData.pillars.filter((p) => p.category === activeCategory);

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'agent-execution-harness':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'gvisor-sandbox':
        return <Shield className="w-5 h-5 text-cyan-400" />;
      case 'mcp-platform':
        return <Box className="w-5 h-5 text-emerald-400" />;
      case 'process-harness-product':
        return <Workflow className="w-5 h-5 text-purple-400" />;
      case 'user-centric-harness':
        return <Terminal className="w-5 h-5 text-sky-400" />;
      case 'deal-wins-solutions':
        return <TrendingUp className="w-5 h-5 text-amber-400" />;
      case 'summarization-microservice':
        return <Radio className="w-5 h-5 text-indigo-400" />;
      case 'rag-assistant':
        return <Database className="w-5 h-5 text-teal-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="architecture" className="relative py-24 border-t border-white/5 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Systems & Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            AI Platform Core & Enterprise Products
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Architectural blueprints and engineering implementations powering distributed agent workflows, isolated
            microVM sandboxes, Model Context Protocol tooling, and production GenAI pipelines.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/40 scale-105'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Architecture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-indigo-500/40 transition-colors">
                    {getPillarIcon(pillar.id)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {pillar.organization}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                      {pillar.roleTag}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-indigo-300 transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                  {pillar.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 mb-6">
                  {pillar.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Metrics */}
                {pillar.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-white/5">
                    {pillar.metrics.map((metric, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                      >
                        ⚡ {metric}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {pillar.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
