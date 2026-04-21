

import { memo, useMemo, useCallback } from 'react';
import { TaskCard } from './TaskCard';
import type { Task } from '@/data/mockTasks';

interface TaskListPresentationProps {
  tasks: Task[];
  onRemove?: (id: string) => void;
  onToggle?: (id: string) => void;
}


const TaskListPresentationComponent: React.FC<TaskListPresentationProps> = ({ tasks, onRemove, onToggle }) => {
  // Memoriza el handler para evitar renders innecesarios en los hijos
  const handleRemove = useCallback(
    (id: string) => {
      if (onRemove) onRemove(id);
    },
    [onRemove]
  );

  const renderedTasks = useMemo(() =>
    tasks.map((task: Task) => (
      <TaskCard key={task.id} task={task} onRemove={handleRemove} />
    )),
    [tasks, handleRemove]
  );

  return (
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
      {renderedTasks}
    </div>
  );
};

export const TaskListPresentation = memo(TaskListPresentationComponent);
//export const TaskListPresentation = (TaskListPresentationComponent);
