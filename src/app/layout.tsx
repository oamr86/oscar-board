//OAMR -  Este layout se ejecuta en el servidor por defecto (Server Component) porque no tiene 'use client'.
import type { Metadata } from 'next';
import './estilosGlobales.css';
import React from 'react';
import { AppProviders } from './context/AppProviders';
import { ThemedBody } from './shared/ui/ThemedBody';

export const metadata: Metadata = {
  title: 'Oscar Board',
  description: 'DevBoard para gestión de proyectos y tareas',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <AppProviders>
        <ThemedBody>{children}</ThemedBody>
      </AppProviders>
    </html>
  );
}
