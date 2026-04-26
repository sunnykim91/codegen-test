import React, { memo } from "react";

export type IconName = "IconLogin";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  color?: string;
}

const iconMap: Record<IconName, {
  viewBox: string;
  path: (color: string) => React.ReactNode;
}> = {
  "IconLogin": {
    viewBox: "0 0 40 40",
    path: (color: string) => (
      <>
    <path d="M30.5 7C32.1569 7 33.5 8.34315 33.5 10V30C33.5 31.6569 32.1569 33 30.5 33H21.5C20.9477 33 20.5 32.5523 20.5 32C20.5 31.4477 20.9477 31 21.5 31H30.5C31.0523 31 31.5 30.5523 31.5 30V10C31.5 9.44772 31.0523 9 30.5 9H21.5C20.9477 9 20.5 8.55228 20.5 8C20.5 7.44772 20.9477 7 21.5 7H30.5Z" fill={color}/>
    <path d="M15.2705 11.916C15.6481 11.5134 16.2807 11.4928 16.6836 11.8701L23.9062 18.6406C24.7486 19.4307 24.7485 20.7685 23.9062 21.5586L16.6836 28.3291C16.2807 28.7067 15.6482 28.6861 15.2705 28.2832C14.8931 27.8803 14.9136 27.2477 15.3164 26.8701L21.5781 21H7C6.44772 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19H21.3652L15.3164 13.3291C14.9137 12.9514 14.893 12.3189 15.2705 11.916Z" fill={color}/>
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
  "IconLogin",
];
