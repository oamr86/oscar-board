


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
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  tabIndex?: number;
  role?: string;
  'aria-label'?: string;
}

/**
 * Card visual simple, sin lógica de dominio.
 */
export const Card: React.FC<CardProps> = ({ children, style, ...rest }) => (
  <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, background: '#fff', ...style }} {...rest}>
    {children}
  </div>
);
