import { useEffect, useState } from 'react';

/**
 * useDebounce
 * Retorna el valor debounced después de un retraso (default 300ms).
 * Útil para búsquedas y entradas controladas.
 */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
