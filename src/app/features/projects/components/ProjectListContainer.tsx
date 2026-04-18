import React from "react";
import { mockProjects } from '@/app/features/projects/utils/mockData';
import { ProjectListPresentation } from "./ProjectListPresentation";

export const ProjectListContainer: React.FC = () => {
  return <ProjectListPresentation projects={mockProjects} />;
};