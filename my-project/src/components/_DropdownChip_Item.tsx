import React, { memo, ReactNode, ButtonHTMLAttributes } from "react";
import { Chip, ChipVariants, ChipState } from "./Chip";
import { Icon } from "./Icon";

export type DropdownChipItemIsSelected = true | false;
export type DropdownChipItemState = "enabled" | "pressed" | "readonly" | "disabled" | "focused";

export interface DropdownChipItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  children?: ReactNode;
  isSelected?: DropdownChipItemIsSelected;
  state?: DropdownChipItemState;
  fullWidth?: boolean;
}

const getIconVariant = (state: DropdownChipItemState) => {
  return state === "focused" ? "up" : "down";
};

const getChipState = (state: DropdownChipItemState): ChipState => {
  if (state === "pressed") return "pressed";
  if (state === "readonly") return "readonly";
  if (state === "disabled") return "disabled";
  return "enabled";
};

const DropdownChipItemComponent = ({
  children = "라벨",
  isSelected = false,
  state = "enabled",
  fullWidth = false,
  className = "",
  style,
  ...props
}: DropdownChipItemProps) => {
  const chipState = getChipState(state);
  const iconVariant = getIconVariant(state);
  const isDisabled = state === "disabled";

  const containerStyle: React.CSSProperties = {
    display: "flex",
    gap: 0,
    width: fullWidth ? "100%" : "auto",
    background: "#FFFFFF",
    ...style,
  };

  return (
    <div className={`dropdown-chip-item ${className}`} style={containerStyle}>
      <Chip
        variants="outline"
        state={chipState}
        isSelected={isSelected}
        showStartIcon={false}
        showEndIcon={true}
        endIcon={<Icon name="direction-icon" size={16} />}
        disabled={isDisabled}
        {...props}
      >
        {children}
      </Chip>
    </div>
  );
};

const DropdownChipItem = memo(DropdownChipItemComponent);
DropdownChipItem.displayName = "DropdownChipItem";
export { DropdownChipItem };