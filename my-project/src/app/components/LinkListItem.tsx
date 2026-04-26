import React, { memo, ReactNode, HTMLAttributes } from "react";
import { Icon } from "./Icon";
import { ListLeftItem } from "./ListLeftItem";
import { ListTitleItem } from "./ListTitleItem";
import { ListDescriptionItem } from "./ListDescriptionItem";

// 1. Type Definitions
export type LinkListItemVariants = "enabled" | "disabled";

export interface LinkListItemProps extends HTMLAttributes<HTMLDivElement> {
  // Figma variant properties
  showStartItem?: boolean;
  showUnderDesc?: boolean;
  showEndItem?: boolean;
  showDesc?: boolean;
  variants?: LinkListItemVariants;

  // Content props for internal components
  title: string;
  description?: string; // For ListDescriptionItem in TitleContainer
  underDescription?: string; // For ListDescriptionItem outside TitleContainer

  // Slot props for custom ReactNodes
  startSlot?: ReactNode; // Replaces ListLeftItem
  endSlot?: ReactNode; // Replaces DirectionRightIcon

  // Standard interactive component prop
  fullWidth?: boolean;
  onClick?: () => void;
}

// 2. Helper Mappings (from summary table)
const variantStyleMap: Record<LinkListItemVariants, {
  height: string; // Use string for px and var()
  gap: string;
  fg: string; // Foreground color for main LinkListItem and its default icon
}> = {
  enabled: {
    height: "46px",
    gap: "var(--spacing-12, 12px)",
    fg: "var(--texticon-gray-default)",
  },
  disabled: {
    height: "46px",
    gap: "var(--spacing-12, 12px)",
    fg: "var(--state-disabled-texticon-default)",
  },
};

// 6. LinkListItemComponent (Function Component)
const LinkListItemComponent = ({
  showStartItem = true, // Default from Figma property
  showUnderDesc = true, // Default from Figma property
  showEndItem = true,   // Default from Figma property
  showDesc = true,      // Default from Figma property
  variants = "enabled",
  title,
  description,
  underDescription,
  startSlot,
  endSlot,
  fullWidth = false, // Standard for interactive components
  onClick,
  className = "",
  style,
  ...props
}: LinkListItemProps) => {
  const config = variantStyleMap[variants];
  const isDisabled = variants === "disabled";

  const itemStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row", // HORIZONTAL
    alignItems: "center", // items=center for main container
    gap: config.gap,
    padding: 0, // pad: 0/0/0/0 from summary table
    borderRadius: 0, // radius: 0 from summary table
    height: config.height, // Explicit height from summary table
    width: fullWidth ? "100%" : "auto", // Applies standard fullWidth behavior for interactive components
    backgroundColor: "transparent", // No specific background for LinkListItem from summary table
    color: config.fg, // Foreground color for items not specifically colored (e.g., default icons)
    cursor: isDisabled ? "not-allowed" : (onClick ? "pointer" : "default"),
    whiteSpace: "nowrap", // Prevent unexpected wrapping of the entire list item
    ...style,
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  const centerContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column", // VERTICAL
    alignItems: "flex-start", // items=start from Figma tree
    gap: "var(--spacing-2, 2px)", // gap: var(--spacing-2, 2px) from Figma tree
    flex: 1, // horizontal=fill from Figma tree
  };

  const titleContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row", // HORIZONTAL from Figma tree
    alignItems: "center", // items=center from Figma tree
    gap: "var(--spacing-4, 4px)", // gap: var(--spacing-4, 4px) from Figma tree
    flexWrap: "wrap", // wrap from Figma tree
    width: "100%", // horizontal=fill from Figma tree (inside CenterContainer)
  };

  const endContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center", // items=center from Figma tree
    gap: "var(--spacing-4, 4px)", // gap: var(--spacing-4, 4px) from Figma tree
    paddingLeft: "var(--spacing-4, 4px)", // pad=0/0/0/var(--spacing-4, 4px) from Figma tree
    flexShrink: 0, // horizontal=hug from Figma tree, prevent shrinking
  };

  return (
    <div
      className={`link-list-item ${className}`}
      style={itemStyle}
      onClick={handleClick}
      role="button" // Semantic role for clickable div
      tabIndex={isDisabled ? -1 : (onClick ? 0 : undefined)} // Make keyboard accessible if clickable and not disabled
      aria-disabled={isDisabled}
      {...props}
    >
      {showStartItem && (
        <div className="start-container" style={{ display: "flex", alignItems: "center", gap: 0, flexShrink: 0 }}>
          {/* Renders custom startSlot if provided, otherwise default ListLeftItem */}
          {startSlot ?? (
            <ListLeftItem variants="iconSlot" />
          )}
        </div>
      )}

      <div className="center-container" style={centerContainerStyle}>
        <div className="title-container" style={titleContainerStyle}>
          {/* ListTitleItem for main title */}
          <ListTitleItem
            variants={variants}
            size="md"
            color="gray"
            fontWeight="medium"
            title={title}
            // ListTitleItem has horizontal=hug, but within a flex container, it takes space as needed
            // No explicit width needed here, it will hug its content.
          />
          {showDesc && description && (
            // ListDescriptionItem for additional description next to title
            <ListDescriptionItem
              variants={variants}
              size="xs"
              color="grayTinted"
              fontWeight="medium"
              title={description}
            />
          )}
        </div>
        {showUnderDesc && underDescription && (
          // ListDescriptionItem for description under the title
          <ListDescriptionItem
            variants={variants}
            size="xs"
            color="grayTinted"
            fontWeight="medium"
            title={underDescription}
          />
        )}
      </div>

      {showEndItem && (
        <div className="end-container" style={endContainerStyle}>
          {/* Renders custom endSlot if provided, otherwise default DirectionRightIcon */}
          {endSlot ?? (
            <div
              className="icon-slot"
              style={{
                display: "inline-flex",
                alignItems: "center",
                flexShrink: 0,
                width: "var(--square-20, 20px)", // Fixed width from Figma tree
                height: "var(--square-20, 20px)", // Fixed height from Figma tree
              }}
            >
              <Icon name="DirectionRightIcon" size={20} color={config.fg} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// 7. Memoization and Export
const LinkListItem = memo(LinkListItemComponent);
LinkListItem.displayName = "LinkListItem";
export { LinkListItem };