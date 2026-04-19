import { useReducer } from 'react';
import { Task } from '@/app/features/task/utils/mockData';

export type TaskState = {
  tasks: Task[];
};

export type TaskAction =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'UPDATE_TASK'; payload: Task }
  | { type: 'MARK_COMPLETE'; payload: string };

function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case 'ADD_TASK':
      return { tasks: [...state.tasks, action.payload] };
    case 'DELETE_TASK':
      return { tasks: state.tasks.filter(t => t.id !== action.payload) };
    case 'UPDATE_TASK':
      return {
        tasks: state.tasks.map(t => t.id === action.payload.id ? action.payload : t)
      };
    case 'MARK_COMPLETE':
      return {
        tasks: state.tasks.map(t => t.id === action.payload ? { ...t, status: 'Done' } : t)
      };
    default:
      return state;
  }
}

export function useTaskReducer(initialTasks: Task[]) {
  return useReducer(taskReducer, { tasks: initialTasks });
}
