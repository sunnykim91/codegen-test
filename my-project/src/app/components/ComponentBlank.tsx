import React, { memo, ReactNode, HTMLAttributes } from "react";

// 1. type/interface 정의
export type ComponentBlankVariants = "customSlot" | "instanceSwap";

export interface ComponentBlankProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode; // Figma property "🔲slot" maps to children
  variants?: ComponentBlankVariants;
}

// 4. variantStyleMap (Record)
const variantStyleMap: Record<
  ComponentBlankVariants,
  {
    backgroundColor: string;
    border: string;
    textColor: string;
  }
> = {
  customSlot: {
    backgroundColor: "transparent",
    border: "none",
    textColor: "inherit", // Will inherit from parent or default
  },
  instanceSwap: {
    backgroundColor: "#9747FF",
    border: "1px solid #9747FF", // Figma stroke color is #9747FF
    textColor: "#9747FF", // Figma foreground color is #9747FF
  },
};

// 6. {Name}Component (함수 컴포넌트)
const ComponentBlankComponent = ({
  children,
  variants = "customSlot",
  className = "",
  style,
  ...props
}: ComponentBlankProps) => {
  const variantConfig = variantStyleMap[variants];

  const rootStyle: React.CSSProperties = {
    display: "flex",
    // flexDirection is handled by inner divs based on variant
    // alignItems is handled by inner divs based on variant
    width: "100%", // horizontal=fill
    height: 44, // from summary table
    padding: 0, // from summary table
    gap: 0, // from summary table
    borderRadius: 0, // from summary table
    overflow: "hidden", // General practice for containers
    backgroundColor: variantConfig.backgroundColor,
    border: variantConfig.border,
    ...style,
  };

  return (
    <div className={`component-blank ${className}`} style={rootStyle} {...props}>
      {variants === "customSlot" && (
        // [SLOT] "🔲slot" [VERTICAL, gap=0] (horizontal=fixed, vertical=fixed)
        <div
          className="slot-wrapper"
          style={{
            display: "flex",
            flexDirection: "column", // VERTICAL
            gap: 0,
            width: "100%", // Slot container fills parent horizontally
            height: "100%", // Slot container fills parent vertically
          }}
        >
          {children}
        </div>
      )}
      {variants === "instanceSwap" && (
        // ├── container [FRAME] (horizontal=hug w:hug, vertical=hug h:hug) [HORIZONTAL, gap=0 items=center] pad=12/24/12/24
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "row", // HORIZONTAL
            gap: 0,
            alignItems: "center", // items=center
            padding: "12px 24px", // pad=12/24/12/24
            width: "100%", // Fills horizontal space within the root
            height: "100%", // Fills vertical space within the root
            flexShrink: 0, // Prevents shrinking, allows content to dictate minimum size
          }}
        >
          {/* ├── Instance Swap Item [TEXT] (horizontal=fixed w:130, vertical=fixed h:20) text="Instance Swap Item" font=14px textStyle="NotoSansKR/Label/xs-medium" nowrap */}
          <span
            className="instance-swap-item text-style-notosanskr-label-14-medium"
            style={{
              color: variantConfig.textColor,
              whiteSpace: "nowrap", // nowrap
              margin: 0, // Remove default margin from span
              width: 130, // Fixed width as per Figma w:130
              // height: 20 is a derived value from typography, not an explicit CSS property for text spans.
            }}
          >
            Instance Swap Item
          </span>
        </div>
      )}
    </div>
  );
};

// 7. memo + displayName + export
const ComponentBlank = memo(ComponentBlankComponent);
ComponentBlank.displayName = "ComponentBlank";
export { ComponentBlank };