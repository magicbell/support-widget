import { Basic as Widget } from './index.stories';
import { render, screen } from '@testing-library/react';

test('renders without crashing', () => {
  render(<Widget />);
  screen.getByRole('button', { name: /open chat/i });
});
