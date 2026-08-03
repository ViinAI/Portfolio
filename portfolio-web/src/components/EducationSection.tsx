'use client';

import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 bg-[#fafafc] border-t border-black/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] mb-3">
            Academics
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] mb-3">
            Education.
          </h2>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white border border-black/[0.06] p-6 sm:p-7 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-[#f5f5f7] border border-black/[0.04] text-[#0071e3]">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f5f5f7] text-xs text-[#86868b] font-medium">
                    <Calendar className="w-3 h-3 text-[#0071e3]" />
                    <span>{edu.year}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#1d1d1f] tracking-tight mb-1">
                  {edu.degree}
                </h3>
                <p className="text-[#0071e3] text-xs sm:text-sm font-medium mb-3">
                  {edu.institution}
                </p>
                <p className="text-[#6e6e73] text-xs leading-relaxed font-normal">
                  {edu.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
