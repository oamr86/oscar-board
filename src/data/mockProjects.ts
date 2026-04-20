// Este archivo fue movido desde features/projects/utils/mockData.ts
export interface Project {
  id: string;
  name: string;
  description: string;
  owner: string;
  status: string;
  createdAt: string;
}

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Proyecto A',
    description: 'Descripción del proyecto A',
    owner: 'Oscar',
    status: 'Activo',
    createdAt: '2023-01-01',
  },
  {
    id: '2',
    name: 'Proyecto B',
    description: 'Migración a la nube',
    owner: 'Ana',
    status: 'En progreso',
    createdAt: '2023-02-15',
  },
  {
    id: '3',
    name: 'Proyecto C',
    description: 'Rediseño de landing page',
    owner: 'Luis',
    status: 'Pendiente',
    createdAt: '2023-03-10',
  },
  {
    id: '4',
    name: 'Proyecto D',
    description: 'Automatización de reportes',
    owner: 'Sofía',
    status: 'Activo',
    createdAt: '2023-04-05',
  },
];
