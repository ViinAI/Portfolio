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
    <div className="relative min-h-screen bg-white text-[#1d1d1f] selection:bg-[#0071e3] selection:text-white">
      {/* Apple Frosted Navbar */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content */}
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
