import { renderHook, act } from '@testing-library/react';
import { useTaskManager } from './useCustomHooks';

describe('useTaskManager', () => {
  it('agrega, elimina y alterna tareas', () => {
    const { result } = renderHook(() => useTaskManager([]));
    act(() => {
      result.current.addTask({ id: '1', title: 'Tarea', description: '', status: 'TODO', priority: 'HIGH', project: 'A', createdAt: '2026-04-01' });
    });
    expect(result.current.tasks).toHaveLength(1);
    act(() => {
      result.current.toggleTask('1');
    });
    expect(result.current.tasks[0].completed).toBe(true);
    act(() => {
      result.current.removeTask('1');
    });
    expect(result.current.tasks).toHaveLength(0);
  });
});
