import React, { memo, ReactNode, ButtonHTMLAttributes } from "react";

export type FilledIconButtonState = "enabled" | "pressed" | "disabled";
export type FilledIconButtonSize = "sm" | "xs";
export type FilledIconButtonColor = "primary" | "gray";

export interface FilledIconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  icon?: ReactNode; // Figma INSTANCE_SWAP
  state?: FilledIconButtonState;
  size?: FilledIconButtonSize;
  color?: FilledIconButtonColor;
  isTinted?: boolean; // boolean variant
  isRounded?: boolean; // boolean variant
  fullWidth?: boolean; // Required for interactive components
}

const sizeStyleMap: Record<FilledIconButtonSize, {
  height: string;
  minWidth: string; // for square button and touch target
  iconSize: number;
  gap: string;
}> = {
  sm: {
    height: "var(--component-button-height-sm, 40px)",
    minWidth: "var(--component-button-height-sm, 40px)",
    iconSize: 20, // from children tree for size=sm
    gap: "0px",
  },
  xs: {
    height: "var(--height-container-xs, 32px)",
    minWidth: "var(--height-container-xs, 32px)",
    iconSize: 16, // from children tree for size=xs
    gap: "var(--spacing-8, 8px)",
  },
};

type FilledIconButtonVariantConfig = {
  backgroundColor: string;
  iconColor: string;
};

const getVariantStyle = (
  state: FilledIconButtonState,
  color: FilledIconButtonColor,
  isTinted: boolean
): FilledIconButtonVariantConfig => {
  if (state === "disabled") {
    return {
      backgroundColor: "var(--state-disabled-container-default)",
      iconColor: "var(--state-disabled-texticon-default)",
    };
  }

  if (color === "primary") {
    if (isTinted) {
      if (state === "pressed") {
        return {
          backgroundColor: "var(--container-primary-subtle)",
          iconColor: "var(--texticon-primary-default)",
        };
      }
      return { // enabled, tinted primary
        backgroundColor: "var(--container-primary-subtle2)",
        iconColor: "var(--texticon-primary-default)",
      };
    } else { // not tinted primary
      if (state === "pressed") {
        return {
          backgroundColor: "var(--container-primary-strong)",
          iconColor: "var(--texticon-static-contrastprimary)",
        };
      }
      return { // enabled, not tinted primary
        backgroundColor: "var(--container-primary-default)",
        iconColor: "var(--texticon-static-contrastprimary)",
      };
    }
  } else { // color === "gray"
    if (isTinted) {
      if (state === "pressed") {
        return {
          backgroundColor: "var(--container-gray-subtle)",
          iconColor: "var(--texticon-gray-default)",
        };
      }
      return { // enabled, tinted gray
        backgroundColor: "var(--container-gray-subtle2)",
        iconColor: "var(--texticon-gray-default)",
      };
    } else { // not tinted gray
      if (state === "pressed") {
        return {
          backgroundColor: "var(--container-gray-strong)",
          iconColor: "var(--texticon-gray-invert)",
        };
      }
      return { // enabled, not tinted gray
        backgroundColor: "var(--container-gray-default)",
        iconColor: "var(--texticon-gray-invert)",
      };
    }
  }
};

interface IconSwapProps {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: unknown;
}

const FilledIconButtonComponent = ({
  icon,
  state = "enabled",
  size = "sm",
  color = "primary",
  isTinted = false,
  isRounded = false,
  fullWidth = false,
  className = "",
  style,
  ...props
}: FilledIconButtonProps) => {
  const sizeConfig = sizeStyleMap[size];
  const variantConfig = getVariantStyle(state, color, isTinted);

  const isDisabled = state === "disabled";

  const borderRadius = isRounded
    ? "var(--cornerradius-full, 9999px)"
    : "var(--borderradius-md, 8px)";

  const buttonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizeConfig.gap,
    height: sizeConfig.height,
    minWidth: sizeConfig.minWidth, // Ensure minimum touch target/square size
    width: fullWidth ? "100%" : sizeConfig.minWidth,
    padding: 0, // No explicit padding for icon buttons
    borderRadius: borderRadius,
    backgroundColor: variantConfig.backgroundColor,
    cursor: isDisabled ? "not-allowed" : "pointer",
    border: "none", // Filled buttons usually don't have borders
    overflow: "hidden", // For potential pressed overlay, though not used here
    position: "relative", // For potential pressed overlay
    ...style,
  };

  const renderIcon = () => {
    if (!icon) return null;

    if (React.isValidElement(icon)) {
      return React.cloneElement(icon as React.ReactElement<IconSwapProps>, {
        size: sizeConfig.iconSize,
        color: variantConfig.iconColor,
      });
    }
    return icon;
  };

  return (
    <button
      className={className}
      style={buttonStyle}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...props}
    >
      {renderIcon()}
    </button>
  );
};

const FilledIconButton = memo(FilledIconButtonComponent);
FilledIconButton.displayName = "FilledIconButton";
export { FilledIconButton };