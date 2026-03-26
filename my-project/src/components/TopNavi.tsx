import React, { memo, ReactNode, HTMLAttributes } from "react";
import { IconButton } from "./IconButton";
import { Icon } from "./Icon";
import { User, Menu, DirectionLeft, CloseLarge } from "../icons";

export type TopNaviVariants = "main" | "sub" | "popup";

export interface TopNaviProps extends HTMLAttributes<HTMLDivElement> {
  variants?: TopNaviVariants;
  closeButton?: boolean;
  centerHeading?: boolean;
  children?: ReactNode;
}

const variantStyleMap: Record<TopNaviVariants, {
  height: string;
  padding: string;
  gap: string;
  fontSize: string;
  fontWeight: string;
  textStyleClass: string;
}> = {
  main: {
    height: "var(--height-container-lg, 56px)",
    padding: "0 var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    fontSize: "24px",
    fontWeight: "bold",
    textStyleClass: "text-style-notosanskr-heading-24-bold",
  },
  sub: {
    height: "var(--height-container-md, 48px)",
    padding: "0 var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    fontSize: "16px",
    fontWeight: "medium",
    textStyleClass: "text-style-notosanskr-heading-16-medium",
  },
  popup: {
    height: "var(--height-container-md, 48px)",
    padding: "0 var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    fontSize: "16px",
    fontWeight: "medium",
    textStyleClass: "text-style-notosanskr-heading-16-medium",
  },
};

const TopNaviComponent = ({
  variants = "main",
  closeButton = true,
  centerHeading = true,
  children,
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
    width: 375,
    borderRadius: 0,
    color: "var(--text-icon-gray-default)",
    ...style,
  };

  const renderMainVariant = () => (
    <>
      <div style={{ display: "flex", flex: 1, height: "100%", gap: "var(--spacing-12, 12px)", alignItems: "center" }}>
        <span className={config.textStyleClass} style={{ color: "var(--text-icon-gray-default)" }}>
          LOGO
        </span>
      </div>
      <div style={{ display: "flex", flex: 1, height: "100%", gap: "var(--spacing-20, 20px)", alignItems: "center", justifyContent: "flex-end" }}>
        <IconButton variants="gray" state="enabled" size={20} icon={<User />} />
        <IconButton variants="gray" state="enabled" size={20} icon={<Menu />} />
      </div>
    </>
  );

  const renderSubVariant = () => (
    <>
      <div style={{ display: "flex", flex: 1, height: "100%", alignItems: "center" }}>
        <div style={{ display: "flex", width: "var(--width-container-detail-12, 12px)", height: "100%", alignItems: "center" }}>
          <IconButton variants="gray" state="enabled" size={24} icon={<DirectionLeft />} />
        </div>
      </div>
      <div style={{ display: "flex", flex: 1, height: "100%", alignItems: "center", justifyContent: "center" }}>
        {centerHeading && (
          <span className={config.textStyleClass} style={{ color: "var(--text-icon-gray-default)" }}>
            {children || "heading"}
          </span>
        )}
      </div>
      <div style={{ display: "flex", flex: 1, height: "100%", gap: "var(--spacing-20, 20px)", alignItems: "center" }}>
      </div>
    </>
  );

  const renderPopupVariant = () => (
    <>
      <div style={{ display: "flex", flex: 1, height: "100%", gap: "var(--spacing-20, 20px)", alignItems: "center" }}>
      </div>
      <div style={{ display: "flex", flex: 1, height: "100%", alignItems: "center", justifyContent: "center" }}>
        {centerHeading && (
          <span className={config.textStyleClass} style={{ color: "var(--text-icon-gray-default)" }}>
            {children || "heading"}
          </span>
        )}
      </div>
      <div style={{ display: "flex", flex: 1, height: "100%", alignItems: "center", justifyContent: "flex-end" }}>
        {closeButton && (
          <IconButton variants="gray" state="enabled" size={20} icon={<CloseLarge />} />
        )}
      </div>
    </>
  );

  const renderContent = () => {
    switch (variants) {
      case "main":
        return renderMainVariant();
      case "sub":
        return renderSubVariant();
      case "popup":
        return renderPopupVariant();
      default:
        return renderMainVariant();
    }
  };

  return (
    <div className={className} style={containerStyle} {...props}>
      {renderContent()}
    </div>
  );
};

const TopNavi = memo(TopNaviComponent);
TopNavi.displayName = "TopNavi";
export { TopNavi };