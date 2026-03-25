import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const ArrowLeftUpImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.41421 8L17.3137 15.8995C17.7042 16.29 17.7042 16.9232 17.3137 17.3137C16.9232 17.7042 16.29 17.7042 15.8995 17.3137L8 9.41421V16C8 16.5523 7.55228 17 7 17C6.44772 17 6 16.5523 6 16V7C6 6.44771 6.44772 6 7 6H16C16.5523 6 17 6.44772 17 7C17 7.55228 16.5523 8 16 8H9.41421Z" fill={color}/>
  </svg>
);

const ArrowLeftUp = memo(ArrowLeftUpImpl);
ArrowLeftUp.displayName = "ArrowLeftUp";
export { ArrowLeftUp };
