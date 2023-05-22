import { render, screen } from '@testing-library/react';
import { Options } from '../src/components/Options';
import userEvent from '@testing-library/user-event';

test('update sccop subtotal when scoops change', async () => {
  const user = userEvent.setup();
  render(<Options optionType="scoops" />);

  // make sure total starts out $0.00
  const initSum = screen.getByText('Scoops total: $', { exact: false });
  expect(initSum).toHaveTextContent('0.00');

  // update vanilla scoop to 1, and check subtotal

  const vanillaScoop = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });

  await user.clear(vanillaScoop);
  await user.type(vanillaScoop, '1');

  expect(vanillaScoop).toHaveTextContent('2.00');

  // update chocolate scoops to 2 and check subtotal
  const chocolateScoop = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  });

  await user.clear(chocolateScoop);
  await user.type(chocolateScoop, '2');

  expect(chocolateScoop).toHaveTextContent('6.00');
});
