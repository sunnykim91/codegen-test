import React, { memo, ReactNode, ButtonHTMLAttributes } from "react";
import { Chip, ChipVariants, ChipState } from "./Chip";
import { Icon } from "./Icon";

export type SelectChipItemVariants = "multi" | "single";
export type SelectChipItemState = "enabled" | "pressed" | "readonly" | "disabled";

export interface SelectChipItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  children?: ReactNode;
  variants?: SelectChipItemVariants;
  state?: SelectChipItemState;
  isSelected?: boolean;
  fullWidth?: boolean;
}

const getVariantStyle = (variants: SelectChipItemVariants, state: SelectChipItemState, isSelected: boolean) => {
  if (variants === "multi") {
    const chipVariants: ChipVariants = "outline";
    const chipState: ChipState = state === "readonly" ? "readonly" : state === "disabled" ? "disabled" : state === "pressed" ? "pressed" : "enabled";
    
    return {
      chipVariants,
      chipState,
      showStartIcon: isSelected,
      startIcon: isSelected ? <Icon name="check" size={16} /> : undefined,
    };
  }

  // single
  const chipVariants: ChipVariants = "filled";
  const chipState: ChipState = state === "readonly" ? "readonly" : state === "disabled" ? "disabled" : state === "pressed" ? "pressed" : "enabled";
  
  return {
    chipVariants,
    chipState,
    showStartIcon: false,
    startIcon: undefined,
  };
};

const SelectChipItemComponent = ({
  children = "라벨",
  variants = "multi",
  state = "enabled",
  isSelected = false,
  fullWidth = false,
  className = "",
  style,
  ...props
}: SelectChipItemProps) => {
  const config = getVariantStyle(variants, state, isSelected);
  const isDisabled = state === "disabled";

  const containerStyle: React.CSSProperties = {
    display: "flex",
    width: fullWidth ? "100%" : "auto",
    ...style,
  };

  return (
    <div className={`select-chip-item ${className}`} style={containerStyle}>
      <Chip
        variants={config.chipVariants}
        state={config.chipState}
        isSelected={isSelected}
        showStartIcon={config.showStartIcon}
        showEndIcon={false}
        startIcon={config.startIcon}
        disabled={isDisabled}
        {...props}
      >
        {children}
      </Chip>
    </div>
  );
};

const SelectChipItem = memo(SelectChipItemComponent);
SelectChipItem.displayName = "SelectChipItem";
export { SelectChipItem };