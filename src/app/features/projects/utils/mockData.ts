//OAMR -  mockData de proyectos para el DevBoard
//OAMR -  #sym:project

export interface Project {
  id: string;
  name: string;
  description: string;
  owner: string;
  createdAt: string;
  status: 'active' | 'archived';
}

export const mockProjects: Project[] = [
  {
    id: 'p1',
    name: 'TaskFlow UI',
    description: 'Frontend del sistema de gestión de tareas y tableros Kanban.',
    owner: 'Oscar Vugal',
    createdAt: '2026-03-15',
    status: 'active',
  },
  {
    id: 'p2',
    name: 'TaskFlow Backend',
    description: 'API y lógica de negocio para la gestión de tareas.',
    owner: 'Oscar Vugal',
    createdAt: '2026-03-16',
    status: 'active',
  },
  {
    id: 'p3',
    name: 'TaskFlow DevOps',
    description: 'Automatización de despliegues y CI/CD.',
    owner: 'Oscar Vugal',
    createdAt: '2026-03-17',
    status: 'archived',
  },
];
