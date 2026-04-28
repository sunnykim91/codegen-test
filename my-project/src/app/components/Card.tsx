import React, { memo, ReactNode, HTMLAttributes } from "react";

// 2. type/interface 정의
export type CardVariants = "shadow" | "outlined" | "filled";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variants?: CardVariants;
  instanceSwap?: ReactNode; // Figma의 INSTANCE_SWAP 매핑
}

// 4. variantStyleMap (Record)
const variantStyleMap: Record<CardVariants, React.CSSProperties> = {
  outlined: {
    background: "var(--container-gray-white)",
    border: "1px solid var(--stroke-gray-default)",
    boxShadow: "none",
  },
  shadow: {
    background: "var(--container-gray-white)",
    border: "none",
    boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.05), 0px 5px 5px 0px rgba(0, 0, 0, 0.05), 0px 0px 5px 0px rgba(0, 0, 0, 0.05)",
  },
  filled: {
    background: "var(--container-gray-subtle3)",
    border: "none",
    boxShadow: "none",
  },
};

// 6. {Name}Component (함수 컴포넌트)
const CardComponent = ({
  variants = "shadow",
  instanceSwap,
  className = "",
  style,
  ...props
}: CardProps) => {
  const variantConfig = variantStyleMap[variants];

  const cardStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 0, // Summary table: gap: 0
    padding: "var(--spacing-20)", // Summary table: pad: var(--spacing-20, 20px)
    borderRadius: "var(--borderradius-2xl)", // Summary table: radius: var(--borderradius-2xl, 16px)
    width: "100%", // size: horizontal=fill
    height: "auto", // size: vertical=hug
    ...variantConfig,
    ...style,
  };

  return (
    <div className={`card ${className}`} style={cardStyle} {...props}>
      {instanceSwap ?? null}
    </div>
  );
};

// 7. memo + displayName + export
const Card = memo(CardComponent);
Card.displayName = "Card";
export { Card };