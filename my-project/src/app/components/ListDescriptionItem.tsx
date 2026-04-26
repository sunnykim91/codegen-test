import React, { memo, HTMLAttributes } from "react";

export type ListDescriptionItemVariants = "enabled" | "disabled";
export type ListDescriptionItemSize = "md" | "sm" | "xs";
export type ListDescriptionItemColor = "gray" | "grayTinted" | "primary";
export type ListDescriptionItemFontWeight = "bold" | "medium";

export interface ListDescriptionItemProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  variants?: ListDescriptionItemVariants;
  size?: ListDescriptionItemSize;
  color?: ListDescriptionItemColor;
  fontWeight?: ListDescriptionItemFontWeight;
}

const sizeConfigMap: Record<ListDescriptionItemSize, {
  height: number;
  typographySize: "xs" | "sm" | "md"; // Maps to Figma textStyle size e.g. Label/xs, Label/sm, Label/md
}> = {
  xs: { height: 20, typographySize: "xs" }, // Maps to 14px font
  sm: { height: 22, typographySize: "sm" }, // Maps to 15px font
  md: { height: 24, typographySize: "md" }, // Maps to 16px font
};

const colorMap: Record<ListDescriptionItemColor, string> = {
  gray: "var(--texticon-gray-default)",
  grayTinted: "var(--texticon-gray-subtle)",
  primary: "var(--texticon-primary-subtle2)",
};

const getTextStyleClass = (size: ListDescriptionItemSize, fontWeight: ListDescriptionItemFontWeight) => {
  const sizePrefix = sizeConfigMap[size].typographySize;
  return `text-style-notosanskr-label-${sizePrefix}-${fontWeight}`;
};

const getTextColor = (variants: ListDescriptionItemVariants, color: ListDescriptionItemColor) => {
  if (variants === "disabled") {
    return "var(--state-disabled-texticon-default)";
  }
  return colorMap[color];
};

const ListDescriptionItemComponent = ({
  title = "#description",
  variants = "enabled",
  size = "md",
  color = "gray",
  fontWeight = "bold",
  className = "",
  style,
  ...props
}: ListDescriptionItemProps) => {
  const resolvedTextColor = getTextColor(variants, color);
  const typographyClass = getTextStyleClass(size, fontWeight);
  const sizeConfig = sizeConfigMap[size];

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", // Default for HORIZONTAL with gap:0
    width: "100%", // horizontal=fill
    height: sizeConfig.height, // Fixed height from summary table
    // gap is 0, padding is 0, radius is 0
    ...style,
  };

  const titleTextStyle: React.CSSProperties = {
    color: resolvedTextColor,
    margin: 0, // Ensure no default margin from browser
    // text will naturally wrap unless white-space: nowrap is applied (not specified here)
  };

  return (
    <div
      className={`list-description-item ${className}`}
      style={containerStyle}
      role="listitem" // Provide semantic role if this is part of a list
      aria-disabled={variants === "disabled"}
      {...props}
    >
      <span className={`title-text ${typographyClass}`} style={titleTextStyle}>
        {title}
      </span>
    </div>
  );
};

const ListDescriptionItem = memo(ListDescriptionItemComponent);
ListDescriptionItem.displayName = "ListDescriptionItem";
export { ListDescriptionItem };