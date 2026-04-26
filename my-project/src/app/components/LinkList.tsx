import React, { memo, ReactNode, HTMLAttributes } from "react";
import { ListWrapper } from "./ListWrapper";
import { LinkListItem, LinkListItemVariants } from "./LinkListItem"; // Import LinkListItemVariants for type safety

// 1. Type Definitions
export type LinkListState = "enabled" | "pressed" | "disabled";

// LinkListProps needs to pass down relevant props to LinkListItem
export interface LinkListProps extends Omit<HTMLAttributes<HTMLDivElement>, "onClick" | "color"> {
  state?: LinkListState;
  title: string;
  description?: string;
  underDescription?: string;
  startSlot?: ReactNode;
  endSlot?: ReactNode;
  showStartItem?: boolean; // Corresponds to LinkListItem's prop
  showUnderDesc?: boolean; // Corresponds to LinkListItem's prop
  showEndItem?: boolean; // Corresponds to LinkListItem's prop
  showDesc?: boolean; // Corresponds to LinkListItem's prop
  fullWidth?: boolean; // Standard interactive component prop
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

// 2. Style Mappings (from summary table)
interface LinkListStateConfig {
  backgroundColor?: string;
  foregroundColor: string;
  borderRadius: string; // Use string for CSS variable
  pressedOverlay?: string; // For pressed state
}

const stateStyleMap: Record<LinkListState, LinkListStateConfig> = {
  enabled: {
    backgroundColor: "transparent", // bg: -
    foregroundColor: "var(--texticon-gray-default)",
    borderRadius: "var(--borderradius-xl, 12px)",
  },
  pressed: {
    backgroundColor: "var(--container-gray-subtle2)",
    foregroundColor: "var(--texticon-gray-default)",
    borderRadius: "var(--borderradius-xl, 12px)",
    pressedOverlay: "var(--state-pressed-black)", // Assuming black overlay for pressed on gray-subtle2
  },
  disabled: {
    backgroundColor: "transparent", // bg: -
    foregroundColor: "var(--state-disabled-texticon-default)",
    borderRadius: "var(--borderradius-xl, 12px)",
  },
};

// 6. LinkListComponent (Function Component)
const LinkListComponent = ({
  state = "enabled",
  title,
  description,
  underDescription,
  startSlot,
  endSlot,
  showStartItem = true, // Default from LinkListItem's default props. If Figma specified false, it must be explicitly false here.
  showUnderDesc = true, // Default from LinkListItem's default props.
  showEndItem = true, // Default from LinkListItem's default props.
  showDesc = true, // Default from LinkListItem's default props.
  fullWidth = false,
  onClick,
  className = "",
  style,
  ...props
}: LinkListProps) => {
  const config = stateStyleMap[state];
  const isDisabled = state === "disabled";
  const isPressed = state === "pressed";

  // LinkListItem's variants prop maps directly to LinkList's state for visual consistency
  // Type assertion is safe here because LinkListItemVariants is a subset of LinkListState
  const linkListItemVariants: LinkListItemVariants = state as LinkListItemVariants;

  const linkListStyle: React.CSSProperties = {
    position: "relative",
    display: "flex", // layout: VERTICAL, gap: 0
    flexDirection: "column",
    gap: 0,
    width: fullWidth ? "100%" : "auto", // Sizing: horizontal=fill (when fullWidth is true), else hug
    // height: auto (vertical=hug, the 86px from summary table is effective height including child padding)
    padding: 0, // pad: 0/0/0/0
    borderRadius: config.borderRadius,
    backgroundColor: config.backgroundColor,
    color: config.foregroundColor, // applied to outer container, child components will override
    cursor: isDisabled ? "not-allowed" : (onClick ? "pointer" : "default"),
    overflow: "hidden", // Important for border radius + pressed overlay clipping
    // The `height: 86px` in the summary table is the *effective* height including child padding.
    // The root div should be hug to content unless specified `fullWidth`
    ...style,
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <div
      className={`link-list ${className}`}
      style={linkListStyle}
      onClick={handleClick}
      role="button" // Semantic role for clickable div
      tabIndex={isDisabled ? -1 : (onClick ? 0 : undefined)} // Make keyboard accessible if clickable and not disabled
      aria-disabled={isDisabled}
      {...props}
    >
      {/* Pressed overlay for the entire LinkList item */}
      {isPressed && !isDisabled && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: config.pressedOverlay,
            pointerEvents: "none",
            zIndex: 1, // Ensure overlay is on top of background but under content
          }}
        />
      )}

      {/* ListWrapper is an instance, takes listItem as a prop */}
      <ListWrapper
        className="list-wrapper"
        // props={disabledGutters=true, dense=false} from Figma tree
        disabledGutters={true} // Figma tree shows `pad=var(--spacing-20, 20px)/0/var(--spacing-20, 20px)/0` which implies disabled gutters
        dense={false} // Figma tree shows no dense property, and minHeight of 84px for ListWrapper implies not dense
        style={{
          overflow: "hidden", // `overflow=hidden` from Figma tree for ListWrapper
          width: "100%", // `horizontal=fill` for ListWrapper
          height: "auto", // `vertical=hug` for ListWrapper
          gap: 0, // `gap=0` for ListWrapper
          position: "relative", // Ensure relative for proper z-index stacking if needed for child
          zIndex: 2, // Ensure content is above pressed overlay
        }}
        listItem={
          // LinkList_Item is an instance, props passed to it
          <LinkListItem
            className="link-list-item"
            // props={variants=enabled} (but derived from parent LinkList state)
            variants={linkListItemVariants}
            title={title}
            description={description}
            underDescription={underDescription}
            startSlot={startSlot}
            endSlot={endSlot}
            showStartItem={showStartItem}
            showUnderDesc={showUnderDesc}
            showEndItem={showEndItem}
            showDesc={showDesc}
            // LinkListItem itself is designed to hug content, `fullWidth` is handled by ListWrapper for LinkListItem
          />
        }
        showBottomDivider={false} // LinkList's structure doesn't show a divider *within* the item wrapper.
      />
    </div>
  );
};

// 7. Memoization and Export
const LinkList = memo(LinkListComponent);
LinkList.displayName = "LinkList";
export { LinkList };