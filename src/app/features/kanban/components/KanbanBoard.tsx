//OAMR -  Este componente se ejecuta en el servidor por defecto (Server Component) porque no tiene 'use client'.
import React from 'react';
import { ProjectListContainer } from '@/app/features/projects/components/ProjectListContainer';
import KanbanTasks from './KanbanTasks';
import { ThemeSwitcher } from '@/app/shared/ui/ThemeSwitcher';

export default function KanbanBoard() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: 0,
      padding: 32,
      minHeight: '80vh',
      borderRadius: 24,
      boxShadow: '0 8px 32px 0 #0002',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
      border: '4px solid #7c3aed',
    }}>
      <div style={{
        flex: 1,
        minWidth: 320,
        background: 'linear-gradient(120deg, #fdf6e3 0%, #fbbf24 100%)', // degradado amarillo a dorado
        borderRight: '4px solid #7c3aed',
        borderRadius: '24px 0 0 24px',
        padding: 28,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '4px 0 16px 0 #fbbf2430',
      }}>
        <h2 style={{ color: '#7c3aed', marginBottom: 18, letterSpacing: 1, textShadow: '1px 2px 8px #fff8' }}>Proyectos</h2>
        <ProjectListContainer />
      </div>
      <div style={{
        flex: 3,
        background: 'linear-gradient(120deg, #e0e7ff 0%, #f0abfc 100%)', // degradado azul a rosa
        borderRadius: '0 24px 24px 0',
        padding: 28,
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        boxShadow: '-4px 0 16px 0 #f0abfc30',
      }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ThemeSwitcher />
        </div>
        <h2 style={{ color: '#7c3aed', marginBottom: 18, textAlign: 'center', letterSpacing: 1, textShadow: '1px 2px 8px #fff8' }}>Tareas (Kanban)</h2>
        <KanbanTasks />
      </div>
    </div>
  );
}
