import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const ChangeImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 4C9.25144 4 6.82508 5.38626 5.38443 7.5H7C7.55228 7.5 8 7.94772 8 8.5C8 9.05228 7.55228 9.5 7 9.5H2V4.5C2 3.94772 2.44772 3.5 3 3.5C3.55228 3.5 4 3.94772 4 4.5V5.99936C5.82381 3.57166 8.72764 2 12 2C17.1858 2 21.4497 5.9474 21.9508 11.0014C22.0053 11.551 21.5523 12 21 12C20.4477 12 20.0066 11.55 19.9384 11.002C19.4471 7.05471 16.0803 4 12 4ZM3 12C3.55228 12 3.99344 12.45 4.06165 12.998C4.55286 16.9453 7.91969 20 12 20C14.7486 20 17.1749 18.6137 18.6156 16.5H17C16.4477 16.5 16 16.0523 16 15.5C16 14.9477 16.4477 14.5 17 14.5H22V19.5C22 20.0523 21.5523 20.5 21 20.5C20.4477 20.5 20 20.0523 20 19.5V18.0006C18.1762 20.4283 15.2724 22 12 22C6.81417 22 2.55032 18.0526 2.04924 12.9986C1.99475 12.449 2.44772 12 3 12Z" fill={color}/>
  </svg>
);

const Change = memo(ChangeImpl);
Change.displayName = "Change";
export { Change };
