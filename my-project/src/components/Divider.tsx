import React, { memo, HTMLAttributes } from "react";

export type DividerColro = "subtle" | "strong";
export type DividerWeight = "thin" | "bold";
export type DividerDirection = "horizontal" | "vertical";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  colro?: DividerColro;
  weight?: DividerWeight;
  direction?: DividerDirection;
}

const getVariantStyle = (colro: DividerColro, weight: DividerWeight, direction: DividerDirection) => {
  const isHorizontal = direction === "horizontal";
  const isBold = weight === "bold";
  
  const colorMap = {
    subtle: "var(--stroke-gray-default)",
    strong: "var(--stroke-gray-strong)"
  };

  const baseStyle = {
    backgroundColor: colorMap[colro],
    border: "none",
  };

  if (isHorizontal) {
    return {
      ...baseStyle,
      width: 120,
      height: isBold ? "var(--height-container-detail-16, 16px)" : 1,
    };
  } else {
    return {
      ...baseStyle,
      width: isBold ? "var(--width-container-detail-16, 16px)" : 1,
      height: 120,
    };
  }
};

const DividerComponent = ({
  colro = "subtle",
  weight = "thin",
  direction = "horizontal",
  className = "",
  style,
  ...props
}: DividerProps) => {
  const variantStyle = getVariantStyle(colro, weight, direction);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    padding: 0,
    borderRadius: 0,
    ...style,
  };

  const lineStyle: React.CSSProperties = {
    ...variantStyle,
  };

  return (
    <div className={className} style={containerStyle} {...props}>
      <div className="line" style={lineStyle} />
    </div>
  );
};

const Divider = memo(DividerComponent);
Divider.displayName = "Divider";
export { Divider };