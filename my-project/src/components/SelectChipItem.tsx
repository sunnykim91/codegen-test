import React, { memo, ReactNode, ButtonHTMLAttributes } from "react";
import { Chip } from "./Chip";
import { Icon } from "./Icon";

export type SelectChipItemVariants = "multi" | "single";
export type SelectChipItemState =
  | "enabled"
  | "pressed"
  | "readonly"
  | "disabled";

export interface SelectChipItemProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "color"
> {
  variants?: SelectChipItemVariants;
  state?: SelectChipItemState;
  isSelected?: boolean;
  label?: string;
  fullWidth?: boolean;
}

const getVariantStyle = (
  variants: SelectChipItemVariants,
  isSelected: boolean,
  state: SelectChipItemState,
) => {
  if (variants === "multi") {
    return {
      chipVariants: "outline" as const,
      showStartIcon: isSelected,
      startIcon: isSelected ? <Icon name="check" size={16} /> : undefined,
    };
  } else {
    // single
    return {
      chipVariants: "filled" as const,
      showStartIcon: false,
      startIcon: undefined,
    };
  }
};

const SelectChipItemComponent = ({
  variants = "multi",
  state = "enabled",
  isSelected = false,
  label = "라벨",
  fullWidth = false,
  className = "",
  style,
  ...props
}: SelectChipItemProps) => {
  const variantConfig = getVariantStyle(variants, isSelected, state);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    gap: 0,
    width: fullWidth ? "100%" : "auto",
    flexShrink: 0,
    ...style,
  };

  return (
    <div className={`select-chip-item ${className}`} style={containerStyle}>
      <Chip
        variants={variantConfig.chipVariants}
        state={state}
        isSelected={isSelected}
        label={label}
        showStartIcon={variantConfig.showStartIcon}
        showEndIcon={false}
        startIcon={variantConfig.startIcon}
        fullWidth={fullWidth}
        {...props}
      />
    </div>
  );
};

const SelectChipItem = memo(SelectChipItemComponent);
SelectChipItem.displayName = "SelectChipItem";
export { SelectChipItem };
