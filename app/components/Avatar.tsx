"use client";

import Image from "next/image";

interface Avatarprops {
  src?: string | null | undefined;
}

export default function Avatar(props: Avatarprops) {
  const { src } = props;
  return (
    <Image
      className="rounded-full"
      height="30"
      width="20"
      alt="Avatar"
      src={src || "/images/placeholder.png"}
    />
  );
}
