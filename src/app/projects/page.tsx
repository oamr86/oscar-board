import React, { Suspense } from 'react';
const ProjectListContainer = React.lazy(() => import('@/app/features/projects/components/ProjectListContainer'));

export default function ProjectsPage() {
  return (
    <div style={{ padding: 32 }}>
      <h2>Proyectos</h2>
      <Suspense fallback={<div>Cargando proyectos...</div>}>
        <ProjectListContainer />
      </Suspense>
    </div>
  );
}
