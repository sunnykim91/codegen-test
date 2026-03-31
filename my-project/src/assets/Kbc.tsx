import React, { memo } from "react";
import kbc3x from "my-project/src/assets/kbc@3x.png";

export interface KbcProps {
  size?: number;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const KbcComponent = ({
  size,
  width = 86,
  height = 64,
  alt = "KBC",
  className,
  style,
}: KbcProps) => {
  const w = size ?? width;
  const h = size ? Math.round(size * (64 / 86)) : height;

  return (
    <img
      src={kbc3x}
      width={w}
      height={h}
      alt={alt}
      className={className}
      style={{ ...style, objectFit: "contain" }}
    />
  );
};

const Kbc = memo(KbcComponent);
Kbc.displayName = "Kbc";

export { Kbc };
