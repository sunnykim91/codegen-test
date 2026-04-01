import React, { memo, ReactNode, HTMLAttributes } from "react";
import { SelectChipItem } from "./SelectChipItem";
import { Mask } from "./Mask";
import { Icon } from "./Icon";

export type SelectChipVariants = "single" | "multi";

export interface SelectChipProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  variants?: SelectChipVariants;
  isExpand?: boolean;
  showMaskStart?: boolean;
  showExpendIcon?: boolean;
  showMaskEnd?: boolean;
}

const sizeStyleMap = {
  width: 335,
  height: "auto",
};

const getVariantStyle = (variants: SelectChipVariants, isExpand: boolean) => {
  const baseStyle = {
    display: "flex" as const,
    gap: 0,
    width: sizeStyleMap.width,
    height: sizeStyleMap.height,
    position: "relative" as const,
  };

  return baseStyle;
};

const SelectChipComponent = ({
  children,
  variants = "single",
  isExpand = false,
  showMaskStart = false,
  showExpendIcon = false,
  showMaskEnd = true,
  className = "",
  style,
  ...props
}: SelectChipProps) => {
  const containerStyle = getVariantStyle(variants, isExpand);

  const slotContainerStyle: React.CSSProperties = {
    display: "flex",
    gap: "var(--spacing-8, 8px)",
    overflow: isExpand ? "visible" : "hidden",
    flexWrap: isExpand ? "wrap" : "nowrap",
    width: "100%",
  };

  return (
    <div
      className={`select-chip ${className}`}
      style={{ ...containerStyle, ...style }}
      {...props}
    >
      <div className="slot" style={slotContainerStyle}>
        {children}
      </div>

      {showMaskStart && (
        <Mask
          direction="left"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "var(--width-container-md, 80px)",
            height: 36,
          }}
        />
      )}

      {showMaskEnd && (
        <div
          className="box"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            display: "flex",
            alignItems: "center",
            gap: 0,
            height: isExpand ? "auto" : 36,
            paddingTop: isExpand ? "var(--spacing-8, 8px)" : 0,
            paddingBottom: isExpand ? "var(--spacing-8, 8px)" : 0,
          }}
        >
          <Mask
            direction="right"
            style={{
              width: "var(--width-container-detail-24, 24px)",
              height: "100%",
            }}
          />
          <div
            className="box"
            style={{
              width: "var(--square-32, 32px)",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--bg-base)",
              paddingTop: isExpand ? "var(--spacing-8, 8px)" : 0,
              paddingBottom: isExpand ? "var(--spacing-8, 8px)" : 0,
            }}
          >
            {showExpendIcon && (
              <Icon
                name={isExpand ? "direction-icon-up" : "direction-icon-down"}
                size={20}
                color="var(--texticon-gray-default)"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const SelectChip = memo(SelectChipComponent);
SelectChip.displayName = "SelectChip";
export { SelectChip };
