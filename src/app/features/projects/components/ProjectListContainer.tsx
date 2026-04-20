//OAMR -  'use client' es necesario porque este componente usa Suspense y simula carga asíncrona con throw new Promise, lo que requiere ejecución en el cliente.
"use client";
import React, { useEffect, useState } from "react";
import { mockProjects } from '@/data/mockProjects';
import { ProjectListPresentation } from "./ProjectListPresentation";


let resolved = false;
const ProjectListContainer: React.FC = () => {
  if (!resolved) {
    throw new Promise(resolve => setTimeout(() => {
      resolved = true;
      resolve(true);
    }, 2000));
  }
  return <ProjectListPresentation projects={mockProjects} />;
};

export default ProjectListContainer;
export { ProjectListContainer };
