export const TASK_STATUSES = {
  TODO: "To do",
  IN_PROGRESS: "In progress",
  DONE: "Done",
} as const;

export const TASK_PRIORITIES = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High",
} as const;
// Este archivo fue movido desde features/task/utils/mockData.ts
export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  project: string;
  createdAt: string;
  completed: boolean;
}

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Diseñar wireframes',
    description: 'Crear los wireframes del dashboard principal',
    status: TASK_STATUSES.TODO,
    priority: TASK_PRIORITIES.HIGH,
    project: 'Proyecto A',
    createdAt: '2023-01-02',
    completed: false,
  },
  {
    id: '2',
    title: 'Configurar CI/CD',
    description: 'Automatizar despliegues en la nube',
    status: TASK_STATUSES.IN_PROGRESS,
    priority: TASK_PRIORITIES.MEDIUM,
    project: 'Proyecto B',
    createdAt: '2023-02-20',
    completed: false,
  },
  {
    id: '3',
    title: 'Actualizar branding',
    description: 'Aplicar nueva paleta de colores',
    status: TASK_STATUSES.DONE,
    priority: TASK_PRIORITIES.LOW,
    project: 'Proyecto C',
    createdAt: '2023-03-12',
    completed: true,
  },
  {
    id: '4',
    title: 'Revisar seguridad',
    description: 'Auditar roles y permisos',
    status: TASK_STATUSES.TODO,
    priority: TASK_PRIORITIES.HIGH,
    project: 'Proyecto D',
    createdAt: '2023-04-06',
    completed: false,
  },
  {
    id: '5',
    title: 'Optimizar imágenes',
    description: 'Reducir peso de assets en landing',
    status: TASK_STATUSES.IN_PROGRESS,
    priority: TASK_PRIORITIES.MEDIUM,
    project: 'Proyecto C',
    createdAt: '2023-03-15',
    completed: false,
  },
  {
    id: '6',
    title: 'Documentar endpoints',
    description: 'Actualizar documentación de la API',
    status: TASK_STATUSES.DONE,
    priority: TASK_PRIORITIES.LOW,
    project: 'Proyecto B',
    createdAt: '2023-02-25',
    completed: true,
  },
  {
    id: '7',
    title: 'Crear dashboard de métricas',
    description: 'Panel para visualizar KPIs',
    status: TASK_STATUSES.TODO,
    priority: TASK_PRIORITIES.HIGH,
    project: 'Proyecto A',
    createdAt: '2023-01-10',
    completed: false,
  },
  {
    id: '8',
    title: 'Integrar Google Analytics',
    description: 'Añadir tracking a la landing',
    status: TASK_STATUSES.IN_PROGRESS,
    priority: TASK_PRIORITIES.MEDIUM,
    project: 'Proyecto C',
    createdAt: '2023-03-18',
    completed: false,
  },
  {
    id: '9',
    title: 'Automatizar reportes',
    description: 'Enviar reportes semanales por email',
    status: TASK_STATUSES.DONE,
    priority: TASK_PRIORITIES.LOW,
    project: 'Proyecto D',
    createdAt: '2023-04-10',
    completed: true,
  },
];
