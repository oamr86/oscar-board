import type { Metadata } from 'next';
import './globals.css';
import React from 'react';

export const metadata: Metadata = {
  title: 'Oscar Board',
  description: 'DevBoard para gestión de proyectos y tareas',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0, fontFamily: 'sans-serif', background: '#f5faff' }}>
        {children}
      </body>
    </html>
  );
}
