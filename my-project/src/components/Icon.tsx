import React, { memo, ReactNode, HTMLAttributes, cloneElement, isValidElement } from "react";

export type IconSize = 14 | 16 | 18 | 20 | 22 | 24 | 28 | 32 | 40;

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  size?: IconSize;
  color?: string;
}

const sizeStyleMap: Record<IconSize, { width: string; height: string }> = {
  14: { width: "var(--square-14, 14px)", height: "var(--square-14, 14px)" },
  16: { width: "var(--square-16, 16px)", height: "var(--square-16, 16px)" },
  18: { width: "var(--square-18, 18px)", height: "var(--square-18, 18px)" },
  20: { width: "var(--square-20, 20px)", height: "var(--square-20, 20px)" },
  22: { width: "var(--square-22, 22px)", height: "var(--square-22, 22px)" },
  24: { width: "var(--square-24, 24px)", height: "var(--square-24, 24px)" },
  28: { width: "var(--square-28, 28px)", height: "var(--square-28, 28px)" },
  32: { width: "var(--square-32, 32px)", height: "var(--square-32, 32px)" },
  40: { width: "var(--square-40, 40px)", height: "var(--square-40, 40px)" },
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
    width: sizeConfig.width,
    height: sizeConfig.height,
    color,
    ...style,
  };

  const renderIcon = () => {
    if (!children) return null;
    
    if (isValidElement(children)) {
      return cloneElement(children as React.ReactElement<{ size?: number; color?: string }>, {
        size: Number(sizeConfig.width.match(/\d+/)?.[0]) || size,
        color,
      });
    }
    
    return children;
  };

  return (
    <div className={className} style={iconStyle} {...props}>
      {renderIcon()}
    </div>
  );
};

const Icon = memo(IconComponent);
Icon.displayName = "Icon";
export { Icon };