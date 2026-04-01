import React, { memo, ReactNode, ButtonHTMLAttributes } from "react";
import { Icon } from "./Icon";

export type ChipVariants = "filled" | "outline";
export type ChipState = "enabled" | "pressed" | "readonly" | "disabled";

export interface ChipProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "color"
> {
  label?: string;
  variants?: ChipVariants;
  state?: ChipState;
  isSelected?: boolean;
  fullWidth?: boolean;
  showStartIcon?: boolean;
  showEndIcon?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const getVariantStyle = (
  variants: ChipVariants,
  isSelected: boolean,
  state: ChipState,
) => {
  const isDisabled = state === "disabled";
  const isReadonly = state === "readonly";

  if (isDisabled) {
    if (variants === "filled") {
      return {
        background: isSelected
          ? "var(--state-disabled-container-strong2)"
          : "var(--state-disabled-container-default)",
        color: isSelected
          ? "var(--state-disabled-texticon-invert)"
          : "var(--state-disabled-texticon-default)",
        border: "none",
        pressedOverlay: null,
      };
    }
    // outline
    return {
      background: "transparent",
      color: "var(--state-disabled-texticon-default)",
      border: isSelected
        ? "1px solid var(--state-disabled-stroke-strong)"
        : "1px solid var(--state-disabled-stroke-default)",
      pressedOverlay: null,
    };
  }

  if (isReadonly) {
    if (variants === "filled") {
      return {
        background: isSelected
          ? "var(--state-readonly-container-strong2)"
          : "var(--state-readonly-container-default)",
        color: isSelected
          ? "var(--texticon-gray-invert)"
          : "var(--texticon-gray-default)",
        border: "none",
        pressedOverlay: null,
      };
    }
    // outline
    return {
      background: "var(--container-gray-white)",
      color: isSelected
        ? "var(--texticon-primary-subtle2)"
        : "var(--texticon-gray-subtle)",
      border: isSelected
        ? "1px solid var(--stroke-primary-strong)"
        : "1px solid var(--state-readonly-stroke-default)",
      pressedOverlay: null,
    };
  }

  if (variants === "filled") {
    if (isSelected) {
      return {
        background: "var(--container-primary-default)",
        color: "var(--texticon-static-contrastprimary)",
        border: "none",
        pressedOverlay: "var(--state-pressed-black)",
      };
    }
    return {
      background: "var(--container-gray-subtle3)",
      color: "var(--texticon-gray-default)",
      border: "none",
      pressedOverlay: "var(--state-pressed-black)",
    };
  }

  // outline
  if (isSelected) {
    return {
      background: "var(--container-gray-white)",
      color: "var(--texticon-primary-subtle2)",
      border: "1px solid var(--stroke-primary-strong)",
      pressedOverlay: "var(--state-pressed-gray)",
    };
  }
  return {
    background: "var(--container-gray-white)",
    color: "var(--texticon-gray-subtle)",
    border: "1px solid var(--stroke-gray-default)",
    pressedOverlay: "var(--state-pressed-gray)",
  };
};

const ChipComponent = ({
  label = "라벨",
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
  onClick,
  ...props
}: ChipProps) => {
  const variantConfig = getVariantStyle(variants, isSelected, state);
  const isDisabled = state === "disabled";
  const isReadonly = state === "readonly";
  const isPressed = state === "pressed" && !isDisabled && !isReadonly;
  const isInteractive = !isDisabled && !isReadonly;

  const textStyleClass = isSelected
    ? "text-style-kbfgtext-label-14-bold"
    : "text-style-kbfgtext-label-14-regular";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isInteractive) return;
    onClick?.(e);
  };

  const renderIcon = (icon: ReactNode) => {
    if (!icon) return null;
    if (React.isValidElement(icon)) {
      return React.cloneElement(
        icon as React.ReactElement<{ size?: number; color?: string }>,
        {
          size: 16,
          color: variantConfig.color,
        },
      );
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
    border: variantConfig.border,
    backgroundColor: variantConfig.background,
    color: variantConfig.color,
    cursor: isInteractive ? "pointer" : isReadonly ? "default" : "not-allowed",
    overflow: "hidden",
    width: fullWidth ? "100%" : "auto",
    flexShrink: 0,
    ...style,
  };

  return (
    <button
      className={`chip ${className}`}
      style={chipStyle}
      disabled={isDisabled}
      onClick={handleClick}
      {...props}
    >
      {showStartIcon && startIcon && renderIcon(startIcon)}
      <span
        className={textStyleClass}
        style={{ color: variantConfig.color, margin: 0 }}
      >
        {label}
      </span>
      {showEndIcon && endIcon && renderIcon(endIcon)}
      {isPressed && variantConfig.pressedOverlay && (
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

const Chip = memo(ChipComponent);
Chip.displayName = "Chip";
export { Chip };
