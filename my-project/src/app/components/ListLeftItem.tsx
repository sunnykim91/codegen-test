import React, { memo, ReactNode } from "react";
import { Icon } from "./Icon";
import { CheckBox } from "./CheckBox";
import { ImageIconSlot } from "./ImageIconSlot";

export type ListLeftItemVariants = "imageSlot" | "iconSlot" | "check";

export interface ListLeftItemProps extends React.HTMLAttributes<HTMLDivElement> {
  variants?: ListLeftItemVariants;
  label?: ReactNode; // For 'check' variant, passed to CheckBox
}

const ListLeftItemComponent = ({
  variants = "iconSlot",
  label,
  className = "",
  style,
  ...props
}: ListLeftItemProps) => {
  const containerStyle: React.CSSProperties = {
    display: "inline-flex", // horizontal=hug, vertical=hug, and aligns child content
    alignItems: "center",
    flexShrink: 0, // For hug sizing
    height: 24, // Fixed height from summary table
    padding: 0, // pad: 0/0/0/0 from summary table
    gap: 0, // gap: 0 from summary table
    borderRadius: 0, // radius: 0 from summary table
    width: "auto", // horizontal=hug
    // No background or foreground for the container itself, as per summary table '-'
    ...style,
  };

  let content;
  switch (variants) {
    case "iconSlot":
      // Children: IconSlot [INSTANCE] component="IconSlot" props={size=24}
      // -> This maps to a div containing an Icon
      content = (
        <div
          className="icon-slot"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            width: "var(--square-24, 24px)", // From BlankLineIcon dimensions
            height: "var(--square-24, 24px)", // From BlankLineIcon dimensions
            // No specific border/background for IconSlot itself from Figma tree, Icon handles fill
          }}
        >
          {/* BlankLineIcon [ICON] name="BlankLineIcon" (size 24) */}
          <Icon name="BlankLineIcon" size={24} color="currentColor" />
        </div>
      );
      break;

    case "check":
      // Children: CheckBox [INSTANCE] component="CheckBox" props={state=enabled, size=lg, isSelected=false}
      // ListLeftItem has font/fg on this variant, which CheckBox's internal typography will match
      content = (
        <CheckBox
          className="checkbox"
          state="enabled" // from props in Figma tree
          size="lg" // from props in Figma tree
          isSelected={false} // from props in Figma tree
          showLabel={true} // CheckBox default, matches Figma tree intent for "label"
          label={label} // Pass label from ListLeftItem props
          // CheckBox itself handles typography and foreground color for its label
        />
      );
      break;

    case "imageSlot":
      // Children: ImageIconSlot [INSTANCE] component="ImageIconSlot" props={size=24, circle=false} radius=4(var(--borderradius-xs))
      content = (
        <ImageIconSlot
          className="image-icon-slot"
          size={24} // from props in Figma tree
          circle={false} // from props in Figma tree
          // ImageIconSlot internally handles radius based on the 'circle' prop
        />
      );
      break;

    default:
      content = null;
  }

  return (
    <div
      className={`list-left-item ${className}`}
      style={containerStyle}
      {...props}
    >
      {content}
    </div>
  );
};

const ListLeftItem = memo(ListLeftItemComponent);
ListLeftItem.displayName = "ListLeftItem";
export { ListLeftItem };