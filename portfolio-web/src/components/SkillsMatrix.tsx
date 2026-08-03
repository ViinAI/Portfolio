'use client';

import React from 'react';
import { Sparkles, Terminal, Cpu, Database, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function SkillsMatrix() {
  const { skillCategories } = portfolioData;

  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Cpu className="w-4 h-4 text-[#0071e3]" />;
      case 1:
        return <Sparkles className="w-4 h-4 text-[#0071e3]" />;
      case 2:
        return <Database className="w-4 h-4 text-[#0071e3]" />;
      case 3:
        return <Terminal className="w-4 h-4 text-[#0071e3]" />;
      default:
        return <Wrench className="w-4 h-4 text-[#0071e3]" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-white border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] mb-3">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">
            Skills & Competencies.
          </h2>
          <p className="text-[#86868b] text-sm sm:text-base leading-relaxed">
            A comprehensive matrix of frameworks, agent paradigms, cloud ecosystems, and AI architectures mastered
            across 5.5+ years of production engineering.
          </p>
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="apple-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-white border border-black/[0.06] shadow-sm">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1d1d1f] tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#86868b]">{category.subtitle}</p>
                  </div>
                </div>

                {/* Skills Badges Grid */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        skill.highlight
                          ? 'bg-white text-[#1d1d1f] border border-black/[0.08] shadow-sm font-semibold'
                          : 'bg-black/[0.03] text-[#6e6e73]'
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer */}
              <div className="mt-6 pt-4 border-t border-black/[0.04] flex items-center justify-between text-[11px] text-[#86868b]">
                <span>{category.skills.length} core competencies</span>
                <span className="text-[#0071e3] font-medium">Production Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
