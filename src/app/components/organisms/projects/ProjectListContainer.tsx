// Este archivo fue movido desde features/projects/components/ProjectListContainer.tsx
import React from 'react';
import { ProjectListPresentation } from './ProjectListPresentation';
import { mockProjects } from '@/data/mockProjects';

export const ProjectListContainer: React.FC = () => {
  // Aquí podrías conectar lógica de estado, filtros, etc.
  return <ProjectListPresentation projects={mockProjects} />;
};
