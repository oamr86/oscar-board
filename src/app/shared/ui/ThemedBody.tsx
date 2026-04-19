//OAMR - Este componente aplica el fondo dinámico según el tema y debe ser Client Component.
"use client";
import React from 'react';
import { useThemeState } from '@/app/context/theme-context';

export function ThemedBody({ children }: { children: React.ReactNode }) {
  const mode = useThemeState();
  return (
    <body
      style={{
        margin: 0,
        padding: 0,
        fontFamily: 'sans-serif',
        background: mode === 'dark' ? '#18181b' : '#f5faff',
        color: mode === 'dark' ? '#f5faff' : '#18181b',
        minHeight: '100vh',
        transition: 'background 0.3s, color 0.3s',
      }}
    >
      {children}
    </body>
  );
}
