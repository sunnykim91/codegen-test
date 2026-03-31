import React, { memo, HTMLAttributes, ReactNode } from "react";

export type IconImgSlotSize = 20 | 24 | 32 | 48 | 60 | 72;

export interface IconImgSlotProps extends HTMLAttributes<HTMLDivElement> {
  size?: IconImgSlotSize;
  circle?: boolean;
  img?: ReactNode;
}

const sizeStyleMap: Record<IconImgSlotSize, {
  width: string;
  height: string;
}> = {
  20: { width: "var(--square-20, 20px)", height: "var(--square-20, 20px)" },
  24: { width: "var(--square-24, 24px)", height: "var(--square-24, 24px)" },
  32: { width: "var(--square-32, 32px)", height: "var(--square-32, 32px)" },
  48: { width: "var(--square-48, 48px)", height: "var(--square-48, 48px)" },
  60: { width: "var(--square-60, 60px)", height: "var(--square-60, 60px)" },
  72: { width: "var(--square-72, 72px)", height: "var(--square-72, 72px)" },
};

const IconImgSlotComponent = ({
  size = 24,
  circle = false,
  img,
  className = "",
  style,
  ...props
}: IconImgSlotProps) => {
  const sizeConfig = sizeStyleMap[size];

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    width: sizeConfig.width,
    height: sizeConfig.height,
    borderRadius: circle ? 9999 : 0,
    overflow: "hidden",
    ...style,
  };

  const imgStyle: React.CSSProperties = {
    width: size,
    height: size,
    objectFit: "cover",
    display: "block",
  };

  return (
    <div className={`icon-img-slot ${className}`} style={containerStyle} {...props}>
      <div className="empty-img" style={{ width: sizeConfig.width, height: sizeConfig.height, gap: 0 }}>
        {img ? (
          React.isValidElement(img) ? (
            React.cloneElement(img as React.ReactElement<any>, { style: imgStyle })
          ) : (
            <div className="img" style={imgStyle} />
          )
        ) : (
          <div className="img" style={imgStyle} />
        )}
      </div>
    </div>
  );
};

const IconImgSlot = memo(IconImgSlotComponent);
IconImgSlot.displayName = "IconImgSlot";
export { IconImgSlot };