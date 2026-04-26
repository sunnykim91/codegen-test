import React, { memo, ReactNode } from "react";

export type IconSlotSize = 14 | 16 | 18 | 20 | 22 | 24 | 28 | 30 | 32 | 40;

interface IconChildProps {
  size?: number;
  color?: string;
}

export interface IconSlotProps {
  children?: ReactNode;
  size?: IconSlotSize;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const IconSlotImpl = ({
  children,
  size = 24,
  color = "currentColor",
  className,
  style,
}: IconSlotProps) => {
  const cloned = children
    ? React.cloneElement(children as React.ReactElement<IconChildProps>, { size, color })
    : null;

  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        flexShrink: 0,
        ...style,
      }}
    >
      {cloned}
    </span>
  );
};

const IconSlot = memo(IconSlotImpl);
IconSlot.displayName = "IconSlot";
export { IconSlot };
