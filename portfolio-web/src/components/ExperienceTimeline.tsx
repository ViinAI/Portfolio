'use client';

import React, { useState } from 'react';
import { Calendar, MapPin, Building2, Check, ChevronRight } from 'lucide-react';
import { portfolioData, ExperienceItem } from '../data/portfolioData';

export function ExperienceTimeline() {
  const { experience } = portfolioData;
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>(experience[0].id);

  const activeExp: ExperienceItem =
    experience.find((e) => e.id === selectedCompanyId) || experience[0];

  return (
    <section id="experience" className="py-24 bg-white border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] mb-3">
            Career Progression
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">
            Professional Experience.
          </h2>
          <p className="text-[#86868b] text-sm sm:text-base leading-relaxed">
            5.5+ years of production AI engineering spanning foundational agent platforms, isolated sandboxes,
            high-throughput GenAI microservices, and enterprise data pipelines.
          </p>
        </div>

        {/* Apple Segmented Company Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#ffffff] border border-black/[0.04] overflow-x-auto max-w-full gap-1">
            {experience.map((exp) => {
              const isSelected = selectedCompanyId === exp.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedCompanyId(exp.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-white text-[#1d1d1f] shadow-sm border border-black/[0.06] font-bold'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-black/[0.02]'
                  }`}
                >
                  <Building2 className={`w-4 h-4 ${isSelected ? 'text-[#0071e3]' : 'text-[#86868b]'}`} />
                  <span>{exp.company}</span>
                  <span className="text-[11px] text-[#86868b] hidden md:inline">({exp.period})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Company Detailed Bento Card */}
        <div className="bg-[#ffffff] border border-black/[0.06] rounded-3xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all animate-in fade-in duration-300">
          {/* Header Row */}
          <div className="flex flex-wrap items-start justify-between gap-4 pb-6 mb-6 border-b border-black/[0.06]">
            <div>
              <div className="flex items-center gap-2 text-[#0071e3] text-xs font-bold uppercase tracking-wider mb-1.5">
                <Building2 className="w-3.5 h-3.5" />
                <span>{activeExp.company}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight mb-1">
                {activeExp.role}
              </h3>
              <p className="text-xs sm:text-sm text-[#6e6e73] font-normal max-w-2xl">
                {activeExp.summary}
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5 text-xs text-[#86868b]">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/[0.06] text-[#1d1d1f] font-semibold">
                <Calendar className="w-3.5 h-3.5 text-[#0071e3]" />
                <span>{activeExp.period}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#86868b]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeExp.location}</span>
              </div>
            </div>
          </div>

          {/* Key Achievements & Sub-Sections */}
          <div className="space-y-8 mb-8">
            {activeExp.sections && activeExp.sections.length > 0 ? (
              activeExp.sections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-3.5">
                  <div className="flex items-center gap-2 border-b border-black/[0.04] pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0071e3]">
                      {section.title}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.items.map((ach, aIdx) => (
                      <div
                        key={aIdx}
                        className="bg-white border border-black/[0.06] p-5 rounded-2xl shadow-sm hover:border-[#0071e3]/30 transition-colors flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Check className="w-4 h-4 text-[#0071e3] shrink-0" />
                            {ach.lead && (
                              <h4 className="text-sm font-bold text-[#1d1d1f]">{ach.lead}</h4>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed pl-6">
                            {ach.description}
                          </p>
                        </div>

                        {ach.tags && ach.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-black/[0.04] pl-6">
                            {ach.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#ffffff] text-[#1d1d1f] border border-black/[0.04]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeExp.achievements.map((ach, aIdx) => (
                  <div
                    key={aIdx}
                    className="bg-white border border-black/[0.06] p-5 rounded-2xl shadow-sm hover:border-[#0071e3]/30 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Check className="w-4 h-4 text-[#0071e3] shrink-0" />
                        {ach.lead && (
                          <h4 className="text-sm font-bold text-[#1d1d1f]">{ach.lead}</h4>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed pl-6">
                        {ach.description}
                      </p>
                    </div>

                    {ach.tags && ach.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-black/[0.04] pl-6">
                        {ach.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#ffffff] text-[#1d1d1f] border border-black/[0.04]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tech Stack Bar */}
          <div className="bg-white border border-black/[0.06] p-4 sm:p-5 rounded-2xl flex flex-wrap items-center justify-between gap-3 shadow-sm">
            <span className="text-xs font-semibold text-[#86868b]">Environment & Technologies:</span>
            <div className="flex flex-wrap gap-1.5">
              {activeExp.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs font-medium px-2.5 py-1 rounded-lg bg-[#ffffff] text-[#1d1d1f]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
