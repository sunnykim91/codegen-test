import React, { memo, HTMLAttributes, ReactNode } from "react";
import { Icon } from "./Icon";
import {
  CharacterCountItem,
  CharacterCountItemVariants,
} from "./CharacterCountItem";

export type HelperTextItemVariants =
  | "enabled"
  | "error"
  | "success"
  | "disabled";

export interface HelperTextItemProps extends HTMLAttributes<HTMLDivElement> {
  showText?: boolean;
  startIcon?: ReactNode;
  showIcon?: boolean;
  text?: string;
  showCharacterCount?: boolean;
  characterCountText?: string;
  variants?: HelperTextItemVariants;
}

const variantStyleMap: Record<
  HelperTextItemVariants,
  {
    textColor: string;
    iconColor: string;
    backgroundColor: string;
    typographyClass: string;
  }
> = {
  enabled: {
    textColor: "var(--texticon-gray-subtle2)",
    iconColor: "var(--texticon-gray-subtle2)",
    backgroundColor: "#FFFFFF",
    typographyClass: "text-style-notosanskr-caption-md-medium",
  },
  error: {
    textColor: "var(--texticon-system-error-subtle2)",
    iconColor: "var(--texticon-system-error-subtle2)",
    backgroundColor: "#FFFFFF",
    typographyClass: "text-style-notosanskr-caption-md-medium",
  },
  disabled: {
    textColor: "var(--state-disabled-texticon-default)",
    iconColor: "var(--state-disabled-texticon-default)",
    backgroundColor: "#FFFFFF",
    typographyClass: "text-style-notosanskr-caption-md-medium",
  },
  success: {
    textColor: "var(--texticon-system-success-subtle)",
    iconColor: "var(--texticon-system-success-subtle)",
    backgroundColor: "#FFFFFF",
    typographyClass: "text-style-notosanskr-caption-md-medium",
  },
};

const HelperTextItemComponent = ({
  showText = true,
  startIcon,
  showIcon = true,
  text = "헬퍼 텍스트 입니다. 줄바꿈시 이렇게 바뀌어집니다. 감사합니다.",
  showCharacterCount = true,
  characterCountText = "0/1000",
  variants = "enabled",
  className = "",
  style,
  ...props
}: HelperTextItemProps) => {
  const variantConfig = variantStyleMap[variants];

  const rootStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "var(--spacing-4, 4px)",
    alignItems: "flex-start",
    width: "100%", // horizontal=fill
    height: "auto", // vertical=hug
    padding: "0 var(--spacing-2, 2px)", // pad: 0/var(--spacing-2, 2px)/0/var(--spacing-2, 2px)
    borderRadius: 0,
    backgroundColor: variantConfig.backgroundColor,
    ...style,
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "var(--spacing-2, 2px)",
    alignItems: "flex-start",
    flex: 1, // horizontal=fill, vertical=fill
  };

  const boxStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 0,
    alignItems: "center",
    height: "var(--height-container-detail-24, 24px)", // vertical=fixed
    padding: "var(--spacing-2, 2px) 0 0 0", // pad=var(--spacing-2, 2px)/0/0/0
    flexShrink: 0, // horizontal=hug
  };

  const iconComponent = startIcon || (
    <Icon name="infocirclelineicon" size={16} color={variantConfig.iconColor} />
  );

  return (
    <div
      className={`helper-text-item ${className}`}
      style={rootStyle}
      {...props}
    >
      <div className="container" style={containerStyle}>
        {showIcon && (
          <div className="box" style={boxStyle}>
            {iconComponent}
          </div>
        )}
        {showText && (
          <span
            className={variantConfig.typographyClass}
            style={{
              color: variantConfig.textColor,
              margin: 0,
              flex: 1, // to allow text to fill remaining space
              whiteSpace: "pre-line", // For multiline text as per Figma data
            }}
          >
            {text}
          </span>
        )}
      </div>
      {showCharacterCount && (
        <CharacterCountItem
          className="character-count-item"
          count={characterCountText}
          variants={"enabled" as CharacterCountItemVariants} // As specified in Figma data: props={variants=enabled}
          style={{ flexShrink: 0 }} // horizontal=hug, vertical=hug for CharacterCountItem
        />
      )}
    </div>
  );
};

const HelperTextItem = memo(HelperTextItemComponent);
HelperTextItem.displayName = "HelperTextItem";
export { HelperTextItem };
