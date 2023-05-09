import ToppingOption from './ToppingOption';
import { render, screen } from '@testing-library/react';

test('display topping option test', async () => {
  render(<ToppingOption />);

  const toppings: HTMLImageElement[] = await screen.findAllByRole('img', {
    name: /topping$/i,
  });

  expect(toppings).toHaveLength(3);

  const toppingAlts = toppings.map(el => el.alt);
  expect(toppingAlts).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping',
  ]);
});
