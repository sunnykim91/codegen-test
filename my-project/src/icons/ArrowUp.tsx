import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const ArrowUpImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.0001 7.8284V19C13.0001 19.5523 12.5524 20 12.0001 20C11.4478 20 11.0001 19.5523 11.0001 19V7.8284L6.34324 12.4853C5.95272 12.8758 5.31956 12.8758 4.92904 12.4853C4.53851 12.0948 4.53851 11.4616 4.92903 11.0711L11.293 4.70708C11.6835 4.31655 12.3167 4.31655 12.7072 4.70708L19.0712 11.0711C19.4617 11.4616 19.4617 12.0948 19.0712 12.4853C18.6807 12.8758 18.0475 12.8758 17.657 12.4853L13.0001 7.8284Z" fill={color}/>
  </svg>
);

const ArrowUp = memo(ArrowUpImpl);
ArrowUp.displayName = "ArrowUp";
export { ArrowUp };
