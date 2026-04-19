


/**
 * Props para el componente Input.
 * @property ...props Cualquier prop estándar de input.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Input reutilizable, sin lógica de dominio.
 */
export const Input: React.FC<InputProps> = (props) => <input {...props} />;
