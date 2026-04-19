//OAMR - Componente centralizado para envolver todos los context providers globales de la app.
"use client";
import React from 'react';
import { ThemeProvider } from '@/app/context/theme-context';
// import { AuthProvider } from '@/app/context/auth-context';
// import { NotificationProvider } from '@/app/context/notification-context';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {/* <AuthProvider> */}
      {/*   <NotificationProvider> */}
          {children}
      {/*   </NotificationProvider> */}
      {/* </AuthProvider> */}
    </ThemeProvider>
  );
}
