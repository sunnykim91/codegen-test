import React, { memo, ReactNode } from "react";
import { Icon } from "./Icon";
import { CheckBox } from "./CheckBox";
import { ImageIconSlot } from "./ImageIconSlot";

export type ListLeftItemVariants = "imageSlot" | "iconSlot" | "check";

export interface ListLeftItemProps extends React.HTMLAttributes<HTMLDivElement> {
  variants?: ListLeftItemVariants;
  label?: ReactNode;
}

const getVariantStyle = (variants: ListLeftItemVariants) => {
  switch (variants) {
    case "check":
      return {
        fg: "var(--texticon-gray-subtle)",
        typography: "text-style-notosanskr-label-16-medium",
      };
    case "iconSlot":
    case "imageSlot":
    default:
      return {
        fg: undefined,
        typography: undefined,
      };
  }
};

const ListLeftItemComponent = ({
  variants = "iconSlot",
  label,
  className = "",
  style,
  ...props
}: ListLeftItemProps) => {
  const variantConfig = getVariantStyle(variants);

  const containerStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    flexShrink: 0,
    height: 24,
    padding: 0,
    gap: 0,
    borderRadius: 0,
    width: "auto",
    color: variantConfig.fg, // Apply foreground color if available
    ...style,
  };

  let content;
  switch (variants) {
    case "iconSlot":
      content = (
        <div
          className="icon-slot"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            width: "var(--square-24, 24px)",
            height: "var(--square-24, 24px)",
          }}
        >
          <Icon name="BlankLineIcon" size={24} color="currentColor" />
        </div>
      );
      break;

    case "check":
      content = (
        <CheckBox
          className="checkbox"
          state="enabled"
          size="lg"
          isSelected={false}
          showLabel={true}
          label={
            <span className={variantConfig.typography} style={{ color: variantConfig.fg }}>
              {label}
            </span>
          }
        />
      );
      break;

    case "imageSlot":
      content = (
        <ImageIconSlot
          className="image-icon-slot"
          size={24}
          circle={false}
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