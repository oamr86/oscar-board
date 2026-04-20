//OAMR -  'use client' es necesario porque este componente usa Suspense y simula carga asíncrona con throw new Promise, lo que requiere ejecución en el cliente.
"use client";
import React, { useState, useMemo, useCallback } from 'react';
import { TaskListPresentation } from './TaskListPresentation';
import { TASK_STATUSES, TASK_PRIORITIES } from '@/data/mockTasks';
import { useForm } from '@/app/features/task/hooks';
import { useTaskStore } from '@/app/features/task/store';
import { SearchBar } from '@/app/shared/ui/molecules/SearchBar';
import { useDebounce, useFilters, useLocalStorage } from '@/app/shared/hooks';

const initialTasks = [
  {
    id: '1',
    title: 'Diseñar wireframes',
    description: 'Crear los wireframes del dashboard principal',
    status: TASK_STATUSES.DONE,
    priority: TASK_PRIORITIES.HIGH,
    project: 'TaskFlow UI',
    createdAt: '2026-04-01',
  },
  {
    id: '2',
    title: 'Configurar CI/CD',
    description: 'Automatizar despliegues con GitHub Actions',
    status: TASK_STATUSES.IN_PROGRESS,
    priority: TASK_PRIORITIES.MEDIUM,
    project: 'TaskFlow API',
    createdAt: '2026-04-10',
  },
];


const validate = (values: { title: string; description: string; project: string }) => {
  const errors: Partial<{ title: string; description: string; project: string }> = {};
  if (!values.title) errors.title = 'Requerido';
  if (!values.description) errors.description = 'Requerido';
  if (!values.project) errors.project = 'Requerido';
  return errors;
};

const TaskListContainer: React.FC = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);
  const deleteTaskStore = useTaskStore((state) => state.deleteTask);
  const markCompleteStore = useTaskStore((state) => state.markComplete);

  // Handlers memoizados
  const handleRemove = useCallback((id: string) => {
    deleteTaskStore(id);
  }, [deleteTaskStore]);

  const handleToggle = useCallback((id: string) => {
    markCompleteStore(id);
  }, [markCompleteStore]);

  // Estado de búsqueda y filtros
  const [search, setSearch] = useLocalStorage<string>('task-search', '');
  const debouncedSearch = useDebounce(search, 300);
  const { filters, setFilter, clearFilters, applyFilters } = useFilters({ status: '', priority: '', project: '' });

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
    setErrors,
    setTouched,
  } = useForm({
    initialValues: {
      title: '',
      description: '',
      priority: TASK_PRIORITIES.MEDIUM,
      project: '',
    },
    validate,
    onSubmit: async (vals) => {
      //OAMR - Optimistic update: actualiza la UI antes de la respuesta del servidor
      const newTask = {
        id: Date.now().toString(),
        title: vals.title,
        description: vals.description,
        status: TASK_STATUSES.TODO,
        priority: vals.priority,
        project: vals.project,
        createdAt: new Date().toISOString().slice(0, 10),
        completed: false,
      };
      addTask(newTask);
      setValues({
        title: '',
        description: '',
        priority: TASK_PRIORITIES.MEDIUM,
        project: '',
      });
      setTouched({});
      setErrors({});
      // Simula petición al servidor
      try {
        await new Promise((resolve, reject) => setTimeout(resolve, 1200));
        // Si la petición falla, descomenta la siguiente línea para probar rollback:
        // throw new Error('Error al guardar');
      } catch (err) {
        //OAMR - Rollback: elimina la tarea agregada si la petición falla
        deleteTask(newTask.id);
        alert('Error al guardar la tarea. Se revirtió el cambio.');
      }
    },
  });




  // Filtrado de tareas con useMemo
  const filteredTasks = useMemo(() => {
    let result = tasks;
    if (debouncedSearch) {
      result = result.filter(task =>
        task.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        task.description.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }
    result = applyFilters(result);
    return result;
  }, [tasks, debouncedSearch, filters]);

  return (
    <section>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 16 }}>
        <SearchBar value={search} onChange={setSearch} placeholder="Buscar tarea..." />
        <select value={filters.status} onChange={e => setFilter('status', e.target.value)}>
          <option value="">Todas</option>
          <option value={TASK_STATUSES.TODO}>Pendiente</option>
          <option value={TASK_STATUSES.IN_PROGRESS}>En progreso</option>
          <option value={TASK_STATUSES.DONE}>Hecha</option>
        </select>
        <select value={filters.priority} onChange={e => setFilter('priority', e.target.value)}>
          <option value="">Todas</option>
          <option value={TASK_PRIORITIES.LOW}>Baja</option>
          <option value={TASK_PRIORITIES.MEDIUM}>Media</option>
          <option value={TASK_PRIORITIES.HIGH}>Alta</option>
        </select>
        <button type="button" onClick={clearFilters}>Limpiar filtros</button>
      </div>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 400 }}>
        <input
          name="title"
          placeholder="Título"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.title && errors.title && <span style={{ color: 'red', fontSize: 12 }}>{errors.title}</span>}
        <input
          name="description"
          placeholder="Descripción"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.description && errors.description && <span style={{ color: 'red', fontSize: 12 }}>{errors.description}</span>}
        <input
          name="project"
          placeholder="Proyecto"
          value={values.project}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.project && errors.project && <span style={{ color: 'red', fontSize: 12 }}>{errors.project}</span>}
        <select name="priority" value={values.priority} onChange={handleChange}>
          <option value={TASK_PRIORITIES.LOW}>Baja</option>
          <option value={TASK_PRIORITIES.MEDIUM}>Media</option>
          <option value={TASK_PRIORITIES.HIGH}>Alta</option>
        </select>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Agregando...' : 'Agregar tarea'}
        </button>
      </form>
      <TaskListPresentation tasks={filteredTasks} onRemove={handleRemove} onToggle={handleToggle} />
    </section>
  );
};

export default TaskListContainer;
