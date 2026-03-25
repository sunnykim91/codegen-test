import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const CloseImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15.6162 6.61624C16.1044 6.12808 16.8957 6.12808 17.3838 6.61624C17.872 7.10439 17.872 7.89566 17.3838 8.38382L13.7676 12L17.3838 15.6162C17.872 16.1044 17.872 16.8957 17.3838 17.3838C16.8957 17.872 16.1044 17.872 15.6162 17.3838L12 13.7676L8.38382 17.3838C7.89566 17.872 7.10439 17.872 6.61624 17.3838C6.12808 16.8957 6.12808 16.1044 6.61624 15.6162L10.2324 12L6.61624 8.38382C6.12808 7.89566 6.12808 7.10439 6.61624 6.61624C7.10439 6.12808 7.89566 6.12808 8.38382 6.61624L12 10.2324L15.6162 6.61624Z" fill={color}/>
  </svg>
);

const Close = memo(CloseImpl);
Close.displayName = "Close";
export { Close };
