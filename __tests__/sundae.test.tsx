import { render, screen, fireEvent } from '@testing-library/react';
import { SummaryForm, OrderSummary } from '../pages';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';

test('Initial conditions', () => {
  render(<SummaryForm />);
  const checkBox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });

  expect(checkBox).not.toBeChecked();

  const confirmButton = screen.getByRole('button', { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});
