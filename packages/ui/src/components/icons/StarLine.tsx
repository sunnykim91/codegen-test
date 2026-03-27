import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const StarLineImpl = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.0006 18.2601L6.83893 21.1493C6.09432 21.5661 5.20336 20.9188 5.36967 20.0818L6.52248 14.28L2.17961 10.2638C1.55311 9.68446 1.89342 8.63706 2.74082 8.53659L8.61493 7.84012L11.0925 2.46872C11.45 1.69385 12.5512 1.69386 12.9087 2.46873L15.3862 7.84012L21.2603 8.53659C22.1077 8.63707 22.448 9.68445 21.8215 10.2638L17.4787 14.28L18.6315 20.0818C18.7978 20.9188 17.9068 21.5661 17.1622 21.1493L12.0006 18.2601ZM12.0006 15.9681L16.2473 18.3452L15.2988 13.5718L18.8719 10.2675L14.039 9.6944L12.0006 5.27508L9.96214 9.6944L5.12921 10.2675L8.70231 13.5718L7.75383 18.3452L12.0006 15.9681Z" fill={color}/>
  </svg>
);

const StarLine = memo(StarLineImpl);
StarLine.displayName = "StarLine";
export { StarLine };
