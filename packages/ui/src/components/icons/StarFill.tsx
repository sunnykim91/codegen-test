import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const StarFillImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.489 18.5335C12.1856 18.3636 11.8156 18.3636 11.5122 18.5335L6.83893 21.1493C6.09432 21.5661 5.20336 20.9188 5.36967 20.0818L6.41339 14.829C6.48117 14.4879 6.36685 14.136 6.11152 13.8999L2.17961 10.2638C1.55311 9.68446 1.89342 8.63706 2.74082 8.53659L8.05907 7.90602C8.40444 7.86508 8.70372 7.64763 8.84939 7.33183L11.0925 2.46872C11.45 1.69385 12.5512 1.69386 12.9087 2.46873L15.1518 7.33182C15.2974 7.64763 15.5967 7.86508 15.9421 7.90603L21.2603 8.53659C22.1077 8.63707 22.448 9.68445 21.8215 10.2638L17.8897 13.8999C17.6343 14.136 17.52 14.4879 17.5878 14.829L18.6315 20.0818C18.7978 20.9188 17.9068 21.5661 17.1622 21.1493L12.489 18.5335Z" fill={color}/>
  </svg>
);

const StarFill = memo(StarFillImpl);
StarFill.displayName = "StarFill";
export { StarFill };
