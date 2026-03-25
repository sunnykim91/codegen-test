import React, { memo, HTMLAttributes } from "react";
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
  textStyleClass: string;
  paddingX: string;
}> = {
  main: {
    height: "var(--height-container-lg, 56px)",
    fontSize: "24px",
    fontWeight: "bold",
    textStyleClass: "text-style-notosanskr-heading-24-bold",
    paddingX: "var(--spacing-global-side, 20px)",
  },
  sub: {
    height: "var(--height-container-md, 48px)",
    fontSize: "16px",
    fontWeight: "medium",
    textStyleClass: "text-style-notosanskr-heading-16-medium",
    paddingX: "var(--spacing-global-side, 20px)",
  },
  popup: {
    height: "var(--height-container-md, 48px)",
    fontSize: "16px",
    fontWeight: "medium",
    textStyleClass: "text-style-notosanskr-heading-16-medium",
    paddingX: "var(--spacing-global-side, 20px)",
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
    gap: "var(--spacing-16, 16px)",
    width: "100%",
    height: variantConfig.height,
    paddingLeft: variantConfig.paddingX,
    paddingRight: variantConfig.paddingX,
    borderRadius: 0,
    color: "var(--text-icon-gray-default)",
    ...style,
  };

  const renderMainVariant = () => (
    <>
      <div style={{ display: "flex", flex: 1, height: "100%", gap: "var(--spacing-12, 12px)", alignItems: "center" }}>
        <div
          className={variantConfig.textStyleClass}
          style={{
            color: "var(--text-icon-gray-default)",
            fontSize: variantConfig.fontSize,
            fontWeight: variantConfig.fontWeight,
            margin: 0,
            lineHeight: "36px",
          }}
        >
          LOGO
        </div>
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
          <IconButton variants="gray" state="enabled" size={24} icon={<DirectionLeftLg />} />
        </div>
      </div>
      <div style={{ display: "flex", flex: 1, height: "100%", alignItems: "center", justifyContent: "center" }}>
        <div
          className={variantConfig.textStyleClass}
          style={{
            color: "var(--text-icon-gray-default)",
            fontSize: variantConfig.fontSize,
            fontWeight: variantConfig.fontWeight,
            margin: 0,
            lineHeight: "24px",
          }}
        >
          {heading}
        </div>
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
        <div
          className={variantConfig.textStyleClass}
          style={{
            color: "var(--text-icon-gray-default)",
            fontSize: variantConfig.fontSize,
            fontWeight: variantConfig.fontWeight,
            margin: 0,
            lineHeight: "24px",
          }}
        >
          {heading}
        </div>
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