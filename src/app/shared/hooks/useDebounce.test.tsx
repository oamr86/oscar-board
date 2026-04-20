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
});
