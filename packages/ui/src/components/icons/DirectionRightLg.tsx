import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const DirectionRightLgImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.70705 20.707C9.31652 21.0975 8.68351 21.0975 8.29298 20.707C7.90246 20.3165 7.90246 19.6834 8.29298 19.2929L15.586 12L8.29298 4.70698C7.90246 4.31646 7.90246 3.68345 8.29298 3.29292C8.68351 2.9024 9.31652 2.9024 9.70705 3.29292L17.707 11.2929C18.0976 11.6834 18.0976 12.3165 17.707 12.707L9.70705 20.707Z" fill={color}/>
  </svg>
);

const DirectionRightLg = memo(DirectionRightLgImpl);
DirectionRightLg.displayName = "DirectionRightLg";
export { DirectionRightLg };
