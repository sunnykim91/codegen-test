import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const CheckImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.9395 6.43946C18.5252 5.85368 19.4748 5.85368 20.0605 6.43946C20.6463 7.02525 20.6463 7.97477 20.0605 8.56056L11.0605 17.5606C10.5201 18.101 9.65934 18.1484 9.0625 17.6709L4.0625 13.6709C3.41603 13.1533 3.31171 12.2092 3.8291 11.5625C4.3467 10.916 5.29077 10.8117 5.9375 11.3291L9.88867 14.4893L17.9395 6.43946Z" fill={color}/>
  </svg>
);

const Check = memo(CheckImpl);
Check.displayName = "Check";
export { Check };
