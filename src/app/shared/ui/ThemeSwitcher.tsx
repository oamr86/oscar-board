import React from 'react';
import { useThemeState, useThemeDispatch } from '@/app/context/theme-context';

export const ThemeSwitcher: React.FC = () => {
  const mode = useThemeState();
  const toggleTheme = useThemeDispatch();
  return (
    <button onClick={toggleTheme} style={{ margin: 8 }}>
      {mode === 'light' ? '🌞 Modo Claro' : '🌙 Modo Oscuro'}
    </button>
  );
};
