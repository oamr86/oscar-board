import React from 'react';
import { Card } from '../../../shared/ui/molecules';
import { Badge } from '../../../shared/ui/atoms';
import type { Task } from '../types';

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => (
  <Card>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span>{task.title}</span>
      <Badge color={task.status === 'done' ? '#4caf50' : task.status === 'in-progress' ? '#ff9800' : '#bdbdbd'}>
        {task.status}
      </Badge>
    </div>
    {task.description && <p>{task.description}</p>}
  </Card>
);
