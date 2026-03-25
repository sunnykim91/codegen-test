import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const DirectionLeftLgImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.293 3.29302C14.6835 2.90249 15.3165 2.90249 15.707 3.29302C16.0975 3.68354 16.0975 4.31655 15.707 4.70708L8.41405 12L15.707 19.293C16.0975 19.6835 16.0975 20.3166 15.707 20.7071C15.3165 21.0976 14.6835 21.0976 14.293 20.7071L6.29295 12.7071C5.90243 12.3166 5.90243 11.6835 6.29295 11.293L14.293 3.29302Z" fill={color}/>
  </svg>
);

const DirectionLeftLg = memo(DirectionLeftLgImpl);
DirectionLeftLg.displayName = "DirectionLeftLg";
export { DirectionLeftLg };
