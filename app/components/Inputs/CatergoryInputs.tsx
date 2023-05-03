'use client';

import { IconType } from "react-icons";

interface CategoryInputsProps {
  icon: IconType,
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CatergoryInput = (props: CategoryInputsProps) => {
    const {icon:Icon, label, selected, onClick} = props

    return (

        <div
        onClick={() => onClick(label)}
        className={`
          rounded-xl
          border-2
          p-4
          flex
          flex-col
          gap-3
          hover:border-black
          transition
          cursor-pointer
          ${selected ? 'border-black' : 'border-neutral-200'}
        `}
      >
        <Icon size={30} />
        <div className="font-semibold">
          {label}
        </div>
      </div>
    )
}

export default CatergoryInput