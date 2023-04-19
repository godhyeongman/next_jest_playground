import { render, screen } from '@testing-library/react';
import { SummaryForm } from '../../pages';

test('Initial conditions', () => {
  render(<SummaryForm />);
  const checkBox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });

  expect(checkBox).toBeEnabled();

  const confirmButton = screen.getByRole('button', {
    name: /confirm order/i,
  });
  expect(confirmButton).toBeDisabled();
});
