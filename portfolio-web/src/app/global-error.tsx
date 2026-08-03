'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#1d1d1f] font-sans antialiased flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
        <p className="text-sm text-[#86868b] mb-6 max-w-md">
          An unexpected error occurred. Please try reloading the page.
        </p>
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 rounded-xl bg-[#0071e3] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
