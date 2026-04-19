import { create } from 'zustand';
import { Task, mockTasks } from '@/app/features/task/utils/mockData';

export type TaskStoreState = {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  updateTask: (task: Task) => void;
  markComplete: (id: string) => void;
};

export const useTaskStore = create<TaskStoreState>((set) => ({
  tasks: [...mockTasks],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  deleteTask: (id) => set((state) => ({ tasks: state.tasks.filter(t => t.id !== id) })),
  updateTask: (task) => set((state) => ({ tasks: state.tasks.map(t => t.id === task.id ? task : t) })),
  markComplete: (id) => set((state) => ({ tasks: state.tasks.map(t => t.id === id ? { ...t, status: 'Done' } : t) })),
}));
