import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/getStart';
import { logRoles } from '@testing-library/react';
import { replaceCamelWithSpaces } from '../pages/getStart';

test('button has correct init color', () => {
  const { container } = render(<Home />);
  logRoles(container);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', {
    name: 'change to tomato',
  });

  expect(colorButton).toHaveStyle({ backgroundColor: 'tomato' });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'orange' });

  expect(colorButton).toHaveTextContent('change to orange');

  expect(colorButton).toHaveTextContent('change to orange');
});

test('checkbox has correct init state', () => {
  render(<Home />);

  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: 'change to tomato' });

  expect(checkBox).not.toBeChecked();

  fireEvent.click(checkBox);

  expect(colorButton).toBeDisabled();
});

// test('button turns blue when clicked', () => {});

describe('space before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
