import React from 'react';
import { TaskListPresentation } from './TaskListPresentation';
import { mockTasks, Task } from '@/app/features/task/utils/mockData';

export const TaskListContainer: React.FC = () => {
  // Pendiente conectar con Redux o algun hook para obtener las tareas reales en entregable 2.
  return (
    <section>
      <TaskListPresentation tasks={mockTasks} />
    </section>
  );
};
