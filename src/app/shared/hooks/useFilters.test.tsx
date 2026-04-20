import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useFilters } from './useFilters';

describe('useFilters', () => {
  it('debe inicializar filtros correctamente', () => {
    const { result } = renderHook(() => useFilters({ status: '', priority: '' }));
    expect(result.current.filters).toEqual({ status: '', priority: '' });
  });

  it('debe actualizar un filtro', () => {
    const { result } = renderHook(() => useFilters({ status: '', priority: '' }));
    act(() => {
      result.current.setFilter('status', 'done');
    });
    expect(result.current.filters.status).toBe('done');
  });

  it('debe limpiar los filtros', () => {
    const { result } = renderHook(() => useFilters({ status: '', priority: '' }));
    act(() => {
      result.current.setFilter('status', 'done');
      result.current.clearFilters();
    });
    expect(result.current.filters).toEqual({ status: '', priority: '' });
  });

  it('debe filtrar una lista correctamente', () => {
    const { result } = renderHook(() => useFilters({ status: 'done' }));
    const items = [
      { id: 1, status: 'done' },
      { id: 2, status: 'todo' },
    ];
    expect(result.current.applyFilters(items)).toEqual([{ id: 1, status: 'done' }]);
  });
});
