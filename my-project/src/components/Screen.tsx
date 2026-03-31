import React, { memo, ReactNode, HTMLAttributes } from "react";
import { TopNavi } from "./TopNavi";

export type ScreenVariants = "sub" | "main";

export interface ScreenProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  variants?: ScreenVariants;
}

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
      <TopNavi {...getTopNaviProps()} />
      {children}
    </div>
  );
};

const Screen = memo(ScreenComponent);
Screen.displayName = "Screen";
export { Screen };
