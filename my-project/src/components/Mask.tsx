import React, { memo, HTMLAttributes } from "react";

export type MaskDirection = "top" | "right" | "bottom" | "left";

export interface MaskProps extends HTMLAttributes<HTMLDivElement> {
  direction?: MaskDirection;
}

const directionStyleMap: Record<
  MaskDirection,
  {
    maskImage: string;
    WebkitMaskImage: string;
  }
> = {
  right: {
    maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 100%)",
  },
  bottom: {
    maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
  },
  left: {
    maskImage: "linear-gradient(to right, black 0%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 100%)",
  },
  top: {
    maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
  },
};

const MaskComponent = ({
  direction = "right",
  className = "",
  style,
  ...props
}: MaskProps) => {
  const directionConfig = directionStyleMap[direction];

  const maskStyle: React.CSSProperties = {
    position: "relative",
    width: 100,
    height: 100,
    ...style,
  };

  const colorMaskStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background: "var(--bg-base)",
    ...directionConfig,
  };

  return (
    <div className={`mask ${className}`} style={maskStyle} {...props}>
      <div className="color-mask" style={colorMaskStyle} />
    </div>
  );
};

const Mask = memo(MaskComponent);
Mask.displayName = "Mask";
export { Mask };
