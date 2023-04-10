"use client"

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import Container from "../Container";
import CategoryBox from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

//category list

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "Stay close to the shore with this beachside property.",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "Experience the charm of windmills at this unique property.",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "Enjoy contemporary living in this modern property.",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description:
      "Embrace the tranquility of rural life at this countryside property.",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "Relax and unwind by the stunning pool at this property.",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "Escape to an island paradise at this idyllic property.",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "Experience serenity by the water at this lakeside property.",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "Hit the slopes with skiing activities at this property.",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "Travel back in time at this historic castle property.",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "Discover the mystery of this cave property.",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description:
      "Connect with nature at this property offering camping experiences.",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description:
      "Experience the beauty of the frozen landscape at this arctic property.",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description:
      "Explore the vast expanse of the desert at this unique property.",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "Experience rustic charm at this cozy barn property.",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description:
      "Indulge in the finest living at this luxurious, brand new property.",
  },
];

const Categories = () => {

    const param = useSearchParams();
    const category = param?.get('category');
    const pathname = usePathname();
    const home = pathname === '/';
  
    if (!home) {
      return null;
    }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            selected={category === item.label}
            Icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
