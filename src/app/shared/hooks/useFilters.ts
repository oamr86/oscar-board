import { useState } from 'react';

/**
 * useFilters
 * Encapsula la lógica de filtros activos y expone helpers para filtrar colecciones.
 */
export function useFilters<T>(initialFilters: Record<string, any> = {}) {
  const [filters, setFilters] = useState(initialFilters);

  const setFilter = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => setFilters(initialFilters);

  const applyFilters = (items: T[]): T[] => {
    return items.filter((item) => {
      return Object.entries(filters).every(([key, value]) => {
        if (value === undefined || value === null || value === '') return true;
        // Soporta filtros exactos y por función
        if (typeof value === 'function') return value(item[key], item);
        return item[key] === value;
      });
    });
  };

  return { filters, setFilter, clearFilters, applyFilters };
}
