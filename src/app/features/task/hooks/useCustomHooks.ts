import { useState } from 'react';
import { Task } from '@/data/mockTasks';

//OAMR -  Hook para manejar tareas: agregar, eliminar y marcar como completadas
export function useTaskManager(initialTasks: Task[] = []) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (task: Task) => setTasks((prev) => [...prev, task]);
  const removeTask = (id: string) => setTasks((prev) => prev.filter((t) => t.id !== id));
  const toggleTask = (id: string) => setTasks((prev) => prev.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));

  return { tasks, addTask, removeTask, toggleTask };
}

//OAMR -  Hook para validación de formularios
export function useFormValidation(initialState = {}, validate: (name: string, value: string) => string | undefined) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (validate) setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  return { values, errors, handleChange };
}
