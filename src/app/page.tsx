//OAMR -  'use client' permite que este archivo use APIs de React exclusivas de componentes cliente (como hooks y dynamic imports).
"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const KanbanBoard = dynamic(() => import('./features/kanban/components/KanbanBoard'), { ssr: false });

export default function HomePage() {
  return (
    <div style={{ padding: 32 }}>
      <center><h1>Oscar Board</h1></center>
      <KanbanBoard />
    </div>
  );
}
