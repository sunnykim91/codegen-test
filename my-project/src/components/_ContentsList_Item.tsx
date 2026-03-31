import React, { memo, HTMLAttributes, ReactNode } from "react";
import { IconImgSlot } from "./IconImgSlot";

export type ContentsListItemHasGutter = true | false;

export interface ContentsListItemProps extends HTMLAttributes<HTMLDivElement> {
  hasGutter?: ContentsListItemHasGutter;
  showSlotStart?: boolean;
  showSlotEnd?: boolean;
  startSlot?: ReactNode;
  slotCenter?: ReactNode;
  slotEnd?: ReactNode;
}

const variantStyleMap: Record<ContentsListItemHasGutter, {
  padding: string;
  width: number;
  height: number;
}> = {
  true: {
    padding: "var(--spacing-12, 12px) var(--spacing-20, 20px)",
    width: 320,
    height: 128,
  },
  false: {
    padding: "0",
    width: 320,
    height: 104,
  },
};

const ContentsListItemComponent = ({
  hasGutter = true,
  showSlotStart = true,
  showSlotEnd = true,
  startSlot,
  slotCenter,
  slotEnd,
  className = "",
  style,
  ...props
}: ContentsListItemProps) => {
  const variantConfig = variantStyleMap[hasGutter];

  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: "var(--spacing-12, 12px)",
    width: variantConfig.width,
    height: variantConfig.height,
    padding: variantConfig.padding,
    borderRadius: 0,
    color: "var(--texticon-gray-default)",
    ...style,
  };

  const defaultStartSlot = (
    <IconImgSlot
      size={32}
      circle={true}
    />
  );

  const defaultSlotCenter = (
    <div className="container" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-2, 2px)", flex: 1 }}>
      <span className="text-style-kbfgtext-label-16-bold" style={{ color: "var(--texticon-gray-default)", margin: 0 }}>
        메인 텍스트
      </span>
      <span className="text-style-kbfgtext-label-14-regular" style={{ color: "var(--texticon-gray-subtle)", margin: 0 }}>
        서브 텍스트
      </span>
    </div>
  );

  return (
    <div className={`contents-list-item ${className}`} style={containerStyle} {...props}>
      {showSlotStart && (startSlot || defaultStartSlot)}
      {slotCenter || defaultSlotCenter}
      {showSlotEnd && slotEnd}
    </div>
  );
};

const ContentsListItem = memo(ContentsListItemComponent);
ContentsListItem.displayName = "ContentsListItem";
export { ContentsListItem };