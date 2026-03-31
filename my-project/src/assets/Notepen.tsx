import React, { memo } from "react";
import Image from "next/image";
import notepen3x from "my-project/src/assets/notepen@3x.png";

export interface NotepenProps {
  size?: number;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const NotepenComponent = ({
  size,
  width = 320,
  height = 320,
  alt = "Note&Pen",
  className,
  style,
}: NotepenProps) => {
  const w = size ?? width;
  const h = size ? Math.round(size * (320 / 320)) : height;

  return (
    <Image
      src={notepen3x}
      width={w}
      height={h}
      alt={alt}
      className={className}
      style={{ ...style, objectFit: "contain" }}
    />
  );
};

const Notepen = memo(NotepenComponent);
Notepen.displayName = "Notepen";

export { Notepen };
