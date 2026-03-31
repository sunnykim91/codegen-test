import React, { memo } from "react";
import Image from "next/image";
import bagbadge3x from "my-project/src/assets/bagbadge@3x.png";

export interface BagbadgeProps {
  size?: number;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BagbadgeComponent = ({
  size,
  width = 320,
  height = 320,
  alt = "Bag&Badge",
  className,
  style,
}: BagbadgeProps) => {
  const w = size ?? width;
  const h = size ? Math.round(size * (320 / 320)) : height;

  return (
    <Image
      src={bagbadge3x}
      width={w}
      height={h}
      alt={alt}
      className={className}
      style={{ ...style, objectFit: "contain" }}
    />
  );
};

const Bagbadge = memo(BagbadgeComponent);
Bagbadge.displayName = "Bagbadge";

export { Bagbadge };
