import React from "react";
import { Card } from '@/app/shared/ui/molecules/Card';
import { Project } from '@/app/features/projects/utils/mockData';

export interface ProjectListPresentationProps {
  projects: Project[];
}

export const ProjectListPresentation: React.FC<ProjectListPresentationProps> = ({ projects }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'center',
    width: '100%',
    border: '1px solid #1976d2',
    borderRadius: 8,
    padding: 24,
    background: '#f5faff',
    boxSizing: 'border-box',
  }}>
    {projects.map((project) => (
      <Card key={project.id} style={{ width: '80%' }}>
        <h3 style={{ margin: 0 }}>{project.name}</h3>
        <p style={{ margin: '4px 0' }}>{project.description}</p>
        <span style={{ fontSize: 12, color: '#888' }}>Propietario: {project.owner} | Estado: {project.status}</span>
        <div style={{ fontSize: 11, color: '#aaa' }}>Creado: {project.createdAt}</div>
      </Card>
    ))}
  </div>
);