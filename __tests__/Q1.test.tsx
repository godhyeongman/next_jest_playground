import { render, screen, fireEvent } from '@testing-library/react';
import Q1 from '../src/components/Q1';

test('chekbox is checked', () => {
  render(<Q1 />);
  const checkBox = screen.getByRole('checkbox');
  const targetButton = screen.getByRole('button', { name: 'target Button' });

  expect(checkBox).not.toBeChecked();
  expect(targetButton).toBeDisabled();

  fireEvent.click(checkBox);

  expect(checkBox).toBeChecked;
  expect(targetButton).not.toBeEnabled;

  fireEvent.click(checkBox);

  expect(checkBox).not.toBeChecked;
  expect(targetButton).toBeEnabled;
});
