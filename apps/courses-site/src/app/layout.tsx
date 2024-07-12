import { type ReactNode } from 'react';

import { Navigation } from '@/features/navigation';
import './global.css';

export const metadata = {
  title: 'Welcome to Courses',
  description: 'Courses for courses :D',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
