import React, { memo, HTMLAttributes } from "react";

export type MaskDirection = "top" | "right" | "bottom" | "left";

export interface MaskProps extends HTMLAttributes<HTMLDivElement> {
  direction?: MaskDirection;
}

const directionStyleMap: Record<MaskDirection, {
  maskGradient: string;
  colorMaskGradient: string;
}> = {
  top: {
    maskGradient: "linear-gradient(to bottom, transparent 0%, black 100%)",
    colorMaskGradient: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
  },
  right: {
    maskGradient: "linear-gradient(to left, transparent 0%, black 100%)",
    colorMaskGradient: "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
  },
  bottom: {
    maskGradient: "linear-gradient(to top, transparent 0%, black 100%)",
    colorMaskGradient: "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
  },
  left: {
    maskGradient: "linear-gradient(to right, transparent 0%, black 100%)",
    colorMaskGradient: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
  },
};

const MaskComponent = ({
  direction = "top",
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

  const baseMaskStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: 100,
    height: 100,
  };

  return (
    <div className={`mask ${className}`} style={maskStyle} {...props}>
      <div 
        className="mask"
        style={{
          ...baseMaskStyle,
          background: directionConfig.maskGradient,
        }}
      />
      <div 
        className="color-mask"
        style={{
          ...baseMaskStyle,
          background: directionConfig.colorMaskGradient,
        }}
      />
    </div>
  );
};

const Mask = memo(MaskComponent);
Mask.displayName = "Mask";
export { Mask };