// This file was movido desde shared/ui/atoms/Button.tsx

/**
 * Props para el componente Button.
 * @property children Contenido del botón.
 * @property ...props Cualquier prop estándar de button.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Contenido del botón */
  children: React.ReactNode;
}

/**
 * Botón reutilizable, sin lógica de dominio.
 */
export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button {...props}>
    {children}
  </button>
);
