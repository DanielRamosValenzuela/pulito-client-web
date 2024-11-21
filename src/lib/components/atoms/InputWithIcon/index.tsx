interface InputWithIconProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
  containerClassName?: string;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
  icon,
  containerClassName = '',
  className = '',
  ...props
}) => {
  return (
    <div className={`bg-gray-100 flex items-center p-2 ${containerClassName}`}>
      <div className="text-gray-400 m-2">{icon}</div>
      <input
        {...props}
        className={`bg-gray-100 outline-none text-sm flex-1 ${className}`}
      />
    </div>
  );
};

export default InputWithIcon;
