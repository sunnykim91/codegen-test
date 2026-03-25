import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const DirectionRightImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.1717 12.0007L8.92903 7.75801C8.53851 7.36748 8.53851 6.73432 8.92903 6.34379C9.31956 5.95327 9.95272 5.95327 10.3432 6.3438L15.293 11.2936C15.6835 11.6841 15.6835 12.3173 15.293 12.7078L10.3432 17.6575C9.95272 18.048 9.31956 18.048 8.92904 17.6575C8.53851 17.267 8.53851 16.6338 8.92904 16.2433L13.1717 12.0007Z" fill={color}/>
  </svg>
);

const DirectionRight = memo(DirectionRightImpl);
DirectionRight.displayName = "DirectionRight";
export { DirectionRight };
