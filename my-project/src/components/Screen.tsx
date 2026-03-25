import React, { memo, ReactNode, HTMLAttributes } from "react";
import { TopNavi } from "./TopNavi";

export type ScreenVariants = "sub" | "main";

export interface ScreenProps extends HTMLAttributes<HTMLDivElement> {
  variants?: ScreenVariants;
  children?: ReactNode;
}

const variantStyleMap: Record<ScreenVariants, {
  width: number;
  height: number;
  background: string;
  color: string;
  statusBarHeight: number;
  topNaviHeight: string;
  slotHeight: number;
}> = {
  sub: {
    width: 393,
    height: 852,
    background: "#FFFFFF",
    color: "var(--text-icon-gray-default)",
    statusBarHeight: 48,
    topNaviHeight: "var(--height-container-md, 48px)",
    slotHeight: 756,
  },
  main: {
    width: 393,
    height: 852,
    background: "#FFFFFF",
    color: "var(--text-icon-gray-default)",
    statusBarHeight: 48,
    topNaviHeight: "var(--height-container-lg, 56px)",
    slotHeight: 748,
  },
};

const StatusBarComponent = ({ platform = "ios" }: { platform?: string }) => {
  return (
    <div
      style={{
        width: 393,
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "21px 16px 19px 16px",
        gap: 154,
      }}
    >
      <div style={{ width: 33, height: 13 }}>
        {/* Time placeholder */}
      </div>
      <div style={{ width: 76, height: 13 }}>
        {/* Levels placeholder */}
      </div>
    </div>
  );
};

const ScreenComponent = ({
  variants = "main",
  children,
  className = "",
  style,
  ...props
}: ScreenProps) => {
  const variantConfig = variantStyleMap[variants];

  const screenStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: variantConfig.width,
    height: variantConfig.height,
    backgroundColor: variantConfig.background,
    color: variantConfig.color,
    gap: 0,
    padding: 0,
    borderRadius: 0,
    ...style,
  };

  const slotStyle: React.CSSProperties = {
    width: 393,
    height: variantConfig.slotHeight,
  };

  return (
    <div className={className} style={screenStyle} {...props}>
      <StatusBarComponent platform="ios" />
      <TopNavi variants={variants} />
      <div style={slotStyle}>
        {children}
      </div>
    </div>
  );
};

const Screen = memo(ScreenComponent);
Screen.displayName = "Screen";
export { Screen };