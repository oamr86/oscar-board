import React from 'react';

import { TaskCard } from './TaskCard';
import type { Task } from '../utils/mockData';

interface TaskListPresentationProps {
  tasks: Task[];
}

export const TaskListPresentation: React.FC<TaskListPresentationProps> = ({ tasks }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'center',
    width: '100%',
    border: '1px solid #1976d2',
    borderRadius: 8,
    padding: 24,
    background: '#f5faff',
    boxSizing: 'border-box',
  }}>
    
    {tasks.map((task: Task) => (
      <TaskCard key={task.id} task={task} />
    ))}
  </div>
);
