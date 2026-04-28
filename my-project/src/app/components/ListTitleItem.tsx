import React, { memo, HTMLAttributes } from "react";

// 1. Type Definitions
export type ListTitleItemVariants = "enabled" | "disabled";
export type ListTitleItemSize = "lg" | "md" | "sm" | "xs";
export type ListTitleItemColor = "gray" | "grayTinted" | "primary";
export type ListTitleItemFontWeight = "bold" | "medium";

export interface ListTitleItemProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  variants?: ListTitleItemVariants;
  size?: ListTitleItemSize;
  color?: ListTitleItemColor;
  fontWeight?: ListTitleItemFontWeight;
}

// 2. Helper Mappings
const sizeToTypographyPrefixMap: Record<ListTitleItemSize, string> = {
  lg: "lg",
  md: "md",
  sm: "sm",
  xs: "xs",
};

// 3. getTextColor function
const getTextColor = (
  variants: ListTitleItemVariants,
  color: ListTitleItemColor
): string => {
  if (variants === "disabled") {
    return "var(--state-disabled-texticon-default)";
  }
  switch (color) {
    case "gray":
      return "var(--texticon-gray-default)";
    case "grayTinted":
      return "var(--texticon-gray-subtle)";
    case "primary":
      return "var(--texticon-primary-subtle2)";
    default:
      // Fallback, though ideally all combinations are covered by prop defaults or design system
      return "var(--texticon-gray-default)";
  }
};

// 4. ListTitleItemComponent (Function Component)
const ListTitleItemComponent = ({
  title = "#title", // Default value from Figma prop
  variants = "enabled",
  size = "lg",
  color = "gray",
  fontWeight = "bold",
  className = "",
  style,
  ...props
}: ListTitleItemProps) => {
  const textColor = getTextColor(variants, color);
  const typographyClass = `text-style-notosanskr-label-${sizeToTypographyPrefixMap[size]}-${fontWeight}`;

  // The outer container styles as per "layout: HORIZONTAL, gap: 0 | size: horizontal=fill(fill)×vertical=hug(hug) | pad: 0/0/0/0"
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row", // HORIZONTAL
    alignItems: "center", // Default alignment for text in a row to center vertically
    gap: 0,
    padding: 0,
    width: "100%", // horizontal=fill
    // vertical=hug implies height is determined by content, so no fixed height on container.
    // The textStyleClass applied to the span will control its line-height,
    // which then dictates the overall height of this hug container.
    ...style,
  };

  return (
    <div className={`list-title-item ${className}`} style={containerStyle} {...props}>
      <span className={`title-text ${typographyClass}`} style={{ color: textColor, margin: 0 }}>
        {title}
      </span>
    </div>
  );
};

// 5. Memoization and Export
const ListTitleItem = memo(ListTitleItemComponent);
ListTitleItem.displayName = "ListTitleItem";
export { ListTitleItem };