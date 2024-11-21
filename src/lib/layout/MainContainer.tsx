import { ReactNode } from 'react';

interface MainContainerProps {
  children: ReactNode;
  className?: string;
}

export const MainContainer: React.FC<MainContainerProps> = ({ children, className = '' }) => {
  return (
    <main className={`flex flex-col items-center justify-center min-h-screen ${className}`}>
      {children}
    </main>
  );
};
