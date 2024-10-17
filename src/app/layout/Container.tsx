import { ReactNode } from 'react';

export const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="flex flex-col h-screen">{children}</main>
  );
};