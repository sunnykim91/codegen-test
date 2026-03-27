import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const VariantsupDownImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.5001 9.74987C17.8906 9.35935 17.8906 8.72619 17.5001 8.33567L12.7072 3.54277C12.3167 3.15225 11.6835 3.15225 11.293 3.54277L6.50013 8.33567C6.10961 8.72619 6.10961 9.35935 6.50013 9.74988C6.89066 10.1404 7.52382 10.1404 7.91434 9.74987L12.0001 5.66409L16.0859 9.74987C16.4764 10.1404 17.1096 10.1404 17.5001 9.74987ZM6.49999 14.2501C6.10946 14.6406 6.10946 15.2738 6.49999 15.6643L11.2929 20.4572C11.6834 20.8477 12.3166 20.8477 12.7071 20.4572L17.5 15.6643C17.8905 15.2738 17.8905 14.6406 17.5 14.2501C17.1094 13.8595 16.4763 13.8595 16.0857 14.2501L12 18.3359L7.91419 14.2501C7.52366 13.8595 6.89051 13.8595 6.49999 14.2501Z" fill={color}/>
  </svg>
);

const VariantsupDown = memo(VariantsupDownImpl);
VariantsupDown.displayName = "VariantsupDown";
export { VariantsupDown };
