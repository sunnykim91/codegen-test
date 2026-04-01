import React, { memo, ReactNode, HTMLAttributes } from "react";

export type CardEXSize = "md" | "sm";

export interface CardEXProps extends HTMLAttributes<HTMLDivElement> {
  size?: CardEXSize;
  slotContent?: ReactNode;
}

const sizeStyleMap: Record<
  CardEXSize,
  {
    padding: string;
    borderRadius: number;
    gap: string;
  }
> = {
  md: {
    padding: "var(--spacing-24, 24px)",
    borderRadius: 20,
    gap: "var(--spacing-6, 6px)",
  },
  sm: {
    padding: "var(--spacing-12, 12px)",
    borderRadius: 16,
    gap: "var(--spacing-6, 6px)",
  },
};

const CardEXComponent = ({
  size = "md",
  slotContent,
  className = "",
  style,
  ...props
}: CardEXProps) => {
  const sizeConfig = sizeStyleMap[size];

  const cardStyle: React.CSSProperties = {
    display: "flex",
    padding: sizeConfig.padding,
    borderRadius: sizeConfig.borderRadius,
    gap: sizeConfig.gap,
    backgroundColor: "var(--container-gray-white)",
    boxShadow:
      "0px 10px 10px rgba(0, 0, 0, 0.05), 0px 5px 5px rgba(0, 0, 0, 0.05), 0px 0px 5px rgba(0, 0, 0, 0.05)",
    overflow: "hidden",
    ...style,
  };

  return (
    <div className={`cardex ${className}`} style={cardStyle} {...props}>
      {slotContent}
    </div>
  );
};

const CardEX = memo(CardEXComponent);
CardEX.displayName = "CardEX";
export { CardEX };
