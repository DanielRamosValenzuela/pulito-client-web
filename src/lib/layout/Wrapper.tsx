import { ReactNode } from 'react';

export const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="flex-1">{children}</section>
  );
};