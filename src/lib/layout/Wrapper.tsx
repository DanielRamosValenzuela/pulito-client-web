import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex-1 flex flex-col md:flex-row justify-center ${className}`}>
      {children}
    </div>
  );
};
