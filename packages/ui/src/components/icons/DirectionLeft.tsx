import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const DirectionLeftImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.8284 12.0007L15.0711 16.2433C15.4616 16.6338 15.4616 17.267 15.0711 17.6575C14.6806 18.048 14.0474 18.048 13.6569 17.6575L8.70712 12.7078C8.31659 12.3173 8.31659 11.6841 8.70712 11.2936L13.6569 6.34379C14.0474 5.95327 14.6806 5.95327 15.0711 6.3438C15.4616 6.73432 15.4616 7.36748 15.0711 7.758L10.8284 12.0007Z" fill={color}/>
  </svg>
);

const DirectionLeft = memo(DirectionLeftImpl);
DirectionLeft.displayName = "DirectionLeft";
export { DirectionLeft };
