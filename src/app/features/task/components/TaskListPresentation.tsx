

import { memo } from 'react';
import { TaskCard } from './TaskCard';
import type { Task } from '@/data/mockTasks';

interface TaskListPresentationProps {
  tasks: Task[];
  onRemove?: (id: string) => void;
  onToggle?: (id: string) => void;
}

const TaskListPresentationComponent: React.FC<TaskListPresentationProps> = ({ tasks, onRemove, onToggle }) => (
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
      <TaskCard key={task.id} task={task} onRemove={onRemove} />
    ))}
  </div>
);

export const TaskListPresentation = memo(TaskListPresentationComponent);
