// Este archivo fue movido desde features/kanban/components/KanbanBoard.tsx
import React from 'react';
import { ProjectListContainer } from '../projects/ProjectListContainer';
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
        background: 'linear-gradient(120deg, #fdf6e3 0%, #fbbf24 100%)',
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
        background: 'linear-gradient(120deg, #e0e7ff 0%, #f0abfc 100%)',
        borderRadius: '0 24px 24px 0',
        padding: 28,
        minHeight: '100%',
      }}>
        <KanbanTasks />
      </div>
      <ThemeSwitcher />
    </div>
  );
}
