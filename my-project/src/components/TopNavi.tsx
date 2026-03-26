import React, { memo, ReactNode, HTMLAttributes } from "react";
import { IconButton } from "./IconButton";
import { Icon } from "./Icon";
import { User, Menu, DirectionLeft, CloseLarge } from "../icons";

export type TopNaviVariants = "main" | "sub" | "popup";

export interface TopNaviProps extends HTMLAttributes<HTMLDivElement> {
  variants?: TopNaviVariants;
  closeButton?: boolean;
  centerHeading?: boolean;
  title?: string;
  onBackClick?: () => void;
  onCloseClick?: () => void;
  onUserClick?: () => void;
  onMenuClick?: () => void;
}

const variantStyleMap: Record<TopNaviVariants, {
  height: string;
  padding: string;
  gap: string;
  titleSize: string;
  titleClass: string;
}> = {
  main: {
    height: "var(--height-container-lg, 56px)",
    padding: "0 var(--spacing-global-side, 20px) 0 var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    titleSize: "24px",
    titleClass: "text-style-notosanskr-heading-24-bold",
  },
  sub: {
    height: "var(--height-container-md, 48px)",
    padding: "0 var(--spacing-global-side, 20px) 0 var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    titleSize: "16px",
    titleClass: "text-style-notosanskr-heading-16-medium",
  },
  popup: {
    height: "var(--height-container-md, 48px)",
    padding: "0 var(--spacing-global-side, 20px) 0 var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    titleSize: "16px",
    titleClass: "text-style-notosanskr-heading-16-medium",
  },
};

const TopNaviComponent = ({
  variants = "main",
  closeButton = true,
  centerHeading = true,
  title = "heading",
  onBackClick,
  onCloseClick,
  onUserClick,
  onMenuClick,
  className = "",
  style,
  ...props
}: TopNaviProps) => {
  const config = variantStyleMap[variants];

  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    height: config.height,
    padding: config.padding,
    gap: config.gap,
    borderRadius: 0,
    color: "var(--text-icon-gray-default)",
    ...style,
  };

  const renderLeftSection = () => {
    if (variants === "main") {
      return (
        <div style={{ flex: 1, display: "flex", gap: "var(--spacing-12, 12px)" }}>
          <span 
            className={config.titleClass}
            style={{ 
              color: "var(--text-icon-gray-default)",
              width: 67,
              height: 36
            }}
          >
            LOGO
          </span>
        </div>
      );
    }

    if (variants === "sub") {
      return (
        <div style={{ flex: 1, display: "flex", gap: 0 }}>
          <div style={{ width: "var(--width-container-detail-12, 12px)", display: "flex" }}>
            <IconButton
              variants="gray"
              state="enabled"
              size={24}
              icon={<DirectionLeft />}
              onClick={onBackClick}
            />
          </div>
        </div>
      );
    }

    // popup
    return (
      <div style={{ flex: 1, display: "flex", gap: "var(--spacing-20, 20px)" }}>
      </div>
    );
  };

  const renderCenterSection = () => {
    if (variants === "main") return null;

    return (
      <div style={{ flex: 1, display: "flex", gap: 0 }}>
        <span 
          className={config.titleClass}
          style={{ 
            color: "var(--text-icon-gray-default)",
            width: 62,
            height: 24
          }}
        >
          {title}
        </span>
      </div>
    );
  };

  const renderRightSection = () => {
    if (variants === "main") {
      return (
        <div style={{ flex: 1, display: "flex", gap: "var(--spacing-20, 20px)" }}>
          <IconButton
            variants="gray"
            state="enabled"
            size={20}
            icon={<User />}
            onClick={onUserClick}
          />
          <IconButton
            variants="gray"
            state="enabled"
            size={20}
            icon={<Menu />}
            onClick={onMenuClick}
          />
        </div>
      );
    }

    if (variants === "sub") {
      return (
        <div style={{ flex: 1, display: "flex", gap: "var(--spacing-20, 20px)" }}>
        </div>
      );
    }

    // popup
    return (
      <div style={{ flex: 1, display: "flex", gap: 0 }}>
        {closeButton && (
          <IconButton
            variants="gray"
            state="enabled"
            size={20}
            icon={<CloseLarge />}
            onClick={onCloseClick}
          />
        )}
      </div>
    );
  };

  return (
    <div className={className} style={containerStyle} {...props}>
      {renderLeftSection()}
      {renderCenterSection()}
      {renderRightSection()}
    </div>
  );
};

const TopNavi = memo(TopNaviComponent);
TopNavi.displayName = "TopNavi";
export { TopNavi };