import React from 'react';
import { render, screen } from '@testing-library/react';

import Page from '../src/app/page';

it('should display a heading', () => {
  render(<Page />);

  expect(
    screen.getByRole('heading', { name: 'Courses', level: 1 })
  ).toBeVisible();
});
