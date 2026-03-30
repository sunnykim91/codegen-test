import React, { memo, ReactNode, HTMLAttributes } from "react";
import { TopNavi } from "./TopNavi";

export type ScreenVariants = "sub" | "main";

export interface ScreenProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  variants?: ScreenVariants;
}

const StatusBar = ({ platform = "ios" }: { platform?: string }) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    width: 393,
    height: 48,
    padding: "21px 16px 19px 16px",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 154,
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
    <div className="status-bar" style={containerStyle}>
      <div className="time" style={timeStyle}>
        <span className="text-style-notosanskr-label-14-medium" style={{ color: "var(--texticon-gray-default)" }}>
          9:41
        </span>
      </div>
      <div className="levels" style={levelsStyle}>
        <span className="text-style-notosanskr-label-14-medium" style={{ color: "var(--texticon-gray-default)" }}>
          100%
        </span>
      </div>
    </div>
  );
};

const ScreenComponent = ({
  children,
  variants = "sub",
  className = "",
  style,
  ...props
}: ScreenProps) => {
  const screenStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: 393,
    height: 852,
    padding: 0,
    gap: 0,
    borderRadius: 0,
    backgroundColor: "#FFFFFF",
    color: "var(--texticon-gray-default)",
    ...style,
  };

  const getTopNaviProps = () => {
    if (variants === "main") {
      return {
        variants: "main" as const,
        showHeading: false,
        heading: "메인",
      };
    }
    return {
      variants: "sub" as const,
      showHeading: true,
      heading: "서브",
    };
  };

  return (
    <div className={className} style={screenStyle} {...props}>
      <StatusBar platform="ios" />
      <TopNavi {...getTopNaviProps()} />
      {children}
    </div>
  );
};

const Screen = memo(ScreenComponent);
Screen.displayName = "Screen";
export { Screen };