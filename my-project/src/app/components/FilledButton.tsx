import React, { memo, ReactNode, ButtonHTMLAttributes } from "react";
import { Icon } from "./Icon";

// --- Type/Interface Definitions ---
export type FilledButtonState = "enabled" | "pressed" | "disabled";
export type FilledButtonColor = "primary" | "gray";
export type FilledButtonSize = "lg" | "md" | "sm" | "xs";

export interface FilledButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "children"> {
  startIcon?: ReactNode; // INSTANCE_SWAP
  endIcon?: ReactNode; // INSTANCE_SWAP
  showStartIcon?: boolean; // BOOLEAN (default: true)
  showEndIcon?: boolean; // BOOLEAN (default: true)
  label?: string; // TEXT (default: "버튼 라벨")
  state?: FilledButtonState;
  isTinted?: boolean; // BOOLEAN
  color?: FilledButtonColor;
  size?: FilledButtonSize;
  fullWidth?: boolean;
}

// --- Size Style Map ---
type FilledButtonSizeConfig = {
  height: string;
  paddingY: string;
  paddingX: string;
  gap: string;
  borderRadius: string;
  iconSize: number;
  typographyClass: string;
};

const sizeStyleMap: Record<FilledButtonSize, FilledButtonSizeConfig> = {
  lg: {
    height: "56px",
    paddingY: "var(--spacing-14, 14px)",
    paddingX: "var(--spacing-16, 16px)",
    gap: "var(--spacing-8, 8px)",
    borderRadius: "var(--borderradius-xl, 12px)",
    iconSize: 24, // Matches --square-24, 24px
    typographyClass: "text-style-notosanskr-label-lg-medium", // 18px Medium
  },
  md: {
    height: "48px",
    paddingY: "var(--spacing-12, 12px)",
    paddingX: "var(--spacing-14, 14px)",
    gap: "var(--spacing-6, 6px)",
    borderRadius: "var(--borderradius-lg, 10px)",
    iconSize: 20, // Matches --square-20, 20px
    typographyClass: "text-style-notosanskr-label-md-medium", // 16px Medium
  },
  sm: {
    height: "40px",
    paddingY: "var(--spacing-8, 8px)",
    paddingX: "var(--spacing-12, 12px)",
    gap: "var(--spacing-4, 4px)",
    borderRadius: "var(--borderradius-md, 8px)",
    iconSize: 16, // Matches --square-16, 16px
    typographyClass: "text-style-notosanskr-label-sm-medium", // 15px Medium
  },
  xs: {
    height: "32px",
    paddingY: "var(--spacing-6, 6px)",
    paddingX: "var(--spacing-10, 10px)",
    gap: "var(--spacing-4, 4px)",
    borderRadius: "var(--borderradius-md, 8px)",
    iconSize: 16, // Matches --square-16, 16px
    typographyClass: "text-style-notosanskr-label-xs-medium", // 14px Medium
  },
};

// --- Get Variant Style (background/foreground colors) ---
type ColorSet = {
  background: string;
  color: string;
};

const variantStyleMap: Record<string, ColorSet> = {
  "enabled_false_primary": {
    background: "var(--container-primary-default)",
    color: "var(--texticon-static-whiteprimary)",
  },
  "pressed_false_primary": {
    background: "var(--container-primary-strong)",
    color: "var(--texticon-static-whiteprimary)",
  },
  "enabled_true_primary": {
    background: "var(--container-primary-subtle2)",
    color: "var(--texticon-primary-subtle)",
  },
  "pressed_true_primary": {
    background: "var(--container-primary-subtle)",
    color: "var(--texticon-primary-subtle)",
  },
  "enabled_false_gray": {
    background: "var(--container-gray-subtle2)",
    color: "var(--texticon-gray-subtle)",
  },
  "pressed_false_gray": {
    background: "var(--container-gray-subtle)",
    color: "var(--texticon-gray-subtle)",
  },
  "enabled_true_gray": {
    background: "var(--container-gray-subtle2)",
    color: "var(--texticon-gray-subtle)",
  },
  "pressed_true_gray": {
    background: "var(--container-gray-subtle)",
    color: "var(--texticon-gray-subtle)",
  },
};

// --- Disabled Style ---
const disabledStyle: ColorSet = {
  background: "var(--state-disabled-container-default)",
  color: "var(--state-disabled-texticon-default)",
};

// --- Component ---
const FilledButtonComponent = ({
  startIcon,
  endIcon,
  showStartIcon = true,
  showEndIcon = true,
  label = "버튼 라벨",
  state = "enabled",
  isTinted = false,
  color = "primary",
  size = "lg",
  fullWidth = false,
  className = "",
  style,
  ...props
}: FilledButtonProps) => {
  const sizeConfig = sizeStyleMap[size];
  const isDisabled = state === "disabled";

  const key = `${state}_${isTinted}_${color}`;
  const colorConfig = variantStyleMap[key] || variantStyleMap["enabled_false_primary"]; // Fallback to default if key not found

  const finalColorConfig = isDisabled ? disabledStyle : colorConfig;

  // Type for ReactNode props when cloning
  interface SwapProps {
    size?: number;
    color?: string;
    style?: React.CSSProperties;
    [key: string]: unknown;
  }

  const renderIcon = (iconNode: ReactNode, iconColor: string, iconSize: number) => {
    if (!iconNode) {
      // Render the default BlankLineIcon if no custom icon is provided
      return <Icon name="BlankLineIcon" size={iconSize} color={iconColor} />;
    }
    if (React.isValidElement(iconNode)) {
      // Clone the icon to apply size and color props if it's a React element
      return React.cloneElement(iconNode as React.ReactElement<SwapProps>, {
        size: iconSize,
        color: iconColor,
        style: { ...(iconNode as React.ReactElement<SwapProps>).props.style, flexShrink: 0 }, // Ensure icon doesn't shrink
      });
    }
    // For other ReactNode types (e.g., string, number, array), just render as is
    return iconNode;
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
    backgroundColor: finalColorConfig.background,
    color: finalColorConfig.color,
    cursor: isDisabled ? "not-allowed" : "pointer",
    overflow: "hidden", // Prevents content from overflowing button bounds
    whiteSpace: "nowrap", // Prevents label from wrapping
    width: fullWidth ? "100%" : "auto", // fullWidth implementation
    border: "none", // Filled button usually has no border
    ...style,
  };

  const iconColor = finalColorConfig.color;

  return (
    <button className={className} style={buttonStyle} disabled={isDisabled} {...props}>
      {showStartIcon && renderIcon(startIcon, iconColor, sizeConfig.iconSize)}
      <span className={sizeConfig.typographyClass} style={{ color: finalColorConfig.color, margin: 0 }}>
        {label}
      </span>
      {showEndIcon && renderIcon(endIcon, iconColor, sizeConfig.iconSize)}
    </button>
  );
};

const FilledButton = memo(FilledButtonComponent);
FilledButton.displayName = "FilledButton";
export { FilledButton };