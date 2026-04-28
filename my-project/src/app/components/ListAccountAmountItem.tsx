import React, { memo } from "react";

export type ListAccountAmountItemVariants = "enabled" | "disabled";
export type ListAccountAmountItemSize = "lg" | "md" | "3xl" | "xl";
export type ListAccountAmountItemFontWeight = "bold" | "medium";

export interface ListAccountAmountItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  amount?: string;
  variants?: ListAccountAmountItemVariants;
  size?: ListAccountAmountItemSize;
  fontWeight?: ListAccountAmountItemFontWeight;
}

const sizeStyleMap: Record<ListAccountAmountItemSize, Record<ListAccountAmountItemFontWeight, {
  height: number;
  typography: string;
}>> = {
  lg: {
    bold: { height: 26, typography: "text-style-notosanskr-label-lg-bold" },
    medium: { height: 26, typography: "text-style-notosanskr-label-lg-medium" },
  },
  md: {
    bold: { height: 24, typography: "text-style-notosanskr-label-md-bold" },
    medium: { height: 24, typography: "text-style-notosanskr-label-md-medium" },
  },
  "3xl": {
    bold: { height: 40, typography: "text-style-notosanskr-label-3xl-bold" },
    medium: { height: 40, typography: "text-style-notosanskr-label-3xl-medium" },
  },
  xl: {
    bold: { height: 30, typography: "text-style-notosanskr-label-xl-bold" },
    medium: { height: 30, typography: "text-style-notosanskr-label-xl-medium" },
  },
};

const variantStyleMap: Record<ListAccountAmountItemVariants, {
  textColor: string;
}> = {
  enabled: {
    textColor: "var(--texticon-gray-default)",
  },
  disabled: {
    textColor: "var(--state-disabled-texticon-default)",
  },
};

const ListAccountAmountItemComponent = ({
  amount = "#Amount",
  variants = "enabled",
  size = "lg",
  fontWeight = "bold",
  className = "",
  style,
  ...props
}: ListAccountAmountItemProps) => {
  const sizeConfig = sizeStyleMap[size][fontWeight];
  const variantConfig = variantStyleMap[variants];

  const itemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 0,
    width: "100%", // horizontal=fill
    height: sizeConfig.height, // explicit height from size축 요약표
    ...style,
  };

  const textStyle: React.CSSProperties = {
    color: variantConfig.textColor,
    margin: 0,
    whiteSpace: "nowrap", // nowrap from spec
    overflow: "hidden", // truncate=ellipsis
    textOverflow: "ellipsis", // truncate=ellipsis
    flex: 1, // To allow truncation and fill available space
  };

  return (
    <div className={`list-account-amount-item ${className}`} style={itemStyle} {...props}>
      <span className={sizeConfig.typography} style={textStyle}>
        {amount}
      </span>
    </div>
  );
};

const ListAccountAmountItem = memo(ListAccountAmountItemComponent);
ListAccountAmountItem.displayName = "ListAccountAmountItem";
export { ListAccountAmountItem };