import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const ArrowLeftImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7.82843 10.9999H19C19.5523 10.9999 20 11.4476 20 11.9999C20 12.5522 19.5523 12.9999 19 12.9999H7.82843L12.4853 17.6567C12.8758 18.0472 12.8758 18.6804 12.4853 19.0709C12.0948 19.4614 11.4616 19.4614 11.0711 19.0709L4.70711 12.707C4.31658 12.3165 4.31658 11.6833 4.70711 11.2928L11.0711 4.92876C11.4616 4.53823 12.0948 4.53823 12.4853 4.92876C12.8758 5.31928 12.8758 5.95244 12.4853 6.34296L7.82843 10.9999Z" fill={color}/>
  </svg>
);

const ArrowLeft = memo(ArrowLeftImpl);
ArrowLeft.displayName = "ArrowLeft";
export { ArrowLeft };
