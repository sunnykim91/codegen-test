import React, { memo, HTMLAttributes } from "react";

// 1. type/interface 정의
export type NoticeBadgeVariants = "number" | "dot";

export interface NoticeBadgeProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Whether to show the '+' icon for number variant.
   * @default true
   */
  showPlusIcon?: boolean;
  /**
   * The number label text for the number variant.
   * @default "99"
   */
  badgeLabel?: string;
  /**
   * The visual style variant of the badge.
   * @default "number"
   */
  variants?: NoticeBadgeVariants;
}

// 2. getVariantStyle 함수 (Record 패턴 대신 함수로 구현)
const getVariantStyle = (
  variants: NoticeBadgeVariants,
  badgeLabel: string,
  showPlusIcon: boolean,
) => {
  if (variants === "number") {
    // Styles for variants="number" from the table
    const baseStyle: React.CSSProperties = {
      height: "var(--component-badge-height-sm, 18px)",
      paddingLeft: "var(--spacing-4, 4px)",
      paddingRight: "var(--spacing-4, 4px)",
      paddingTop: "0px", // From table padY: 0px
      paddingBottom: "0px", // From table padY: 0px
      gap: 0,
      borderRadius: "var(--borderradius-full, 9999px)",
      backgroundColor: "var(--container-system-error-default)",
      color: "var(--texticon-static-white)",
      display: "inline-flex", // For layout, vertical centering of text, and content-hugging
      alignItems: "center", // For vertical centering of text children
      flexShrink: 0, // Hug-content: prevents shrinking
    };

    const textStyleClass = "text-style-notosanskr-label-xs-bold";
    const textChildren = (
      <>
        <span className={textStyleClass} style={{ color: "inherit", margin: 0, whiteSpace: "nowrap" }}>
          {badgeLabel}
        </span>
        {showPlusIcon && (
          <span className={textStyleClass} style={{ color: "inherit", margin: 0, whiteSpace: "nowrap" }}>
            +
          </span>
        )}
      </>
    );

    return {
      containerStyle: baseStyle,
      children: textChildren,
    };
  } else { // variants === "dot"
    // Styles for variants="dot" from the table
    const squareSize = "var(--component-badge-square-noticebadgedot, 5px)";
    const baseStyle: React.CSSProperties = {
      width: squareSize,
      height: squareSize,
      padding: 0,
      gap: 0,
      borderRadius: "var(--borderradius-full, 9999px)",
      backgroundColor: "var(--texticon-system-error-subtle2)",
      display: "inline-block", // Sufficient for a simple dot
      flexShrink: 0, // Fixed size: prevents shrinking
    };
    return {
      containerStyle: baseStyle,
      children: null,
    };
  }
};

// 3. {Name}Component (함수 컴포넌트)
const NoticeBadgeComponent = ({
  showPlusIcon = true,
  badgeLabel = "99",
  variants = "number",
  className = "",
  style,
  ...props
}: NoticeBadgeProps) => {
  const { containerStyle, children } = getVariantStyle(variants, badgeLabel, showPlusIcon);

  return (
    <div
      className={`notice-badge ${className}`}
      style={{
        ...containerStyle,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// 4. memo + displayName + export
const NoticeBadge = memo(NoticeBadgeComponent);
NoticeBadge.displayName = "NoticeBadge";

export { NoticeBadge };