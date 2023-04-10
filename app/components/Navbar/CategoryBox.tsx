import { IconType } from "react-icons";

interface CatergoryBoxProps {
  Icon: IconType;
  label: string;
}

const CategoryBox = (props: CatergoryBoxProps) => {
  const { Icon, label } = props;
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
    `}
  >
    <Icon size={26} />
    <div className="font-medium text-sm">
      {label}
    </div>
  </div>);
};

export default CategoryBox;
