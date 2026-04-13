import React from 'react';
import type { Task } from '../types';

interface TaskListPresentationProps {
  tasks: Task[];
}

export const TaskListPresentation: React.FC<TaskListPresentationProps> = ({ tasks }) => (
  <ul>
    {tasks.map((task) => (
      <li key={task.id}>
        <strong>{task.title}</strong>
        {task.description && <p>{task.description}</p>}
        <span>Status: {task.status}</span>
      </li>
    ))}
  </ul>
);
