import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const ArrowDownImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.0001 16.1716L17.657 11.5147C18.0475 11.1242 18.6807 11.1242 19.0712 11.5147C19.4617 11.9052 19.4617 12.5384 19.0712 12.9289L12.7072 19.2929C12.3167 19.6834 11.6835 19.6834 11.293 19.2929L4.92903 12.9289C4.53851 12.5384 4.53851 11.9052 4.92904 11.5147C5.31956 11.1242 5.95272 11.1242 6.34324 11.5147L11.0001 16.1716V5C11.0001 4.44772 11.4478 4 12.0001 4C12.5524 4 13.0001 4.44772 13.0001 5V16.1716Z" fill={color}/>
  </svg>
);

const ArrowDown = memo(ArrowDownImpl);
ArrowDown.displayName = "ArrowDown";
export { ArrowDown };
