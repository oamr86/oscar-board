

import { TaskCard } from './TaskCard';
import type { Task } from '@/app/features/task/utils/mockData';

interface TaskListPresentationProps {
  tasks: Task[];
  onRemove?: (id: string) => void;
  onToggle?: (id: string) => void;
}

export const TaskListPresentation: React.FC<TaskListPresentationProps> = ({ tasks, onRemove, onToggle }) => (
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
      <TaskCard key={task.id} task={task} onRemove={onRemove} onToggle={onToggle} />
    ))}
  </div>
);
