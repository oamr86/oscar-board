
import React from 'react';
import { Card } from '@/app/shared/ui/molecules';
import { Badge } from '@/app/shared/ui/atoms';
import { Task, TASK_STATUSES } from '@/app/features/task/utils/mockData';


interface TaskCardProps {
  task: Task;
  onRemove?: (id: string) => void;
  onStatusChange?: (id: string, nextStatus: string) => void;
}


export const TaskCard: React.FC<TaskCardProps> = ({ task, onRemove, onStatusChange }) => {
  //OAMR -  Determinar el siguiente estado y el texto del botón
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
      <div style={{ fontSize: 13, color: '#555' }}>Prioridad: {task.priority}</div>
      <div style={{ fontSize: 13, color: '#555' }}>Proyecto: {task.project}</div>
      <div style={{ fontSize: 12, color: '#888' }}>
        <span>Creado: {task.createdAt}</span>
      </div>
      <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
        {onStatusChange && nextStatus && (
          <button onClick={() => onStatusChange(task.id, nextStatus)}>
            {actionLabel}
          </button>
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
