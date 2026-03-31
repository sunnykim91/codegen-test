import React, { memo, ReactNode, HTMLAttributes } from "react";
import { TopNavi, TopNaviVariants } from "./TopNavi";

export type ScreenVariants = "sub" | "main";

export interface ScreenProps extends HTMLAttributes<HTMLDivElement> {
  variants?: ScreenVariants;
  children?: ReactNode;
}

const variantStyleMap: Record<ScreenVariants, {
  background: string;
  foreground: string;
  topNaviVariants: TopNaviVariants;
  width: number;
  height: number;
}> = {
  sub: {
    background: "#FFFFFF",
    foreground: "var(--texticon-gray-default)",
    topNaviVariants: "sub",
    width: 393,
    height: 852,
  },
  main: {
    background: "#FFFFFF",
    foreground: "var(--texticon-gray-default)",
    topNaviVariants: "main",
    width: 393,
    height: 852,
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

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    width: config.width,
    height: config.height,
    borderRadius: 0,
    padding: 0,
    backgroundColor: config.background,
    color: config.foreground,
    ...style,
  };

  const statusBarStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: 393,
    height: 48,
    padding: "21px 16px 19px 16px",
  };

  const timeStyle: React.CSSProperties = {
    width: 33,
    height: 13,
  };

  const levelsStyle: React.CSSProperties = {
    width: 76,
    height: 13,
  };

  return (
    <div className={className} style={containerStyle} {...props}>
      <div className="status-bar" style={statusBarStyle}>
        <div className="time" style={timeStyle}></div>
        <div className="levels" style={levelsStyle}></div>
      </div>
      
      <TopNavi 
        variants={config.topNaviVariants}
        heading={variants === "sub" ? "서브" : undefined}
      />
      
      {children}
    </div>
  );
};

const Screen = memo(ScreenComponent);
Screen.displayName = "Screen";
export { Screen };