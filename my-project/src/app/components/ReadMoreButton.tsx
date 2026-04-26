import React, { memo, ButtonHTMLAttributes, ReactNode } from "react";
import { Icon, IconName } from "./Icon";

// 1. Type Definitions
export type ReadMoreButtonSize = "sm" | "xs";
export type ReadMoreButtonState = "enabled" | "pressed" | "disabled";

export interface ReadMoreButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ReadMoreButtonSize;
  isExpand?: boolean;
  state?: ReadMoreButtonState;
  fullWidth?: boolean;
  children?: ReactNode; // For the "더보기" / "닫기" text
}

// 2. sizeStyleMap
const sizeStyleMap: Record<
  ReadMoreButtonSize,
  {
    height: number;
    paddingX: string;
    paddingY: string;
    gap: string;
    borderRadius: string | number;
    typographyClass: string;
    iconSize: number;
  }
> = {
  sm: {
    height: 40,
    paddingX: "var(--spacing-12, 12px)",
    paddingY: "var(--spacing-8, 8px)",
    gap: "var(--spacing-4, 4px)",
    borderRadius: "var(--borderradius-md, 8px)",
    typographyClass: "text-style-notosanskr-label-sm-medium",
    iconSize: 16,
  },
  xs: {
    height: 32,
    paddingX: "var(--spacing-10, 10px)",
    paddingY: "var(--spacing-6, 6px)",
    gap: "var(--spacing-4, 4px)",
    borderRadius: 8,
    typographyClass: "text-style-notosanskr-label-xs-medium",
    iconSize: 16,
  },
};

// 3. getVariantStyle
const getVariantStyle = (state: ReadMoreButtonState) => {
  if (state === "pressed") {
    return {
      backgroundColor: "var(--container-gray-subtle2)",
      color: "var(--texticon-gray-default)",
    };
  }
  if (state === "disabled") {
    return {
      backgroundColor: "transparent",
      color: "var(--state-disabled-texticon-default)",
    };
  }
  // enabled
  return {
    backgroundColor: "transparent",
    color: "var(--texticon-gray-default)",
  };
};

// 4. Component
const ReadMoreButtonComponent = ({
  size = "sm",
  isExpand = false,
  state = "enabled",
  fullWidth = false,
  children,
  className = "",
  style,
  ...props
}: ReadMoreButtonProps) => {
  const sizeConfig = sizeStyleMap[size];
  const stateConfig = getVariantStyle(state);

  const isDisabled = state === "disabled";

  const buttonText = isExpand ? "닫기" : "더보기";
  const iconName: IconName = isExpand ? "directionupicon" : "directiondownicon";

  const buttonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: sizeConfig.height,
    paddingTop: sizeConfig.paddingY,
    paddingBottom: sizeConfig.paddingY,
    paddingLeft: sizeConfig.paddingX,
    paddingRight: sizeConfig.paddingX,
    borderRadius: sizeConfig.borderRadius,
    cursor: isDisabled ? "not-allowed" : "pointer",
    whiteSpace: "nowrap",
    width: fullWidth ? "100%" : "auto",
    backgroundColor: stateConfig.backgroundColor,
    border: "none", // No border mentioned in properties for any state
    ...style,
  };

  return (
    <button className={className} style={buttonStyle} disabled={isDisabled} {...props}>
      <div className="container" style={{ display: "flex", gap: sizeConfig.gap, alignItems: "center", flexShrink: 0 }}>
        <span className={sizeConfig.typographyClass} style={{ color: stateConfig.color, margin: 0, whiteSpace: "nowrap" }}>
          {children || buttonText}
        </span>
        <div className="icon-slot" style={{ display: "flex", gap: 0, alignItems: "center", flexShrink: 0 }}>
          <Icon name={iconName} size={sizeConfig.iconSize} color={stateConfig.color} />
        </div>
      </div>
    </button>
  );
};

// 5. memo + displayName + export
const ReadMoreButton = memo(ReadMoreButtonComponent);
ReadMoreButton.displayName = "ReadMoreButton";
export { ReadMoreButton };