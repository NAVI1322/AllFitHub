import React from 'react';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'primary-disabled' | 'secondary-disabled' | "round";
  onClick?: () => void;
}

const Btn: React.FC<ButtonProps> = ({ className, children, variant = "primary", onClick = () => { } }) => {
  const getVariantClassName = (): string => {

    switch (variant) {
      case "primary":
        return "flex flex-row items-center border-2 border-bg-coral drop-shadow-[10px_10px_8px_rgba(255,165,0,0.4)] justify-center bg-orange-400 font-mid text-white px-[20px] py-[12px] rounded-full gap-1 text-lg"
      case "secondary":
        return "flex flex-row items-center border-2 dark:border-[#353C4A] border-[#7f8795] justify-center bg-[#8d8d8d] dark:bg-[#5f5f5f] font-mid text-white px-[24px] py-[12px] rounded-full gap-2 text-lg"
      case "primary-disabled":
        return "flex flex-row items-center border-2 border-primaryBlue drop-shadow-[10px_10px_8px_rgba(21,78,227,0.4)]  justify-center bg-[#144EE380] font-mid text-white px-[25px] py-[12px] rounded-full gap-2 text-lg"
      case "secondary-disabled":
        return "flex flex-row items-center border-2 border-[#353C4A] justify-center bg-[#181E2980] font-semi text-white px-[25px] py-[12px] rounded-full gap-2 text-lg"
      case "round":
        return "flex flex-row items-center border-2 border-primaryBlue drop-shadow-[10px_10px_8px_rgba(21,78,227,0.4)] justify-center bg-primaryBlue font-mid text-white px-[15px] py-[15px] rounded-full gap-1 text-lg"
    }
  }
  return (
    <button onClick={onClick} className={`${getVariantClassName()} ${className}`}>
      {children}
    </button >
  )
}

export default Btn;