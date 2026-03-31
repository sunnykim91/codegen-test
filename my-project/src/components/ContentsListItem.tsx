import React, { memo, ReactNode, HTMLAttributes } from "react";
import { IconImgSlot } from "./IconImgSlot";

export interface ContentsListItemProps extends HTMLAttributes<HTMLDivElement> {
  showSlotEnd?: boolean;
  slotCenter?: ReactNode;
  slotEnd?: ReactNode;
  startSlot?: ReactNode;
  showSlotStart?: boolean;
  hasGutter?: boolean;
}

const ContentsListItemComponent = ({
  showSlotEnd = true,
  slotCenter,
  slotEnd,
  startSlot,
  showSlotStart = true,
  hasGutter = true,
  className = "",
  style,
  ...props
}: ContentsListItemProps) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "var(--spacing-12, 12px)",
    width: 320,
    height: hasGutter ? 128 : 104,
    padding: hasGutter 
      ? "var(--spacing-12, 12px) var(--spacing-20, 20px) var(--spacing-12, 12px) var(--spacing-20, 20px)"
      : "0",
    borderRadius: 0,
    color: "var(--texticon-gray-default)",
    ...style,
  };

  const centerContainerStyle: React.CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "var(--spacing-2, 2px)",
  };

  return (
    <div className={`contents-list-item ${className}`} style={containerStyle} {...props}>
      {showSlotStart && (
        <div className="start-slot">
          {startSlot || (
            <IconImgSlot size={32} circle={true} />
          )}
        </div>
      )}
      
      <div className="slot-center" style={centerContainerStyle}>
        {slotCenter || (
          <div className="container" style={centerContainerStyle}>
            <span 
              className="text-style-kbfgtext-label-16-bold" 
              style={{ 
                color: "var(--texticon-gray-default)",
                width: hasGutter ? 168 : 208,
                height: 24,
                margin: 0
              }}
            >
              메인 텍스트
            </span>
            <span 
              className="text-style-kbfgtext-label-14-regular" 
              style={{ 
                color: "var(--texticon-gray-subtle)",
                width: hasGutter ? 168 : 208,
                height: 20,
                margin: 0
              }}
            >
              서브 텍스트
            </span>
          </div>
        )}
      </div>
      
      {showSlotEnd && slotEnd && (
        <div className="slot-end">
          {slotEnd}
        </div>
      )}
    </div>
  );
};

const ContentsListItem = memo(ContentsListItemComponent);
ContentsListItem.displayName = "ContentsListItem";
export { ContentsListItem };