// Este archivo fue movido desde features/projects/components/Arrow.tsx
import React from 'react';

export const Arrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ cursor: 'pointer' }}
    onClick={onClick}
  >
    <path
      d="M12 8L20 16L12 24"
      stroke="#1976d2"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
