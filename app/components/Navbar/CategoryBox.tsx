import { IconType } from "react-icons";

interface CatergoryBoxProps {
  icon: IconType;
  label: string;
}

const CategoryBox = (props: CatergoryBoxProps) => {
  const { icon, label } = props;
  return <div></div>;
};

export default CategoryBox;
