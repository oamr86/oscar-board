//OAMR -  'use client' permite que este archivo use APIs de React exclusivas de componentes cliente (como createContext y useState).
"use client";
import React, { createContext, useContext, useMemo, useState, ReactNode } from 'react';

export type ThemeMode = 'light' | 'dark';

//OAMR - Split context: uno para state y otro para dispatch
const ThemeStateContext = createContext<ThemeMode | undefined>(undefined);
const ThemeDispatchContext = createContext<(() => void) | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('light');
  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  return (
    <ThemeStateContext.Provider value={mode}>
      <ThemeDispatchContext.Provider value={toggleTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};

//OAMR - Hook solo para leer el estado del tema
export function useThemeState() {
  const mode = useContext(ThemeStateContext);
  if (mode === undefined) throw new Error('useThemeState must be used within a ThemeProvider');
  return mode;
}

//OAMR - Hook solo para disparar acciones de tema
export function useThemeDispatch() {
  const toggleTheme = useContext(ThemeDispatchContext);
  if (toggleTheme === undefined) throw new Error('useThemeDispatch must be used within a ThemeProvider');
  return toggleTheme;
}
