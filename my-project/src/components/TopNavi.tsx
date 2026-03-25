import React, { memo, ReactNode, HTMLAttributes } from "react";
import { IconButton } from "./IconButton";
import { User, Menu, DirectionLeftLg, CloseLarge } from "../icons";

export type TopNaviVariants = "main" | "sub" | "popup";

export interface TopNaviProps extends HTMLAttributes<HTMLDivElement> {
  variants?: TopNaviVariants;
  closeButton?: boolean;
  centerHeading?: boolean;
  title?: string;
}

const variantStyleMap: Record<TopNaviVariants, {
  height: string;
  paddingY: number;
  paddingX: string;
  gap: string;
  textSize: string;
  textStyle: string;
  showLeftButton: boolean;
  showRightButtons: boolean;
  leftButtonIcon?: ReactNode;
  rightButtons?: ReactNode[];
}> = {
  main: {
    height: "var(--height-container-lg, 56px)",
    paddingY: 0,
    paddingX: "var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    textSize: "24px",
    textStyle: "text-style-notosanskr-24-bold",
    showLeftButton: false,
    showRightButtons: true,
    rightButtons: [<User key="user" />, <Menu key="menu" />],
  },
  sub: {
    height: "var(--height-container-md, 48px)",
    paddingY: 0,
    paddingX: "var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    textSize: "16px",
    textStyle: "text-style-notosanskr-16-medium",
    showLeftButton: true,
    showRightButtons: false,
    leftButtonIcon: <DirectionLeftLg />,
  },
  popup: {
    height: "var(--height-container-md, 48px)",
    paddingY: 0,
    paddingX: "var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    textSize: "16px",
    textStyle: "text-style-notosanskr-16-medium",
    showLeftButton: false,
    showRightButtons: false,
  },
};

const TopNaviComponent = ({
  variants = "main",
  closeButton = true,
  centerHeading = true,
  title = variants === "main" ? "LOGO" : "heading",
  className = "",
  style,
  ...props
}: TopNaviProps) => {
  const config = variantStyleMap[variants];

  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: 375,
    height: config.height,
    paddingTop: config.paddingY,
    paddingBottom: config.paddingY,
    paddingLeft: config.paddingX,
    paddingRight: config.paddingX,
    gap: config.gap,
    borderRadius: 0,
    color: "var(--text-icon-gray-default)",
    ...style,
  };

  const leftStyle: React.CSSProperties = {
    display: "flex",
    flex: 1,
    height: "100%",
    alignItems: "center",
    gap: variants === "main" ? "var(--spacing-12, 12px)" : 0,
  };

  const centerStyle: React.CSSProperties = {
    display: "flex",
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: centerHeading ? "center" : "flex-start",
  };

  const rightStyle: React.CSSProperties = {
    display: "flex",
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: variants === "main" ? "var(--spacing-20, 20px)" : 0,
  };

  const titleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: config.textSize,
    fontWeight: variants === "main" ? "bold" : "500",
    color: "var(--text-icon-gray-default)",
  };

  return (
    <div className={`${className}`} style={containerStyle} {...props}>
      {/* Left */}
      <div style={leftStyle}>
        {variants === "main" ? (
          <h2 style={titleStyle} className={config.textStyle}>
            {title}
          </h2>
        ) : config.showLeftButton ? (
          <div style={{ width: "var(--width-container-detail-12, 12px)", height: "100%", display: "flex", alignItems: "center" }}>
            <IconButton variants="gray" state="enabled" size={24} icon={config.leftButtonIcon} />
          </div>
        ) : null}
      </div>

      {/* Center */}
      <div style={centerStyle}>
        {variants !== "main" && (
          <span style={titleStyle} className={config.textStyle}>
            {title}
          </span>
        )}
      </div>

      {/* Right */}
      <div style={rightStyle}>
        {variants === "main" && config.showRightButtons && config.rightButtons?.map((icon, index) => (
          <IconButton key={index} variants="gray" state="enabled" size={20} icon={icon} />
        ))}
        {variants === "popup" && closeButton && (
          <IconButton variants="gray" state="enabled" size={20} icon={<CloseLarge />} />
        )}
      </div>
    </div>
  );
};

const TopNavi = memo(TopNaviComponent);
TopNavi.displayName = "TopNavi";
export { TopNavi };