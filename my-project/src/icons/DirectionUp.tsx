import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const DirectionUpImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.9999 10.8284L7.7573 15.0711C7.36678 15.4616 6.73362 15.4616 6.34309 15.0711C5.95257 14.6805 5.95257 14.0474 6.34309 13.6569L11.2928 8.70708C11.6833 8.31655 12.3165 8.31655 12.707 8.70708L17.6568 13.6569C18.0473 14.0474 18.0473 14.6805 17.6568 15.0711C17.2663 15.4616 16.6331 15.4616 16.2426 15.0711L11.9999 10.8284Z" fill={color}/>
  </svg>
);

const DirectionUp = memo(DirectionUpImpl);
DirectionUp.displayName = "DirectionUp";
export { DirectionUp };
