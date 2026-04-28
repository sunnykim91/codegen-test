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
  typographySizePrefix: "xs" | "sm" | "md"; // Maps to Figma textStyle size e.g. Label/xs, Label/sm, Label/md
}> = {
  xs: { height: 20, typographySizePrefix: "xs" },
  sm: { height: 22, typographySizePrefix: "sm" },
  md: { height: 24, typographySizePrefix: "md" },
};

const colorMap: Record<ListDescriptionItemColor, string> = {
  gray: "var(--texticon-gray-default)",
  grayTinted: "var(--texticon-gray-subtle)",
  primary: "var(--texticon-primary-subtle2)",
};

const getTextColor = (variants: ListDescriptionItemVariants, color: ListDescriptionItemColor): string => {
  if (variants === "disabled") {
    return "var(--state-disabled-texticon-default)";
  }
  return colorMap[color];
};

const getTextStyleClass = (size: ListDescriptionItemSize, fontWeight: ListDescriptionItemFontWeight): string => {
  const sizePrefix = sizeConfigMap[size].typographySizePrefix;
  // textStyle format from Figma: NotoSansKR/Label/xs-bold -> text-style-notosanskr-label-xs-bold
  return `text-style-notosanskr-label-${sizePrefix}-${fontWeight}`;
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
    justifyContent: "flex-start", // For HORIZONTAL with gap: 0
    width: "100%", // horizontal=fill
    height: sizeConfig.height, // Fixed height from summary table
    // padding, gap, radius are 0 from summary table
    ...style,
  };

  const titleTextStyle: React.CSSProperties = {
    color: resolvedTextColor,
    margin: 0, // Ensure no default margin from browser
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