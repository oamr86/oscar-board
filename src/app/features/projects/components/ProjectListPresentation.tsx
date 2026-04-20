
import { memo } from 'react';
import { Card } from '@/app/components/molecules';
import { Project } from '@/data/mockProjects';
import { useThemeState } from '@/app/context/theme-context';

export interface ProjectListPresentationProps {
  projects: Project[];
}

const ProjectListPresentationComponent: React.FC<ProjectListPresentationProps> = ({ projects }) => {
  const mode = useThemeState();
  const isDark = mode === 'dark';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        alignItems: 'center',
        width: '100%',
        border: isDark ? '1px solid #a78bfa' : '1px solid #1976d2',
        borderRadius: 8,
        padding: 24,
        background: isDark ? '#23232b' : '#f5faff',
        boxSizing: 'border-box',
      }}
    >
      {projects.map((project) => (
        <Card key={project.id} style={{ width: '80%' }}>
          <h3 style={{ margin: 0 }}>{project.name}</h3>
          <p style={{ margin: '4px 0' }}>{project.description}</p>
          <span style={{ fontSize: 12, color: '#888' }}>
            Propietario: {project.owner} | Estado: {project.status}
          </span>
          <div style={{ fontSize: 11, color: '#aaa' }}>Creado: {project.createdAt}</div>
        </Card>
      ))}
    </div>
  );
};

export const ProjectListPresentation = memo(ProjectListPresentationComponent);
