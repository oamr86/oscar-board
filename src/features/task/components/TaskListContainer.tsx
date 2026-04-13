import React from 'react';
import { TaskListPresentation } from './TaskListPresentation';
import { mockTasks, Task } from '../utils/mockData';

export const TaskListContainer: React.FC = () => {
  // Pendiente conectar con Redux o algun hook para obtener las tareas reales.
  return (
    <section
      style={{
        maxWidth: 600,
        margin: '32px auto',
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 2px 16px #0001',
        padding: 24,
      }}
    >
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, textAlign: 'center', color: '#1976d2' }}>
        Lista de Tareas
      </h2>
      <TaskListPresentation tasks={mockTasks} />
    </section>
  );
};
