import { render, screen } from '@testing-library/react';

import { Navigation } from './index';

it('should render a nav', () => {
  render(<Navigation />);

  expect(screen.getByRole('navigation')).toBeInTheDocument();
});

it('should render a list', () => {
  render(<Navigation />);

  expect(screen.getByRole('list')).toBeInTheDocument();
});

const menuItemTests = [
  { title: 'home', href: '/' },
  { title: 'about', href: '/about' },
  { title: 'contact', href: '/contact' },
];

it.each(menuItemTests)('should render a $title link', ({ title, href }) => {
  render(<Navigation />);

  const link = screen.getByRole('link', { name: title });

  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', href);
});
