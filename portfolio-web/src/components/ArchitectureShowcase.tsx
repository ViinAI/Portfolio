'use client';

import React, { useState } from 'react';
import {
  Cpu,
  Shield,
  Layers,
  Workflow,
  Terminal,
  Database,
  TrendingUp,
  Box,
  Radio,
  Check,
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
        return <Cpu className="w-4 h-4 text-[#0071e3]" />;
      case 'gvisor-sandbox':
        return <Shield className="w-4 h-4 text-[#0071e3]" />;
      case 'mcp-platform':
        return <Box className="w-4 h-4 text-[#0071e3]" />;
      case 'process-harness-product':
        return <Workflow className="w-4 h-4 text-[#0071e3]" />;
      case 'user-centric-harness':
        return <Terminal className="w-4 h-4 text-[#0071e3]" />;
      case 'deal-wins-solutions':
        return <TrendingUp className="w-4 h-4 text-[#0071e3]" />;
      case 'summarization-microservice':
        return <Radio className="w-4 h-4 text-[#0071e3]" />;
      case 'rag-assistant':
        return <Database className="w-4 h-4 text-[#0071e3]" />;
      default:
        return <Layers className="w-4 h-4 text-[#0071e3]" />;
    }
  };

  return (
    <section id="architecture" className="py-24 bg-white border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] mb-3">
            Core Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">
            AI Platform Core & Products.
          </h2>
          <p className="text-[#86868b] text-sm sm:text-base leading-relaxed">
            Architectural blueprints and engineering implementations powering distributed agent workflows, isolated
            microVM sandboxes, Model Context Protocol tooling, and production GenAI pipelines.
          </p>
        </div>

        {/* Apple Segmented Control */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-[#ffffff] border border-black/[0.04] overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-white text-[#1d1d1f] shadow-sm border border-black/[0.04]'
                    : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Architecture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="apple-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-white border border-black/[0.06] shadow-sm">
                    {getPillarIcon(pillar.id)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white border border-black/[0.06] text-[#6e6e73]">
                      {pillar.organization}
                    </span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#0071e3]/10 text-[#0071e3]">
                      {pillar.roleTag}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1d1d1f] tracking-tight mb-2.5">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-[#6e6e73] text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                  {pillar.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 mb-6">
                  {pillar.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#6e6e73]">
                      <Check className="w-3.5 h-3.5 text-[#0071e3] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Key Metrics */}
                {pillar.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4 pt-4 border-t border-black/[0.06]">
                    {pillar.metrics.map((metric, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white text-[#1d1d1f] border border-black/[0.06]"
                      >
                        ⚡ {metric}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {pillar.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-normal px-2 py-0.5 rounded-md bg-white text-[#86868b] border border-black/[0.04]"
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
