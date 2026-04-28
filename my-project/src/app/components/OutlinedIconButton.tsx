import React, { memo, ReactNode, ButtonHTMLAttributes } from "react";
import { Icon } from "./Icon"; // Icon 컴포넌트 import

// 1. type/interface 정의
export type OutlinedIconButtonState = "enabled" | "pressed" | "disabled";
export type OutlinedIconButtonColor = "primary" | "gray";
export type OutlinedIconButtonSize = "sm" | "xs";

export interface OutlinedIconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "children"> {
  icon: React.ReactElement<{ size?: number; color?: string }>;
  state?: OutlinedIconButtonState;
  color?: OutlinedIconButtonColor;
  size?: OutlinedIconButtonSize;
  isRounded?: boolean; // boolean variant type rule
  "aria-label": string; // 아이콘 버튼은 aria-label 필수
  className?: string;
  style?: React.CSSProperties;
}

// 3. sizeStyleMap (Record)
const sizeStyleMap: Record<
  OutlinedIconButtonSize,
  {
    height: string; // CSS 변수 사용
    width: string;
    iconSize: number;
    gap: string; // CSS 변수 사용
  }
> = {
  sm: {
    height: "var(--component-button-height-sm, 40px)",
    width: "var(--component-button-height-sm, 40px)",
    iconSize: 20, // var(--square-20, 20px)
    gap: "0px", // Figma raw variant dump 기준
  },
  xs: {
    height: "var(--component-button-height-xs, 32px)",
    width: "var(--component-button-height-xs, 32px)",
    iconSize: 16, // var(--square-16, 16px)
    gap: "var(--spacing-8, 8px)", // Figma size 축 요약표 기준
  },
};

// 4. getVariantStyle 함수
const getVariantStyle = (
  color: OutlinedIconButtonColor,
  state: OutlinedIconButtonState
) => {
  const baseBorderColor =
    color === "primary"
      ? "var(--stroke-primary-strong2)"
      : "var(--stroke-gray-strong2)";

  // enabled, pressed 상태의 기본 배경 및 아이콘 색상
  const baseStyles = {
    background: "transparent",
    color:
      color === "primary"
        ? "var(--texticon-primary-subtle2)"
        : "var(--texticon-gray-default)",
    border: `1px solid ${baseBorderColor}`,
  };

  if (state === "pressed") {
    const pressedBg =
      color === "primary"
        ? "var(--container-primary-subtle2)"
        : "var(--container-gray-subtle3)";
    return {
      ...baseStyles,
      background: pressedBg,
    };
  }

  return baseStyles;
};

// 5. disabledStyle
const disabledStyle = {
  background: "var(--state-disabled-container-default)",
  color: "var(--state-disabled-texticon-default)",
  border: "1px solid var(--stroke-gray-strong)", // Figma raw variant dump 기준 (state=disabled)
};

// 6. {Name}Component (함수 컴포넌트)
const OutlinedIconButtonComponent = ({
  icon,
  state = "enabled",
  color = "primary",
  size = "sm",
  isRounded = false,
  "aria-label": ariaLabel,
  className = "",
  style,
  ...props
}: OutlinedIconButtonProps) => {
  const sizeConfig = sizeStyleMap[size];
  const variantConfig = getVariantStyle(color, state);

  const isDisabled = state === "disabled";
  const isPressed = state === "pressed";

  const currentBackgroundColor = isDisabled
    ? disabledStyle.background
    : variantConfig.background;
  const currentBorder = isDisabled ? disabledStyle.border : variantConfig.border;
  const currentIconColor = isDisabled ? disabledStyle.color : variantConfig.color;
  const currentBorderRadius = isRounded
    ? "var(--borderradius-full, 9999px)"
    : "var(--borderradius-md, 8px)";

  const buttonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: sizeConfig.height,
    width: sizeConfig.width,
    gap: sizeConfig.gap,
    padding: "0px", // Figma variant dump 기준
    borderRadius: currentBorderRadius,
    border: currentBorder,
    backgroundColor: currentBackgroundColor,
    cursor: isDisabled ? "not-allowed" : "pointer",
    overflow: "hidden", // pressed 오버레이를 위해
    position: "relative", // pressed 오버레이를 위해
    flexShrink: 0, // flex 컨테이너에서 크기 고정
    ...style,
  };

  const clonedIcon = React.cloneElement(
    icon as React.ReactElement<{ size?: number; color?: string }>,
    {
      size: sizeConfig.iconSize,
      color: currentIconColor,
    }
  );

  const pressedOverlayColor =
    color === "primary"
      ? "var(--container-primary-subtle2)"
      : "var(--container-gray-subtle3)";

  return (
    <button
      className={className}
      style={buttonStyle}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-label={ariaLabel}
      {...props}
    >
      {clonedIcon}
      {isPressed && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: pressedOverlayColor,
            pointerEvents: "none",
          }}
        />
      )}
    </button>
  );
};

// 7. memo + displayName + export
const OutlinedIconButton = memo(OutlinedIconButtonComponent);
OutlinedIconButton.displayName = "OutlinedIconButton";
export { OutlinedIconButton };