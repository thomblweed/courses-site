import { ReactNode } from 'react';

type ProductsLayoutProps = {
  children: ReactNode;
};

export default function ProductsLayout({ children }: ProductsLayoutProps) {
  return (
    <>
      <h1>Products Layout</h1>
      <section>{children}</section>
    </>
  );
}
