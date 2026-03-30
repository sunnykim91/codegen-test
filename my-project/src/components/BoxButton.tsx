import React, { memo, ReactNode, ButtonHTMLAttributes } from "react";
import { Icon, IconName } from "./Icon";

export type BoxButtonColor = "primary" | "gray";
export type BoxButtonVariants = "filled" | "outline";
export type BoxButtonSize = "lg" | "md" | "sm" | "xs";
export type BoxButtonState = "enabled" | "pressed" | "disabled";

export interface BoxButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  children?: ReactNode;
  color?: BoxButtonColor;
  isTinted?: boolean;
  variants?: BoxButtonVariants;
  size?: BoxButtonSize;
  state?: BoxButtonState;
  showStartIcon?: boolean;
  showEndIcon?: boolean;
  label?: string;
  startIcon?: IconName;
  endIcon?: IconName;
}

const sizeStyleMap: Record<BoxButtonSize, {
  height: string;
  paddingX: string;
  borderRadius: number;
  gap: string;
  iconSize: number;
  typography: string;
}> = {
  lg: { height: "var(--height-container-lg, 56px)", paddingX: "var(--spacing-16, 16px)", borderRadius: 12, gap: "var(--spacing-8, 8px)", iconSize: 20, typography: "text-style-notosanskr-label-18-medium" },
  md: { height: "var(--height-container-md, 48px)", paddingX: "var(--spacing-16, 16px)", borderRadius: 12, gap: "var(--spacing-6, 6px)", iconSize: 18, typography: "text-style-notosanskr-label-16-medium" },
  sm: { height: "var(--height-container-sm, 40px)", paddingX: "var(--spacing-12, 12px)", borderRadius: 8, gap: "var(--spacing-4, 4px)", iconSize: 16, typography: "text-style-notosanskr-label-15-medium" },
  xs: { height: "var(--height-container-xs, 32px)", paddingX: "var(--spacing-10, 10px)", borderRadius: 8, gap: "var(--spacing-4, 4px)", iconSize: 14, typography: "text-style-notosanskr-label-12-medium" },
};

const getVariantStyle = (color: BoxButtonColor, variants: BoxButtonVariants, isTinted: boolean) => {
  if (color === "primary") {
    if (variants === "filled") {
      if (isTinted) {
        return {
          background: "var(--container-primary-subtle)",
          color: "var(--texticon-primary-subtle)",
          border: "none",
          pressedOverlay: "var(--state-pressed-black)",
        };
      } else {
        return {
          background: "var(--container-primary-default)",
          color: "var(--texticon-static-whiteprimary)",
          border: "none",
          pressedOverlay: "var(--state-pressed-static-white)",
        };
      }
    } else {
      // outline
      if (isTinted) {
        return {
          background: "transparent",
          color: "var(--texticon-primary-subtle2)",
          border: "1px solid var(--stroke-primary-default)",
          pressedOverlay: "var(--state-pressed-black)",
        };
      } else {
        return {
          background: "transparent",
          color: "var(--texticon-primary-subtle2)",
          border: "1px solid var(--stroke-primary-strong3)",
          pressedOverlay: "var(--state-pressed-black)",
        };
      }
    }
  } else {
    // gray
    if (variants === "filled") {
      if (isTinted) {
        return {
          background: "var(--container-gray-subtle2)",
          color: "var(--texticon-gray-subtle)",
          border: "none",
          pressedOverlay: "var(--state-pressed-black)",
        };
      } else {
        return {
          background: "var(--container-gray-strong)",
          color: "var(--texticon-gray-invert)",
          border: "none",
          pressedOverlay: "var(--state-pressed-white)",
        };
      }
    } else {
      // outline
      if (isTinted) {
        return {
          background: "transparent",
          color: "var(--texticon-gray-subtle2)",
          border: "1px solid var(--stroke-gray-strong)",
          pressedOverlay: "var(--state-pressed-black)",
        };
      } else {
        return {
          background: "transparent",
          color: "var(--texticon-gray-default)",
          border: "1px solid var(--stroke-gray-strong2)",
          pressedOverlay: "var(--state-pressed-black)",
        };
      }
    }
  }
};

const disabledStyle = {
  background: "var(--state-disabled-container-default)",
  color: "var(--state-disabled-texticon-default)",
  border: "1px solid var(--state-disabled-stroke-default)",
};

const BoxButtonComponent = ({
  children,
  color = "primary",
  isTinted = false,
  variants = "filled",
  size = "lg",
  state = "enabled",
  showStartIcon = true,
  showEndIcon = true,
  label = "버튼 라벨",
  startIcon = "blank",
  endIcon = "blank",
  className = "",
  style,
  onClick,
  ...props
}: BoxButtonProps) => {
  const sizeConfig = sizeStyleMap[size];
  const vConfig = getVariantStyle(color, variants, isTinted);
  
  const isDisabled = state === "disabled";
  const isPressed = state === "pressed" && !isDisabled;

  const iconColor = isDisabled ? disabledStyle.color : vConfig.color;
  const textColor = isDisabled ? disabledStyle.color : vConfig.color;

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
    border: isDisabled ? disabledStyle.border : vConfig.border,
    backgroundColor: isDisabled ? disabledStyle.background : vConfig.background,
    color: textColor,
    cursor: isDisabled ? "not-allowed" : "pointer",
    overflow: "hidden",
    whiteSpace: "nowrap",
    ...style,
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) return;
    onClick?.(e);
  };

  return (
    <button
      className={className}
      style={buttonStyle}
      disabled={isDisabled}
      onClick={handleClick}
      aria-disabled={isDisabled}
      {...props}
    >
      {showStartIcon && (
        <Icon name={startIcon} size={sizeConfig.iconSize} color={iconColor} />
      )}
      <span className={sizeConfig.typography} style={{ color: textColor, margin: 0 }}>
        {children || label}
      </span>
      {showEndIcon && (
        <Icon name={endIcon} size={sizeConfig.iconSize} color={iconColor} />
      )}
      {isPressed && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: vConfig.pressedOverlay,
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