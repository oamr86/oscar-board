import { render, screen } from '@testing-library/react';
import { ProjectListPresentation } from './ProjectListPresentation';
import { ThemeProvider } from '@/app/context/theme-context';

const projects = [
  { id: '1', name: 'Proyecto 1', description: 'Desc 1', owner: 'Juan', status: 'Activo', createdAt: '2026-04-01' },
  { id: '2', name: 'Proyecto 2', description: 'Desc 2', owner: 'Ana', status: 'Inactivo', createdAt: '2026-04-02' },
];

describe('ProjectListPresentation', () => {
  it('renderiza la lista de proyectos', () => {
    render(
      <ThemeProvider>
        <ProjectListPresentation projects={projects} />
      </ThemeProvider>
    );
    expect(screen.getByText('Proyecto 1')).toBeInTheDocument();
    expect(screen.getByText('Proyecto 2')).toBeInTheDocument();
  });
});
