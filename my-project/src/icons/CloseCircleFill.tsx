import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const CloseCircleFillImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.87867 8.46447C9.48815 8.07394 8.85499 8.07394 8.46447 8.46447C8.07394 8.85499 8.07394 9.48815 8.46447 9.87867L10.5858 12L8.46447 14.1213C8.07395 14.5118 8.07395 15.145 8.46447 15.5355C8.85499 15.926 9.48815 15.926 9.87867 15.5355L12 13.4142L14.1213 15.5355C14.5118 15.926 15.145 15.926 15.5355 15.5355C15.926 15.145 15.926 14.5118 15.5355 14.1213L13.4142 12L15.5355 9.87867C15.926 9.48815 15.926 8.85499 15.5355 8.46447C15.145 8.07395 14.5118 8.07395 14.1213 8.46447L12 10.5858Z" fill={color}/>
  </svg>
);

const CloseCircleFill = memo(CloseCircleFillImpl);
CloseCircleFill.displayName = "CloseCircleFill";
export { CloseCircleFill };
