import { AiOutlineArrowRight } from "react-icons/ai";

interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
  styles?: string
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled,
  styles,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        className={`w-full p-2.5 focus:outline-none border-b border-neutral-700 ${styles}`}
        onChange={onChange}
      />
    </>
  )
}

export default Input