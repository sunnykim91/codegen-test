import React, { memo } from "react";
import empty_img3x from "my-project/src/assets/empty-img@3x.png";

export interface EmptyImgProps {
  size?: number;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const EmptyImgComponent = ({
  size,
  width = 100,
  height = 100,
  alt = "empty_img",
  className,
  style,
}: EmptyImgProps) => {
  const w = size ?? width;
  const h = size ? Math.round(size * (100 / 100)) : height;

  return (
    <img
      src={empty_img3x}
      width={w}
      height={h}
      alt={alt}
      className={className}
      style={{ ...style, objectFit: "contain" }}
    />
  );
};

const EmptyImg = memo(EmptyImgComponent);
EmptyImg.displayName = "EmptyImg";

export { EmptyImg };
