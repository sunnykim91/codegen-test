import React, { memo } from "react";
import Image from "next/image";
import kblogosm3x from "my-project/src/assets/kblogosm@3x.png";

export interface KblogosmProps {
  size?: number;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const KblogosmComponent = ({
  size,
  width = 20,
  height = 20,
  alt = "KBLogoSM",
  className,
  style,
}: KblogosmProps) => {
  const w = size ?? width;
  const h = size ? Math.round(size * (20 / 20)) : height;

  return (
    <Image
      src={kblogosm3x}
      width={w}
      height={h}
      alt={alt}
      className={className}
      style={{ ...style, objectFit: "contain" }}
    />
  );
};

const Kblogosm = memo(KblogosmComponent);
Kblogosm.displayName = "Kblogosm";

export { Kblogosm };
