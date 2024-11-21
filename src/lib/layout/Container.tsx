import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <section className={`flex flex-col justify-center items-center ${className}`}>
      {children}
    </section>
  );
};


export default Container