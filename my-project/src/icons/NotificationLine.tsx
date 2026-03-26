import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const NotificationLineImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13 21C13.5523 21 14 21.4477 14 22C14 22.5523 13.5523 23 13 23H11C10.4477 23 10 22.5523 10 22C10 21.4477 10.4477 21 11 21H13ZM17 10C17 8.67392 16.4728 7.40253 15.5352 6.46484C14.6561 5.58579 13.4838 5.06719 12.248 5.00586L12 5C10.6739 5 9.40253 5.52716 8.46484 6.46484C7.52716 7.40253 7 8.67392 7 10V18H17V10ZM19 18H20C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19C3 18.4477 3.44772 18 4 18H5V10C5 8.14348 5.73705 6.36256 7.0498 5.0498C7.88481 4.2148 8.90978 3.6139 10.0225 3.28613C10.009 3.19259 10 3.09726 10 3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3C14 3.0973 13.99 3.19254 13.9766 3.28613C15.0896 3.61384 16.115 4.21457 16.9502 5.0498C18.2629 6.36256 19 8.14349 19 10V18Z" fill={color}/>
  </svg>
);

const NotificationLine = memo(NotificationLineImpl);
NotificationLine.displayName = "NotificationLine";
export { NotificationLine };
