import React from 'react';
import { Input } from '../atoms';


/**
 * Props para el componente SearchBar.
 * @property value Valor del input de búsqueda.
 * @property onChange Callback al cambiar el valor.
 * @property placeholder Placeholder opcional.
 */
export interface SearchBarProps {
  /** Valor del input de búsqueda */
  value: string;
  /** Callback al cambiar el valor */
  onChange: (value: string) => void;
  /** Placeholder opcional */
  placeholder?: string;
}

/**
 * SearchBar compuesta de Input, sin lógica de dominio.
 */
export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <Input
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </div>
);
