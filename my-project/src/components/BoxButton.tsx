import React, { memo, ReactNode, ButtonHTMLAttributes } from "react";

export type BoxButtonColor = "primary" | "gray";
export type BoxButtonVariants = "solid" | "out-line";
export type BoxButtonSize = "lg" | "md" | "sm" | "xs";
export type BoxButtonState = "enabled" | "pressed" | "disabled";

export interface BoxButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  children?: ReactNode;
  color?: BoxButtonColor;
  tinted?: boolean;
  variants?: BoxButtonVariants;
  size?: BoxButtonSize;
  state?: BoxButtonState;
  ShowStartIcon?: boolean;
  ShowEndIcon?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const sizeStyleMap: Record<
  BoxButtonSize,
  {
    height: string;
    paddingX: string;
    borderRadius: number;
    gap: string;
    iconSize: number;
  }
> = {
  lg: { height: "var(--height-container-lg, 56px)", paddingX: "var(--spacing-16, 16px)", borderRadius: 12, gap: "var(--spacing-8, 8px)", iconSize: 20 },
  md: { height: "var(--height-container-md, 48px)", paddingX: "var(--spacing-14, 14px)", borderRadius: 10, gap: "var(--spacing-6, 6px)", iconSize: 18 },
  sm: { height: "var(--height-container-sm, 40px)", paddingX: "var(--spacing-12, 12px)", borderRadius: 8, gap: "var(--spacing-4, 4px)", iconSize: 16 },
  xs: { height: "var(--height-container-xs, 32px)", paddingX: "var(--spacing-10, 10px)", borderRadius: 6, gap: "var(--spacing-4, 4px)", iconSize: 14 },
};

const getVariantStyle = (color: BoxButtonColor, variants: BoxButtonVariants, tinted: boolean) => {
  if (variants === "out-line") {
    if (color === "primary") {
      if (tinted) {
        return {
          background: "transparent",
          color: "var(--text-icon-primary-subtle-2)",
          border: "1px solid var(--stroke-primary-default)",
          pressedOverlay: "var(--state-pressed-black)",
        };
      }
      return {
        background: "transparent",
        color: "var(--text-icon-primary-subtle-2)",
        border: "1px solid var(--stroke-primary-strong-3)",
        pressedOverlay: "var(--state-pressed-black)",
      };
    }
    // gray outline
    if (tinted) {
      return {
        background: "transparent",
        color: "var(--text-icon-gray-subtle-2)",
        border: "1px solid var(--stroke-gray-strong)",
        pressedOverlay: "var(--state-pressed-black)",
      };
    }
    return {
      background: "transparent",
      color: "var(--text-icon-gray-default)",
      border: "1px solid var(--stroke-gray-strong-2)",
      pressedOverlay: "var(--state-pressed-black)",
    };
  }
  
  // solid
  if (color === "primary") {
    if (tinted) {
      return {
        background: "var(--container-primary-subtle)",
        color: "var(--text-icon-primary-subtle)",
        border: "none",
        pressedOverlay: "var(--state-pressed-black)",
      };
    }
    return {
      background: "var(--container-primary-default)",
      color: "var(--text-icon-static-white-primary)",
      border: "none",
      pressedOverlay: "var(--state-pressed-static-white)",
    };
  }
  
  // gray solid
  if (tinted) {
    return {
      background: "var(--container-gray-subtle-2)",
      color: "var(--text-icon-gray-subtle)",
      border: "none",
      pressedOverlay: "var(--state-pressed-black)",
    };
  }
  return {
    background: "var(--container-gray-strong)",
    color: "var(--text-icon-gray-white)",
    border: "none",
    pressedOverlay: "var(--state-pressed-white)",
  };
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
  variants = "solid",
  size = "lg",
  state = "enabled",
  ShowStartIcon = true,
  ShowEndIcon = true,
  startIcon,
  endIcon,
  className = "",
  style,
  ...props
}: BoxButtonProps) => {
  const sizeConfig = sizeStyleMap[size];
  const vConfig = getVariantStyle(color, variants, tinted);

  const isDisabled = state === "disabled";
  const isPressed = state === "pressed";

  const iconColor = isDisabled ? disabledStyle.color : vConfig.color;

  const renderIcon = (icon: ReactNode, show: boolean) => {
    if (!show || !icon) return null;
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon as React.ReactElement<{ size?: number; color?: string }>, {
        size: sizeConfig.iconSize,
        color: iconColor,
      });
    }
    return icon;
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
    border: isDisabled ? disabledStyle.border : vConfig.border,
    cursor: isDisabled ? "not-allowed" : "pointer",
    overflow: "hidden",
    whiteSpace: "nowrap",
    backgroundColor: isDisabled ? disabledStyle.background : vConfig.background,
    color: isDisabled ? disabledStyle.color : vConfig.color,
    fontSize: "15px",
    fontWeight: "500",
    lineHeight: "22px",
    fontFamily: "NotoSansKR",
    ...style,
  };

  return (
    <button className={className} style={buttonStyle} disabled={isDisabled} {...props}>
      {ShowStartIcon && renderIcon(startIcon, true)}
      <span style={{ color: isDisabled ? disabledStyle.color : vConfig.color }}>
        {children}
      </span>
      {ShowEndIcon && renderIcon(endIcon, true)}
      {isPressed && !isDisabled && (
        <span 
          style={{ 
            position: "absolute", 
            inset: 0, 
            backgroundColor: vConfig.pressedOverlay, 
            pointerEvents: "none" 
          }} 
        />
      )}
    </button>
  );
};

const BoxButton = memo(BoxButtonComponent);
BoxButton.displayName = "BoxButton";
export { BoxButton };