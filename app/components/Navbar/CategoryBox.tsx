import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import queryString from "query-string";

interface CatergoryBoxProps {
  Icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox = (props: CatergoryBoxProps) => {
  const { Icon, label, selected } = props;

  const router = useRouter();
  const param = useSearchParams();

  const handleClick = useCallback(() => {
    let firstQuery = {};

    if (param) {
      firstQuery = queryString.parse(param.toString());
    }

    const updateQuery: any = {
      ...firstQuery,
      category: label,
    };

    if (param?.get("category") === label) {
      delete updateQuery.category;
    }

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updateQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, param, router]);

  return (
    <div
    onClick={handleClick}
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
      ${selected ? "border-b-neutral-800" : "border-transparent"}
      ${selected ? "text-neutral-800" : "text-neutral-500"}
    `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
