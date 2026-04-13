import React from 'react';
import { TaskListPresentation } from './TaskListPresentation';
import type { Task } from '../types';

// Aquí podría venir la lógica de obtención de tareas, por ahora es estática
const mockTasks: Task[] = [
  { id: '1', title: 'Tarea 1', description: 'Descripción 1', status: 'todo' },
  { id: '2', title: 'Tarea 2', status: 'in-progress' },
  { id: '3', title: 'Tarea 3', description: 'Descripción 3', status: 'done' },
];

export const TaskListContainer: React.FC = () => {
  // Aquí se podría conectar a Redux, hooks, etc.
  return <TaskListPresentation tasks={mockTasks} />;
};
