'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ArchitectureShowcase } from '../components/ArchitectureShowcase';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { SkillsMatrix } from '../components/SkillsMatrix';
import { EducationSection } from '../components/EducationSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ResumeViewerModal } from '../components/ResumeViewerModal';

export default function HomePage() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-slate-100 selection:bg-indigo-600 selection:text-white">
      {/* Floating Navbar */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Page Content */}
      <main className="relative">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <ArchitectureShowcase />
        <ExperienceTimeline />
        <SkillsMatrix />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Live CV Modal */}
      <ResumeViewerModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
