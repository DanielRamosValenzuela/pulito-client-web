import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <section className={`flex flex-col justify-center items-center ${className}`}>
      {children}
    </section>
  );
};
