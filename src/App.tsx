import React from 'react';
import { TaskListContainer } from './features/task/components/TaskListContainer';

function App() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Oscar Board (Vite + React + TS)</h1>
      <TaskListContainer />
    </div>
  );
}

export default App;
