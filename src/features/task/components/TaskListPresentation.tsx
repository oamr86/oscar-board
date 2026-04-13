import React from 'react';
import type { Task } from '../types';

interface TaskListPresentationProps {
  tasks: Task[];
}

export const TaskListPresentation: React.FC<TaskListPresentationProps> = ({ tasks }) => (
  <ul>
    {tasks.map((task) => (
      <li key={task.id}>
        <strong>{task.titulo}</strong>
        {task.descripcion && <p>{task.descripcion}</p>}
        <span>Estado: {task.estado}</span>
        <div style={{ fontSize: 12, color: '#888' }}>
          <span>Creado: {task.fechaCreacion.toLocaleDateString()}</span>
          <br />
          <span>Actualizado: {task.fechaUltimaActualizacion.toLocaleDateString()}</span>
        </div>
      </li>
    ))}
  </ul>
);
