import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const BlankImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3 17.175H4.8V19.2H6.825V21H3.9C3.40294 21 3 20.5971 3 20.1V17.175ZM14.925 19.2V21H9.075V19.2H14.925ZM19.2 17.175H21V20.1C21 20.5971 20.5971 21 20.1 21H17.175V19.2H19.2V17.175ZM3 9.075H4.8V14.925H3V9.075ZM19.2 9.075H21V14.925H19.2V9.075ZM3 3.9C3 3.40294 3.40294 3 3.9 3H6.825V4.8H4.8V6.825H3V3.9ZM19.2 4.8H17.175V3H20.1C20.5971 3 21 3.40294 21 3.9V6.825H19.2V4.8ZM14.925 3V4.8H9.075V3H14.925Z" fill={color}/>
  </svg>
);

const Blank = memo(BlankImpl);
Blank.displayName = "Blank";
export { Blank };
