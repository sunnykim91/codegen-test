import React, { memo, ButtonHTMLAttributes, ReactNode, ReactElement } from "react";
import { Icon } from "./Icon"; // 통합 Icon 컴포넌트 import

export type GhostIconButtonState = "enabled" | "pressed" | "disabled";
export type GhostIconButtonColor = "primary" | "gray" | "grayTinted" | "invert";
export type GhostIconButtonSize = "sm" | "xs";

export interface GhostIconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  icon?: ReactNode; // INSTANCE_SWAP: 전달되는 아이콘 컴포넌트 또는 ReactNode
  state?: GhostIconButtonState;
  isPadded?: boolean; // true | false
  color?: GhostIconButtonColor;
  size?: GhostIconButtonSize;
  fullWidth?: boolean; // 인터랙티브 컴포넌트 필수 prop
  "aria-label": string; // 텍스트 없는 버튼에 필수
}

// 아이콘 컴포넌트가 size, color prop을 받을 수 있도록 하는 타입
interface IconComponentProps {
  size?: number;
  color?: string;
  [key: string]: unknown; // 기타 props 허용
}

/**
 * GhostIconButton 컴포넌트의 모든 스타일을 계산하는 헬퍼 함수
 */
const getStyles = (props: GhostIconButtonProps) => {
  const {
    state = "enabled",
    isPadded = true,
    color = "primary",
    size = "sm",
    fullWidth = false,
  } = props;

  const isSm = size === "sm";
  const isXs = size === "xs";
  const isDisabled = state === "disabled";

  // 1. Dimensions (height, width, borderRadius, gap)
  let height: string | number;
  let width: string | number;
  let borderRadius: string | number;
  let gap: string | number;

  if (isPadded) {
    height = isSm ? "var(--component-button-height-sm, 40px)" : "var(--height-container-xs, 32px)";
    width = isSm ? "var(--component-button-height-sm, 40px)" : "var(--square-32, 32px)";
    borderRadius = "var(--borderradius-md, 8px)";
    gap = isXs ? "var(--spacing-8, 8px)" : "0px";
  } else {
    // !isPadded (Hug sizing)
    height = "20px"; // isPadded=false 일 때 고정 높이 20px
    width = "auto"; // Hug
    borderRadius = "var(--borderradius-xs, 4px)";
    gap = isXs ? "var(--spacing-8, 8px)" : "0px";
  }

  // fullWidth 적용 (isPadded가 false일 때만 width: auto를 100%로 변경)
  if (!isPadded && fullWidth) {
    width = "100%";
  }

  // 2. Background Color (pressed 상태에만 적용)
  let backgroundColor: string = "transparent";
  if (state === "pressed") {
    if (color === "primary") {
      backgroundColor = isPadded ? "var(--container-primary-subtle2)" : "var(--container-gray-subtle2)";
    } else {
      // gray, grayTinted, invert
      backgroundColor = isPadded ? "var(--container-gray-subtle3)" : "var(--container-gray-subtle2)";
    }
  }

  // 3. Icon Color
  let iconColor: string;
  if (isDisabled) {
    iconColor = "var(--state-disabled-texticon-default)";
  } else {
    switch (color) {
      case "primary":
        iconColor = "var(--texticon-primary-default)";
        break;
      case "gray":
        iconColor = "var(--texticon-gray-default)";
        break;
      case "grayTinted":
        iconColor = "var(--texticon-gray-subtle)";
        break;
      case "invert":
        iconColor = "var(--texticon-gray-invert)";
        break;
      default:
        iconColor = "currentColor"; // Fallback
    }
  }

  const iconSize = isSm ? 20 : 16; // sm: 20px, xs: 16px

  return {
    button: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height,
      width,
      borderRadius,
      gap,
      backgroundColor,
      cursor: isDisabled ? "not-allowed" : "pointer",
      overflow: "hidden",
      position: "relative",
      border: "none", // Ghost 버튼은 border 없음
      color: iconColor, // 아이콘이 currentColor를 사용하도록 부모에 설정
    } as React.CSSProperties, // CSS 커스텀 변수 사용을 위해 캐스팅
    iconSize,
    iconColor,
  };
};

const GhostIconButtonComponent = ({
  icon,
  state,
  isPadded,
  color,
  size,
  fullWidth,
  className = "",
  style,
  "aria-label": ariaLabel, // aria-label prop 추출
  ...props
}: GhostIconButtonProps) => {
  const { button: buttonStyle, iconSize, iconColor } = getStyles({
    icon,
    state,
    isPadded,
    color,
    size,
    fullWidth,
  });
  const isDisabled = state === "disabled";

  /**
   * ReactNode로 전달된 아이콘을 렌더링하고, 필요 시 size와 color prop을 주입합니다.
   * @param node 렌더링할 아이콘 ReactNode
   * @returns 렌더링된 아이콘 ReactNode 또는 null
   */
  const renderIcon = (node: ReactNode) => {
    if (!node) return null;
    if (React.isValidElement(node)) {
      // Icon-like 컴포넌트(ReactElement)인 경우, size와 color prop을 주입
      return React.cloneElement(node as ReactElement<IconComponentProps>, {
        size: iconSize,
        color: iconColor,
      });
    }
    return node; // 유효한 ReactElement가 아니면 그대로 렌더링
  };

  return (
    <button
      className={className}
      style={{ ...buttonStyle, ...style }} // 외부 style prop 적용
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-label={ariaLabel} // aria-label prop 전달
      {...props}
    >
      {renderIcon(icon)}
    </button>
  );
};

const GhostIconButton = memo(GhostIconButtonComponent);
GhostIconButton.displayName = "GhostIconButton";
export { GhostIconButton };