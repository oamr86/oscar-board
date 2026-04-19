//OAMR -  Este componente se ejecuta en el servidor por defecto (Server Component) porque no tiene 'use client'.
import React, { useState, useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { useTaskStore } from '@/app/features/task/store';
import { TASK_STATUSES } from '@/app/features/task/utils/mockData';
import { TaskCard } from '@/app/features/task/components/TaskCard';
import { mockTasks } from '@/app/features/task/utils/mockData';
import { mockProjects } from '@/app/features/projects/utils/mockData';

const columns = [
  { key: TASK_STATUSES.TODO, label: 'To do' },
  { key: TASK_STATUSES.IN_PROGRESS, label: 'In progress' },
  { key: TASK_STATUSES.DONE, label: 'Done' },
];

export default function KanbanTasks() {
  //OAMR -  Encuentra el proyecto con más tareas en distintos estados
  const projectStateCount = mockProjects.map((project) => {
    const projectTasks = mockTasks.filter((t) => t.project === project.name);
    const uniqueStates = new Set(projectTasks.map((t) => t.status));
    return { id: project.id, name: project.name, stateCount: uniqueStates.size };
  });
  const maxStateProject = projectStateCount.reduce((max, curr) => curr.stateCount > max.stateCount ? curr : max, { id: 'all', name: '', stateCount: 0 });

  const tasks = useTaskStore((state) => state.tasks);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const updateTask = useTaskStore((state) => state.updateTask);
  const [selectedProject, setSelectedProject] = useState(maxStateProject.id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSelectedProject(maxStateProject.id);
    setLoading(true);
    const controller = new AbortController();
    const timer = setTimeout(() => {
      if (!controller.signal.aborted) setLoading(false);
    }, 2000);
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
    //OAMR -  eslint-disable-next-line
  }, []);

  //OAMR -  Efecto skeleton al cambiar proyecto (excepto en el primer render)
  useEffect(() => {
    if (!loading && selectedProject !== maxStateProject.id) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }
    //OAMR -  eslint-disable-next-line
  }, [selectedProject]);

  const filteredTasks = selectedProject === 'all'
    ? tasks
    : tasks.filter((t) => t.project === mockProjects.find((p) => p.id === selectedProject)?.name);

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="project-filter" style={{ marginRight: 8 }}>Filtrar por proyecto:</label>
        <select
          id="project-filter"
          value={selectedProject}
          onChange={e => {
            setSelectedProject(e.target.value);
          }}
        >
          <option value="all">Todos</option>
          {mockProjects.map((project) => (
            <option key={project.id} value={project.id}>{project.name}</option>
          ))}
        </select>
      </div>
      <div style={{ display: 'flex', gap: 24, minHeight: 400 }}>
        {columns.map((col) => (
          <div key={col.key} style={{ flex: 1, background: '#f5faff', borderRadius: 8, padding: 16, border: '1px solid #1976d2', minHeight: 300 }}>
            <h3 style={{ textAlign: 'center', color: '#1976d2' }}>{col.label}</h3>
            {loading ? (
              Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, padding: 8 }}>
                  <Skeleton variant="circular" width={48} height={48} animation="wave" style={{ flexShrink: 0, background: '#e4e6eb' }} />
                  <div style={{ flex: 1 }}>
                    <Skeleton variant="text" width="60%" height={20} animation="wave" style={{ marginBottom: 8, background: '#e4e6eb' }} />
                    <Skeleton variant="text" width="90%" height={14} animation="wave" style={{ marginBottom: 6, background: '#e4e6eb' }} />
                    <Skeleton variant="text" width="40%" height={14} animation="wave" style={{ background: '#e4e6eb' }} />
                  </div>
                </div>
              ))
            ) : (
              filteredTasks.filter((t) => t.status === col.key).map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onRemove={deleteTask}
                  onStatusChange={(id, nextStatus) => {
                    updateTask({ ...task, status: nextStatus });
                  }}
                />
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
