import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import HomePage from '../src/app/page';

vi.mock('@/services/auth', () => ({
  auth: () => new Promise((resolve) => resolve({ user: { name: 'Jeff' } })),
}));

it('should display a heading', async () => {
  const homePageJsx = await HomePage();
  render(homePageJsx);

  expect(
    screen.getByRole('heading', { name: 'Courses', level: 1 })
  ).toBeVisible();
});

it('should display hi message', async () => {
  const homePageJsx = await HomePage();
  render(homePageJsx);

  expect(screen.getByText('Hi Jeff')).toBeVisible();
});
