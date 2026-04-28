import React, { memo, HTMLAttributes } from "react";

export type MaskDirection = "top" | "right" | "bottom" | "left";

export interface MaskProps extends HTMLAttributes<HTMLDivElement> {
  direction?: MaskDirection;
}

interface MaskStyle {
  width: string | number;
  height: string | number;
  maskImage: string;
  WebkitMaskImage: string;
}

const getMaskStyle = (direction: MaskDirection): MaskStyle => {
  switch (direction) {
    case "right":
      return {
        width: "100%",
        height: "100%",
        maskImage: "var(--paint-mask-right)",
        WebkitMaskImage: "var(--paint-mask-right)",
      };
    case "bottom":
      return {
        width: "100%",
        height: "100%",
        maskImage: "var(--paint-mask-down)",
        WebkitMaskImage: "var(--paint-mask-down)",
      };
    case "left":
      return {
        width: "100%",
        height: "100%",
        maskImage: "var(--paint-mask-left)",
        WebkitMaskImage: "var(--paint-mask-left)",
      };
    case "top":
      return {
        width: "100%",
        height: "100%",
        maskImage: "var(--paint-mask-top)",
        WebkitMaskImage: "var(--paint-mask-top)",
      };
    default:
      return {
        width: "100%",
        height: "100%",
        maskImage: "none",
        WebkitMaskImage: "none",
      };
  }
};

const MaskComponent = ({
  direction = "right",
  className = "",
  style,
  ...props
}: MaskProps) => {
  const maskStyles = getMaskStyle(direction);

  const containerStyle: React.CSSProperties = {
    position: "relative",
    backgroundColor: "var(--common-white)",
    ...maskStyles,
    ...style,
  } as React.CSSProperties; // Add type assertion for custom CSS properties

  return (
    <div
      className={`mask-container ${className}`}
      style={containerStyle}
      {...props}
    />
  );
};

const Mask = memo(MaskComponent);
Mask.displayName = "Mask";
export { Mask };