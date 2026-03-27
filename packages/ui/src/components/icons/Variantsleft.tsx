import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const VariantsleftImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.9142 12L18 7.91421C18.3905 7.52369 18.3905 6.89053 18 6.50001C17.6095 6.10948 16.9763 6.10948 16.5858 6.5L11.7929 11.2929C11.4024 11.6834 11.4024 12.3166 11.7929 12.7071L16.5858 17.5C16.9763 17.8905 17.6095 17.8905 18 17.5C18.3905 17.1095 18.3905 16.4763 18 16.0858L13.9142 12ZM8 18C7.44772 18 7 17.5523 7 17V7C7 6.44771 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18Z" fill={color}/>
  </svg>
);

const Variantsleft = memo(VariantsleftImpl);
Variantsleft.displayName = "Variantsleft";
export { Variantsleft };
