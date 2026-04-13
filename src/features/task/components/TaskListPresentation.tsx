import React from 'react';

import { TaskCard } from './TaskCard';
import type { Task } from '../utils/mockData';

interface TaskListPresentationProps {
  tasks: Task[];
}

export const TaskListPresentation: React.FC<TaskListPresentationProps> = ({ tasks }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    {tasks.map((task: Task) => (
      <TaskCard key={task.id} task={task} />
    ))}
  </div>
);
