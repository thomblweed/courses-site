import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import HomePage from '../src/app/page';

const mockAuth = vi.fn();
vi.mock('@/services/auth', () => ({
  auth: () => mockAuth(),
}));

describe('When auth returns a session', () => {
  beforeEach(() => {
    mockAuth.mockResolvedValue({ user: { name: 'Jeff' } });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should display send email button', async () => {
    const homePageJsx = await HomePage();
    render(homePageJsx);

    expect(
      screen.getByRole('button', { name: 'Send Email' })
    ).toBeInTheDocument();
  });
});

describe('When auth returns null', () => {
  beforeEach(() => {
    mockAuth.mockResolvedValue(null);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should NOT display send email button', async () => {
    const homePageJsx = await HomePage();
    render(homePageJsx);

    expect(
      screen.queryByRole('button', { name: 'Send Email' })
    ).not.toBeInTheDocument();
  });
});
