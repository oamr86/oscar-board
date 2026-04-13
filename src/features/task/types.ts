// Tipos para el feature de tareas
export interface Task {
  id: number;
  titulo: string;
  descripcion?: string;
  estado: 'En progreso' | 'En revisión' | 'Completada';
  IdProyecto?: number;
  fechaCreacion: Date;
  fechaUltimaActualizacion: Date;
}
