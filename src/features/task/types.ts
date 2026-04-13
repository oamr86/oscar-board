// Tipos para el feature de tareas

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in-progress' | 'done';
  projectId?: string;
}
