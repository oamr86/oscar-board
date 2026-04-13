import React from 'react';


/**
 * Props para el componente Card.
 * @property children Contenido del card.
 * @property style Estilos CSS opcionales.
 */
export interface CardProps {
  /** Contenido del card */
  children: React.ReactNode;
  /** Estilos CSS opcionales */
  style?: React.CSSProperties;
}

/**
 * Card visual simple, sin lógica de dominio.
 */
export const Card: React.FC<CardProps> = ({ children, style }) => (
  <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, background: '#fff', ...style }}>
    {children}
  </div>
);
