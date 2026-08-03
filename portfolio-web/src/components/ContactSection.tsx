'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
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
    <section id="contact" className="relative py-24 border-t border-white/5 bg-zinc-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Let’s Build the Next Generation of AI Systems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in discussing agent architectures, enterprise AI platforms, or high-impact engineering roles?
            Feel free to reach out directly.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Direct Reach-out Card */}
          <div className="glass-panel p-8 rounded-2xl border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact Information</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-8 leading-relaxed">
                Available for Senior AI Engineer, Agent Platform Architect, and Principal GenAI Engineering opportunities.
              </p>

              <div className="space-y-4">
                {/* Email with Copy */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Email Address</div>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-sm font-medium text-white hover:text-indigo-300 transition-colors"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Direct Phone</div>
                    <a
                      href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-sm font-medium text-white hover:text-cyan-300 transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Current Location</div>
                    <span className="text-sm font-medium text-white">{personal.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-all hover:border-cyan-500/40"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-all hover:border-purple-500/40"
              >
                <GithubIcon className="w-4 h-4 text-purple-400" />
                <span>GitHub Repos</span>
              </a>
            </div>
          </div>

          {/* Quick Message / Mail Trigger Card */}
          <div className="glass-panel p-8 rounded-2xl border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                Click below to start an email with pre-filled context or schedule an introductory discussion.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${personal.email}?subject=Senior%20AI%20Engineer%20Opportunity%20-%20Vinay%20Kumar&body=Hi%20Vinay,%0D%0A%0D%0AI%20reviewed%20your%20portfolio%20and%20agent%20systems%20architecture%20work.%20We%20would%20love%20to%20connect%20regarding...`}
                  className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-xl shadow-indigo-600/25 border border-indigo-400/30 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Start Email Conversation</span>
                </a>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 space-y-2">
                  <div className="font-semibold text-slate-300">Quick Discussion Topics:</div>
                  <ul className="list-disc list-inside space-y-1 text-slate-400">
                    <li>Deterministic Agent Execution Engines & State Replay</li>
                    <li>gVisor MicroVM Sandboxing for AI Agents & Tools</li>
                    <li>Model Context Protocol (MCP) Server Infrastructure</li>
                    <li>Enterprise GenAI & RAG Solutions ($300M+ scale)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-center text-xs text-slate-400">
              ⚡ Typical response time: Within 24 hours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
