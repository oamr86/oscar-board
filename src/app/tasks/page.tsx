//OAMR -  Este componente se ejecuta en el servidor por defecto (Server Component) porque no tiene 'use client'. Ideal para lógica de datos o renderizado inicial.
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tareas | TaskFlow',
  description: 'Gestiona tus tareas',
  openGraph: {
    title: 'Tareas | TaskFlow',
    description: 'Gestiona tus tareas',
  },
};
import TaskListContainer from '@/app/components/organisms/tickets/TaskListContainer';

export default function TasksPage() {
  return (
    <div style={{ padding: 32 }}>
      <h2>Tareas</h2>
      <TaskListContainer />
    </div>
  );
}
