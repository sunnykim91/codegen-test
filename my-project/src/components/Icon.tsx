import React, { memo, ReactNode, HTMLAttributes, cloneElement, isValidElement } from "react";
import { Blank } from "./Blank";

export type IconSize = 14 | 16 | 18 | 20 | 22 | 24 | 28 | 32 | 40;

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  size?: IconSize;
  color?: string;
}

const sizeStyleMap: Record<IconSize, {
  containerSize: string;
  iconSize: number;
}> = {
  14: { containerSize: "var(--square-14, 14px)", iconSize: 11 },
  16: { containerSize: "var(--square-16, 16px)", iconSize: 12 },
  18: { containerSize: "var(--square-18, 18px)", iconSize: 14 },
  20: { containerSize: "var(--square-20, 20px)", iconSize: 15 },
  22: { containerSize: "var(--square-22, 22px)", iconSize: 17 },
  24: { containerSize: "var(--square-24, 24px)", iconSize: 18 },
  28: { containerSize: "var(--square-28, 28px)", iconSize: 21 },
  32: { containerSize: "var(--square-32, 32px)", iconSize: 24 },
  40: { containerSize: "var(--square-40, 40px)", iconSize: 30 },
};

const IconComponent = ({
  children,
  size = 16,
  color = "currentColor",
  className = "",
  style,
  ...props
}: IconProps) => {
  const sizeConfig = sizeStyleMap[size];

  const iconStyle: React.CSSProperties = {
    display: "flex",
    width: sizeConfig.containerSize,
    height: sizeConfig.containerSize,
    borderRadius: 0,
    ...style,
  };

  const renderIcon = () => {
    if (isValidElement(children)) {
      return cloneElement(children as React.ReactElement<{ size?: number; color?: string }>, {
        size: sizeConfig.iconSize,
        color,
      });
    }
    return children;
  };

  return (
    <div className={className} style={iconStyle} {...props}>
      <Blank style={{ width: sizeConfig.containerSize, height: sizeConfig.containerSize }}>
        {renderIcon()}
      </Blank>
    </div>
  );
};

const Icon = memo(IconComponent);
Icon.displayName = "Icon";
export { Icon };