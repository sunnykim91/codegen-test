import React, { memo, HTMLAttributes } from "react";
import { IconButton } from "./IconButton";
import { User, Menu, DirectionLeftLg, CloseLarge } from "../icons";

export type TopNaviVariants = "main" | "sub" | "popup";

export interface TopNaviProps extends HTMLAttributes<HTMLDivElement> {
  closeButton?: boolean;
  centerHeading?: boolean;
  variants?: TopNaviVariants;
  title?: string;
}

const variantStyleMap: Record<TopNaviVariants, {
  height: string;
  padding: string;
  fontSize: string;
  fontWeight: string;
  textStyle: string;
}> = {
  main: {
    height: "var(--height-container-lg, 56px)",
    padding: "0 var(--spacing-global-side, 20px)",
    fontSize: "24px",
    fontWeight: "bold",
    textStyle: "text-style-notosanskr-heading-24-bold",
  },
  sub: {
    height: "var(--height-container-md, 48px)",
    padding: "0 var(--spacing-global-side, 20px)",
    fontSize: "16px",
    fontWeight: "medium",
    textStyle: "text-style-notosanskr-heading-16-medium",
  },
  popup: {
    height: "var(--height-container-md, 48px)",
    padding: "0 var(--spacing-global-side, 20px)",
    fontSize: "16px",
    fontWeight: "medium",
    textStyle: "text-style-notosanskr-heading-16-medium",
  },
};

const TopNaviComponent = ({
  closeButton = true,
  centerHeading = true,
  variants = "main",
  title = "heading",
  className = "",
  style,
  ...props
}: TopNaviProps) => {
  const variantConfig = variantStyleMap[variants];

  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    width: 375,
    height: variantConfig.height,
    padding: variantConfig.padding,
    gap: "var(--spacing-16, 16px)",
    color: "var(--text-icon-gray-default)",
    borderRadius: 0,
    ...style,
  };

  const leftStyle: React.CSSProperties = {
    display: "flex",
    flex: 1,
    height: "100%",
    alignItems: "center",
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
  };

  const titleStyle: React.CSSProperties = {
    fontSize: variantConfig.fontSize,
    fontWeight: variantConfig.fontWeight,
    color: "var(--text-icon-gray-default)",
    margin: 0,
  };

  const renderMainVariant = () => (
    <>
      <div style={leftStyle}>
        <div style={{ display: "flex", gap: "var(--spacing-12, 12px)" }}>
          <h2 className={variantConfig.textStyle} style={titleStyle}>
            LOGO
          </h2>
        </div>
      </div>
      <div style={rightStyle}>
        <div style={{ display: "flex", gap: "var(--spacing-20, 20px)" }}>
          <IconButton variants="gray" state="enabled" size={20} icon={<User />} />
          <IconButton variants="gray" state="enabled" size={20} icon={<Menu />} />
        </div>
      </div>
    </>
  );

  const renderSubVariant = () => (
    <>
      <div style={leftStyle}>
        <div style={{ width: "var(--width-container-detail-12, 12px)", height: "100%", display: "flex", alignItems: "center" }}>
          <IconButton variants="gray" state="enabled" size={24} icon={<DirectionLeftLg />} />
        </div>
      </div>
      <div style={centerStyle}>
        <h3 className={variantConfig.textStyle} style={titleStyle}>
          {title}
        </h3>
      </div>
      <div style={rightStyle}>
        <div style={{ display: "flex", gap: "var(--spacing-20, 20px)" }}>
        </div>
      </div>
    </>
  );

  const renderPopupVariant = () => (
    <>
      <div style={leftStyle}>
        <div style={{ display: "flex", gap: "var(--spacing-20, 20px)" }}>
        </div>
      </div>
      <div style={centerStyle}>
        <h3 className={variantConfig.textStyle} style={titleStyle}>
          {title}
        </h3>
      </div>
      <div style={rightStyle}>
        {closeButton && (
          <IconButton variants="gray" state="enabled" size={20} icon={<CloseLarge />} />
        )}
      </div>
    </>
  );

  const renderVariant = () => {
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
      {renderVariant()}
    </div>
  );
};

const TopNavi = memo(TopNaviComponent);
TopNavi.displayName = "TopNavi";
export { TopNavi };