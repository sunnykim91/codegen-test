import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const DirectionUpLgImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.707 14.293C21.0976 14.6835 21.0976 15.3166 20.707 15.7071C20.3165 16.0976 19.6835 16.0976 19.293 15.7071L12 8.41411L4.70705 15.7071C4.31652 16.0976 3.68351 16.0976 3.29298 15.7071C2.90246 15.3166 2.90246 14.6835 3.29298 14.293L11.293 6.29301C11.6835 5.90249 12.3165 5.90249 12.707 6.29301L20.707 14.293Z" fill={color}/>
  </svg>
);

const DirectionUpLg = memo(DirectionUpLgImpl);
DirectionUpLg.displayName = "DirectionUpLg";
export { DirectionUpLg };
