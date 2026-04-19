//OAMR -  Este componente se ejecuta en el servidor por defecto (Server Component) porque no tiene 'use client'. Ideal para lógica de datos o renderizado inicial.
import React from 'react';
import TaskListContainer from '@/app/features/task/components/TaskListContainer';

export default function TasksPage() {
  return (
    <div style={{ padding: 32 }}>
      <h2>Tareas</h2>
      <TaskListContainer />
    </div>
  );
}
