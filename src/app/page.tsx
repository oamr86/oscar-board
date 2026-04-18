"use client";
import React from 'react';
import Tabs from '@/app/shared/ui/molecules/Tabs';
import { useState } from 'react';
import { ProjectListContainer } from '@/app/features/projects/components/ProjectListContainer';
import { TaskListContainer } from '@/app/features/task/components/TaskListContainer';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div style={{ padding: 32 }}>
      <center><h1>Oscar Board</h1></center>
      <Tabs defaultTab={activeTab} activeTab={activeTab} setActiveTab={setActiveTab}>
        <Tabs.Header>
          <Tabs.Tab id="projects">Proyectos</Tabs.Tab>
          <Tabs.Tab id="tasks">Tareas</Tabs.Tab>
        </Tabs.Header>
      </Tabs>
      <div style={{ marginTop: 32 }}>
        {activeTab === 'projects' && <ProjectListContainer />}
        {activeTab === 'tasks' && <TaskListContainer />}
      </div>
    </div>
  );
}
