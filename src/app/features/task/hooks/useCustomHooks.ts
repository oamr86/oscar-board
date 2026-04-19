import { useState } from 'react';

//OAMR -  Hook para manejar tareas: agregar, eliminar y marcar como completadas
export function useTaskManager(initialTasks = []) {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (task) => setTasks((prev) => [...prev, task]);
  const removeTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id));
  const toggleTask = (id) => setTasks((prev) => prev.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));

  return { tasks, addTask, removeTask, toggleTask };
}

//OAMR -  Hook para validación de formularios
export function useFormValidation(initialState = {}, validate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (validate) setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  return { values, errors, handleChange };
}
