import React, { memo, HTMLAttributes } from "react";

export type DividerColor = "subtle" | "strong";
export type DividerWeight = "thin" | "bold";
export type DividerDirection = "horizontal" | "vertical";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  color?: DividerColor;
  weight?: DividerWeight;
  direction?: DividerDirection;
}

const colorStyleMap: Record<DividerColor, string> = {
  subtle: "var(--divider-subtle)",
  strong: "var(--divider-strong)",
};

const weightStyleMap: Record<DividerWeight, number | string> = {
  thin: 1,
  bold: "var(--width-container-detail-16, 16px)",
};

const DividerComponent = ({
  color = "subtle",
  weight = "thin",
  direction = "horizontal",
  className = "",
  style,
  ...props
}: DividerProps) => {
  const backgroundColor = colorStyleMap[color];
  const lineSize = weightStyleMap[weight];

  const lineStyle: React.CSSProperties = {
    backgroundColor,
    ...(direction === "horizontal"
      ? {
          width: "100%",
          height: lineSize,
        }
      : {
          width: lineSize,
          height: "100%",
          flex: 1,
        }),
  };

  return <div className={`line ${className}`} style={lineStyle} {...props} />;
};

const Divider = memo(DividerComponent);
Divider.displayName = "Divider";
export { Divider };
