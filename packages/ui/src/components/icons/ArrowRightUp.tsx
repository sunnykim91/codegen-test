import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const ArrowRightUpImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.0037 9.41421L8.10422 17.3137C7.7137 17.7042 7.08054 17.7042 6.69002 17.3137C6.29949 16.9232 6.29949 16.29 6.69002 15.8995L14.5895 8H8.00373C7.45145 8 7.00373 7.55228 7.00373 7C7.00373 6.44772 7.45145 6 8.00373 6H17.0037C17.556 6 18.0037 6.44772 18.0037 7V16C18.0037 16.5523 17.556 17 17.0037 17C16.4514 17 16.0037 16.5523 16.0037 16V9.41421Z" fill={color}/>
  </svg>
);

const ArrowRightUp = memo(ArrowRightUpImpl);
ArrowRightUp.displayName = "ArrowRightUp";
export { ArrowRightUp };
