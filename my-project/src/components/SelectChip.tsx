import React, { memo, ReactNode, HTMLAttributes } from "react";
import { SelectChipItem } from "./SelectChipItem";
import { Mask } from "./Mask";
import { Icon } from "./Icon";

export type SelectChipVariants = "single" | "multi";

export interface SelectChipProps extends HTMLAttributes<HTMLDivElement> {
  showMaskStart?: boolean;
  showExpendIcon?: boolean;
  showMaskEnd?: boolean;
  slotContent?: ReactNode;
  variants?: SelectChipVariants;
  isExpand?: boolean;
}

const variantStyleMap: Record<SelectChipVariants, {
  color: string;
  containerHeight: { collapsed: number; expanded: number };
}> = {
  single: {
    color: "var(--texticon-gray-default)",
    containerHeight: { collapsed: 36, expanded: 80 },
  },
  multi: {
    color: "var(--texticon-gray-subtle)",
    containerHeight: { collapsed: 36, expanded: 124 },
  },
};

const SelectChipComponent = ({
  showMaskStart = true,
  showExpendIcon = true,
  showMaskEnd = true,
  slotContent,
  variants = "single",
  isExpand = false,
  className = "",
  style,
  ...props
}: SelectChipProps) => {
  const config = variantStyleMap[variants];
  const containerHeight = isExpand ? config.containerHeight.expanded : config.containerHeight.collapsed;

  const containerStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    width: "100%",
    height: containerHeight,
    color: config.color,
    overflow: "hidden",
    ...style,
  };

  const slotStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: isExpand ? "wrap" : "nowrap",
    gap: 0,
    alignItems: "flex-start",
    alignContent: "flex-start",
    width: "100%",
    height: "100%",
    overflow: isExpand ? "visible" : "hidden",
  };

  const leftMaskStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "var(--width-container-md, 80px)",
    height: 36,
    zIndex: 2,
    pointerEvents: "none",
  };

  const rightBoxStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    height: isExpand ? "auto" : 36,
    alignItems: "flex-start",
    zIndex: 2,
  };

  const rightMaskStyle: React.CSSProperties = {
    width: "var(--width-container-detail-24, 24px)",
    height: 36,
  };

  const expandBoxStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "var(--square-32, 32px)",
    height: isExpand ? "auto" : "100%",
    padding: isExpand ? "var(--spacing-8, 8px) 0" : "0",
    backgroundColor: "var(--bg-base)",
  };

  const renderDefaultContent = () => {
    const items = Array.from({ length: 12 }, (_, index) => {
      const isSelected = variants === "single" 
        ? index === 2 
        : (index === 2 || index === 3);
      
      return (
        <SelectChipItem
          key={index}
          variants={variants}
          state="enabled"
          isSelected={isSelected}
        />
      );
    });

    return items;
  };

  const renderExpandIcon = () => {
    if (isExpand) {
      return (
        <div
          className="disclosure-item"
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
      );
    }
    
    return <Icon name="direction-icon" size={20} style={{ transform: "rotate(180deg)" }} />;
  };

  return (
    <div className={`select-chip ${className}`} style={containerStyle} {...props}>
      <div className="slot" style={slotStyle}>
        {slotContent || renderDefaultContent()}
      </div>

      {showMaskStart && (
        <div className="left-mask" style={leftMaskStyle}>
          <Mask direction="left" style={{ width: "100%", height: "100%" }} />
        </div>
      )}

      {showExpendIcon && (
        <div className="box" style={rightBoxStyle}>
          {showMaskEnd && (
            <div style={rightMaskStyle}>
              <Mask direction="right" style={{ width: "100%", height: "100%" }} />
            </div>
          )}
          <button
            className="expand-button"
            style={expandBoxStyle}
            aria-label={isExpand ? "접기" : "펼치기"}
          >
            {renderExpandIcon()}
          </button>
        </div>
      )}
    </div>
  );
};

const SelectChip = memo(SelectChipComponent);
SelectChip.displayName = "SelectChip";
export { SelectChip };