import React, { memo, ReactNode, HTMLAttributes } from "react";
import { IconButton } from "./IconButton";
import { Icon } from "./Icon";
import { User, Menu, DirectionLeftLg, CloseLarge } from "../icons";

export type TopNaviVariants = "main" | "sub" | "popup";

export interface TopNaviProps extends HTMLAttributes<HTMLElement> {
  variants?: TopNaviVariants;
  "close-button#5276:32"?: boolean;
  "center-heading#6693:4"?: boolean;
  heading?: string;
}

const variantStyleMap: Record<TopNaviVariants, {
  height: string;
  fontSize: string;
  fontWeight: string;
  textStyleClass: string;
  showBackButton: boolean;
  showCloseButton: boolean;
  showUserAndMenu: boolean;
}> = {
  main: {
    height: "var(--height-container-lg, 56px)",
    fontSize: "24px",
    fontWeight: "bold",
    textStyleClass: "text-style-notosanskr-heading-24-bold",
    showBackButton: false,
    showCloseButton: false,
    showUserAndMenu: true,
  },
  sub: {
    height: "var(--height-container-md, 48px)",
    fontSize: "16px",
    fontWeight: "medium",
    textStyleClass: "text-style-notosanskr-heading-16-medium",
    showBackButton: true,
    showCloseButton: false,
    showUserAndMenu: false,
  },
  popup: {
    height: "var(--height-container-md, 48px)",
    fontSize: "16px",
    fontWeight: "medium",
    textStyleClass: "text-style-notosanskr-heading-16-medium",
    showBackButton: false,
    showCloseButton: true,
    showUserAndMenu: false,
  },
};

const TopNaviComponent = ({
  variants = "main",
  "close-button#5276:32": closeButton = true,
  "center-heading#6693:4": centerHeading = true,
  heading = "heading",
  className = "",
  style,
  ...props
}: TopNaviProps) => {
  const config = variantStyleMap[variants];

  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "var(--spacing-16, 16px)",
    width: "100%",
    height: config.height,
    padding: `0 var(--spacing-global-side, 20px)`,
    borderRadius: 0,
    color: "var(--text-icon-gray-default)",
    ...style,
  };

  const leftStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    flex: 1,
    height: "100%",
  };

  const centerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: centerHeading ? "center" : "flex-start",
    flex: 1,
    height: "100%",
  };

  const rightStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    height: "100%",
    gap: "var(--spacing-20, 20px)",
  };

  const headingStyle: React.CSSProperties = {
    margin: 0,
    fontSize: config.fontSize,
    fontWeight: config.fontWeight,
    color: "var(--text-icon-gray-default)",
  };

  const renderLeft = () => {
    if (variants === "main") {
      return (
        <div style={leftStyle}>
          <h2 className={config.textStyleClass} style={headingStyle}>
            LOGO
          </h2>
        </div>
      );
    }

    if (variants === "sub" && config.showBackButton) {
      return (
        <div style={leftStyle}>
          <div style={{ width: "var(--width-container-detail-12, 12px)", height: "100%", display: "flex", alignItems: "center" }}>
            <IconButton variants="gray" state="enabled" size={24}>
              <Icon size={24}>
                <DirectionLeftLg />
              </Icon>
            </IconButton>
          </div>
        </div>
      );
    }

    return <div style={leftStyle} />;
  };

  const renderCenter = () => {
    if (variants === "main") {
      return null;
    }

    return (
      <div style={centerStyle}>
        <h2 className={config.textStyleClass} style={headingStyle}>
          {heading}
        </h2>
      </div>
    );
  };

  const renderRight = () => {
    if (variants === "main" && config.showUserAndMenu) {
      return (
        <div style={rightStyle}>
          <IconButton variants="gray" state="enabled" size={20}>
            <Icon size={20}>
              <User />
            </Icon>
          </IconButton>
          <IconButton variants="gray" state="enabled" size={20}>
            <Icon size={20}>
              <Menu />
            </Icon>
          </IconButton>
        </div>
      );
    }

    if (variants === "popup" && config.showCloseButton && closeButton) {
      return (
        <div style={rightStyle}>
          <IconButton variants="gray" state="enabled" size={20}>
            <Icon size={20}>
              <CloseLarge />
            </Icon>
          </IconButton>
        </div>
      );
    }

    return <div style={rightStyle} />;
  };

  return (
    <nav className={className} style={containerStyle} {...props}>
      {renderLeft()}
      {renderCenter()}
      {renderRight()}
    </nav>
  );
};

const TopNavi = memo(TopNaviComponent);
TopNavi.displayName = "TopNavi";
export { TopNavi };