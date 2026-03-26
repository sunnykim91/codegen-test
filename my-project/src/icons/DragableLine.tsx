import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const DragableLineImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20 14.5C20.5523 14.5 21 14.9477 21 15.5C21 16.0523 20.5523 16.5 20 16.5H4C3.44772 16.5 3 16.0523 3 15.5C3 14.9477 3.44772 14.5 4 14.5H20ZM20 7.5C20.5523 7.5 21 7.94772 21 8.5C21 9.05228 20.5523 9.5 20 9.5H4C3.44772 9.5 3 9.05228 3 8.5C3 7.94772 3.44772 7.5 4 7.5H20Z" fill={color}/>
  </svg>
);

const DragableLine = memo(DragableLineImpl);
DragableLine.displayName = "DragableLine";
export { DragableLine };
