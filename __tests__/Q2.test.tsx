import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Q2 from '../components/Q2';

test('disabled button Color gray enabled button color switch blue and red', () => {
  const { getByRole } = render(<Q2 />);

  const targetButton = getByRole('button', { name: 'target Button' });
  const checkbox = getByRole('checkbox');

  expect(targetButton).toHaveStyle({ backgroundColor: 'gray' });
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);

  expect(targetButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(targetButton);

  expect(targetButton).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);

  expect(targetButton).toHaveStyle({ backgroundColor: 'blue' });
});
