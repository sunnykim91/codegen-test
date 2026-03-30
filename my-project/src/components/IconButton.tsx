import React, { memo, ButtonHTMLAttributes, ReactElement } from "react";
import { Icon, IconName } from "./Icon";

export type IconButtonVariants = "primary" | "gray" | "invert";
export type IconButtonState = "enabled" | "disabled";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variants?: IconButtonVariants;
  state?: IconButtonState;
  size?: number;
  icon?: ReactElement<{ size?: number; color?: string }>;
}

const sizeStyleMap: Record<number, { width: number; height: number; borderRadius: number }> = {
  20: { width: 20, height: 20, borderRadius: 2 },
  24: { width: 24, height: 24, borderRadius: 2 },
};

const getVariantStyle = (variants: IconButtonVariants) => {
  switch (variants) {
    case "primary":
      return {
        color: "var(--texticon-primary-default)",
        pressedOverlay: "var(--state-pressed-black)",
      };
    case "gray":
      return {
        color: "var(--texticon-gray-default)",
        pressedOverlay: "var(--state-pressed-black)",
      };
    case "invert":
      return {
        color: "var(--texticon-static-white)",
        pressedOverlay: "var(--state-pressed-white)",
      };
    default:
      return {
        color: "var(--texticon-primary-default)",
        pressedOverlay: "var(--state-pressed-black)",
      };
  }
};

const disabledStyle = {
  color: "var(--state-disabled-texticon-default)",
};

const IconButtonComponent = ({
  variants = "primary",
  state = "enabled",
  size = 20,
  icon,
  className = "",
  style,
  ...props
}: IconButtonProps) => {
  const sizeConfig = sizeStyleMap[size] || sizeStyleMap[20];
  const variantConfig = getVariantStyle(variants);

  const isDisabled = state === "disabled";

  const iconColor = isDisabled ? disabledStyle.color : variantConfig.color;

  const buttonStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: sizeConfig.width,
    height: sizeConfig.height,
    borderRadius: sizeConfig.borderRadius,
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: isDisabled ? "not-allowed" : "pointer",
    overflow: "hidden",
    minWidth: 44,
    minHeight: 44,
    ...style,
  };

  const renderIcon = () => {
    if (!icon) {
      return <Icon name="blank" size={size} color={iconColor} />;
    }
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon as React.ReactElement<{ size?: number; color?: string }>, {
        size,
        color: iconColor,
      });
    }
    return icon;
  };

  return (
    <button
      className={className}
      style={buttonStyle}
      disabled={isDisabled}
      aria-label={props["aria-label"] || "아이콘 버튼"}
      {...props}
    >
      {renderIcon()}
    </button>
  );
};

const IconButton = memo(IconButtonComponent);
IconButton.displayName = "IconButton";
export { IconButton };