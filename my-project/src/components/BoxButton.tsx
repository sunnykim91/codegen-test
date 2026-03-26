import React, { memo, ReactNode, ButtonHTMLAttributes, cloneElement, isValidElement } from "react";
import { Icon, IconSize } from "./Icon";
import { Blank } from "../icons";

export type BoxButtonColor = "primary" | "gray";
export type BoxButtonVariants = "solid" | "out-line";
export type BoxButtonSize = "lg" | "md" | "sm" | "xs";
export type BoxButtonState = "enabled" | "pressed" | "disabled";

export interface BoxButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  children?: ReactNode;
  color?: BoxButtonColor;
  variants?: BoxButtonVariants;
  size?: BoxButtonSize;
  state?: BoxButtonState;
  tinted?: boolean;
  showStartIcon?: boolean;
  showEndIcon?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const sizeStyleMap: Record<BoxButtonSize, {
  height: string;
  paddingX: string;
  borderRadius: number;
  gap: string;
  iconSize: IconSize;
  fontSize: string;
}> = {
  lg: {
    height: "var(--height-container-lg, 56px)",
    paddingX: "var(--spacing-16, 16px)",
    borderRadius: 12,
    gap: "var(--spacing-8, 8px)",
    iconSize: 20,
    fontSize: "18px"
  },
  md: {
    height: "var(--height-container-md, 48px)",
    paddingX: "var(--spacing-16, 16px)",
    borderRadius: 12,
    gap: "var(--spacing-6, 6px)",
    iconSize: 18,
    fontSize: "16px"
  },
  sm: {
    height: "var(--height-container-sm, 40px)",
    paddingX: "var(--spacing-12, 12px)",
    borderRadius: 8,
    gap: "var(--spacing-4, 4px)",
    iconSize: 16,
    fontSize: "15px"
  },
  xs: {
    height: "var(--height-container-xs, 32px)",
    paddingX: "var(--spacing-8, 8px)",
    borderRadius: 6,
    gap: "var(--spacing-2, 2px)",
    iconSize: 14,
    fontSize: "14px"
  }
};

const getVariantStyle = (color: BoxButtonColor, variants: BoxButtonVariants, tinted: boolean) => {
  if (color === "primary") {
    if (variants === "solid") {
      if (tinted) {
        return {
          background: "var(--container-primary-subtle)",
          color: "var(--text-icon-primary-subtle)",
          border: "none",
          pressedOverlay: "var(--state-pressed-black)",
        };
      } else {
        return {
          background: "var(--container-primary-default)",
          color: "var(--text-icon-static-white-primary)",
          border: "none",
          pressedOverlay: "var(--state-pressed-static-white)",
        };
      }
    } else {
      if (tinted) {
        return {
          background: "transparent",
          color: "var(--text-icon-primary-subtle-2)",
          border: "1px solid var(--stroke-primary-default)",
          pressedOverlay: "var(--state-pressed-black)",
        };
      } else {
        return {
          background: "transparent",
          color: "var(--text-icon-primary-subtle-2)",
          border: "1px solid var(--stroke-primary-strong-3)",
          pressedOverlay: "var(--state-pressed-black)",
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
        };
      } else {
        return {
          background: "var(--container-gray-strong)",
          color: "var(--text-icon-gray-white)",
          border: "none",
          pressedOverlay: "var(--state-pressed-white)",
        };
      }
    } else {
      if (tinted) {
        return {
          background: "transparent",
          color: "var(--text-icon-gray-subtle-2)",
          border: "1px solid var(--stroke-gray-strong)",
          pressedOverlay: "var(--state-pressed-black)",
        };
      } else {
        return {
          background: "transparent",
          color: "var(--text-icon-gray-default)",
          border: "1px solid var(--stroke-gray-strong-2)",
          pressedOverlay: "var(--state-pressed-black)",
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
  variants = "solid",
  size = "lg",
  state = "enabled",
  tinted = false,
  showStartIcon = true,
  showEndIcon = true,
  startIcon,
  endIcon,
  className = "",
  style,
  ...props
}: BoxButtonProps) => {
  const sizeConfig = sizeStyleMap[size];
  const variantConfig = getVariantStyle(color, variants, tinted);

  const isDisabled = state === "disabled";
  const isPressed = state === "pressed";

  const iconColor = isDisabled ? disabledStyle.color : variantConfig.color;

  const renderIcon = (icon: ReactNode) => {
    if (!icon) {
      return (
        <Icon size={sizeConfig.iconSize}>
          <Blank />
        </Icon>
      );
    }
    if (isValidElement(icon)) {
      return (
        <Icon size={sizeConfig.iconSize}>
          {cloneElement(icon as React.ReactElement<{ size?: number; color?: string }>, {
            size: sizeConfig.iconSize,
            color: iconColor,
          })}
        </Icon>
      );
    }
    return (
      <Icon size={sizeConfig.iconSize}>
        <Blank />
      </Icon>
    );
  };

  const buttonStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizeConfig.gap,
    height: sizeConfig.height,
    paddingLeft: sizeConfig.paddingX,
    paddingRight: sizeConfig.paddingX,
    borderRadius: sizeConfig.borderRadius,
    border: isDisabled ? disabledStyle.border : variantConfig.border,
    cursor: isDisabled ? "not-allowed" : "pointer",
    overflow: "hidden",
    backgroundColor: isDisabled ? disabledStyle.background : variantConfig.background,
    color: isDisabled ? disabledStyle.color : variantConfig.color,
    ...style,
  };

  const textColor = isDisabled ? disabledStyle.color : variantConfig.color;

  return (
    <button className={className} style={buttonStyle} disabled={isDisabled} {...props}>
      {showStartIcon && renderIcon(startIcon)}
      <span
        className="text-style-notosanskr-label-15-medium"
        style={{ color: textColor }}
      >
        {children}
      </span>
      {showEndIcon && renderIcon(endIcon)}
      {isPressed && !isDisabled && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: variantConfig.pressedOverlay,
            pointerEvents: "none",
          }}
        />
      )}
    </button>
  );
};

const BoxButton = memo(BoxButtonComponent);
BoxButton.displayName = "BoxButton";
export { BoxButton };