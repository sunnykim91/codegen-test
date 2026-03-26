import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SkipRightImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.0858 12L5.99998 16.0858C5.60946 16.4763 5.60946 17.1095 5.99999 17.5C6.39051 17.8905 7.02367 17.8905 7.41419 17.5L12.2071 12.7071C12.5976 12.3166 12.5976 11.6834 12.2071 11.2929L7.4142 6.49999C7.02368 6.10947 6.39051 6.10947 5.99999 6.49999C5.60946 6.89052 5.60946 7.52368 5.99999 7.91421L10.0858 12ZM16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7C15 6.44772 15.4477 6 16 6Z" fill={color}/>
  </svg>
);

const SkipRight = memo(SkipRightImpl);
SkipRight.displayName = "SkipRight";
export { SkipRight };
