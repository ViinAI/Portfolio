'use client';

import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Education & Certifications
          </h2>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 text-xs text-slate-300 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{edu.year}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5">{edu.degree}</h3>
                <p className="text-indigo-400 text-sm font-semibold mb-3">{edu.institution}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{edu.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
