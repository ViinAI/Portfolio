'use client';

import React from 'react';
import { Calendar, MapPin, Building2, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function ExperienceTimeline() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-[#fafafc] border-t border-black/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] mb-3">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">
            Professional Experience.
          </h2>
          <p className="text-[#86868b] text-sm sm:text-base leading-relaxed">
            Over 5.5 years designing foundational AI infrastructure, autonomous agent harnesses, and data analytics
            solutions across enterprise organizations.
          </p>
        </div>

        {/* Experience Cards Stream */}
        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white border border-black/[0.06] p-6 sm:p-8 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
            >
              {/* Header Row */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4 pb-4 border-b border-black/[0.04]">
                <div>
                  <div className="flex items-center gap-1.5 text-[#0071e3] text-xs font-semibold uppercase tracking-wider mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs text-[#86868b]">
                  <div className="flex items-center gap-1.5 font-medium text-[#1d1d1f]">
                    <Calendar className="w-3.5 h-3.5 text-[#0071e3]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#86868b]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-[#6e6e73] text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {exp.summary}
              </p>

              {/* Achievements */}
              <div className="space-y-4 mb-6">
                {exp.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1d1d1f]">
                    <Check className="w-4 h-4 text-[#0071e3] shrink-0 mt-0.5" />
                    <div>
                      {ach.lead && (
                        <strong className="font-semibold text-[#1d1d1f] mr-1.5">
                          {ach.lead}:
                        </strong>
                      )}
                      <span className="text-[#6e6e73]">{ach.description}</span>
                      {ach.tags && ach.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {ach.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#f5f5f7] text-[#1d1d1f] border border-black/[0.04]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Footer */}
              <div className="pt-4 border-t border-black/[0.04] flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-medium text-[#86868b] mr-2">Environment:</span>
                {exp.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-normal px-2.5 py-0.5 rounded-md bg-[#f5f5f7] text-[#6e6e73]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
