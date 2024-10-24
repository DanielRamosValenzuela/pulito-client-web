import { ReactNode } from 'react';

export const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="flex flex-col h-screen pt-36">{children}</main>
  );
};