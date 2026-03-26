import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const ArrowRightDownImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.5895 16.0032L6.69002 8.10371C6.2995 7.71319 6.29949 7.08003 6.69002 6.6895C7.08054 6.29898 7.71371 6.29897 8.10423 6.6895L16.0037 14.589V8.00321C16.0037 7.45093 16.4514 7.00321 17.0037 7.00321C17.556 7.00321 18.0037 7.45093 18.0037 8.00321V17.0032C18.0037 17.5555 17.556 18.0032 17.0037 18.0032H8.00373C7.45145 18.0032 7.00373 17.5555 7.00373 17.0032C7.00373 16.4509 7.45145 16.0032 8.00373 16.0032H14.5895Z" fill={color}/>
  </svg>
);

const ArrowRightDown = memo(ArrowRightDownImpl);
ArrowRightDown.displayName = "ArrowRightDown";
export { ArrowRightDown };
