import React from 'react';
import { ThemeToggle } from './ThemeToggle';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <>
      {children}
      <div className="fixed bottom-4 right-4 z-30">
        <ThemeToggle />
      </div>
    </>
  );
}
