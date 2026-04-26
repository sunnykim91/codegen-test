import React, { memo, HTMLAttributes } from "react";

// 1. Type/Interface Definitions
export type DividerColor = "subtle" | "strong";
export type DividerWeight = "thin" | "bold";
export type DividerDirection = "horizontal" | "vertical";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  color?: DividerColor;
  weight?: DividerWeight;
  direction?: DividerDirection;
}

// 2. Style Logic
const getDividerStyle = (
  color: DividerColor,
  weight: DividerWeight,
  direction: DividerDirection
): React.CSSProperties => {
  const backgroundColor = `var(--divider-${color})`;
  // As per "Divider 컴포넌트 규칙": 1px for thin, 16px for bold
  const thickness = weight === "thin" ? 1 : 16;

  if (direction === "horizontal") {
    return {
      width: "100%", // Fill parent horizontally as per rules
      height: thickness,
      backgroundColor,
      flexShrink: 0, // Ensure it doesn't shrink in a flex container
    };
  } else { // vertical
    return {
      width: thickness,
      height: "100%", // Fill parent vertically as per rules
      backgroundColor,
      flexShrink: 0, // Ensure it doesn't shrink in a flex container
    };
  }
};

// 3. Component Definition
const DividerComponent = ({
  color = "subtle",
  weight = "thin",
  direction = "horizontal",
  className = "",
  style,
  ...props
}: DividerProps) => {
  const dividerStyle = getDividerStyle(color, weight, direction);

  const role = "separator";
  const ariaOrientation = direction;

  return (
    <div
      role={role}
      aria-orientation={ariaOrientation}
      className={`divider ${className}`}
      style={{
        ...dividerStyle,
        ...style,
      }}
      {...props}
    />
  );
};

// 4. Memoization and Export
const Divider = memo(DividerComponent);
Divider.displayName = "Divider";
export { Divider };