import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const EditLineImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5 18.89H6.41421L15.7279 9.57628L14.3137 8.16207L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21232C16.8256 2.8218 17.4587 2.8218 17.8492 3.21232L20.6777 6.04075C21.0682 6.43127 21.0682 7.06444 20.6777 7.45496L9.24264 18.89H21V20.89ZM15.7279 6.74786L17.1421 8.16207L18.5563 6.74786L17.1421 5.33364L15.7279 6.74786Z" fill={color}/>
  </svg>
);

const EditLine = memo(EditLineImpl);
EditLine.displayName = "EditLine";
export { EditLine };
