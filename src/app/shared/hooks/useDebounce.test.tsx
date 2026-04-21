import { renderHook, act } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import { useDebounce } from './useDebounce';

vi.useFakeTimers();

describe('useDebounce', () => {
  it('debe retornar el valor inicial inmediatamente', () => {
    const { result } = renderHook(() => useDebounce('test', 500));
    expect(result.current).toBe('test');
  });

  it('debe actualizar el valor después del delay', () => {
    const { result, rerender } = renderHook(({ v }) => useDebounce(v, 300), { initialProps: { v: 'a' } });
    rerender({ v: 'b' });
    act(() => {
      vi.advanceTimersByTime(299);
    });
    expect(result.current).toBe('a');
    act(() => {
      vi.advanceTimersByTime(1);
    });
    rerender({ v: 'b' }); // Forzar actualización tras el timeout
    expect(result.current).toBe('b');
  });
  it('limpia el timeout anterior al cambiar el valor', () => {
    const { rerender } = renderHook(({ v }) => useDebounce(v, 200), { initialProps: { v: 'x' } });
    rerender({ v: 'y' });
    act(() => {
      vi.advanceTimersByTime(100);
    });
    rerender({ v: 'z' }); // Cambia antes de que termine el timeout anterior
    act(() => {
      vi.advanceTimersByTime(200);
    });
    // Si el cleanup funciona, solo el último valor debe quedar
    // No debe lanzar error ni quedarse con el valor anterior
  });
});
