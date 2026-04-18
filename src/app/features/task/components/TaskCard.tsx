import React from 'react';
import { Card } from '@/app/shared/ui/molecules';
import { Badge } from '@/app/shared/ui/atoms';
import { Task, TASK_STATUSES } from '@/app/features/task/utils/mockData';

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => (
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
  </Card>
);
