import React, { memo, ReactNode, HTMLAttributes, ReactElement, cloneElement, isValidElement } from "react";
import { Icon } from "./Icon"; // Assuming Icon component is available
import { CharacterCountItem } from "./_CharacterCount_Item"; // Import dependency

// 1. type/interface 정의
export type HelperTextItemVariants = "enabled" | "error" | "success" | "disabled";

export interface HelperTextItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Controls the visibility of the main helper text. Defaults to true.
   */
  showText?: boolean;
  /**
   * Controls the visibility of the character count. Defaults to true.
   */
  showCharacterCount?: boolean;
  /**
   * Controls the visibility of the icon. Defaults to true.
   */
  showIcon?: boolean;
  /**
   * The main helper text content. Defaults to "헬퍼 텍스트 입니다. 줄바꿈시 이렇게 바뀌어집니다. 감사합니다.".
   */
  text?: string;
  /**
   * The visual variant of the helper text, affecting color.
   */
  variants?: HelperTextItemVariants;
  /**
   * Optional icon to display at the start. Defaults to an info icon.
   * Can be an Icon component or any ReactElement.
   */
  icon?: ReactElement<{ size?: number; color?: string }>;
  /**
   * The character count string to display, e.g., "0/1000".
   * This is passed to the internal CharacterCountItem. Defaults to "0/1000".
   */
  characterCountText?: string;
}

// 4. getVariantStyle 함수 또는 variantStyleMap (Record)
const variantStyleMap: Record<HelperTextItemVariants, {
  textColor: string;
  backgroundColor: string;
  iconColor: string;
}> = {
  enabled: {
    textColor: "var(--texticon-gray-subtle2)",
    backgroundColor: "#FFFFFF",
    iconColor: "var(--texticon-gray-subtle2)",
  },
  error: {
    textColor: "var(--texticon-system-critical-subtle2)", // Figma: --texticon-system-error-subtle2, mapped to critical based on available tokens
    backgroundColor: "#FFFFFF",
    iconColor: "var(--texticon-system-critical-subtle2)",
  },
  disabled: {
    textColor: "var(--state-disabled-texticon-default)",
    backgroundColor: "#FFFFFF",
    iconColor: "var(--state-disabled-texticon-default)",
  },
  success: {
    textColor: "var(--texticon-system-success-subtle)",
    backgroundColor: "#FFFFFF",
    iconColor: "var(--texticon-system-success-subtle)",
  },
};

// Default icon for Instance Swap. Figma: InfoCricleLineIcon (mapped to 'info-line')
const DefaultInfoCircleIcon = memo(({ size, color }: { size?: number; color?: string }) => (
  <Icon name="info-line" size={size} color={color} />
));
DefaultInfoCircleIcon.displayName = "DefaultInfoCircleIcon";

// 6. {Name}Component (함수 컴포넌트)
const HelperTextItemComponent = ({
  showText = true,
  showCharacterCount = true,
  showIcon = true,
  text = "헬퍼 텍스트 입니다. 줄바꿈시 이렇게 바뀌어집니다. 감사합니다.",
  variants = "enabled",
  icon,
  characterCountText = "0/1000",
  className = "",
  style,
  ...props
}: HelperTextItemProps) => {
  const variantConfig = variantStyleMap[variants];

  const helperTextStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row", // layout: HORIZONTAL
    gap: "var(--spacing-4, 4px)",
    width: "100%", // horizontal=fill
    padding: "0 var(--spacing-2, 2px)", // pad: 0/var(--spacing-2, 2px)/0/var(--spacing-2, 2px)
    backgroundColor: variantConfig.backgroundColor,
    flexShrink: 0, // For vertical=hug to prevent shrinking
    ...style,
  };

  const renderIcon = (iconToRender: ReactNode) => {
    if (!showIcon) return null;
    if (isValidElement(iconToRender)) {
      return cloneElement(iconToRender as React.ReactElement<{ size?: number; color?: string }>, {
        size: 16, // Based on var(--square-16, 16px)
        color: variantConfig.iconColor,
      });
    }
    return <DefaultInfoCircleIcon size={16} color={variantConfig.iconColor} />;
  };

  return (
    <div
      className={`helper-text-item ${className}`}
      style={helperTextStyle}
      aria-live="polite" // Announce changes to screen readers
      {...props}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flex: 1, // horizontal=fill w:fill
          flexDirection: "row", // HORIZONTAL
          gap: "var(--spacing-2, 2px)",
          alignItems: "flex-start", // items=start
          // vertical=fill h:fill, so height is determined by content
        }}
      >
        {showIcon && (
          <div
            className="box"
            style={{
              display: "flex",
              alignItems: "center", // items=center
              height: "var(--height-container-detail-24, 24px)", // vertical=fixed h:var(--height-container-detail-24, 24px)
              paddingTop: "var(--spacing-2, 2px)", // pad=var(--spacing-2, 2px)/0/0/0 (top/right/bottom/left)
              flexShrink: 0, // horizontal=hug w:hug
            }}
          >
            {renderIcon(icon)}
          </div>
        )}
        {showText && (
          <span
            className="text text-style-notosanskr-caption-md-medium"
            style={{
              flex: 1, // horizontal=fixed w:222px is a canvas calculated width, should be flex: 1 to fill available space
              color: variantConfig.textColor,
              whiteSpace: "pre-line", // To preserve explicit line breaks in text
              margin: 0, // Reset default span margin
              minHeight: 48, // vertical=fixed h:48 (minHeight to allow wrapping)
            }}
          >
            {text}
          </span>
        )}
      </div>
      {showCharacterCount && (
        <CharacterCountItem
          className="character-count-item-wrapper"
          count={characterCountText}
          variants="enabled" // As per Figma data, CharacterCountItem is always 'enabled' here
          style={{
            flexShrink: 0, // horizontal=hug, vertical=hug for CharacterCountItem
            backgroundColor: "transparent", // Override Figma's default fill for transparency
            padding: 0, // Let CharacterCountItem manage its own padding
          }}
        />
      )}
    </div>
  );
};

// 7. memo + displayName + export
const HelperTextItem = memo(HelperTextItemComponent);
HelperTextItem.displayName = "HelperTextItem";
export { HelperTextItem };