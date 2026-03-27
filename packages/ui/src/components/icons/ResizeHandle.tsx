import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const ResizeHandleImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21.293 18.293C21.6836 17.9025 22.3166 17.9025 22.7071 18.293C23.0975 18.6836 23.0976 19.3166 22.7071 19.7071L19.7071 22.7071C19.3166 23.0976 18.6835 23.0975 18.293 22.7071C17.9025 22.3166 17.9025 21.6836 18.293 21.293L21.293 18.293ZM20.793 12.793C21.1835 12.4025 21.8166 12.4025 22.2071 12.793C22.5975 13.1835 22.5976 13.8166 22.2071 14.2071L14.2071 22.2071C13.8166 22.5976 13.1835 22.5975 12.793 22.2071C12.4025 21.8166 12.4025 21.1836 12.793 20.793L20.793 12.793Z" fill={color}/>
  </svg>
);

const ResizeHandle = memo(ResizeHandleImpl);
ResizeHandle.displayName = "ResizeHandle";
export { ResizeHandle };
