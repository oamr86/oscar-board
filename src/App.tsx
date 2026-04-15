import React from 'react';
import { useState, useEffect } from 'react';
// Animación del arrow que cree
function useArrowWiggleStyle() {
  useEffect(() => {
    if (!document.head.querySelector('#arrow-wiggle-style')) {
      const style = document.createElement('style');
      style.id = 'arrow-wiggle-style';
      style.innerHTML = `
        @keyframes arrow-wiggle {
          0% { transform: translateX(0); }
          10% { transform: translateX(2.5px); }
          20% { transform: translateX(0); }
          100% { transform: translateX(0); }
        }
        .arrow-wiggle {
          animation: arrow-wiggle 2s infinite;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);
}
import { TaskListContainer } from './features/task/components/TaskListContainer';
import { ProjectListContainer } from './features/projects/components/ProjectListContainer';
import { mockTasks } from './features/task/utils/mockData';
import { mockProjects } from './features/projects/utils/mockData';
import { Card } from './shared/ui/molecules/Card';
import { Arrow } from './features/projects/components/Arrow';
import Tabs from './shared/ui/molecules/Tabs';

function App() {
  useArrowWiggleStyle();
  const [activeTab, setActiveTab] = useState<string>('projects');
  const [projectFilter, setProjectFilter] = useState<string | null>(null);

  // Animación para el arrow
  const [arrowAnimating, setArrowAnimating] = useState<string | null>(null);

  const handleArrowClick = (projectName: string) => {
    setArrowAnimating(projectName);
    setTimeout(() => {
      setProjectFilter(projectName);
      setActiveTab('tasks');
      setArrowAnimating(null);
    }, 350);
  };

  return (
    <div style={{ padding: 32 }}>
      <center><h1>Oscar Board</h1></center>
      <Tabs defaultTab={activeTab} activeTab={activeTab} setActiveTab={setActiveTab}>
        <Tabs.Header>
          <Tabs.Tab id="projects" onClick={() => { setActiveTab('projects'); setProjectFilter(null); }}>Proyectos</Tabs.Tab>
          <Tabs.Tab id="tasks" onClick={() => { setActiveTab('tasks'); setProjectFilter(null); }}>Tareas</Tabs.Tab>
        </Tabs.Header>
        <Tabs.Content id="projects">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            alignItems: 'flex-start',
            width: '100%',
            border: '1px solid #1976d2',
            borderRadius: 8,
            padding: 24,
            background: '#f5faff',
            boxSizing: 'border-box',
          }}>
            {mockProjects.map(project => (
              <Card
                key={project.id}
                style={{
                  width: '80%',
                  minWidth: 0,
                  maxWidth: '80%',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(25, 118, 210, 0.07)',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  transform: arrowAnimating === project.name ? 'scale(0.98)' : 'none',
                  alignSelf: 'center',
                }}
                onClick={() => handleArrowClick(project.name)}
                tabIndex={0}
                role="button"
                aria-label={`Ver tareas de ${project.name}`}
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleArrowClick(project.name)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ margin: 0 }}>{project.name}</h3>
                    <p style={{ margin: '4px 0' }}>{project.description}</p>
                    <span style={{ fontSize: 12, color: '#888' }}>Propietario: {project.owner} | Estado: {project.status}</span>
                    <div style={{ fontSize: 11, color: '#aaa' }}>Creado: {project.createdAt}</div>
                  </div>
                  <span
                    className="arrow-wiggle"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      transform: arrowAnimating === project.name ? 'translateX(16px)' : 'none',
                      transition: 'transform 0.35s cubic-bezier(.4,1.7,.6,1)',
                    }}
                  >
                    <Arrow onClick={() => handleArrowClick(project.name)} />
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </Tabs.Content>

        <Tabs.Content id="tasks">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            alignItems: 'flex-start',
            width: '100%',
            border: '1px solid #1976d2',
            borderRadius: 8,
            padding: 24,
            background: '#f5faff',
            boxSizing: 'border-box',
          }}>
            {(projectFilter ?
              mockTasks.filter(task => task.project === projectFilter)
              : mockTasks
            ).map(task => (
              <Card key={task.id} style={{ width: '80%', minWidth: 0, maxWidth: '80%', alignSelf: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 'bold', fontSize: 18 }}>{task.title}</span>
                  <span style={{ fontSize: 13, color: '#1976d2', fontWeight: 500 }}>{task.status}</span>
                </div>
                <div style={{ margin: '8px 0' }}>{task.description}</div>
                <div style={{ fontSize: 13, color: '#555' }}>Prioridad: {task.priority}</div>
                <div style={{ fontSize: 13, color: '#555' }}>Proyecto: {task.project}</div>
                <div style={{ fontSize: 12, color: '#888' }}>
                  <span>Creado: {task.createdAt}</span>
                </div>
              </Card>
            ))}
            {projectFilter && (
              <button style={{ marginTop: 16, color: '#1976d2', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500 }} onClick={() => setProjectFilter(null)}>
                Ver todas las tareas
              </button>
            )}
          </div>
        </Tabs.Content>
      </Tabs>
    </div>
  );
}

export default App;
