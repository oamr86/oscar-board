import { useState } from 'react';
import { Project } from '@/data/mockProjects';

/**
 * useProject
 * Hook de dominio para manejar el estado de un proyecto individual.
 */
export function useProject(initialProject: Project) {
  const [project, setProject] = useState<Project>(initialProject);

  const updateProject = (updates: Partial<Project>) => {
    setProject((prev) => ({ ...prev, ...updates }));
  };

  return { project, updateProject };
}
