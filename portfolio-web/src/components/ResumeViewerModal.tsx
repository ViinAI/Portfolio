'use client';

import React from 'react';
import { X, Download, FileText, ExternalLink, Printer } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeViewerModal({ isOpen, onClose }: ResumeViewerModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl h-[90vh] bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in zoom-in-95">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-900/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base sm:text-lg">
                Vinay Kumar — Senior AI Engineer CV
              </h3>
              <p className="text-xs text-slate-400">Finalized Vector 1-Page Deliverable</p>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center gap-2">
            <a
              href={portfolioData.deliverables.pdf}
              download="Vinay_Kumar_CV.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PDF</span>
            </a>

            <a
              href={portfolioData.deliverables.docx}
              download="Vinay_Kumar_CV.docx"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-white/10 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Word</span>
            </a>

            <a
              href={portfolioData.deliverables.html}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 border border-white/5 transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded Document Frame */}
        <div className="flex-1 bg-zinc-900 overflow-hidden relative">
          <iframe
            src={portfolioData.deliverables.html}
            title="Vinay Kumar Resume Preview"
            className="w-full h-full border-0 bg-white"
          />
        </div>
      </div>
    </div>
  );
}
