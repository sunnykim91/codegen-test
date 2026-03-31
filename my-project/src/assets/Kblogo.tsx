import React, { memo } from "react";
import Image from "next/image";
import kblogo3x from "my-project/src/assets/kblogo@3x.png";

export interface KblogoProps {
  size?: number;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const KblogoComponent = ({
  size,
  width = 131,
  height = 24,
  alt = "KBLOGO",
  className,
  style,
}: KblogoProps) => {
  const w = size ?? width;
  const h = size ? Math.round(size * (24 / 131)) : height;

  return (
    <Image
      src={kblogo3x}
      width={w}
      height={h}
      alt={alt}
      className={className}
      style={{ ...style, objectFit: "contain" }}
    />
  );
};

const Kblogo = memo(KblogoComponent);
Kblogo.displayName = "Kblogo";

export { Kblogo };
