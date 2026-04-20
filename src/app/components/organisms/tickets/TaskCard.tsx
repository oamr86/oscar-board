// Este archivo fue movido desde features/task/components/TaskCard.tsx
import React from 'react';
// ...importaciones necesarias

import { Card } from '@/app/components/molecules/Card';
import { Badge } from '@/app/components/atoms/Badge';
import { Task, TASK_STATUSES } from '@/data/mockTasks';

interface TaskCardProps {
  task: Task;
  onRemove?: (id: string) => void;
  onStatusChange?: (id: string, nextStatus: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onRemove, onStatusChange }) => {
  let nextStatus: string | null = null;
  let actionLabel = '';
  if (task.status === TASK_STATUSES.TODO) {
    nextStatus = TASK_STATUSES.IN_PROGRESS;
    actionLabel = 'Iniciar';
  } else if (task.status === TASK_STATUSES.IN_PROGRESS) {
    nextStatus = TASK_STATUSES.DONE;
    actionLabel = 'Completar';
  }

  return (
    <Card style={{ width: '80%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>{task.title}</span>
        <Badge
          color={
            task.status === TASK_STATUSES.DONE
              ? '#4caf50'
              : task.status === TASK_STATUSES.IN_PROGRESS
              ? '#ff9800'
              : '#bdbdbd'
          }
        >
          {task.status}
        </Badge>
      </div>
      <div style={{ margin: '8px 0' }}>{task.description}</div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
        {nextStatus && onStatusChange && (
          <button onClick={() => onStatusChange(task.id, nextStatus)}>{actionLabel}</button>
        )}
        {onRemove && (
          <button onClick={() => onRemove(task.id)} style={{ color: 'red' }}>
            Eliminar
          </button>
        )}
      </div>
    </Card>
  );
};
