import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { UserSession } from './index';

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

  it('should display user menu', async () => {
    const userSessionJsx = await UserSession();
    render(userSessionJsx);

    expect(
      screen.getByRole('button', { name: 'Your details' })
    ).toBeInTheDocument();
  });
});

describe('When auth returns a user with no properties', async () => {
  beforeEach(() => {
    mockAuth.mockResolvedValue({ user: {} });
  });

  it('should NOT display hi message', async () => {
    const userSessionJsx = await UserSession();
    render(userSessionJsx);

    expect(screen.queryByText('Hi')).not.toBeInTheDocument();
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
    const userSessionJsx = await UserSession();
    render(userSessionJsx);

    expect(screen.getByRole('button', { name: 'Sign in' })).toBeInTheDocument();
  });

  it('should NOT display hi message', async () => {
    const userSessionJsx = await UserSession();
    render(userSessionJsx);

    expect(screen.queryByText('Hi')).not.toBeInTheDocument();
  });
});
