import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const DirectionLeftRightImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.75016 6.49992C9.35963 6.1094 8.72647 6.1094 8.33595 6.49992L3.54304 11.2929C3.15252 11.6834 3.15252 12.3166 3.54305 12.7071L8.33593 17.5C8.72645 17.8905 9.35965 17.8905 9.75018 17.4999C10.1407 17.1094 10.1407 16.4762 9.75019 16.0857L5.66436 12L9.75018 7.91415C10.1407 7.52362 10.1407 6.89044 9.75016 6.49992ZM14.2499 17.5001C14.6404 17.8906 15.2736 17.8906 15.6641 17.5001L20.457 12.7072C20.8475 12.3167 20.8475 11.6835 20.457 11.293L15.6641 6.50006C15.2736 6.10954 14.6404 6.10955 14.2499 6.50006C13.8593 6.89058 13.8593 7.52378 14.2498 7.91431L18.3356 12.0001L14.2498 16.0858C13.8593 16.4764 13.8593 17.1096 14.2499 17.5001Z" fill={color}/>
  </svg>
);

const DirectionLeftRight = memo(DirectionLeftRightImpl);
DirectionLeftRight.displayName = "DirectionLeftRight";
export { DirectionLeftRight };
