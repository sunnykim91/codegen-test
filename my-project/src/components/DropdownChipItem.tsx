import React, { memo, ReactNode, ButtonHTMLAttributes } from "react";
import { Chip } from "./Chip";
import { Icon } from "./Icon";

export type DropdownChipItemState = "enabled" | "pressed" | "readonly" | "disabled" | "focused";

export interface DropdownChipItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  children?: ReactNode;
  isSelected?: boolean;
  state?: DropdownChipItemState;
  fullWidth?: boolean;
}

const DropdownChipItemComponent = ({
  children = "라벨",
  isSelected = false,
  state = "enabled",
  fullWidth = false,
  className = "",
  style,
  ...props
}: DropdownChipItemProps) => {
  const isDisabled = state === "disabled";
  const isFocused = state === "focused";
  
  // focused 상태에서 아이콘 방향 결정
  const iconVariant = isFocused ? "up" : "down";

  const chipProps = {
    variants: "outline" as const,
    state: state === "focused" ? "enabled" : state,
    isSelected,
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    gap: 0,
    width: fullWidth ? "100%" : "auto",
    ...style,
  };

  return (
    <div className={`dropdown-chip-item ${className}`} style={containerStyle} {...props}>
      <Chip
        {...chipProps}
        endIcon={<Icon name="direction-icon" size={16} />}
        disabled={isDisabled}
      >
        {children}
      </Chip>
    </div>
  );
};

const DropdownChipItem = memo(DropdownChipItemComponent);
DropdownChipItem.displayName = "DropdownChipItem";
export { DropdownChipItem };