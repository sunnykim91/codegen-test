import React, { memo, ButtonHTMLAttributes, ReactElement, cloneElement, isValidElement } from "react";

export type IconButtonState = "enabled" | "pressed" | "disabled";
export type IconButtonVariants = "filled" | "outlined" | "ghost" | "bare";
export type IconButtonColor = "primary" | "primaryTinted" | "gray" | "grayTinted" | "invert";
export type IconButtonSize = "sm" | "xs";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // The icon prop expects a ReactElement (e.g., an SVG component like <UserLine />)
  // which will have size and color props passed to it.
  icon: ReactElement<{ size?: number; color?: string }>;
  state?: IconButtonState;
  variants?: IconButtonVariants;
  color?: IconButtonColor;
  size?: IconButtonSize;
}

const sizeStyleMap: Record<
  IconButtonSize,
  {
    height: string;
    width: string;
    borderRadius: string;
    gap: string;
    iconSize: number;
  }
> = {
  sm: {
    height: "var(--component-button-height-sm, 40px)",
    width: "var(--component-button-height-sm, 40px)",
    borderRadius: "var(--borderradius-md, 8px)",
    gap: "0px",
    iconSize: 20,
  },
  xs: {
    height: "var(--height-container-xs, 32px)",
    width: "var(--height-container-xs, 32px)",
    borderRadius: "var(--borderradius-md, 8px)",
    gap: "var(--spacing-8, 8px)",
    iconSize: 16,
  },
};

type VariantColorStyleConfig = {
  background: string;
  color: string; // Icon color
  border?: string;
  pressedOverlay: string; // Background for pressed state, or overlay for filled
};

const getVariantColorStateStyle = (
  variants: IconButtonVariants,
  color: IconButtonColor,
  state: IconButtonState,
): VariantColorStyleConfig => {
  const disabledBg = "var(--state-disabled-container-default)";
  const disabledColor = "var(--state-disabled-texticon-default)";
  const disabledBorder = "1px solid var(--state-disabled-stroke-default)";

  if (state === "disabled") {
    const isOutlined = variants === "outlined";
    return {
      background: disabledBg,
      color: disabledColor,
      border: isOutlined ? disabledBorder : "none",
      pressedOverlay: "transparent",
    };
  }

  // Enabled/Pressed states
  switch (`${variants}-${color}`) {
    case "filled-primary":
      return {
        background: state === "pressed" ? "var(--container-primary-strong)" : "var(--container-primary-default)",
        color: "white", // BlankLineIcon in data has white fill
        border: "none",
        pressedOverlay: "var(--state-pressed-static-white)",
      };
    case "filled-primaryTinted":
      return {
        background: state === "pressed" ? "var(--container-primary-subtle)" : "var(--container-primary-subtle2)",
        color: "var(--texticon-primary-default)",
        border: "none",
        pressedOverlay: "var(--state-pressed-black)",
      };
    case "filled-gray":
      return {
        background: state === "pressed" ? "var(--container-gray-subtle)" : "var(--container-gray-subtle2)",
        color: "var(--texticon-gray-default)",
        border: "none",
        pressedOverlay: "var(--state-pressed-black)",
      };
    case "outlined-primary":
      return {
        background: state === "pressed" ? "var(--container-primary-subtle2)" : "transparent",
        color: "var(--texticon-primary-default)",
        border: "1px solid var(--stroke-primary-strong2)",
        pressedOverlay: "var(--state-pressed-black)", // for overlay span
      };
    case "outlined-gray":
      return {
        background: state === "pressed" ? "var(--container-gray-subtle3)" : "transparent",
        color: "var(--texticon-gray-default)",
        border: "1px solid var(--stroke-gray-strong2)",
        pressedOverlay: "var(--state-pressed-black)",
      };
    case "ghost-primary":
      return {
        background: state === "pressed" ? "var(--container-primary-subtle2)" : "transparent",
        color: "var(--texticon-primary-default)",
        border: "none",
        pressedOverlay: "var(--state-pressed-black)",
      };
    case "ghost-primaryTinted":
      return {
        background: state === "pressed" ? "var(--container-primary-subtle2)" : "transparent",
        color: "var(--texticon-primary-subtle2)",
        border: "none",
        pressedOverlay: "var(--state-pressed-black)",
      };
    case "ghost-gray":
      return {
        background: state === "pressed" ? "var(--container-gray-subtle3)" : "transparent",
        color: "var(--texticon-gray-default)",
        border: "none",
        pressedOverlay: "var(--state-pressed-black)",
      };
    case "ghost-grayTinted":
      return {
        background: state === "pressed" ? "var(--container-gray-subtle3)" : "transparent",
        color: "var(--texticon-gray-subtle)",
        border: "none",
        pressedOverlay: "var(--state-pressed-black)",
      };
    case "ghost-invert":
      return {
        background: state === "pressed" ? "var(--container-gray-subtle3)" : "transparent",
        color: "var(--texticon-gray-invert)",
        border: "none",
        pressedOverlay: "var(--state-pressed-white)",
      };
    case "bare-primary":
      return {
        background: state === "pressed" ? "var(--container-gray-subtle2)" : "transparent",
        color: "var(--texticon-primary-default)",
        border: "none",
        pressedOverlay: "var(--state-pressed-black)",
      };
    case "bare-primaryTinted":
      return {
        background: state === "pressed" ? "var(--container-gray-subtle2)" : "transparent",
        color: "var(--texticon-primary-subtle2)",
        border: "none",
        pressedOverlay: "var(--state-pressed-black)",
      };
    case "bare-gray":
      return {
        background: state === "pressed" ? "var(--container-gray-subtle2)" : "transparent",
        color: "var(--texticon-gray-default)",
        border: "none",
        pressedOverlay: "var(--state-pressed-black)",
      };
    case "bare-grayTinted":
      return {
        background: state === "pressed" ? "var(--container-gray-subtle2)" : "transparent",
        color: "var(--texticon-gray-subtle)",
        border: "none",
        pressedOverlay: "var(--state-pressed-black)",
      };
    case "bare-invert":
      return {
        background: state === "pressed" ? "var(--container-gray-subtle2)" : "transparent",
        color: "var(--texticon-gray-invert)",
        border: "none",
        pressedOverlay: "var(--state-pressed-white)",
      };
    default:
      // Default to primary filled enabled state
      return {
        background: "var(--container-primary-default)",
        color: "white",
        border: "none",
        pressedOverlay: "var(--state-pressed-static-white)",
      };
  }
};

