'use client';

import React, { useState } from 'react';
import { Sparkles, Terminal, Cpu, Database, Wrench, Shield } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function SkillsMatrix() {
  const { skillCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 1:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 2:
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 3:
        return <Terminal className="w-5 h-5 text-purple-400" />;
      default:
        return <Wrench className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 border-t border-white/5 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Skills & Technology Matrix
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive matrix of frameworks, agent paradigms, cloud ecosystems, and AI architectures mastered
            across 5.5+ years of production engineering.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-xs text-slate-400">{category.subtitle}</p>
                  </div>
                </div>

                {/* Skills Badges Grid */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                        skill.highlight
                          ? 'bg-indigo-500/15 text-indigo-200 border border-indigo-500/30 shadow-sm shadow-indigo-500/10'
                          : 'bg-white/[0.03] text-slate-300 border border-white/5 hover:border-white/20'
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span>{category.skills.length} core competencies</span>
                <span className="text-indigo-400 font-medium">Production Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
