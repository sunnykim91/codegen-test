import React, { memo, ReactNode, HTMLAttributes } from "react";
import { IconButton } from "./IconButton";
import { User, Menu, DirectionLeftLg, CloseLarge } from "../icons";

export type TopNaviVariants = "main" | "sub" | "popup";

export interface TopNaviProps extends HTMLAttributes<HTMLDivElement> {
  variants?: TopNaviVariants;
  closeButton?: boolean;
  centerHeading?: boolean;
  heading?: string;
}

const variantStyleMap: Record<TopNaviVariants, {
  height: string;
  fontSize: string;
  fontWeight: string;
  textStyle: string;
}> = {
  main: {
    height: "var(--height-container-lg, 56px)",
    fontSize: "24px",
    fontWeight: "bold",
    textStyle: "text-style-notosanskr-24-bold",
  },
  sub: {
    height: "var(--height-container-md, 48px)",
    fontSize: "16px",
    fontWeight: "medium",
    textStyle: "text-style-notosanskr-16-medium",
  },
  popup: {
    height: "var(--height-container-md, 48px)",
    fontSize: "16px",
    fontWeight: "medium",
    textStyle: "text-style-notosanskr-16-medium",
  },
};

const TopNaviComponent = ({
  variants = "main",
  closeButton = true,
  centerHeading = true,
  heading = "heading",
  className = "",
  style,
  ...props
}: TopNaviProps) => {
  const variantConfig = variantStyleMap[variants];

  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "var(--spacing-16, 16px)",
    width: 375,
    height: variantConfig.height,
    padding: `0 var(--spacing-global-side, 20px)`,
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
    justifyContent: "center",
  };

  const rightStyle: React.CSSProperties = {
    display: "flex",
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "var(--spacing-20, 20px)",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: variantConfig.fontSize,
    fontWeight: variantConfig.fontWeight,
    color: "var(--text-icon-gray-default)",
    margin: 0,
  };

  const renderLeftContent = () => {
    if (variants === "main") {
      return (
        <span className={variantConfig.textStyle} style={headingStyle}>
          LOGO
        </span>
      );
    }
    
    if (variants === "sub") {
      return (
        <div style={{ width: "var(--width-container-detail-12, 12px)", height: "100%", display: "flex", alignItems: "center" }}>
          <IconButton variants="gray" state="enabled" size={24} icon={<DirectionLeftLg />} />
        </div>
      );
    }
    
    return null;
  };

  const renderCenterContent = () => {
    if (variants === "main") return null;
    
    if (centerHeading) {
      return (
        <span className={variantConfig.textStyle} style={headingStyle}>
          {heading}
        </span>
      );
    }
    
    return null;
  };

  const renderRightContent = () => {
    if (variants === "main") {
      return (
        <>
          <IconButton variants="gray" state="enabled" size={20} icon={<User />} />
          <IconButton variants="gray" state="enabled" size={20} icon={<Menu />} />
        </>
      );
    }
    
    if (variants === "popup" && closeButton) {
      return (
        <IconButton variants="gray" state="enabled" size={20} icon={<CloseLarge />} />
      );
    }
    
    return null;
  };

  return (
    <div className={className} style={containerStyle} {...props}>
      <div style={leftStyle}>
        {renderLeftContent()}
      </div>
      <div style={centerStyle}>
        {renderCenterContent()}
      </div>
      <div style={rightStyle}>
        {renderRightContent()}
      </div>
    </div>
  );
};

const TopNavi = memo(TopNaviComponent);
TopNavi.displayName = "TopNavi";
export { TopNavi };