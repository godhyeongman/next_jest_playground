import { render, screen } from '@testing-library/react';
import { SummaryForm } from '../../pages';
import userEvent from '@testing-library/user-event';
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

test('Checkbox enables button on first click and disables on second click', async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);
  const checkBox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });

  const confirmButton = screen.getByRole('button', {
    name: /confirm order/i,
  });

  await user.click(checkBox);
  expect(confirmButton).toBeEnabled();

  await user.click(checkBox);
  expect(confirmButton).toBeDisabled();
});
