import React, { memo, ReactNode, HTMLAttributes } from "react";
import { TopNavi } from "./TopNavi";
import { StatusBar } from "./StatusBar";

export type ScreenVariants = "sub" | "main";

export interface ScreenProps extends HTMLAttributes<HTMLDivElement> {
  variants?: ScreenVariants;
  children?: ReactNode;
}

const variantStyleMap: Record<ScreenVariants, {
  background: string;
  color: string;
  width: number;
  height: number;
  topNaviVariants: "sub" | "main";
  topNaviChildren?: string;
}> = {
  sub: {
    background: "#FFFFFF",
    color: "var(--text-icon-gray-default)",
    width: 393,
    height: 852,
    topNaviVariants: "sub",
    topNaviChildren: "서브",
  },
  main: {
    background: "#FFFFFF",
    color: "var(--text-icon-gray-default)",
    width: 393,
    height: 852,
    topNaviVariants: "main",
  },
};

const ScreenComponent = ({
  variants = "main",
  children,
  className = "",
  style,
  ...props
}: ScreenProps) => {
  const config = variantStyleMap[variants];

  const screenStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    padding: 0,
    width: config.width,
    height: config.height,
    borderRadius: 0,
    backgroundColor: config.background,
    color: config.color,
    ...style,
  };

  return (
    <div className={className} style={screenStyle} {...props}>
      <StatusBar platform="ios" />
      <TopNavi 
        variants={config.topNaviVariants}
        centerHeading={variants === "sub"}
      >
        {config.topNaviChildren}
      </TopNavi>
      {children}
    </div>
  );
};

const Screen = memo(ScreenComponent);
Screen.displayName = "Screen";
export { Screen };