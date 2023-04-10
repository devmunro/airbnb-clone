import { IconType } from "react-icons";

interface CatergoryBoxProps {
  Icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox = (props: CatergoryBoxProps) => {
  const { Icon, label, selected } = props;
  return ( <div
    
    className={`
      flex 
      flex-col 
      items-center 
      justify-center 
      gap-2
      p-3
      border-b-2
      hover:text-neutral-800
      hover:border-black
      transition
      cursor-pointer  
      ${selected ? 'border-b-neutral-800' : 'border-transparent'}
      ${selected ? 'text-neutral-800' : 'text-neutral-500'}
    `}
  >
    <Icon size={26} />
    <div className="font-medium text-sm">
      {label}
    </div>
  </div>);
};

export default CategoryBox;
