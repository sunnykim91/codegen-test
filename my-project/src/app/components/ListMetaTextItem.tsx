import React, { memo, HTMLAttributes, ReactNode } from "react";
import { Divider, DividerColor, DividerDirection, DividerWeight } from "./Divider";

// 1. Type/Interface Definitions
export type ListMetaTextItemVariants = "enabled" | "disabled";
export type ListMetaTextItemLayout = "vertical" | "horizontal";

export interface ListMetaTextItemProps extends HTMLAttributes<HTMLDivElement> {
  label01?: ReactNode;
  label02?: ReactNode;
  label03?: ReactNode;
  showContainer02?: boolean;
  showContainer03?: boolean;
  variants?: ListMetaTextItemVariants;
  layout?: ListMetaTextItemLayout;
}

// 2. Style Logic
const getCombinedStyle = (
  variants: ListMetaTextItemVariants,
  layout: ListMetaTextItemLayout
) => {
  const isEnabled = variants === "enabled";
  const isHorizontal = layout === "horizontal";

  const textColor = isEnabled
    ? "var(--texticon-gray-subtle2)"
    : "var(--state-disabled-texticon-default)";
  const gap = "var(--spacing-6, 6px)"; // Consistent across all variants/layouts in summary table

  // Sizing based on "horizontal=fill(fill)×vertical=hug(hug)" for horizontal and vice-versa for vertical.
  const mainContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: isHorizontal ? "row" : "column",
    gap: gap,
    width: isHorizontal ? "100%" : "auto", // Fill width for horizontal, Hug for vertical
    height: isHorizontal ? "auto" : "100%", // Hug height for horizontal, Fill for vertical
  };

  const textStyleClass = "text-style-notosanskr-label-14-medium"; // Consistent for all text nodes

  const containerInnerGap = isHorizontal ? "var(--spacing-4, 4px)" : 0;

  // Divider props for horizontal layout (only rendered in horizontal layout)
  const dividerProps = {
    color: "strong" as DividerColor,
    weight: "thin" as DividerWeight,
    direction: "vertical" as DividerDirection,
    style: { height: "var(--component-list-height-metadivder, 14px)" }, // Fixed height from Figma raw data
  };

  return {
    mainContainerStyle,
    textColor,
    textStyleClass,
    containerInnerGap,
    dividerProps,
  };
};

// 3. Component Definition
const ListMetaTextItemComponent = ({
  label01 = "#meta",
  label02 = "#meta",
  label03 = "#meta",
  showContainer02 = true,
  showContainer03 = true,
  variants = "enabled",
  layout = "horizontal",
  className = "",
  style,
  ...props
}: ListMetaTextItemProps) => {
  const {
    mainContainerStyle,
    textColor,
    textStyleClass,
    containerInnerGap,
    dividerProps,
  } = getCombinedStyle(variants, layout);

  const isHorizontal = layout === "horizontal";

  return (
    <div
      className={`list-meta-text-item ${className}`}
      style={{
        ...mainContainerStyle,
        ...style,
      }}
      {...props}
    >
      {/* Container01 */}
      <div
        className="container01"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: containerInnerGap,
          alignItems: "center",
          width: "auto", // hug
          height: "auto", // hug
          flexShrink: 0,
        }}
      >
        <span
          className={textStyleClass}
          style={{
            color: textColor,
            whiteSpace: "nowrap", // nowrap from Figma
            margin: 0,
          }}
        >
          {label01}
        </span>
      </div>

      {/* Container02 */}
      {showContainer02 && (
        <div
          className="container02"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: containerInnerGap,
            alignItems: "center",
            width: "auto", // hug
            height: "auto", // hug
            flexShrink: 0,
          }}
        >
          {isHorizontal && (
            // Divider is only present in horizontal layout
            <div
              className="divider-wrapper" // Semantic class for the wrapper around Divider
              style={{
                display: "flex",
                flexDirection: "column", // Divider's container itself is vertical flex with gap 0
                gap: 0,
                alignItems: "center",
                overflow: "hidden",
                width: "auto", // hug
                height: "var(--component-list-height-metadivder, 14px)", // fixed height
                flexShrink: 0,
              }}
            >
              <Divider {...dividerProps} className="line" />
            </div>
          )}
          <span
            className={textStyleClass}
            style={{
              color: textColor,
              whiteSpace: "nowrap", // nowrap from Figma
              margin: 0,
            }}
          >
            {label02}
          </span>
        </div>
      )}

      {/* Container03 */}
      {showContainer03 && (
        <div
          className="container03"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: containerInnerGap,
            alignItems: "center",
            width: "auto", // hug
            height: "auto", // hug
            flexShrink: 0,
          }}
        >
          {isHorizontal && (
            // Divider is only present in horizontal layout
            <div
              className="divider-wrapper" // Semantic class for the wrapper around Divider
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                alignItems: "center",
                overflow: "hidden",
                width: "auto", // hug
                height: "var(--component-list-height-metadivder, 14px)", // fixed height
                flexShrink: 0,
              }}
            >
              <Divider {...dividerProps} className="line" />
            </div>
          )}
          <span
            className={textStyleClass}
            style={{
              color: textColor,
              whiteSpace: "nowrap", // nowrap from Figma
              margin: 0,
            }}
          >
            {label03}
          </span>
        </div>
      )}
    </div>
  );
};

// 4. Memoization and Export
const ListMetaTextItem = memo(ListMetaTextItemComponent);
ListMetaTextItem.displayName = "ListMetaTextItem";
export { ListMetaTextItem };