'use client';

import React, { useState } from 'react';
import {
  Cpu,
  Shield,
  Box,
  Workflow,
  Sparkles,
  Check,
  ChevronRight,
  Code2,
  Terminal,
  Activity,
  Layers,
} from 'lucide-react';
import { portfolioData, ProductItem } from '../data/portfolioData';

export function ProductsShowcase() {
  const [selectedProductIndex, setSelectedProductIndex] = useState<number>(0);
  const products = portfolioData.products;
  const currentProduct: ProductItem = products[selectedProductIndex];

  const getProductIcon = (id: string, className = 'w-5 h-5') => {
    switch (id) {
      case 'agent-execution-engine':
        return <Cpu className={className} />;
      case 'gvisor-sandbox':
        return <Shield className={className} />;
      case 'mcp-platform':
        return <Box className={className} />;
      case 'process-harness-product':
        return <Workflow className={className} />;
      case 'genai-rag-suite':
        return <Sparkles className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  return (
    <section id="products" className="py-24 bg-white border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] mb-3">
            Core Products & Platforms
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">
            Five Production Systems.
          </h2>
          <p className="text-[#86868b] text-sm sm:text-base leading-relaxed">
            Detailed engineering breakdowns of five foundational platforms and enterprise AI products designed,
            built, and deployed into mission-critical production.
          </p>
        </div>

        {/* Apple-Style Product Switcher Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#ffffff] border border-black/[0.04] overflow-x-auto max-w-full gap-1">
            {products.map((prod, idx) => {
              const isSelected = selectedProductIndex === idx;
              return (
                <button
                  key={prod.id}
                  onClick={() => setSelectedProductIndex(idx)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-white text-[#1d1d1f] shadow-sm border border-black/[0.06] font-semibold'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-black/[0.02]'
                  }`}
                >
                  <span className={`text-[10px] font-mono ${isSelected ? 'text-[#0071e3]' : 'text-[#86868b]'}`}>
                    {prod.number}
                  </span>
                  <span className={isSelected ? 'text-[#0071e3]' : 'text-[#86868b]'}>
                    {getProductIcon(prod.id, 'w-4 h-4')}
                  </span>
                  <span>{prod.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Expansive Active Product Bento Showcase */}
        <div className="bg-[#ffffff] border border-black/[0.06] rounded-3xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] mb-12 animate-in fade-in duration-300">
          {/* Product Header Row */}
          <div className="flex flex-wrap items-start justify-between gap-4 pb-8 mb-8 border-b border-black/[0.06]">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-[#0071e3]/10 text-[#0071e3]">
                  PRODUCT {currentProduct.number}
                </span>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-[#ffffff] border border-black/[0.04] text-[#6e6e73]">
                  {currentProduct.organization}
                </span>
                <span className="text-xs font-medium text-[#86868b]">{currentProduct.period}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1d1d1f] mb-1">
                {currentProduct.name}
              </h3>
              <p className="text-[#0071e3] text-sm sm:text-base font-medium">
                {currentProduct.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#34c759]/10 text-[#34c759] text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34c759]" />
                Production Verified
              </span>
            </div>
          </div>

          {/* Bento Grid: Deep Dive & Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Narrative & Pillars (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Product Overview */}
              <div className="bg-white border border-black/[0.06] p-6 sm:p-7 rounded-2xl shadow-sm">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-2">
                  System Architecture Overview
                </h4>
                <p className="text-[#1d1d1f] text-sm sm:text-base leading-relaxed font-normal">
                  {currentProduct.description}
                </p>
              </div>

              {/* Architectural Breakdown Cards */}
              <div className="space-y-3.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#86868b] px-1">
                  Core Engineering Capabilities
                </h4>
                {currentProduct.architectureBreakdown.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-black/[0.06] p-5 rounded-2xl shadow-sm hover:border-[#0071e3]/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Check className="w-4 h-4 text-[#0071e3]" />
                      <h5 className="text-sm font-bold text-[#1d1d1f]">{item.title}</h5>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed pl-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Specs, Metrics & Code Flow (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* System Specifications Table */}
              <div className="bg-white border border-black/[0.06] p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-black/[0.04]">
                  <Activity className="w-4 h-4 text-[#0071e3]" />
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
                    System Specifications
                  </h4>
                </div>

                <div className="divide-y divide-black/[0.04]">
                  {currentProduct.systemSpecs.map((spec, idx) => (
                    <div key={idx} className="py-2.5 flex items-center justify-between text-xs">
                      <span className="text-[#86868b]">{spec.label}</span>
                      <span className="font-semibold text-[#1d1d1f] font-mono">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture / Execution Flow Preview */}
              {currentProduct.flowCodeSnippet && (
                <div className="bg-[#1d1d1f] text-white p-5 rounded-2xl shadow-sm font-mono text-xs overflow-x-auto">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] text-[#86868b]">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-[#0071e3]" />
                      <span>Runtime Execution Flow</span>
                    </div>
                    <span className="text-[10px] text-[#86868b]">Spec v2.4</span>
                  </div>
                  <pre className="text-emerald-400 font-mono text-[11px] leading-relaxed overflow-x-auto">
                    {currentProduct.flowCodeSnippet}
                  </pre>
                </div>
              )}

              {/* Production Tech Stack */}
              <div className="bg-white border border-black/[0.06] p-6 rounded-2xl shadow-sm">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-3">
                  Production Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {currentProduct.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-[#ffffff] text-[#1d1d1f] border border-black/[0.04]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Product Quick Grid Navigator */}
        <div className="pt-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#86868b] text-center mb-6">
            All 5 Production Products (Click to inspect)
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {products.map((prod, idx) => {
              const isSelected = selectedProductIndex === idx;
              return (
                <button
                  key={prod.id}
                  onClick={() => setSelectedProductIndex(idx)}
                  className={`p-4 rounded-2xl text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-2 border-[#0071e3] shadow-md -translate-y-1'
                      : 'bg-[#ffffff] border border-black/[0.04] hover:bg-white hover:border-black/[0.1] hover:shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-[#0071e3]' : 'text-[#86868b]'}`}>
                        {prod.number}
                      </span>
                      <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-[#0071e3]/10 text-[#0071e3]' : 'bg-white text-[#6e6e73]'}`}>
                        {getProductIcon(prod.id, 'w-3.5 h-3.5')}
                      </div>
                    </div>
                    <h4 className="text-xs font-bold text-[#1d1d1f] tracking-tight mb-1 line-clamp-2">
                      {prod.name}
                    </h4>
                    <p className="text-[11px] text-[#86868b] line-clamp-2">
                      {prod.tagline}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-black/[0.04] flex items-center justify-between text-[10px]">
                    <span className="text-[#6e6e73] font-medium">{prod.organization}</span>
                    <span className={isSelected ? 'text-[#0071e3] font-semibold' : 'text-[#86868b]'}>
                      {isSelected ? 'Active' : 'Inspect ↗'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
