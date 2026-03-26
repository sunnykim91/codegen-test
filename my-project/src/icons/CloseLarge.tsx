import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const CloseLargeImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.6162 3.61624C19.1044 3.12808 19.8957 3.12808 20.3838 3.61624C20.872 4.10439 20.872 4.89566 20.3838 5.38382L13.7676 12L20.3838 18.6162C20.872 19.1044 20.872 19.8957 20.3838 20.3838C19.8957 20.872 19.1044 20.872 18.6162 20.3838L12 13.7676L5.38382 20.3838C4.89566 20.872 4.10439 20.872 3.61624 20.3838C3.12808 19.8957 3.12808 19.1044 3.61624 18.6162L10.2324 12L3.61624 5.38382C3.12808 4.89566 3.12808 4.10439 3.61624 3.61624C4.10439 3.12808 4.89566 3.12808 5.38382 3.61624L12 10.2324L18.6162 3.61624Z" fill={color}/>
  </svg>
);

const CloseLarge = memo(CloseLargeImpl);
CloseLarge.displayName = "CloseLarge";
export { CloseLarge };
