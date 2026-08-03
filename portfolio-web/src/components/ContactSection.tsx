'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-black/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">
            Let’s Connect.
          </h2>
          <p className="text-[#86868b] text-sm sm:text-base leading-relaxed">
            Interested in discussing agent architectures, enterprise AI platforms, or high-impact engineering roles?
            Feel free to reach out directly.
          </p>
        </div>

        {/* Contact Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Direct Details Card */}
          <div className="bg-[#ffffff] border border-black/[0.06] p-7 sm:p-8 rounded-3xl flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1d1d1f] tracking-tight mb-2">
                Direct Contact
              </h3>
              <p className="text-[#86868b] text-xs sm:text-sm mb-6">
                Available for Senior AI Engineer, Agent Platform Architect, and Principal GenAI roles.
              </p>

              <div className="space-y-3">
                {/* Email Copy Card */}
                <div className="p-4 rounded-2xl bg-white border border-black/[0.06] flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#ffffff] text-[#0071e3]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#86868b]">Email</div>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-xs sm:text-sm font-semibold text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-[#ffffff] hover:bg-[#e8e8ed] text-[#1d1d1f] transition-colors"
                    title="Copy email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-[#34c759]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-white border border-black/[0.06] flex items-center gap-3 shadow-sm">
                  <div className="p-2.5 rounded-xl bg-[#ffffff] text-[#0071e3]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#86868b]">Phone</div>
                    <a
                      href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-xs sm:text-sm font-semibold text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-white border border-black/[0.06] flex items-center gap-3 shadow-sm">
                  <div className="p-2.5 rounded-xl bg-[#ffffff] text-[#0071e3]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#86868b]">Location</div>
                    <span className="text-xs sm:text-sm font-semibold text-[#1d1d1f]">
                      {personal.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 pt-4 border-t border-black/[0.06] grid grid-cols-2 gap-2.5">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-full bg-white border border-black/[0.06] hover:bg-[#f5f5f7] text-xs font-semibold text-[#1d1d1f] transition-all shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0071e3]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#86868b]" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-full bg-white border border-black/[0.06] hover:bg-[#f5f5f7] text-xs font-semibold text-[#1d1d1f] transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-[#1d1d1f]" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#86868b]" />
              </a>
            </div>
          </div>

          {/* Action Message Card */}
          <div className="bg-[#ffffff] border border-black/[0.06] p-7 sm:p-8 rounded-3xl flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1d1d1f] tracking-tight mb-2">
                Start a Discussion
              </h3>
              <p className="text-[#86868b] text-xs sm:text-sm mb-6">
                Direct inquiry regarding agent systems, platform engineering, or senior engineering roles.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${personal.email}?subject=Senior%20AI%20Engineer%20Opportunity%20-%20Vinay%20Kumar&body=Hi%20Vinay,%0D%0A%0D%0AI%20reviewed%20your%20portfolio%20and%20agent%20systems%20architecture%20work.%20We%20would%20love%20to%20connect%20regarding...`}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-full font-semibold text-sm text-white bg-[#0071e3] hover:bg-[#0077ed] transition-all shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Start Email Conversation</span>
                </a>

                <div className="p-4 rounded-2xl bg-white border border-black/[0.06] text-xs text-[#6e6e73] space-y-2 shadow-sm">
                  <div className="font-bold text-[#1d1d1f]">Key Focus Areas:</div>
                  <ul className="list-disc list-inside space-y-1.5 text-[#86868b]">
                    <li>Deterministic Agent Execution Engines & State Replay</li>
                    <li>gVisor MicroVM Sandboxing for AI Agents & Tools</li>
                    <li>Model Context Protocol (MCP) Server Infrastructure</li>
                    <li>Enterprise GenAI & RAG Solutions ($300M+ scale)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black/[0.06] text-center text-xs text-[#86868b]">
              Typical response time: Within 24 hours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
