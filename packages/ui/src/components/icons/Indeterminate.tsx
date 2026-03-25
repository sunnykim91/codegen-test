import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const IndeterminateImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.5 10.5C18.3284 10.5 19 11.1716 19 12C19 12.8284 18.3284 13.5 17.5 13.5L6.5 13.5C5.67157 13.5 5 12.8284 5 12C5 11.1716 5.67157 10.5 6.5 10.5L17.5 10.5Z" fill={color}/>
  </svg>
);

const Indeterminate = memo(IndeterminateImpl);
Indeterminate.displayName = "Indeterminate";
export { Indeterminate };
