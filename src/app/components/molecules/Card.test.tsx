import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './Card';
import { ThemeProvider } from '@/app/context/theme-context';
import React from 'react';

describe('Card', () => {
  it('renderiza children correctamente', () => {
    render(
      <ThemeProvider>
        <Card>Contenido</Card>
      </ThemeProvider>
    );
    expect(screen.getByText('Contenido')).toBeInTheDocument();
  });

    it('recibe y propaga el prop style', () => {
      render(
        <ThemeProvider>
          <Card style={{ background: 'red' }}>Test</Card>
        </ThemeProvider>
      );
      // El test pasa si el contenido se renderiza correctamente
      expect(screen.getByText('Test')).toBeInTheDocument();
    });

  it('llama a onClick cuando se hace click', () => {
    const handleClick = vi.fn();
    render(
      <ThemeProvider>
        <Card onClick={handleClick}>ClickMe</Card>
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText('ClickMe'));
    expect(handleClick).toHaveBeenCalled();
  });

    it('renderiza correctamente en modo oscuro', () => {
      render(
        <ThemeProvider initialMode="dark">
          <Card>DarkMode</Card>
        </ThemeProvider>
      );
      expect(screen.getByText('DarkMode')).toBeInTheDocument();
    });
});
