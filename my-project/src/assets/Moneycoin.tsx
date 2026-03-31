import React, { memo } from "react";
import moneycoin3x from "my-project/src/assets/moneycoin@3x.png";

export interface MoneycoinProps {
  size?: number;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MoneycoinComponent = ({
  size,
  width = 320,
  height = 320,
  alt = "Money&Coin",
  className,
  style,
}: MoneycoinProps) => {
  const w = size ?? width;
  const h = size ? Math.round(size * (320 / 320)) : height;

  return (
    <img
      src={moneycoin3x}
      width={w}
      height={h}
      alt={alt}
      className={className}
      style={{ ...style, objectFit: "contain" }}
    />
  );
};

const Moneycoin = memo(MoneycoinComponent);
Moneycoin.displayName = "Moneycoin";

export { Moneycoin };
