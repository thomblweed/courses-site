import React from 'react';
import { render, screen } from '@testing-library/react';

import Page from '../src/app/page';

describe('Page', () => {
  it('should render heading', () => {
    render(<Page />);

    expect(
      screen.getByRole('heading', { name: 'Courses' })
    ).toBeInTheDocument();
  });
});
