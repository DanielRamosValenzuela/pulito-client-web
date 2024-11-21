interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  text = '',
  className = '',
  ...props
}) => {
  return (
    <label className={`flex items-center text-xs gap-2 ${className}`}>
      <input
        {...props}
        type="checkbox"
      />
      {text}
    </label>
  );
};

export default CheckBox;
