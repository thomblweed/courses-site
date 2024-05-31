import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import HomePage from '../src/app/page';

const mockAuth = vi.fn();
vi.mock('@/services/auth', () => ({
  auth: () => mockAuth(),
}));

it('should display a heading', async () => {
  const homePageJsx = await HomePage();
  render(homePageJsx);

  expect(
    screen.getByRole('heading', { name: 'Courses', level: 1 })
  ).toBeVisible();
});

describe('When auth returns a session', () => {
  beforeEach(() => {
    mockAuth.mockResolvedValue({ user: { name: 'Jeff' } });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should display hi message', async () => {
    const homePageJsx = await HomePage();
    render(homePageJsx);

    expect(screen.getByText('Hi Jeff')).toBeVisible();
  });
});

describe('When auth returns null', () => {
  beforeEach(() => {
    mockAuth.mockResolvedValue(null);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should display sign in button', async () => {
    const homePageJsx = await HomePage();
    render(homePageJsx);

    expect(screen.getByRole('button', { name: 'Sign In' })).toBeVisible();
  });
});