const IconButtonComponent = ({
  icon,
  state = "enabled",
  variants = "filled",
  color = "primary",
  size = "sm",
  className = "",
  style,
  ...props
}: IconButtonProps) => {
  const sizeConfig = sizeStyleMap[size];
  const variantColorStateConfig = getVariantColorStateStyle(variants, color, state);

  const isDisabled = state === "disabled";
  // Overlay is typically applied only for 'filled' variants to show a darkening effect
  // For 'outlined', 'ghost', 'bare', the background color itself changes on pressed.
  const showOverlay = state === "pressed" && variants === "filled";

  const buttonStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: isDisabled ? "not-allowed" : "pointer",
    overflow: "hidden",
    whiteSpace: "nowrap",
    padding: "0px", // Default padding from summary table for fixed buttons
    gap: sizeConfig.gap,
    borderRadius: sizeConfig.borderRadius,
    border: variantColorStateConfig.border,
    backgroundColor: variantColorStateConfig.background,
    width: sizeConfig.width,
    height: sizeConfig.height,
    minWidth: "44px", // Accessibility: minimum touch target size
    minHeight: "44px", // Accessibility: minimum touch target size
    ...style,
  };

  // Specific overrides for 'bare' variant based on raw data 'hug(hug)'
  // Bare buttons are content-hugged and have specific padding and radius
  if (variants === "bare") {
    buttonStyle.width = "auto";
    buttonStyle.height = "auto";
    buttonStyle.padding = "8px"; // Sufficient padding for a good touch target
    buttonStyle.borderRadius = "var(--borderradius-xs, 4px)"; // specific for bare
    buttonStyle.flexShrink = 0; // Ensures the button does not shrink in a flex container
  }

  // Render the icon, cloning to pass size and color props
  const renderedIcon = isValidElement(icon)
    ? cloneElement(icon, {
        size: sizeConfig.iconSize,
        color: variantColorStateConfig.color,
      })
    : icon;

  return (
    <button
      className={className}
      style={buttonStyle}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...props}
    >
      {renderedIcon}
      {showOverlay && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: variantColorStateConfig.pressedOverlay,
            pointerEvents: "none",
          }}
        />
      )}
    </button>
  );
};

const IconButton = memo(IconButtonComponent);
IconButton.displayName = "IconButton";
export { IconButton };