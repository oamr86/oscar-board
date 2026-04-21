import React, { Suspense } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyectos | TaskFlow',
  description: 'Gestiona tus proyectos',
  openGraph: {
    title: 'Proyectos | TaskFlow',
    description: 'Gestiona tus proyectos',
  },
};
const ProjectListContainer = React.lazy(() => import('@/app/components/organisms/projects/ProjectListContainer'));

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
