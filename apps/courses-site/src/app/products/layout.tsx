import { ReactNode } from 'react';

type ProductsLayoutProps = {
  children: ReactNode;
};

export default function ProductsLayout({ children }: ProductsLayoutProps) {
  return (
    <>
      <div>Products Layout</div>
      <section>{children}</section>
    </>
  );
}
