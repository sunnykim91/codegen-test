import React, { memo, ReactNode, HTMLAttributes } from "react";
import { Chip } from "./Chip";
import { Mask } from "./Mask";
import { Icon } from "./Icon";

export type SelectChipVariants = "single" | "multi";

export interface SelectChipProps extends HTMLAttributes<HTMLDivElement> {
  showMaskStart?: boolean;
  showExpendIcon?: boolean;
  showMaskEnd?: boolean;
  slot?: ReactNode;
  variants?: SelectChipVariants;
  isExpand?: boolean;
}

const getContainerHeight = (variants: SelectChipVariants, isExpand: boolean): number => {
  if (isExpand) {
    return variants === "single" ? 80 : 124;
  }
  return 36;
};

const SelectChipComponent = ({
  showMaskStart = true,
  showExpendIcon = true,
  showMaskEnd = true,
  slot,
  variants = "single",
  isExpand = false,
  className = "",
  style,
  ...props
}: SelectChipProps) => {
  const containerHeight = getContainerHeight(variants, isExpand);
  
  const containerStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    width: 335,
    height: containerHeight,
    color: variants === "single" ? "var(--texticon-gray-default)" : "var(--texticon-gray-subtle)",
    ...style,
  };

  const slotStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: 0,
    alignItems: "flex-start",
    alignContent: "flex-start",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  };

  const boxStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    height: isExpand ? "auto" : 36,
    alignItems: "center",
    zIndex: 1,
  };

  const expandButtonStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "var(--square-32, 32px)",
    height: isExpand ? "auto" : "100%",
    padding: isExpand ? "var(--spacing-8, 8px) 0" : "0",
    backgroundColor: "var(--bg-base)",
    border: "none",
    cursor: "pointer",
  };

  const leftMaskStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "var(--width-container-md, 80px)",
    height: 36,
    zIndex: 1,
  };

  const rightMaskStyle: React.CSSProperties = {
    width: "var(--width-container-detail-24, 24px)",
    height: 36,
  };

  const renderSlotContent = () => {
    if (slot) return slot;
    
    // 기본 예시 아이템들
    const defaultItems = Array.from({ length: 12 }, (_, index) => (
      <div key={index} className="_selectchip_item" style={{ display: "flex" }}>
        <Chip
          variants={variants === "single" ? "filled" : "outline"}
          state="enabled"
          isSelected={index === 2 || (variants === "multi" && (index === 2 || index === 3))}
          showStartIcon={variants === "multi" && (index === 2 || index === 3)}
          startIcon={variants === "multi" && (index === 2 || index === 3) ? <Icon name="check" size={16} /> : undefined}
        >
          라벨
        </Chip>
      </div>
    ));

    return defaultItems;
  };

  return (
    <div className={`select-chip ${className}`} style={containerStyle} {...props}>
      <div className="slot" style={slotStyle}>
        {renderSlotContent()}
      </div>

      {showMaskEnd && (
        <div className="left-mask" style={leftMaskStyle}>
          <Mask direction="left" style={{ width: "100%", height: "100%" }} />
        </div>
      )}

      {showExpendIcon && (
        <div className="box" style={boxStyle}>
          {showMaskStart && (
            <div style={rightMaskStyle}>
              <Mask direction="right" style={{ width: "100%", height: "100%" }} />
            </div>
          )}
          <button
            className="expand-button"
            style={expandButtonStyle}
            aria-label={isExpand ? "접기" : "펼치기"}
          >
            {isExpand ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "var(--container-gray-subtle3)",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Icon name="direction-icon" size={20} />
              </div>
            ) : (
              <Icon name="direction-icon" size={20} style={{ transform: "rotate(180deg)" }} />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

const SelectChip = memo(SelectChipComponent);
SelectChip.displayName = "SelectChip";
export { SelectChip };