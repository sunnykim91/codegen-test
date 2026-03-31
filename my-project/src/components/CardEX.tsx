import React, { memo, ReactNode, HTMLAttributes } from "react";

export type CardEXSize = "md" | "sm";

export interface CardEXProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  size?: CardEXSize;
}

const sizeStyleMap: Record<CardEXSize, {
  width: number;
  height: number;
  padding: string;
  borderRadius: number;
  gap: string;
}> = {
  md: {
    width: 200,
    height: 200,
    padding: "var(--spacing-24, 24px)",
    borderRadius: 20,
    gap: "var(--spacing-6, 6px)",
  },
  sm: {
    width: 200,
    height: 100,
    padding: "var(--spacing-12, 12px)",
    borderRadius: 16,
    gap: "var(--spacing-6, 6px)",
  },
};

const CardEXComponent = ({
  children,
  size = "md",
  className = "",
  style,
  ...props
}: CardEXProps) => {
  const sizeConfig = sizeStyleMap[size];

  const cardStyle: React.CSSProperties = {
    display: "flex",
    width: sizeConfig.width,
    height: sizeConfig.height,
    padding: sizeConfig.padding,
    borderRadius: sizeConfig.borderRadius,
    gap: sizeConfig.gap,
    backgroundColor: "var(--container-gray-white)",
    boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.05), 0px 5px 5px 0px rgba(0, 0, 0, 0.05), 0px 0px 5px 0px rgba(0, 0, 0, 0.05)",
    ...style,
  };

  return (
    <div className={`card-ex ${className}`} style={cardStyle} {...props}>
      {children}
    </div>
  );
};

const CardEX = memo(CardEXComponent);
CardEX.displayName = "CardEX";
export { CardEX };