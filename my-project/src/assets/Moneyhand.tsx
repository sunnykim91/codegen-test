import React, { memo } from "react";
import Image from "next/image";
import moneyhand3x from "my-project/src/assets/moneyhand@3x.png";

export interface MoneyhandProps {
  size?: number;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MoneyhandComponent = ({
  size,
  width = 320,
  height = 320,
  alt = "money&Hand",
  className,
  style,
}: MoneyhandProps) => {
  const w = size ?? width;
  const h = size ? Math.round(size * (320 / 320)) : height;

  return (
    <Image
      src={moneyhand3x}
      width={w}
      height={h}
      alt={alt}
      className={className}
      style={{ ...style, objectFit: "contain" }}
    />
  );
};

const Moneyhand = memo(MoneyhandComponent);
Moneyhand.displayName = "Moneyhand";

export { Moneyhand };
