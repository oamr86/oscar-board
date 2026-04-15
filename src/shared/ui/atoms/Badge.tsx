import React from 'react';


/**
 * Props para el componente Badge.
 * @property children Contenido del badge.
 * @property color Color de fondo opcional.
 */
export interface BadgeProps {
  /** Contenido del badge */
  children: React.ReactNode;
  /** Color de fondo */
  color?: string;
}

/**
 * Badge sencillo sin nada de lógica
 */
export const Badge: React.FC<BadgeProps> = ({ children, color = '#eee' }) => (
  <span style={{ background: color, borderRadius: 8, padding: '2px 8px', fontSize: 12 }}>
    {children}
  </span>
);
