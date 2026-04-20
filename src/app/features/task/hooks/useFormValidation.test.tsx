import { renderHook, act } from '@testing-library/react';
import { useFormValidation } from './useCustomHooks';

describe('useFormValidation', () => {
  it('valida y actualiza valores', () => {
    const validate = (name, value) => (value ? undefined : 'Requerido');
    const { result } = renderHook(() => useFormValidation({ nombre: '' }, validate));
    act(() => {
      result.current.handleChange({ target: { name: 'nombre', value: '' } });
    });
    expect(result.current.errors.nombre).toBe('Requerido');
    act(() => {
      result.current.handleChange({ target: { name: 'nombre', value: 'Juan' } });
    });
    expect(result.current.errors.nombre).toBe(undefined);
    expect(result.current.values.nombre).toBe('Juan');
  });
});
