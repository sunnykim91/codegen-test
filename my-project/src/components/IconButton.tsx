import React, { memo, ReactNode, ButtonHTMLAttributes } from "react";

export type IconButtonVariants = "primary" | "gray" | "invert";
export type IconButtonState = "enabled" | "disabled";
export type IconButtonSize = 20 | 24;

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  variants?: IconButtonVariants;
  state?: IconButtonState;
  size?: IconButtonSize;
  icon?: ReactNode;
}

const sizeStyleMap: Record<IconButtonSize, { width: number; height: number; borderRadius: number }> = {
  20: { width: 20, height: 20, borderRadius: 2 },
  24: { width: 24, height: 24, borderRadius: 2 },
};

const variantStyleMap: Record<IconButtonVariants, { color: string; hoverColor?: string }> = {
  primary: { color: "var(--text-icon-primary-default)" },
  gray: { color: "var(--text-icon-gray-default)" },
  invert: { color: "var(--text-icon-gray-white)" },
};

const disabledStyle = {
  color: "var(--state-disabled-text-icon-default)",
};

const IconButtonComponent = ({
  variants = "primary",
  state = "enabled",
  size = 24,
  icon,
  className = "",
  style,
  ...props
}: IconButtonProps) => {
  const sizeConfig = sizeStyleMap[size];
  const variantConfig = variantStyleMap[variants];
  
  const isDisabled = state === "disabled";
  
  const iconColor = isDisabled ? disabledStyle.color : variantConfig.color;

  const renderIcon = () => {
    if (!icon) return null;
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon as React.ReactElement<{ size?: number; color?: string }>, {
        size,
        color: iconColor,
      });
    }
    return icon;
  };

  const buttonStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: sizeConfig.width,
    height: sizeConfig.height,
    borderRadius: sizeConfig.borderRadius,
    border: "none",
    background: "transparent",
    cursor: isDisabled ? "not-allowed" : "pointer",
    padding: 0,
    ...style,
  };

  return (
    <button
      className={className}
      style={buttonStyle}
      disabled={isDisabled}
      {...props}
    >
      {renderIcon()}
    </button>
  );
};

const IconButton = memo(IconButtonComponent);
IconButton.displayName = "IconButton";
export { IconButton };