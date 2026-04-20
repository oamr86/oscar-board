// This file fue movido desde shared/ui/molecules/Card.tsx

import React from 'react';
import { useThemeState } from '@/app/context/theme-context';

export interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, style, onClick }) => {
  const mode = useThemeState();
  const isDark = mode === 'dark';
  return (
    <div
      style={{
        background: isDark ? '#23232b' : '#fff',
        color: isDark ? '#f5faff' : '#18181b',
        borderRadius: 12,
        boxShadow: isDark
          ? '0 2px 8px rgba(167, 139, 250, 0.12)'
          : '0 2px 8px rgba(25, 118, 210, 0.07)',
        padding: 16,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
