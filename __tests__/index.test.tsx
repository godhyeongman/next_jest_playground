import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

test('홈 페이지 렌더링 테스트', () => {
  render(<Home></Home>);
  const homeText = screen.getByText(/테스트/i);
  expect(homeText).toBeInTheDocument();
});
