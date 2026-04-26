import React, { memo, ReactNode, ButtonHTMLAttributes } from "react";
import { Icon, IconName } from "./Icon";

// 1. Type/interface definitions
export type ReadMoreButtonSize = "sm" | "xs";
export type ReadMoreButtonState = "enabled" | "pressed" | "disabled";

export interface ReadMoreButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size" | "children"> {
  size?: ReadMoreButtonSize;
  isExpand?: boolean; // boolean variant type rule
  state?: ReadMoreButtonState;
  fullWidth?: boolean; // fullWidth rule
  children?: ReactNode; // Children prop is used for the text content
}

// 3. sizeStyleMap (Record)
interface SizeConfig {
  height: number;
  padding: string; // Combined padY/padX
  gap: string;
  borderRadius: string;
  typographyClass: string;
  iconSize: number;
}

const sizeStyleMap: Record<ReadMoreButtonSize, SizeConfig> = {
  sm: {
    height: 40,
    padding: "var(--spacing-8, 8px) var(--spacing-12, 12px)",
    gap: "var(--spacing-4, 4px)",
    borderRadius: "var(--borderradius-md, 8px)",
    typographyClass: "text-style-notosanskr-label-sm-medium",
    iconSize: 16,
  },
  xs: {
    height: 32,
    padding: "var(--spacing-6, 6px) var(--spacing-10, 10px)",
    gap: "var(--spacing-4, 4px)",
    borderRadius: "var(--borderradius-md, 8px)",
    typographyClass: "text-style-notosanskr-label-xs-medium",
    iconSize: 16,
  },
};

// 4. getVariantStyle function (for state/isExpand dependent styles)
interface VariantConfig {
  backgroundColor?: string;
  color: string;
  text: string;
  icon: IconName;
}

const getVariantConfig = (
  isExpand: boolean,
  state: ReadMoreButtonState
): VariantConfig => {
  const baseColor = "var(--texticon-gray-default)";
  const disabledColor = "var(--state-disabled-texticon-default)";
  const pressedBg = "var(--container-gray-subtle2)";

  let color = baseColor;
  let backgroundColor: string | undefined;

  if (state === "disabled") {
    color = disabledColor;
  } else if (state === "pressed") {
    backgroundColor = pressedBg;
  }

  const buttonText = isExpand ? "닫기" : "더보기";
  const iconName: IconName = isExpand ? "directionupicon" : "directiondownicon";

  return {
    backgroundColor,
    color,
    text: buttonText,
    icon: iconName,
  };
};

// 6. ReadMoreButtonComponent (function component)
const ReadMoreButtonComponent = ({
  size = "sm",
  isExpand = false,
  state = "enabled",
  fullWidth = false,
  className = "",
  style,
  onClick, // capture onClick to prevent when disabled
  ...props
}: ReadMoreButtonProps) => {
  const sizeConfig = sizeStyleMap[size];
  const variantConfig = getVariantConfig(isExpand, state);

  const isDisabled = state === "disabled";

  const buttonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: sizeConfig.height,
    padding: sizeConfig.padding,
    gap: sizeConfig.gap,
    borderRadius: sizeConfig.borderRadius,
    cursor: isDisabled ? "not-allowed" : "pointer",
    whiteSpace: "nowrap",
    width: fullWidth ? "100%" : "auto", // fullWidth rule
    backgroundColor: variantConfig.backgroundColor || "transparent", // Use transparent if no specific background for state
    color: variantConfig.color,
    flexShrink: 0, // Hug mode for vertical by default, prevent shrinking
    minHeight: sizeConfig.height, // Mobile touch area
    ...style, // Allow external styles to override
  };

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) {
      e.preventDefault(); // Prevent action when disabled
      return;
    }
    onClick?.(e);
  };

  return (
    <button
      className={`container ${className}`} // Add semantic class "container" for root node
      style={buttonStyle}
      disabled={isDisabled}
      onClick={handleOnClick}
      aria-disabled={isDisabled} // Accessibility rule for disabled state
      {...props}
    >
      <span className={sizeConfig.typographyClass} style={{ color: variantConfig.color, margin: 0, whiteSpace: "nowrap" }}>
        {variantConfig.text}
      </span>
      <Icon name={variantConfig.icon} size={sizeConfig.iconSize} color={variantConfig.color} />
    </button>
  );
};

// 7. memo + displayName + export
const ReadMoreButton = memo(ReadMoreButtonComponent);
ReadMoreButton.displayName = "ReadMoreButton";
export { ReadMoreButton };