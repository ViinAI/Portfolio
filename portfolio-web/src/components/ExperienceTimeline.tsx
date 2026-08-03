'use client';

import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function ExperienceTimeline() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Over 5.5 years delivering high-impact AI infrastructure, autonomous agent harnesses, and data analytics
            solutions across enterprise organizations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-32 space-y-12">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative pl-6 md:pl-10">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-indigo-500 shadow-md shadow-indigo-500/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              </div>

              {/* Company Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10 hover:border-indigo-500/30 transition-all">
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.role}</h3>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400 font-medium">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 pr-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {exp.summary}
                </p>

                {/* Achievements List */}
                <div className="space-y-4 mb-6">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        {ach.lead && (
                          <strong className="text-white font-semibold mr-1.5">
                            {ach.lead}:
                          </strong>
                        )}
                        <span className="text-slate-300">{ach.description}</span>
                        {ach.tags && ach.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {ach.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] font-medium px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
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
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-medium text-slate-400 mr-2">Environment:</span>
                  {exp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/5"
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
