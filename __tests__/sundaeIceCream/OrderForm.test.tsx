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

test('popover responds to hover', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  // 팝오버 시작했을때 없음
  const nonePopover = screen.queryByText(/No ice cream will deliverd/i);
  expect(nonePopover).not.toBeInTheDocument();

  // 체크 박스 라벨 호버 했을때 팝오버 등장
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const popover = screen.getByText(/No ice cream will deliverd/i);
  expect(popover).toBeInTheDocument();

  // 호버 풀었을때 팝오버 사라짐
  await user.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
});
