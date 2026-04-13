import React from 'react';
import { Card } from '../../../shared/ui/molecules';
import { Badge } from '../../../shared/ui/atoms';
import type { Task } from '../types';

// Obtiene el tipo Task desde el archivo de tipos del feature de tareas
interface TaskCardProps {
  task: Task;
}

//Pintamos la tarjeta de la tarea usando el componente Card y Badge para el estado
export const TaskCard: React.FC<TaskCardProps> = ({ task }) => (
  <Card>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontWeight: 'bold', fontSize: 18 }}>{task.titulo}</span>
      <Badge
        color={
          task.estado === 'Completada'
            ? '#4caf50'
            : task.estado === 'En progreso'
            ? '#ff9800'
            : '#2196f3'
        }
      >
        {task.estado}
      </Badge>
    </div>
    {task.descripcion && <p style={{ margin: '8px 0' }}>{task.descripcion}</p>}
    <div style={{ fontSize: 12, color: '#888' }}>
      <span>Creado: {task.fechaCreacion.toLocaleDateString()}</span>
      <br />
      <span>Actualizado: {task.fechaUltimaActualizacion.toLocaleDateString()}</span>
    </div>
  </Card>
);
