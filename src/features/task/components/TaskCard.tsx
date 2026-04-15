import React from 'react';
import { Card } from '../../../shared/ui/molecules';
import { Badge } from '../../../shared/ui/atoms';
import type { Task } from '../utils/mockData';

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => (
  <Card style={{ width: '80%' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontWeight: 'bold', fontSize: 18 }}>{task.title}</span>
      <Badge
        color={
          task.status === 'done'
            ? '#4caf50'
            : task.status === 'in_progress'
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
