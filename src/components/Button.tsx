"use client";

import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { CgSpinner } from "react-icons/cg";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  full? : boolean;
  whiteBg? : boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  isLoading,
  outline,
  whiteBg,
  small,
  icon: Icon,
  full
}) => {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className={cn("flex items-center gap-x-1.5 px-7 h-12 disabled:opacity-70 disabled:cursor-not-allowed rounded-full hover:opacity-80 transition w-fit bg-blue-600 shadow-sm text-white", {
        "w-full" : full,
        "bg-transparent border-blue-600 text-blue-600" : outline,
        "bg-white border border-neutral-200  text-blue-600" : whiteBg,
        "text-sm px-5 h-10" : small
      })}
    >
      { isLoading && (<CgSpinner className="animate-spin" size={20} />)}
      {Icon && <Icon size={20}/>}
      {label}
    </button>
  );
};

export default Button;
