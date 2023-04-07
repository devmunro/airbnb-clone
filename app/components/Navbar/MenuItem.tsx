"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <div
      onClick={props.onClick}
      className="px-4 py-3 border-neutral-100 border-2 hover:bg-neutral-100 transition font-semibold"
    >
      {props.label}
    </div>
  );
}
