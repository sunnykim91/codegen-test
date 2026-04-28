import React, { memo, ReactNode, ButtonHTMLAttributes } from "react";
import { Icon } from "./Icon"; // Assuming Icon is in the same directory

// 1. type/interface 정의
export type GhostButtonState = "enabeld" | "pressed" | "disabled"; // Figma typo: "enabeld" instead of "enabled"
export type GhostButtonColor = "primary" | "gray" | "grayTinted" | "invert";
export type GhostButtonTextSize = "lg" | "md" | "xs";

export interface GhostButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "children"> {
  label?: string;
  state?: GhostButtonState;
  color?: GhostButtonColor;
  textSize?: GhostButtonTextSize;
  fullWidth?: boolean;
  startIcon?: ReactNode; // INSTANCE_SWAP
  endIcon?: ReactNode;   // INSTANCE_SWAP
  showEndIcon?: boolean;
  showUnderline?: boolean;
  showStartIcon?: boolean;
}

interface TextSizeConfig {
  height: string;
  typographyClass: string;
  iconSize: number;
}

interface ColorConfig {
  textColor: string;
}

// Interface for instanceSwap's props
interface SwapProps {
  style?: React.CSSProperties;
  size?: number;
  color?: string;
  [key: string]: unknown; // Allow other props
}

// 3. textSizeStyleMap (Record)
const textSizeStyleMap: Record<GhostButtonTextSize, TextSizeConfig> = {
  lg: {
    height: "26px",
    typographyClass: "text-style-notosanskr-label-lg-medium",
    iconSize: 20, // var(--square-20, 20px)
  },
  md: {
    height: "24px",
    typographyClass: "text-style-notosanskr-label-md-medium",
    iconSize: 16, // var(--square-16, 16px)
  },
  xs: {
    height: "20px",
    typographyClass: "text-style-notosanskr-label-xs-medium",
    iconSize: 16, // var(--square-16, 16px)
  },
};

// 4. getVariantStyle 함수 (color, state 기반)
const getColorConfig = (color: GhostButtonColor): ColorConfig => {
  switch (color) {
    case "primary":
      return { textColor: "var(--texticon-primary-subtle2)" };
    case "gray":
      return { textColor: "var(--texticon-gray-default)" };
    case "grayTinted":
      return { textColor: "var(--texticon-gray-subtle2)" };
    case "invert":
      return { textColor: "var(--texticon-gray-invert)" };
    default: // Should not happen
      return { textColor: "var(--texticon-primary-subtle2)" };
  }
};

const getBackgroundColorForState = (state: GhostButtonState): string | undefined => {
  if (state === "pressed") {
    return "var(--container-gray-subtle2)";
  }
  return undefined; // enabled, disabled typically transparent for ghost button
};

// 5. disabledStyle
const disabledStyle = {
  textColor: "var(--state-disabled-texticon-default)",
};

// Default BlankLineIcon component
const DefaultBlankLineIcon = (props: { size?: number; color?: string }) => (
  <Icon name="BlankLineIcon" {...props} />
);

// 6. GhostButtonComponent (함수 컴포넌트)
const GhostButtonComponent = ({
  label = "버튼 라벨",
  state = "enabeld", // Figma typo: "enabeld"
  color = "primary",
  textSize = "lg",
  fullWidth = false,
  startIcon,
  endIcon,
  showEndIcon = true,
  showUnderline = true,
  showStartIcon = true,
  className = "",
  style,
  ...props
}: GhostButtonProps) => {
  const textSizeConfig = textSizeStyleMap[textSize];
  const colorConfig = getColorConfig(color);

  const isDisabled = state === "disabled";
  const isPressed = state === "pressed";

  const currentTextColor = isDisabled ? disabledStyle.textColor : colorConfig.textColor;
  const currentBackgroundColor = getBackgroundColorForState(state);

  const buttonStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 0, // Outer button has no gap, inner container has gap
    height: textSizeConfig.height,
    paddingLeft: "var(--spacing-4, 4px)",
    paddingRight: "var(--spacing-4, 4px)",
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: "var(--borderradius-xs, 4px)",
    backgroundColor: currentBackgroundColor,
    color: currentTextColor, // Applied to button, will be inherited/overridden
    cursor: isDisabled ? "not-allowed" : "pointer",
    overflow: "hidden", // Important for pressed overlay
    whiteSpace: "nowrap", // Ensure button content doesn't wrap
    width: fullWidth ? "100%" : "auto", // fullWidth rule
    border: "none", // Ghost button has no border
    ...style,
  };

  const renderIcon = (iconNode: ReactNode, iconSize: number, iconColor: string) => {
    if (!iconNode) return null;
    if (React.isValidElement(iconNode)) {
      // Use SwapProps for type assertion to allow specific props like size and color
      return React.cloneElement(iconNode as React.ReactElement<SwapProps>, {
        size: iconSize,
        color: iconColor,
      });
    }
    return iconNode;
  };

  const currentStartIcon = showStartIcon ? (startIcon || <DefaultBlankLineIcon />) : null;
  const currentEndIcon = showEndIcon ? (endIcon || <DefaultBlankLineIcon />) : null;

  return (
    <button
      className={`ghost-button ${className}`}
      style={buttonStyle}
      disabled={isDisabled}
      aria-label={typeof label === "string" ? label : undefined}
      {...props}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-2, 2px)",
          flexShrink: 0,
          width: "auto",
          height: "auto",
        }}
      >
        {renderIcon(currentStartIcon, textSizeConfig.iconSize, currentTextColor)}
        <span
          className={`${textSizeConfig.typographyClass} label`}
          style={{
            color: currentTextColor,
            margin: 0,
            whiteSpace: "nowrap",
            position: "relative", // For underline absolute positioning relative to this span
            display: "inline-block", // Required for width to wrap content and allow absolute child
          }}
        >
          {label}
          {showUnderline && (
            <span
              className="underline"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%", // Underline spans the text itself
                height: "var(--component-button-height-underline, 1px)",
                backgroundColor: currentTextColor,
              }}
            />
          )}
        </span>
        {renderIcon(currentEndIcon, textSizeConfig.iconSize, currentTextColor)}
      </div>

      {isPressed && !isDisabled && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "var(--common-overlay-black-50)", // Subtle overlay for pressed state
            borderRadius: "var(--borderradius-xs, 4px)", // Match button's border radius
            pointerEvents: "none", // Ensure clicks pass through to button
          }}
        />
      )}
    </button>
  );
};

// 7. memo + displayName + export
const GhostButton = memo(GhostButtonComponent);
GhostButton.displayName = "GhostButton";
export { GhostButton };