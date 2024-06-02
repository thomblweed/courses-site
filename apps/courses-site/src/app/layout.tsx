import './styles.css';

export const metadata = {
  title: 'Welcome to Courses',
  description: 'Courses for courses :D',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
