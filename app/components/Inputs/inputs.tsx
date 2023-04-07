"use Client";
import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input = (props: InputProps) => {
  const { id, label, type, disabled, formatPrice, required, register, errors } =
    props;
  return <div></div>;
};

export default Input;
