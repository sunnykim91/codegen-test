import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const DirectionDownLgImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3.29295 9.70698C2.90243 9.31646 2.90243 8.68345 3.29295 8.29292C3.68348 7.9024 4.31649 7.9024 4.70702 8.29292L12 15.5859L19.293 8.29292C19.6835 7.9024 20.3165 7.9024 20.707 8.29292C21.0975 8.68345 21.0975 9.31646 20.707 9.70698L12.707 17.707C12.3165 18.0975 11.6835 18.0975 11.293 17.707L3.29295 9.70698Z" fill={color}/>
  </svg>
);

const DirectionDownLg = memo(DirectionDownLgImpl);
DirectionDownLg.displayName = "DirectionDownLg";
export { DirectionDownLg };
