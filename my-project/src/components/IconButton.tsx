import React, { memo, ReactNode, ButtonHTMLAttributes, cloneElement, isValidElement } from "react";
import { Icon } from "./Icon";

export type IconButtonVariants = "primary" | "gray" | "invert";
export type IconButtonState = "enabled" | "disabled";

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  icon?: ReactNode;
  variants?: IconButtonVariants;
  state?: IconButtonState;
  size?: number;
}

const sizeStyleMap: Record<number, { width: number; height: number; borderRadius: number }> = {
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
  icon,
  variants = "primary",
  state = "enabled",
  size = 20,
  className = "",
  style,
  ...props
}: IconButtonProps) => {
  const sizeConfig = sizeStyleMap[size] || sizeStyleMap[20];
  const variantConfig = variantStyleMap[variants];

  const isDisabled = state === "disabled";

  const iconColor = isDisabled ? disabledStyle.color : variantConfig.color;

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
    <button className={className} style={buttonStyle} disabled={isDisabled} {...props}>
      <Icon size={size} color={iconColor}>
        {icon}
      </Icon>
    </button>
  );
};

const IconButton = memo(IconButtonComponent);
IconButton.displayName = "IconButton";
export { IconButton };