import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import { logRoles } from '@testing-library/react';

test('button has correct init color', () => {
  const { container } = render(<Home />);
  logRoles(container);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  expect(colorButton).toHaveTextContent('111');

  expect(colorButton.textContent).toBe('111');
});

test('checkbox has correct init state', () => {
  render(<Home />);

  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  expect(checkBox).not.toBeChecked();

  fireEvent.click(checkBox);

  expect(colorButton).toBeDisabled();
});

// test('button turns blue when clicked', () => {});
