import { render, screen, waitFor, logRoles } from '@testing-library/react';
import OrderEntry from './OrderEntry';
import { rest } from 'msw';
import { server } from '../../mocks/server';

test('handle error from scoops and toppings routes', async () => {
  server.resetHandlers(
    rest.get('http://localhost:3030/scoops', (req, res, ctx) =>
      res(ctx.status(500)),
    ),
    rest.get('http://localhost:3030/toppings', (req, res, ctx) =>
      res(ctx.status(500)),
    ),
  );

  const { container } = render(<OrderEntry />);
  logRoles(container);

  await waitFor(async () => {
    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(2);
  });
});

// eslint-disable-next-line @typescript-eslint/no-empty-function
test.skip('should not test this fake', () => {});
