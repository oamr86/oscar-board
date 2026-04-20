// Este archivo fue movido desde features/projects/components/ProjectListPresentation.tsx
import React from 'react';
import { Card } from '../../molecules/Card';
import { Project } from '@/data/mockProjects';

interface ProjectListPresentationProps {
  projects: Project[];
}

export const ProjectListPresentation: React.FC<ProjectListPresentationProps> = ({ projects }) => (
  <div>
    {projects.map(project => (
      <Card key={project.id} style={{ marginBottom: 12 }}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </Card>
    ))}
  </div>
);
