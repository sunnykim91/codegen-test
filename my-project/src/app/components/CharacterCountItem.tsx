import React, { memo, HTMLAttributes } from "react";

// 1. type/interface 정의
export type CharacterCountItemVariants = "enabled" | "error" | "disabled";

export interface CharacterCountItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The character count string to display, e.g., "0/1000".
   * Defaults to "0/1000".
   */
  count?: string;
  /**
   * The visual variant of the character count item.
   * "enabled" for normal display, "error" for error state, "disabled" for disabled state.
   */
  variants?: CharacterCountItemVariants;
}

// 4. getVariantStyle 함수 또는 variantStyleMap (Record)
const variantStyleMap: Record<CharacterCountItemVariants, {
  color: string;
  typographyClass: string;
}> = {
  enabled: {
    color: "var(--texticon-gray-subtle2)",
    typographyClass: "text-style-notosanskr-caption-md-medium",
  },
  error: {
    color: "var(--texticon-system-critical-subtle2)", // Using critical as error-subtle2 not in token list
    typographyClass: "text-style-notosanskr-caption-md-medium",
  },
  disabled: {
    color: "var(--state-disabled-texticon-default)",
    typographyClass: "text-style-notosanskr-caption-md-medium",
  },
};

// 6. {Name}Component (함수 컴포넌트)
const CharacterCountItemComponent = ({
  count = "0/1000",
  variants = "enabled",
  className = "",
  style,
  ...props
}: CharacterCountItemProps) => {
  const variantConfig = variantStyleMap[variants];

  const containerStyle: React.CSSProperties = {
    display: "inline-flex", // horizontal=hug, vertical=hug, so inline-flex to fit content
    flexDirection: "column", // layout: VERTICAL, gap: 0
    alignItems: "flex-start", // For text alignment within the column
    height: 24, // From variants 축 스타일 요약표
    backgroundColor: "var(--container-gray-white)", // Background from summary table (common for all variants)
    flexShrink: 0, // For hug sizing to prevent shrinking
    ...style,
  };

  return (
    <div
      className={`character-count-item ${className}`} // Semantic class for the component + user provided
      style={containerStyle}
      {...props}
    >
      <span
        className={variantConfig.typographyClass}
        style={{
          color: variantConfig.color,
          whiteSpace: "nowrap", // From TEXT node property
          margin: 0, // Reset default span margin
        }}
      >
        {count}
      </span>
    </div>
  );
};

// 7. memo + displayName + export
const CharacterCountItem = memo(CharacterCountItemComponent);
CharacterCountItem.displayName = "CharacterCountItem";
export { CharacterCountItem };