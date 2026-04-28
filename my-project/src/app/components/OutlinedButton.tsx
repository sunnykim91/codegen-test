import React, { memo, ReactNode, ButtonHTMLAttributes } from "react";
import { Icon } from "./Icon"; // Assuming Icon component is in ./Icon

export type OutlinedButtonColor = "primary" | "gray";
export type OutlinedButtonSize = "lg" | "md" | "sm" | "xs";
export type OutlinedButtonState = "enabled" | "pressed" | "disabled";

// Define a type for elements that can be swapped, to allow cloning styles.
interface SwapProps {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: unknown; // Allow other unknown props
}

export interface OutlinedButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "children"> {
  label: string; // From Figma's label prop
  state?: OutlinedButtonState;
  color?: OutlinedButtonColor;
  size?: OutlinedButtonSize;
  fullWidth?: boolean;
  startIcon?: ReactNode; // INSTANCE_SWAP allows any ReactNode
  endIcon?: ReactNode; // INSTANCE_SWAP allows any ReactNode
  showStartIcon?: boolean;
  showEndIcon?: boolean;
}

const sizeStyleMap: Record<
  OutlinedButtonSize,
  {
    height: string; // Use string for CSS variables like var(--spacing-XX, Xpx)
    paddingX: string;
    paddingY: string;
    gap: string;
    borderRadius: string;
    iconSize: number;
    typography: string;
  }
> = {
  lg: {
    height: "56px",
    paddingX: "var(--spacing-16, 16px)",
    paddingY: "var(--spacing-14, 14px)",
    gap: "var(--spacing-8, 8px)",
    borderRadius: "var(--borderradius-xl, 12px)",
    iconSize: 24, // Matches var(--square-24, 24px)
    typography: "text-style-notosanskr-label-18-medium",
  },
  md: {
    height: "48px",
    paddingX: "var(--spacing-14, 14px)",
    paddingY: "var(--spacing-12, 12px)",
    gap: "var(--spacing-6, 6px)",
    borderRadius: "var(--borderradius-lg, 10px)",
    iconSize: 20, // Matches var(--square-20, 20px)
    typography: "text-style-notosanskr-label-16-medium",
  },
  sm: {
    height: "40px",
    paddingX: "var(--spacing-12, 12px)",
    paddingY: "var(--spacing-8, 8px)",
    gap: "var(--spacing-4, 4px)",
    borderRadius: "var(--borderradius-md, 8px)",
    iconSize: 16, // Matches var(--square-16, 16px)
    typography: "text-style-notosanskr-label-15-medium",
  },
  xs: {
    height: "32px",
    paddingX: "var(--spacing-10, 10px)",
    paddingY: "var(--spacing-6, 6px)",
    gap: "var(--spacing-4, 4px)",
    borderRadius: "var(--borderradius-md, 8px)",
    iconSize: 16, // Matches var(--square-16, 16px)
    typography: "text-style-notosanskr-label-14-medium",
  },
};

interface VariantStyleConfig {
  background: string;
  color: string;
  border: string;
}

const getVariantStyle = (
  color: OutlinedButtonColor,
  state: OutlinedButtonState
): VariantStyleConfig => {
  if (state === "disabled") {
    return {
      background: "var(--state-disabled-container-default)",
      color: "var(--state-disabled-texticon-default)",
      border: "1px solid var(--state-disabled-stroke-default)",
    };
  }

  if (color === "primary") {
    if (state === "pressed") {
      return {
        background: "var(--container-primary-subtle2)",
        color: "var(--texticon-primary-subtle2)",
        border: "1px solid var(--stroke-primary-strong2)",
      };
    }
    // state === "enabled"
    return {
      background: "transparent",
      color: "var(--texticon-primary-subtle2)",
      border: "1px solid var(--stroke-primary-strong2)",
    };
  }

  // color === "gray"
  if (state === "pressed") {
    return {
      background: "var(--container-gray-subtle3)",
      color: "var(--texticon-gray-subtle)",
      border: "1px solid var(--stroke-gray-strong2)",
    };
  }
  // state === "enabled"
  return {
    background: "transparent",
    color: "var(--texticon-gray-subtle)",
    border: "1px solid var(--stroke-gray-strong2)",
  };
};

const OutlinedButtonComponent = ({
  label,
  state = "enabled",
  color = "primary",
  size = "lg",
  fullWidth = false,
  startIcon: startIconProp,
  endIcon: endIconProp,
  showStartIcon = true,
  showEndIcon = true,
  className = "",
  style,
  ...props
}: OutlinedButtonProps) => {
  const sizeConfig = sizeStyleMap[size];
  const variantConfig = getVariantStyle(color, state);

  const isDisabled = state === "disabled";

  const iconColor = variantConfig.color; // Icons should match text color.

  const renderIcon = (iconElement: ReactNode) => {
    if (!iconElement) return null; // If explicitly null/undefined, render nothing.

    if (React.isValidElement<SwapProps>(iconElement)) {
      return React.cloneElement(iconElement, {
        size: iconElement.props.size ?? sizeConfig.iconSize, // Allow custom size, fallback to default
        color: iconElement.props.color ?? iconColor, // Allow custom color, fallback to default
      });
    }
    return iconElement; // Render as is if not a valid React element (e.g., string)
  };

  const buttonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizeConfig.gap,
    height: sizeConfig.height,
    paddingTop: sizeConfig.paddingY,
    paddingBottom: sizeConfig.paddingY,
    paddingLeft: sizeConfig.paddingX,
    paddingRight: sizeConfig.paddingX,
    borderRadius: sizeConfig.borderRadius,
    border: variantConfig.border,
    cursor: isDisabled ? "not-allowed" : "pointer",
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: fullWidth ? "100%" : "auto",
    backgroundColor: variantConfig.background,
    color: variantConfig.color, // Text color
    ...style,
  };

  return (
    <button
      className={`outlined-button ${className}`}
      style={buttonStyle}
      disabled={isDisabled}
      {...props}
    >
      {showStartIcon && renderIcon(startIconProp ?? <Icon name="BlankLineIcon" />)}
      <span className={sizeConfig.typography} style={{ color: variantConfig.color, margin: 0 }}>
        {label}
      </span>
      {showEndIcon && renderIcon(endIconProp ?? <Icon name="BlankLineIcon" />)}
    </button>
  );
};

const OutlinedButton = memo(OutlinedButtonComponent);
OutlinedButton.displayName = "OutlinedButton";
export { OutlinedButton };