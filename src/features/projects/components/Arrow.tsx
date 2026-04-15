import React from "react";

interface ArrowProps {
  onClick: () => void;
}
//Arrow para los cards de projects
export const Arrow: React.FC<ArrowProps> = ({ onClick }) => (
  <span
    onClick={onClick}
    style={{
      display: 'inline-block',
      cursor: 'pointer',
      marginLeft: 12,
      transition: 'transform 0.3s cubic-bezier(.4,1.7,.6,1)',
    }}
    className="project-arrow"
    tabIndex={0}
    role="button"
    aria-label="Ver tareas de este proyecto"
    onKeyDown={(e: React.KeyboardEvent<HTMLSpanElement>) => (e.key === 'Enter' || e.key === ' ') && onClick()}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 5L15 12L8 19" stroke="#1976d2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);
