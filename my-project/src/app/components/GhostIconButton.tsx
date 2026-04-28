import React, { memo, ButtonHTMLAttributes, ReactNode, ReactElement } from "react";
import { Icon } from "./Icon";

export type GhostIconButtonState = "enabled" | "pressed" | "disabled";
export type GhostIconButtonColor = "primary" | "gray" | "grayTinted" | "invert";
export type GhostIconButtonSize = "sm" | "xs";

export interface GhostIconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  icon?: ReactNode;
  state?: GhostIconButtonState;
  isPadded?: boolean;
  color?: GhostIconButtonColor;
  size?: GhostIconButtonSize;
  fullWidth?: boolean;
  "aria-label": string;
}

interface IconComponentProps {
  size?: number;
  color?: string;
  [key: string]: unknown;
}

const getStyles = (props: GhostIconButtonProps) => {
  const {
    state = "enabled",
    isPadded = true,
    color = "primary",
    size = "sm",
    fullWidth = false,
  } = props;

  const isDisabled = state === "disabled";

  let height: string | number;
  let width: string | number;
  let borderRadius: string | number;
  let gap: string | number;
  let iconSize: number;

  // 1. Dimensions based on isPadded and size (from summary table)
  if (isPadded) {
    height = size === "sm" ? "var(--component-button-height-sm, 40px)" : "var(--component-button-height-xs, 32px)";
    width = height; // For padded, width equals height
    borderRadius = "var(--borderradius-md, 8px)";
    gap = "0px"; // From summary table, gap is 0 for isPadded=true
  } else { // !isPadded (Hug sizing)
    height = "20px"; // From summary table, fixed 20px for isPadded=false
    width = "auto"; // From summary table, hug for isPadded=false
    borderRadius = "var(--borderradius-xs, 4px)";
    gap = size === "xs" ? "var(--spacing-8, 8px)" : "0px"; // Gap only for xs when !isPadded
  }

  // Override width if fullWidth is true and not padded
  if (!isPadded && fullWidth) {
    width = "100%";
  }

  // Icon size (from raw variant children dimensions)
  iconSize = size === "sm" ? 20 : 16; // sm: 20px (square-20), xs: 16px (square-16)

  // 2. Background Color (only for pressed state)
  let backgroundColor: string = "transparent";
  if (state === "pressed") {
    if (isPadded) {
      backgroundColor = color === "primary" ? "var(--container-primary-subtle2)" : "var(--container-gray-subtle3)";
    } else { // !isPadded
      backgroundColor = "var(--container-gray-subtle2)";
    }
  }

  // 3. Icon Color
  let iconColor: string;
  if (isDisabled) {
    iconColor = "var(--state-disabled-texticon-default)";
  } else {
    switch (color) {
      case "primary":
        iconColor = "var(--texticon-primary-default)";
        break;
      case "gray":
        iconColor = "var(--texticon-gray-default)";
        break;
      case "grayTinted":
        iconColor = "var(--texticon-gray-subtle)";
        break;
      case "invert":
        iconColor = "var(--texticon-gray-invert)";
        break;
      default:
        iconColor = "currentColor"; // Fallback, though props ensure valid color
    }
  }

  return {
    button: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height,
      width,
      borderRadius,
      gap,
      backgroundColor,
      cursor: isDisabled ? "not-allowed" : "pointer",
      overflow: "hidden",
      position: "relative",
      border: "none",
      color: iconColor, // Sets the 'currentColor' for children, including the Icon component
    } as React.CSSProperties,
    iconSize,
    iconColor,
  };
};

const GhostIconButtonComponent = ({
  icon,
  state = "enabled",
  isPadded = true,
  color = "primary",
  size = "sm",
  fullWidth = false,
  className = "",
  style,
  "aria-label": ariaLabel,
  ...props
}: GhostIconButtonProps) => {
  const { button: buttonStyle, iconSize, iconColor } = getStyles({
    icon, state, isPadded, color, size, fullWidth, "aria-label": ariaLabel,
  });
  const isDisabled = state === "disabled";

  const renderIcon = (node: ReactNode) => {
    if (!node) return null;
    if (React.isValidElement(node)) {
      return React.cloneElement(node as ReactElement<IconComponentProps>, {
        size: iconSize,
        color: iconColor,
      });
    }
    return node;
  };

  return (
    <button
      className={className}
      style={{ ...buttonStyle, ...style }}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-label={ariaLabel}
      {...props}
    >
      {renderIcon(icon)}
    </button>
  );
};

const GhostIconButton = memo(GhostIconButtonComponent);
GhostIconButton.displayName = "GhostIconButton";
export { GhostIconButton };