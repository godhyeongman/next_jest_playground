import { render, screen, fireEvent } from '@testing-library/react';
import Q2 from '../src/components/Q2';

test('disabled button Color gray enabled button color switch blue and red', () => {
  render(<Q2 />);

  const targetButton = screen.getByRole('button', { name: 'target Button' });
  const checkbox = screen.getByRole('checkbox');

  expect(targetButton).toHaveStyle({ backgroundColor: 'gray' });
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);

  expect(targetButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(targetButton);

  expect(targetButton).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);

  expect(targetButton).toHaveStyle({ backgroundColor: 'blue' });
});
