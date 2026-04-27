import React, { memo, ReactNode, HTMLAttributes } from "react";

const blanciimg3x = "/images/blanciimg@3x.png";

// Type/Interface Definition
export interface ImageIconSlotProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode; // INSTANCE_SWAP for Img, allows passing custom content
  size?: number; // 24 | 32 | 48 | 60 | 72
  circle?: boolean; // false | true
}

// sizeStyleMap
const sizeStyleMap: Record<number, { width: number; height: number }> = {
  24: { width: 24, height: 24 },
  32: { width: 32, height: 32 },
  48: { width: 48, height: 48 },
  60: { width: 60, height: 60 },
  72: { width: 72, height: 72 },
};

// circleRadiusMap
// Key must be string for Record, so boolean values will be converted to "true" or "false"
const circleRadiusMap: Record<string, string> = {
  false: "var(--cornerradius-xs, 4px)", // radius: 4
  true: "var(--cornerradius-full, 9999px)", // radius: 9999
};

// ImageIconSlotComponent
const ImageIconSlotComponent = ({
  children,
  size = 24, // Default size from [size=24, circle=false] variant
  circle = false, // Default circle from [size=24, circle=false] variant
  className = "",
  style,
  ...props
}: ImageIconSlotProps) => {
  const sizeConfig = sizeStyleMap[size];
  const borderRadius = circleRadiusMap[String(circle)];

  const imageIconSlotStyle: React.CSSProperties = {
    display: "inline-flex", // As per "content-wrapping" rule for badges/icons
    flexDirection: "column", // layout: VERTICAL
    alignItems: "center",
    justifyContent: "center",
    width: sizeConfig.width,
    height: sizeConfig.height,
    borderRadius: borderRadius,
    overflow: "hidden", // Ensure image respects border-radius
    flexShrink: 0, // horizontal=hug(hug)×vertical=hug(hug)
    ...style,
  };

  return (
    <div
      className={`image-icon-slot ${className}`}
      style={imageIconSlotStyle}
      {...props}
    >
      {children ? (
        children
      ) : (
        <img
          src={blanciimg3x}
          width={sizeConfig.width}
          height={sizeConfig.height}
          alt="BlanCIImg"
          style={{ objectFit: "contain" }}
        />
      )}
    </div>
  );
};

// memo + displayName + export
const ImageIconSlot = memo(ImageIconSlotComponent);
ImageIconSlot.displayName = "ImageIconSlot";
export { ImageIconSlot };
