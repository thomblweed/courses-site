import { type ComponentPropsWithoutRef } from 'react';

import { Navigation } from '@/features/navigation';
import { UserSession } from '@/features/user-session';
import { ThemeProvider } from '@/providers/theme';
import './global.css';
import { ToggleTheme } from '@/features/theme/components/ToggleTheme';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RootLayoutProps extends ComponentPropsWithoutRef<'html'> {}

export const metadata = {
  title: 'Welcome to Courses',
  description: 'Courses for courses :D',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container mx-auto">
            <div className="grid grid-rows-layout h-dvh">
              <header className="flex justify-between items-center py-4">
                <div>Courses</div>
                <div className="flex gap-4">
                  <Navigation />
                  <ToggleTheme />
                  <UserSession />
                </div>
              </header>
              <main>{children}</main>
              <footer className="py-4">Footer</footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
