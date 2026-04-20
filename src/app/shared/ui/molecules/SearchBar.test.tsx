import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('renderiza el input y llama onChange', () => {
    const handleChange = vi.fn();
    render(<SearchBar value="abc" onChange={handleChange} placeholder="Buscar..." />);
    const input = screen.getByPlaceholderText('Buscar...');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'nuevo' } });
    expect(handleChange).toHaveBeenCalledWith('nuevo');
  });
});
