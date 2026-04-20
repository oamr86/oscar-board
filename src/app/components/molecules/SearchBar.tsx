// This file fue movido desde shared/ui/molecules/SearchBar.tsx

import React from 'react';
import { Input } from '../atoms/Input';

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => (
  <Input
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder || 'Buscar...'}
    style={{ width: '100%', marginBottom: 12 }}
  />
);
