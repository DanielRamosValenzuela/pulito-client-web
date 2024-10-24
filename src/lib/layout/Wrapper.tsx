import { ReactNode } from 'react';

export const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="flex-1 flex flex-col md:flex-row gap-10 justify-center">{children}</section>
  );
};