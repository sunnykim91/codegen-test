import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const DirectionDownImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.9999 13.1714L16.2426 8.92875C16.6331 8.53823 17.2663 8.53824 17.6568 8.92876C18.0473 9.31928 18.0473 9.95245 17.6568 10.343L12.707 15.2928C12.3165 15.6833 11.6833 15.6833 11.2928 15.2928L6.34309 10.343C5.95257 9.95245 5.95257 9.31929 6.34309 8.92876C6.73362 8.53824 7.36679 8.53824 7.75731 8.92876L11.9999 13.1714Z" fill={color}/>
  </svg>
);

const DirectionDown = memo(DirectionDownImpl);
DirectionDown.displayName = "DirectionDown";
export { DirectionDown };
