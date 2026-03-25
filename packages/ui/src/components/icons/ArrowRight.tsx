import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const ArrowRightImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.1716 10.9999L11.5147 6.34296C11.1242 5.95244 11.1242 5.31928 11.5147 4.92876C11.9052 4.53823 12.5384 4.53823 12.9289 4.92876L19.2929 11.2928C19.6834 11.6833 19.6834 12.3165 19.2929 12.707L12.9289 19.0709C12.5384 19.4614 11.9052 19.4614 11.5147 19.0709C11.1242 18.6804 11.1242 18.0472 11.5147 17.6567L16.1716 12.9999H5C4.44772 12.9999 4 12.5522 4 11.9999C4 11.4476 4.44772 10.9999 5 10.9999H16.1716Z" fill={color}/>
  </svg>
);

const ArrowRight = memo(ArrowRightImpl);
ArrowRight.displayName = "ArrowRight";
export { ArrowRight };
