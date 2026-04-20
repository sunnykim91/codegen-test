import React, { memo } from "react";
import sight_img3x from "my-project/src/assets/sight-img@3x.png";

export interface SightImgProps {
  size?: number;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SightImgComponent = ({
  size,
  width = 100,
  height = 100,
  alt = "sight_img",
  className,
  style,
}: SightImgProps) => {
  const w = size ?? width;
  const h = size ? Math.round(size * (100 / 100)) : height;

  return (
    <img
      src={sight_img3x}
      width={w}
      height={h}
      alt={alt}
      className={className}
      style={{ ...style, objectFit: "contain" }}
    />
  );
};

const SightImg = memo(SightImgComponent);
SightImg.displayName = "SightImg";

export { SightImg };
