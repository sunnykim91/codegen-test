import React, { memo, ReactNode, ButtonHTMLAttributes } from "react";
import { Icon, IconName } from "./Icon";

export type ReadMoreButtonSize = "sm" | "xs";
export type ReadMoreButtonState = "enabled" | "pressed" | "disabled";

export interface ReadMoreButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode; // Optional: allows overriding the default "더보기" / "닫기" text
  size?: ReadMoreButtonSize;
  isExpand?: boolean;
  state?: ReadMoreButtonState;
  fullWidth?: boolean;
}

const sizeStyleMap: Record<ReadMoreButtonSize, {
  height: string;
  paddingX: string;
  paddingY: string;
  gap: string;
  borderRadius: string;
  typographyClass: string;
  iconSize: number;
}> = {
  sm: {
    height: "40px",
    paddingX: "var(--spacing-12, 12px)",
    paddingY: "var(--spacing-8, 8px)",
    gap: "var(--spacing-4, 4px)",
    borderRadius: "var(--borderradius-md, 8px)",
    typographyClass: "text-style-notosanskr-label-sm-medium",
    iconSize: 16,
  },
  xs: {
    height: "32px",
    paddingX: "var(--spacing-10, 10px)",
    paddingY: "var(--spacing-6, 6px)",
    gap: "var(--spacing-4, 4px)",
    borderRadius: "var(--borderradius-md, 8px)",
    typographyClass: "text-style-notosanskr-label-xs-medium",
    iconSize: 16,
  },
};

const getVariantStyle = (state: ReadMoreButtonState) => {
  if (state === "pressed") {
    return {
      backgroundColor: "var(--container-gray-subtle2)",
      color: "var(--texticon-gray-default)",
    };
  }
  // enabled
  return {
    backgroundColor: "transparent", // No explicit background for enabled state in summary
    color: "var(--texticon-gray-default)",
  };
};

const disabledStyle = {
  backgroundColor: "transparent", // No explicit background for disabled state in summary
  color: "var(--state-disabled-texticon-default)",
};

const ReadMoreButtonComponent = ({
  children,
  size = "sm",
  isExpand = false,
  state = "enabled",
  fullWidth = false,
  className = "",
  style,
  ...props
}: ReadMoreButtonProps) => {
  const sizeConfig = sizeStyleMap[size];
  const stateConfig = getVariantStyle(state);

  const isDisabled = state === "disabled";

  const buttonBackgroundColor = isDisabled ? disabledStyle.backgroundColor : stateConfig.backgroundColor;
  const buttonTextColor = isDisabled ? disabledStyle.color : stateConfig.color;

  const iconName: IconName = isExpand ? "DirectionUpIcon" : "DirectionDownIcon";
  const iconColor = buttonTextColor;

  const buttonText = children ?? (isExpand ? "닫기" : "더보기");

  const buttonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: sizeConfig.height,
    paddingTop: sizeConfig.paddingY,
    paddingBottom: sizeConfig.paddingY,
    paddingLeft: sizeConfig.paddingX,
    paddingRight: sizeConfig.paddingX,
    gap: sizeConfig.gap,
    borderRadius: sizeConfig.borderRadius,
    backgroundColor: buttonBackgroundColor,
    color: buttonTextColor,
    cursor: isDisabled ? "not-allowed" : "pointer",
    width: fullWidth ? "100%" : "auto", // fullWidth handling
    flexShrink: 0, // Ensure button hugs its content when not fullWidth
    border: "none", // No border specified in the summary
    ...style,
  };

  return (
    <button
      className={`${className} read-more-button`}
      style={buttonStyle}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...props}
    >
      <span
        className={`${sizeConfig.typographyClass}`}
        style={{
          color: buttonTextColor,
          margin: 0, // Reset default margin from text styles
          whiteSpace: "nowrap", // As per Figma data: nowrap
        }}
      >
        {buttonText}
      </span>
      <div className="icon-slot" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
        <Icon name={iconName} size={sizeConfig.iconSize} color={iconColor} />
      </div>
    </button>
  );
};

const ReadMoreButton = memo(ReadMoreButtonComponent);
ReadMoreButton.displayName = "ReadMoreButton";
export { ReadMoreButton };