import React, { memo, ReactNode, HTMLAttributes } from "react";
import { Blank } from "./Blank";

export type IconSize = 14 | 16 | 18 | 20 | 22 | 24 | 28 | 32 | 40;

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  size?: IconSize;
  icon?: ReactNode;
}

const sizeStyleMap: Record<IconSize, {
  width: string;
  height: string;
  blankSize: string;
}> = {
  14: { width: "14px", height: "14px", blankSize: "var(--square-14, 14px)" },
  16: { width: "16px", height: "16px", blankSize: "var(--square-16, 16px)" },
  18: { width: "18px", height: "18px", blankSize: "var(--square-18, 18px)" },
  20: { width: "20px", height: "20px", blankSize: "var(--square-20, 20px)" },
  22: { width: "22px", height: "22px", blankSize: "var(--square-22, 22px)" },
  24: { width: "24px", height: "24px", blankSize: "var(--square-24, 24px)" },
  28: { width: "28px", height: "28px", blankSize: "var(--square-28, 28px)" },
  32: { width: "32px", height: "32px", blankSize: "var(--square-32, 32px)" },
  40: { width: "40px", height: "40px", blankSize: "var(--square-40, 40px)" },
};

const IconComponent = ({
  size = 16,
  icon,
  className = "",
  style,
  ...props
}: IconProps) => {
  const sizeConfig = sizeStyleMap[size];

  const containerStyle: React.CSSProperties = {
    display: "flex",
    padding: 0,
    gap: 0,
    width: sizeConfig.width,
    height: sizeConfig.height,
    borderRadius: 0,
    ...style,
  };

  return (
    <div className={className} style={containerStyle} {...props}>
      <Blank 
        style={{
          width: sizeConfig.blankSize,
          height: sizeConfig.blankSize,
        }}
      >
        {icon}
      </Blank>
    </div>
  );
};

const Icon = memo(IconComponent);
Icon.displayName = "Icon";
export { Icon };