'use client';

import React from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeViewerModal({ isOpen, onClose }: ResumeViewerModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-5xl h-[92vh] bg-white border border-black/[0.1] rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in zoom-in-95">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.08] bg-white/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#ffffff] text-[#0071e3]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-[#1d1d1f] text-sm sm:text-base tracking-tight">
                Vinay Kumar — Senior AI Engineer Resume
              </h3>
              <p className="text-xs text-[#86868b]">Vector 1-Page Official Deliverable</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <a
              href={portfolioData.deliverables.pdf}
              download="Vinay_Kumar_CV.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF</span>
            </a>

            <a
              href={portfolioData.deliverables.docx}
              download="Vinay_Kumar_CV.docx"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#ffffff] hover:bg-[#e8e8ed] text-[#1d1d1f] border border-black/[0.08] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Word</span>
            </a>

            <a
              href={portfolioData.deliverables.html}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-[#86868b] hover:text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#86868b] hover:text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded Document Frame */}
        <div className="flex-1 bg-[#ffffff] overflow-hidden relative">
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
