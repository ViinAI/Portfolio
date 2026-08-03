'use client';

import React, { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-white text-[#1d1d1f] font-sans antialiased flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Page Error</h2>
      <p className="text-sm text-[#86868b] mb-6 max-w-md">
        Unable to load this section right now.
      </p>
      <button
        onClick={() => reset()}
        className="px-5 py-2.5 rounded-xl bg-[#0071e3] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
      >
        Try again
      </button>
    </div>
  );
}
