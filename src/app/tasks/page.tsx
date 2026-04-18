import React from 'react';
import { TaskListContainer } from '@/app/features/task/components/TaskListContainer';

export default function TasksPage() {
  return (
    <div style={{ padding: 32 }}>
      <h2>Tareas</h2>
      <TaskListContainer />
    </div>
  );
}
