import { type ReactNode } from 'react';

import { Navigation } from '@/features/navigation';
import { UserSession } from '@/features/user-session';
import './global.css';

export const metadata = {
  title: 'Welcome to Courses',
  description: 'Courses for courses :D',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="grid grid-rows-layout h-dvh container mx-auto">
          <header className="flex justify-between items-center px-4">
            <div>Courses</div>
            <div className="flex">
              <Navigation />
              <UserSession />
            </div>
          </header>
          <main className="px-4">{children}</main>
          <footer className="px-4">Footer</footer>
        </div>
      </body>
    </html>
  );
}
