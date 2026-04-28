import React, { memo, ReactNode, HTMLAttributes } from "react";
import { Divider } from "./Divider";

// Type/Interface Definitions
export interface ListWrapperProps extends HTMLAttributes<HTMLDivElement> {
  listItem?: ReactNode; // INSTANCE_SWAP
  showBottomDivider?: boolean; // BOOLEAN (default: true)
  disabledGutters?: boolean; // true | false
  dense?: boolean; // true | false
}

interface ListWrapperStyleConfig {
  minHeight: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingBottom: string;
  borderRadius: number;
  gap: number;
}

const getListWrapperStyle = (disabledGutters: boolean, dense: boolean): ListWrapperStyleConfig => {
  const config: ListWrapperStyleConfig = {
    minHeight: dense ? "76px" : "84px", // From summary table 'height' based on 'dense'
    paddingTop: dense ? "var(--spacing-16, 16px)" : "var(--spacing-20, 20px)", // From summary table 'padY' based on 'dense'
    paddingBottom: dense ? "var(--spacing-16, 16px)" : "var(--spacing-20, 20px)", // From summary table 'padY' based on 'dense'
    paddingLeft: disabledGutters ? "0px" : "var(--spacing-global-side, 20px)", // From summary table 'padX' based on 'disabledGutters'
    paddingRight: disabledGutters ? "0px" : "var(--spacing-global-side, 20px)", // From summary table 'padX' based on 'disabledGutters'
    borderRadius: 0, // From summary table
    gap: 0, // From summary table
  };
  return config;
};

// Component Definition
const ListWrapperComponent = ({
  listItem,
  showBottomDivider = true,
  disabledGutters = false,
  dense = false,
  className = "",
  style,
  ...props
}: ListWrapperProps) => {
  const config = getListWrapperStyle(disabledGutters, dense);

  const wrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100%", // Sizing: horizontal=fill(fill)
    height: "auto", // Sizing: vertical=hug(hug)
    minHeight: config.minHeight, // Apply minimum height from config
    gap: config.gap,
    paddingTop: config.paddingTop,
    paddingBottom: config.paddingBottom,
    paddingLeft: config.paddingLeft,
    paddingRight: config.paddingRight,
    borderRadius: config.borderRadius,
    backgroundColor: "transparent", // bg: -
    position: "relative", // Required for absolutely positioned child Divider
    boxSizing: "border-box", // Include padding in component's total width and height
    ...style,
  };

  const dividerStyle: React.CSSProperties = {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  };

  return (
    <div className={`list-wrapper ${className}`} style={wrapperStyle} {...props}>
      {/* listItem is an INSTANCE_SWAP. It is assumed to handle its own width: "100%" as it's a fill item. */}
      {listItem ?? null}
      {showBottomDivider && (
        <Divider
          className="divider"
          color="strong" // Figma data: colro=strong (typo fixed)
          weight="thin"
          direction="horizontal"
          style={dividerStyle}
        />
      )}
    </div>
  );
};

const ListWrapper = memo(ListWrapperComponent);
ListWrapper.displayName = "ListWrapper";
export { ListWrapper };