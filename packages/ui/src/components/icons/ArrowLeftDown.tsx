import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const ArrowLeftDownImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9 13.589L16.8995 5.6895C17.29 5.29897 17.9232 5.29898 18.3137 5.6895C18.7042 6.08003 18.7042 6.71319 18.3137 7.10371L10.4142 15.0032H17C17.5523 15.0032 18 15.4509 18 16.0032C18 16.5555 17.5523 17.0032 17 17.0032H8C7.44771 17.0032 7 16.5555 7 16.0032V7.00321C7 6.45093 7.44772 6.00321 8 6.00321C8.55228 6.00321 9 6.45093 9 7.00321V13.589Z" fill={color}/>
  </svg>
);

const ArrowLeftDown = memo(ArrowLeftDownImpl);
ArrowLeftDown.displayName = "ArrowLeftDown";
export { ArrowLeftDown };
