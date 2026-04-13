import React from 'react';
import { TaskListPresentation } from './TaskListPresentation';
import type { Task } from '../types';


// Mock de tareas de ejemplo.
const mockTasks: Task[] = [
  {
    id: 1,
    titulo: 'Tarea 1',
    descripcion: 'Descripción 1',
    estado: 'En progreso',
    fechaCreacion: new Date(),
    fechaUltimaActualizacion: new Date(),
  },
  {
    id: 2,
    titulo: 'Tarea 2',
    estado: 'En revisión',
    fechaCreacion: new Date(),
    fechaUltimaActualizacion: new Date(),
  },
  {
    id: 3,
    titulo: 'Tarea 3',
    descripcion: 'Descripción 3',
    estado: 'Completada',
    fechaCreacion: new Date(),
    fechaUltimaActualizacion: new Date(),
  },
];

export const TaskListContainer: React.FC = () => {
  // Pendiente conectar con Redux o algun hook para obtener las tareas reales.
  return <TaskListPresentation tasks={mockTasks} />;
};
