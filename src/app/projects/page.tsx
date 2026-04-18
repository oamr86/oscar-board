import React from 'react';
import { ProjectListContainer } from '@/app/features/projects/components/ProjectListContainer';

export default function ProjectsPage() {
  return (
    <div style={{ padding: 32 }}>
      <h2>Proyectos</h2>
      <ProjectListContainer />
    </div>
  );
}
