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
    <path d="M12.0006 18.2601L6.83892 21.1493C6.09431 21.5661 5.20335 20.9188 5.36965 20.0818L6.52247 14.28L2.1796 10.2638C1.5531 9.68446 1.89341 8.63706 2.7408 8.53659L8.61492 7.84012L11.0925 2.46872C11.4499 1.69385 12.5512 1.69386 12.9086 2.46873L15.3862 7.84012L21.2603 8.53659C22.1077 8.63707 22.448 9.68445 21.8215 10.2638L17.4787 14.28L18.6315 20.0818C18.7978 20.9188 17.9068 21.5661 17.1622 21.1493L12.0006 18.2601ZM12.0006 15.9681L16.2473 18.3452L15.2988 13.5718L18.8719 10.2675L14.039 9.6944L12.0006 5.27508L9.96213 9.6944L5.1292 10.2675L8.7023 13.5718L7.75382 18.3452L12.0006 15.9681Z" fill={color}/>
  </svg>
);

const StarLine = memo(StarLineImpl);
StarLine.displayName = "StarLine";
export { StarLine };
