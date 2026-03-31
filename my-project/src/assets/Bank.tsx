import React, { memo } from "react";
import Image from "next/image";
import bank3x from "my-project/src/assets/bank@3x.png";

export interface BankProps {
  size?: number;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BankComponent = ({
  size,
  width = 320,
  height = 320,
  alt = "Bank",
  className,
  style,
}: BankProps) => {
  const w = size ?? width;
  const h = size ? Math.round(size * (320 / 320)) : height;

  return (
    <Image
      src={bank3x}
      width={w}
      height={h}
      alt={alt}
      className={className}
      style={{ ...style, objectFit: "contain" }}
    />
  );
};

const Bank = memo(BankComponent);
Bank.displayName = "Bank";

export { Bank };
