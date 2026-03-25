import React, { memo, ReactNode, HTMLAttributes } from "react";
import { StatusBar } from "./StatusBar";
import { TopNavi } from "./TopNavi";
import { IconButton } from "./IconButton";
import { Icon } from "./Icon";
import { DirectionLeftLg } from "../icons";
import { User } from "../icons";
import { Menu } from "../icons";

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
}> = {
  sub: {
    background: "#FFFFFF",
    color: "var(--text-icon-gray-default)",
    width: 393,
    height: 852,
  },
  main: {
    background: "#FFFFFF",
    color: "var(--text-icon-gray-default)",
    width: 393,
    height: 852,
  },
};

const ScreenComponent = ({
  variants = "sub",
  children,
  className = "",
  style,
  ...props
}: ScreenProps) => {
  const variantConfig = variantStyleMap[variants];

  const screenStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    width: variantConfig.width,
    height: variantConfig.height,
    backgroundColor: variantConfig.background,
    color: variantConfig.color,
    borderRadius: 0,
    ...style,
  };

  const renderTopNavi = () => {
    if (variants === "sub") {
      return (
        <TopNavi variants="sub" style={{
          width: 393,
          flex: 1,
          display: "flex",
          gap: "var(--spacing-16, 16px)",
          paddingLeft: "var(--spacing-global-side, 20px)",
          paddingRight: "var(--spacing-global-side, 20px)",
        }}>
          <div style={{
            display: "flex",
            gap: 0,
            flex: 1,
          }}>
            <div style={{
              display: "flex",
              gap: 0,
              width: "var(--width-container-detail-12, 12px)",
              flex: 1,
            }}>
              <IconButton variants="gray" state="enabled" size={24} style={{ borderRadius: 2 }}>
                <Icon size={24}>
                  <DirectionLeftLg size={24} />
                </Icon>
              </IconButton>
            </div>
          </div>
          <div style={{
            display: "flex",
            gap: 0,
            flex: 1,
          }}>
            <span style={{
              width: 30,
              height: 24,
              fontSize: "16px",
              fontWeight: "500",
              color: variantConfig.color,
            }}>
              서브
            </span>
          </div>
          <div style={{
            display: "flex",
            gap: "var(--spacing-20, 20px)",
            flex: 1,
          }} />
        </TopNavi>
      );
    }

    return (
      <TopNavi variants="main" style={{
        width: 393,
        flex: 1,
        display: "flex",
        gap: "var(--spacing-16, 16px)",
        paddingLeft: "var(--spacing-global-side, 20px)",
        paddingRight: "var(--spacing-global-side, 20px)",
      }}>
        <div style={{
          display: "flex",
          gap: "var(--spacing-12, 12px)",
          flex: 1,
        }}>
          <span style={{
            width: 45,
            height: 36,
            fontSize: "24px",
            fontWeight: "700",
            color: variantConfig.color,
          }}>
            메인
          </span>
        </div>
        <div style={{
          display: "flex",
          gap: "var(--spacing-20, 20px)",
          flex: 1,
        }}>
          <IconButton variants="gray" state="enabled" size={20} style={{ borderRadius: 2 }}>
            <Icon size={20}>
              <User size={20} />
            </Icon>
          </IconButton>
          <IconButton variants="gray" state="enabled" size={20} style={{ borderRadius: 2 }}>
            <Icon size={20}>
              <Menu size={20} />
            </Icon>
          </IconButton>
        </div>
      </TopNavi>
    );
  };

  return (
    <div className={className} style={screenStyle} {...props}>
      <StatusBar platform="ios" style={{ width: 393, height: 48 }} />
      {renderTopNavi()}
      <div style={{ width: 393, height: variants === "sub" ? 756 : 748 }}>
        {children}
      </div>
    </div>
  );
};

const Screen = memo(ScreenComponent);
Screen.displayName = "Screen";
export { Screen };