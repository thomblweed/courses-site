import { render, screen } from '@testing-library/react';

import HomePage from '../src/app/page';

it('should NOT display send email button', async () => {
  const homePageJsx = await HomePage();
  render(homePageJsx);

  expect(screen.getByText('Home Page')).toBeInTheDocument();
});
