import React, { memo } from "react";

export type IconName = "IconMembership";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  color?: string;
}

const iconMap: Record<IconName, {
  viewBox: string;
  path: (color: string) => React.ReactNode;
}> = {
  "IconMembership": {
    viewBox: "0 0 40 40",
    path: (color: string) => (
      <>
    <path d="M20 21.668C26.4567 21.668 32 25.8317 32 32.168C32 32.7203 31.5523 33.168 31 33.168C30.4477 33.168 30 32.7203 30 32.168C30 27.2494 25.6936 23.668 20 23.668C14.3064 23.668 10 27.2494 10 32.168C10 32.7203 9.55228 33.168 9 33.168C8.44772 33.168 8 32.7203 8 32.168C8 25.8317 13.5433 21.668 20 21.668Z" fill={color}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M20 8C23.3137 8 26 10.6863 26 14C26 17.3137 23.3137 20 20 20C16.6863 20 14 17.3137 14 14C14 10.6863 16.6863 8 20 8ZM20 10C17.7909 10 16 11.7909 16 14C16 16.2091 17.7909 18 20 18C22.2091 18 24 16.2091 24 14C24 11.7909 22.2091 10 20 10Z" fill={color}/>
      </>
    ),
  },
};

const IconComponent = ({
  name,
  size = 24,
  color = "currentColor",
  className,
  style,
  ...props
}: IconProps) => {
  const icon = iconMap[name];
  if (!icon) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...props}
    >
      {icon.path(color)}
    </svg>
  );
};

const Icon = memo(IconComponent);
Icon.displayName = "Icon";
export { Icon };

/** 전체 아이콘 이름 목록 */
export const iconNames: IconName[] = [
  "IconMembership",
];
