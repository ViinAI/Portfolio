'use client';

import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ResumeViewerModal } from './ResumeViewerModal';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />
      {children}
      <Footer />
      <ResumeViewerModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
}
