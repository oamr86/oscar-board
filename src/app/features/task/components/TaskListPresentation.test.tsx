import { render, screen } from '@testing-library/react';
import { TaskListPresentation } from './TaskListPresentation';
import { ThemeProvider } from '@/app/context/theme-context';

const tasks = [
  { id: '1', title: 'Tarea 1', description: 'Desc 1', status: 'TODO', priority: 'HIGH', project: 'A', createdAt: '2026-04-01' },
  { id: '2', title: 'Tarea 2', description: 'Desc 2', status: 'DONE', priority: 'LOW', project: 'B', createdAt: '2026-04-02' },
];

describe('TaskListPresentation', () => {
  it('renderiza la lista de tareas', () => {
    render(
      <ThemeProvider>
        <TaskListPresentation tasks={tasks} />
      </ThemeProvider>
    );
    expect(screen.getByText('Tarea 1')).toBeInTheDocument();
    expect(screen.getByText('Tarea 2')).toBeInTheDocument();
  });

  it('llama a onRemove cuando se hace click en Eliminar', () => {
    const handleRemove = vi.fn();
    render(
      <ThemeProvider>
        <TaskListPresentation tasks={tasks} onRemove={handleRemove} />
      </ThemeProvider>
    );
    const deleteButtons = screen.getAllByText('Eliminar');
    deleteButtons[0].click();
    expect(handleRemove).toHaveBeenCalledWith('1');
  });

  it('renderiza correctamente cuando la lista está vacía', () => {
    render(
      <ThemeProvider>
        <TaskListPresentation tasks={[]} />
      </ThemeProvider>
    );
    expect(screen.queryByText('Tarea 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Tarea 2')).not.toBeInTheDocument();
  });
});
