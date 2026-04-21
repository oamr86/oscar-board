//OAMR -  Este layout se ejecuta en el servidor por defecto (Server Component) porque no tiene 'use client'.
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import './estilosGlobales.css';
import React from 'react';
import { AppProviders } from './context/AppProviders';
import { ThemedBody } from './shared/ui/ThemedBody';
import { LogoCorner } from './shared/ui/LogoCorner';
import Logo from '@/app/assets/Logo.webp';

export const metadata: Metadata = {
  title: 'Oscar Board',
  description: 'DevBoard para gestión de proyectos y tareas',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.className}>
      <AppProviders>
        <ThemedBody>
          <LogoCorner src={Logo} name="Logo" />
          {children}
        </ThemedBody>
      </AppProviders>
    </html>
  );
}
