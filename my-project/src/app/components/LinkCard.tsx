import React, { memo, ReactNode, ButtonHTMLAttributes } from "react";
import { ComponentBlank, ComponentBlankVariants } from "./ComponentBlank";

// 1. type/interface 정의
export type LinkCardState = "enabled" | "pressed" | "disabled";
export type LinkCardVariants = "shadow" | "outlined" | "filled";

export interface LinkCardProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  instanceSwap?: ReactNode;
  state?: LinkCardState;
  variants?: LinkCardVariants;
  fullWidth?: boolean;
}

// 3. sizeStyleMap (Record) 또는 고정 스타일
const fixedStyles = {
  height: 84,
  padding: "var(--spacing-20, 20px)",
  borderRadius: "var(--borderradius-2xl, 16px)",
  gap: 0,
};

// 4. getVariantStyle 함수
type LinkCardConfig = {
  backgroundColor: string;
  border?: string; // 예: "1px solid var(--stroke-gray-default)"
  boxShadow?: string;
  pressedOverlay?: string; // pressed 상태 시 오버레이
};

const getVariantStyle = (state: LinkCardState, variants: LinkCardVariants): LinkCardConfig => {
  const boxShadowValue = `
    0px 10px 10px 0px rgba(0, 0, 0, 0.05),
    0px 5px 5px 0px rgba(0, 0, 0, 0.05),
    0px 0px 5px 0px rgba(0, 0, 0, 0.05)
  `;

  if (state === "disabled") {
    return {
      backgroundColor: "var(--state-disabled-container-default)",
      border: variants === "outlined" ? "1px solid var(--state-disabled-stroke-default)" : undefined,
      boxShadow: variants === "shadow" ? boxShadowValue : undefined,
    };
  }

  // enabled 또는 pressed 상태
  if (variants === "outlined") {
    return {
      backgroundColor: state === "pressed" ? "var(--container-gray-subtle3)" : "var(--container-gray-white)",
      border: "1px solid var(--stroke-gray-default)",
      pressedOverlay: "var(--state-pressed-black)",
    };
  } else if (variants === "shadow") {
    return {
      backgroundColor: state === "pressed" ? "var(--container-gray-subtle3)" : "var(--container-gray-white)",
      boxShadow: boxShadowValue,
      pressedOverlay: "var(--state-pressed-black)",
    };
  } else { // variants === "filled"
    return {
      backgroundColor: state === "pressed" ? "var(--container-gray-subtle2)" : "var(--container-gray-subtle3)",
      pressedOverlay: "var(--state-pressed-black)",
    };
  }
};

// 6. LinkCardComponent (함수 컴포넌트)
const LinkCardComponent = ({
  instanceSwap,
  state = "enabled",
  variants = "outlined",
  fullWidth = false,
  className = "",
  style,
  onClick,
  ...props
}: LinkCardProps) => {
  const config = getVariantStyle(state, variants);
  const isDisabled = state === "disabled";
  const isPressed = state === "pressed";

  // Figma 트리에서 제시된 default instanceSwap (ComponentBlank)
  const defaultInstanceSwap = (
    <ComponentBlank variants="instanceSwap" />
  );

  const cardStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column", // layout: VERTICAL
    alignItems: "stretch", // 가로축으로 컨텐츠가 부모를 채우도록 함
    justifyContent: "center", // 세로축으로 컨텐츠를 중앙 정렬 (내부 컴포넌트 높이가 고정되어 있다면)
    gap: fixedStyles.gap,
    height: fixedStyles.height,
    padding: fixedStyles.padding,
    borderRadius: fixedStyles.borderRadius,
    width: fullWidth ? "100%" : "auto", // horizontal=fill (fullWidth) 또는 hug (auto)
    cursor: isDisabled ? "not-allowed" : "pointer",
    position: "relative",
    overflow: "hidden", // borderRadius가 자식 요소나 pressed overlay에 적용되도록 함
    backgroundColor: config.backgroundColor,
    border: config.border,
    boxShadow: config.boxShadow,
    ...style,
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled) {
      onClick?.(e);
    }
  };

  return (
    <button
      className={`link-card ${className}`}
      style={cardStyle}
      disabled={isDisabled}
      onClick={handleClick}
      aria-disabled={isDisabled}
      role="button"
      {...props}
    >
      {instanceSwap ?? defaultInstanceSwap}

      {isPressed && !isDisabled && (
        <span
          className="pressed-overlay"
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: config.pressedOverlay,
            pointerEvents: "none",
          }}
        />
      )}
    </button>
  );
};

// 7. memo + displayName + export
const LinkCard = memo(LinkCardComponent);
LinkCard.displayName = "LinkCard";
export { LinkCard };