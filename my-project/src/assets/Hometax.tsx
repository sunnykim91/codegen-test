import React, { memo } from "react";
import hometax3x from "my-project/src/assets/hometax@3x.png";

export interface HometaxProps {
  size?: number;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const HometaxComponent = ({
  size,
  width = 449,
  height = 138,
  alt = "HomeTax",
  className,
  style,
}: HometaxProps) => {
  const w = size ?? width;
  const h = size ? Math.round(size * (138 / 449)) : height;

  return (
    <img
      src={hometax3x}
      width={w}
      height={h}
      alt={alt}
      className={className}
      style={{ ...style, objectFit: "contain" }}
    />
  );
};

const Hometax = memo(HometaxComponent);
Hometax.displayName = "Hometax";

export { Hometax };
