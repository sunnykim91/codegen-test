import React, { memo, HTMLAttributes } from "react";
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
  padding: string;
  gap: string;
  fontSize: string;
  fontWeight: string;
  textStyle: string;
}> = {
  main: {
    height: "var(--height-container-lg, 56px)",
    padding: "0 var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    fontSize: "24px",
    fontWeight: "bold",
    textStyle: "text-style-notosanskr-heading-24-bold",
  },
  sub: {
    height: "var(--height-container-md, 48px)",
    padding: "0 var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    fontSize: "16px",
    fontWeight: "medium",
    textStyle: "text-style-notosanskr-heading-16-medium",
  },
  popup: {
    height: "var(--height-container-md, 48px)",
    padding: "0 var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    fontSize: "16px",
    fontWeight: "medium",
    textStyle: "text-style-notosanskr-heading-16-medium",
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
  const variantConfig = variantStyleMap[variants];

  const naviStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    width: 375,
    height: variantConfig.height,
    padding: variantConfig.padding,
    gap: variantConfig.gap,
    borderRadius: 0,
    color: "var(--text-icon-gray-default)",
    ...style,
  };

  const renderMainVariant = () => (
    <>
      <div style={{ display: "flex", flex: 1, gap: "var(--spacing-12, 12px)" }}>
        <h2 
          className={variantConfig.textStyle}
          style={{ 
            margin: 0, 
            fontSize: variantConfig.fontSize, 
            fontWeight: variantConfig.fontWeight,
            color: "var(--text-icon-gray-default)"
          }}
        >
          {title}
        </h2>
      </div>
      <div style={{ display: "flex", flex: 1, gap: "var(--spacing-20, 20px)" }}>
        <IconButton variants="gray" state="enabled" size={20} icon={<User />} />
        <IconButton variants="gray" state="enabled" size={20} icon={<Menu />} />
      </div>
    </>
  );

  const renderSubVariant = () => (
    <>
      <div style={{ display: "flex", flex: 1 }}>
        <div style={{ display: "flex", width: "var(--width-container-detail-12, 12px)", height: "100%" }}>
          <IconButton variants="gray" state="enabled" size={24} icon={<DirectionLeftLg />} />
        </div>
      </div>
      <div style={{ display: "flex", flex: 1 }}>
        <span 
          className={variantConfig.textStyle}
          style={{ 
            margin: 0, 
            fontSize: variantConfig.fontSize, 
            fontWeight: variantConfig.fontWeight,
            color: "var(--text-icon-gray-default)"
          }}
        >
          {title}
        </span>
      </div>
      <div style={{ display: "flex", flex: 1, gap: "var(--spacing-20, 20px)" }}>
      </div>
    </>
  );

  const renderPopupVariant = () => (
    <>
      <div style={{ display: "flex", flex: 1, gap: "var(--spacing-20, 20px)" }}>
      </div>
      <div style={{ display: "flex", flex: 1 }}>
        <span 
          className={variantConfig.textStyle}
          style={{ 
            margin: 0, 
            fontSize: variantConfig.fontSize, 
            fontWeight: variantConfig.fontWeight,
            color: "var(--text-icon-gray-default)"
          }}
        >
          {title}
        </span>
      </div>
      <div style={{ display: "flex", flex: 1 }}>
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
    <div className={className} style={naviStyle} {...props}>
      {renderContent()}
    </div>
  );
};

const TopNavi = memo(TopNaviComponent);
TopNavi.displayName = "TopNavi";
export { TopNavi };