import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('debe retornar el valor inicial si no hay nada en localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'init'));
    expect(result.current[0]).toBe('init');
  });

  it('debe guardar y leer valores de localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'init'));
    act(() => {
      result.current[1]('nuevo');
    });
    expect(window.localStorage.getItem('key')).toBe(JSON.stringify('nuevo'));
    expect(result.current[0]).toBe('nuevo');
  });

  it('debe leer el valor existente en localStorage', () => {
    window.localStorage.setItem('key', JSON.stringify('persistido'));
    const { result } = renderHook(() => useLocalStorage('key', 'init'));
    expect(result.current[0]).toBe('persistido');
  });
});
