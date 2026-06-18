import { render, screen } from '@testing-library/react';
import App from './App';

test('renders bug tracking system heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /bug tracking system/i });
  expect(heading).toBeInTheDocument();
});
