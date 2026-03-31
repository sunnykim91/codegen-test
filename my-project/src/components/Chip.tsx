import React, { memo, ReactNode, ButtonHTMLAttributes } from "react";
import { Icon, IconName } from "./Icon";

export type ChipVariants = "filled" | "outline";
export type ChipState = "enabled" | "pressed" | "readonly" | "disabled";

export interface ChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  children?: ReactNode;
  variants?: ChipVariants;
  state?: ChipState;
  isSelected?: boolean;
  fullWidth?: boolean;
  showStartIcon?: boolean;
  showEndIcon?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const getVariantStyle = (variants: ChipVariants, state: ChipState, isSelected: boolean) => {
  const isDisabled = state === "disabled";
  const isReadonly = state === "readonly";

  if (variants === "filled") {
    if (isSelected) {
      if (isDisabled) {
        return {
          background: "var(--state-disabled-container-strong2)",
          color: "var(--state-disabled-texticon-invert)",
          border: "none",
          pressedOverlay: null,
          textStyle: "text-style-kbfgtext-label-14-bold",
        };
      }
      if (isReadonly) {
        return {
          background: "var(--state-readonly-container-strong2)",
          color: "var(--texticon-gray-invert)",
          border: "none",
          pressedOverlay: null,
          textStyle: "text-style-kbfgtext-label-14-bold",
        };
      }
      return {
        background: "var(--container-primary-default)",
        color: "var(--texticon-static-contrastprimary)",
        border: "none",
        pressedOverlay: "var(--state-pressed-static-black)",
        textStyle: "text-style-kbfgtext-label-14-bold",
      };
    }
    
    if (isDisabled) {
      return {
        background: "var(--state-disabled-container-default)",
        color: "var(--state-disabled-texticon-default)",
        border: "none",
        pressedOverlay: null,
        textStyle: "text-style-kbfgtext-label-14-regular",
      };
    }
    if (isReadonly) {
      return {
        background: "var(--state-readonly-container-default)",
        color: "var(--texticon-gray-default)",
        border: "none",
        pressedOverlay: null,
        textStyle: "text-style-kbfgtext-label-14-regular",
      };
    }
    return {
      background: "var(--container-gray-subtle3)",
      color: "var(--texticon-gray-default)",
      border: "none",
      pressedOverlay: "var(--state-pressed-black)",
      textStyle: "text-style-kbfgtext-label-14-regular",
    };
  }

  // outline
  if (isSelected) {
    if (isDisabled) {
      return {
        background: "transparent",
        color: "var(--state-disabled-texticon-default)",
        border: "1px solid var(--state-disabled-stroke-strong)",
        pressedOverlay: null,
        textStyle: "text-style-kbfgtext-label-14-bold",
      };
    }
    if (isReadonly) {
      return {
        background: "var(--container-gray-white)",
        color: "var(--texticon-primary-subtle2)",
        border: "1px solid var(--stroke-primary-strong)",
        pressedOverlay: null,
        textStyle: "text-style-kbfgtext-label-14-bold",
      };
    }
    return {
      background: "var(--container-gray-white)",
      color: "var(--texticon-primary-subtle2)",
      border: "1px solid var(--stroke-primary-strong)",
      pressedOverlay: "var(--state-pressed-black)",
      textStyle: "text-style-kbfgtext-label-14-bold",
    };
  }

  if (isDisabled) {
    return {
      background: "transparent",
      color: "var(--state-disabled-texticon-default)",
      border: "1px solid var(--state-disabled-stroke-default)",
      pressedOverlay: null,
      textStyle: "text-style-kbfgtext-label-14-regular",
    };
  }
  if (isReadonly) {
    return {
      background: "transparent",
      color: "var(--texticon-gray-subtle)",
      border: "1px solid var(--state-readonly-stroke-default)",
      pressedOverlay: null,
      textStyle: "text-style-kbfgtext-label-14-regular",
    };
  }
  return {
    background: "var(--container-gray-white)",
    color: "var(--texticon-gray-subtle)",
    border: "1px solid var(--stroke-gray-default)",
    pressedOverlay: "var(--state-pressed-black)",
    textStyle: "text-style-kbfgtext-label-14-regular",
  };
};

const ChipComponent = ({
  children = "라벨",
  variants = "filled",
  state = "enabled",
  isSelected = false,
  fullWidth = false,
  showStartIcon = true,
  showEndIcon = true,
  startIcon,
  endIcon,
  className = "",
  style,
  ...props
}: ChipProps) => {
  const config = getVariantStyle(variants, state, isSelected);
  const isPressed = state === "pressed";
  const isDisabled = state === "disabled";

  const iconColor = config.color;

  const renderIcon = (icon: ReactNode) => {
    if (!icon) return <Icon name="blank" size={16} color={iconColor} />;
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon as React.ReactElement<{ size?: number; color?: string }>, {
        size: 16,
        color: iconColor,
      });
    }
    return icon;
  };

  const chipStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--spacing-4, 4px)",
    paddingTop: "var(--spacing-8, 8px)",
    paddingBottom: "var(--spacing-8, 8px)",
    paddingLeft: "var(--spacing-12, 12px)",
    paddingRight: "var(--spacing-12, 12px)",
    borderRadius: 9999,
    border: config.border,
    cursor: isDisabled ? "not-allowed" : "pointer",
    overflow: "hidden",
    backgroundColor: config.background,
    color: config.color,
    width: fullWidth ? "100%" : "auto",
    minWidth: 44,
    minHeight: 44,
    ...style,
  };

  return (
    <button className={`chip ${className}`} style={chipStyle} disabled={isDisabled} {...props}>
      {showStartIcon && renderIcon(startIcon)}
      <span className={`label ${config.textStyle}`} style={{ color: config.color, margin: 0 }}>
        {children}
      </span>
      {showEndIcon && renderIcon(endIcon)}
      {isPressed && config.pressedOverlay && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: config.pressedOverlay,
            pointerEvents: "none",
          }}
        />
      )}
    </button>
  );
};

const Chip = memo(ChipComponent);
Chip.displayName = "Chip";
export { Chip };