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

  it('should display hi message', async () => {
    const userSessionJsx = await UserSession();
    render(userSessionJsx);

    expect(screen.getByText('Hi Jeff')).toBeInTheDocument();
  });

  it('should display sign out button', async () => {
    const userSessionJsx = await UserSession();
    render(userSessionJsx);

    expect(
      screen.getByRole('button', { name: 'Sign Out' })
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

  it('should display sign in button', async () => {
    const userSessionJsx = await UserSession();
    render(userSessionJsx);

    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument();
  });

  it('should NOT display hi message', async () => {
    const userSessionJsx = await UserSession();
    render(userSessionJsx);

    expect(screen.queryByText('Hi')).not.toBeInTheDocument();
  });
});
