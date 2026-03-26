import React, { memo, ReactNode, ButtonHTMLAttributes } from "react";
import { Icon } from "./Icon";
import { Pressed } from "./Pressed";

export type BoxButtonColor = "primary" | "gray";
export type BoxButtonTinted = false | true;
export type BoxButtonSize = "lg" | "md" | "sm" | "xs";
export type BoxButtonState = "enabled" | "pressed" | "disabled";
export type BoxButtonVariants = "solid" | "out-line";

export interface BoxButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  children?: ReactNode;
  color?: BoxButtonColor;
  tinted?: BoxButtonTinted;
  size?: BoxButtonSize;
  state?: BoxButtonState;
  variants?: BoxButtonVariants;
  showStartIcon?: boolean;
  showEndIcon?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const sizeStyleMap: Record<BoxButtonSize, {
  height: string;
  padding: string;
  borderRadius: number;
  gap: string;
  iconSize: number;
}> = {
  lg: {
    height: "var(--height-container-lg, 56px)",
    padding: "0 var(--spacing-16, 16px) 0 var(--spacing-16, 16px)",
    borderRadius: 12,
    gap: "var(--spacing-8, 8px)",
    iconSize: 16,
  },
  md: {
    height: "var(--height-container-md, 48px)",
    padding: "0 var(--spacing-16, 16px) 0 var(--spacing-16, 16px)",
    borderRadius: 12,
    gap: "var(--spacing-6, 6px)",
    iconSize: 16,
  },
  sm: {
    height: "var(--height-container-sm, 40px)",
    padding: "0 var(--spacing-12, 12px) 0 var(--spacing-12, 12px)",
    borderRadius: 8,
    gap: "var(--spacing-4, 4px)",
    iconSize: 16,
  },
  xs: {
    height: "var(--height-container-xs, 32px)",
    padding: "0 var(--spacing-10, 10px) 0 var(--spacing-10, 10px)",
    borderRadius: 8,
    gap: "var(--spacing-4, 4px)",
    iconSize: 14,
  },
};

const getVariantStyle = (color: BoxButtonColor, tinted: BoxButtonTinted, variants: BoxButtonVariants) => {
  if (color === "primary") {
    if (variants === "solid") {
      if (tinted) {
        return {
          background: "var(--container-primary-subtle)",
          color: "var(--text-icon-primary-subtle)",
          border: "none",
          pressedOverlay: "var(--state-pressed-black)",
          pressedStatic: false,
        };
      } else {
        return {
          background: "var(--container-primary-default)",
          color: "var(--text-icon-static-white-primary)",
          border: "none",
          pressedOverlay: "var(--state-pressed-static-white)",
          pressedStatic: true,
        };
      }
    } else {
      if (tinted) {
        return {
          background: "transparent",
          color: "var(--text-icon-primary-subtle-2)",
          border: "1px solid var(--stroke-primary-default)",
          pressedOverlay: "var(--state-pressed-black)",
          pressedStatic: false,
        };
      } else {
        return {
          background: "transparent",
          color: "var(--text-icon-primary-subtle-2)",
          border: "1px solid var(--stroke-primary-strong-3)",
          pressedOverlay: "var(--state-pressed-black)",
          pressedStatic: true,
        };
      }
    }
  } else {
    if (variants === "solid") {
      if (tinted) {
        return {
          background: "var(--container-gray-subtle-2)",
          color: "var(--text-icon-gray-subtle)",
          border: "none",
          pressedOverlay: "var(--state-pressed-black)",
          pressedStatic: false,
        };
      } else {
        return {
          background: "var(--container-gray-strong)",
          color: "var(--text-icon-gray-white)",
          border: "none",
          pressedOverlay: "var(--state-pressed-white)",
          pressedStatic: false,
        };
      }
    } else {
      if (tinted) {
        return {
          background: "transparent",
          color: "var(--text-icon-gray-subtle-2)",
          border: "1px solid var(--stroke-gray-strong)",
          pressedOverlay: "var(--state-pressed-black)",
          pressedStatic: false,
        };
      } else {
        return {
          background: "transparent",
          color: "var(--text-icon-gray-default)",
          border: "1px solid var(--stroke-gray-strong-2)",
          pressedOverlay: "var(--state-pressed-black)",
          pressedStatic: false,
        };
      }
    }
  }
};

const disabledStyle = {
  background: "var(--state-disabled-container-default)",
  color: "var(--state-disabled-text-icon-default)",
  border: "1px solid var(--state-disabled-stroke-stroke)",
};

const BoxButtonComponent = ({
  children,
  color = "primary",
  tinted = false,
  size = "lg",
  state = "enabled",
  variants = "solid",
  showStartIcon = true,
  showEndIcon = true,
  startIcon,
  endIcon,
  className = "",
  style,
  ...props
}: BoxButtonProps) => {
  const sizeConfig = sizeStyleMap[size];
  const variantConfig = getVariantStyle(color, tinted, variants);

  const isDisabled = state === "disabled";
  const isPressed = state === "pressed";

  const iconColor = isDisabled ? disabledStyle.color : variantConfig.color;

  const buttonStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizeConfig.gap,
    height: sizeConfig.height,
    padding: sizeConfig.padding,
    borderRadius: sizeConfig.borderRadius,
    border: isDisabled ? disabledStyle.border : variantConfig.border,
    backgroundColor: isDisabled ? disabledStyle.background : variantConfig.background,
    color: isDisabled ? disabledStyle.color : variantConfig.color,
    cursor: isDisabled ? "not-allowed" : "pointer",
    overflow: "hidden",
    ...style,
  };

  const textStyle: React.CSSProperties = {
    color: isDisabled ? disabledStyle.color : variantConfig.color,
    margin: 0,
  };

  return (
    <button className={className} style={buttonStyle} disabled={isDisabled} {...props}>
      {showStartIcon && startIcon && (
        <Icon size={sizeConfig.iconSize} icon={React.isValidElement(startIcon) ? React.cloneElement(startIcon as React.ReactElement<{ color?: string }>, { color: iconColor }) : startIcon} />
      )}
      <span className="text-style-notosanskr-label-15-medium" style={textStyle}>
        {children}
      </span>
      {showEndIcon && endIcon && (
        <Icon size={sizeConfig.iconSize} icon={React.isValidElement(endIcon) ? React.cloneElement(endIcon as React.ReactElement<{ color?: string }>, { color: iconColor }) : endIcon} />
      )}
      {isPressed && !isDisabled && (
        <Pressed color="gray" static={variantConfig.pressedStatic} />
      )}
    </button>
  );
};

const BoxButton = memo(BoxButtonComponent);
BoxButton.displayName = "BoxButton";
export { BoxButton };