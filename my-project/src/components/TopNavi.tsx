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
  title = "LOGO",
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
    paddingLeft: "var(--spacing-global-side, 20px)",
    paddingRight: "var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    borderRadius: 0,
    color: "var(--text-icon-gray-default)",
    ...style,
  };

  const textStyle: React.CSSProperties = {
    color: "var(--text-icon-gray-default)",
    fontSize: variantConfig.fontSize,
    fontWeight: variantConfig.fontWeight,
    margin: 0,
  };

  if (variants === "main") {
    return (
      <div className={className} style={containerStyle} {...props}>
        <div style={{ display: "flex", flex: 1, gap: "var(--spacing-12, 12px)" }}>
          <h2 style={{ ...textStyle, width: 67, height: 36 }}>
            {title}
          </h2>
        </div>
        <div style={{ display: "flex", flex: 1, gap: "var(--spacing-20, 20px)" }}>
          <IconButton variants="gray" state="enabled" size={20} icon={<User />} />
          <IconButton variants="gray" state="enabled" size={20} icon={<Menu />} />
        </div>
      </div>
    );
  }

  if (variants === "sub") {
    return (
      <div className={className} style={containerStyle} {...props}>
        <div style={{ display: "flex", flex: 1 }}>
          <div style={{ display: "flex", width: "var(--width-container-detail-12, 12px)" }}>
            <IconButton variants="gray" state="enabled" size={24} icon={<DirectionLeftLg />} />
          </div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>
          <span style={{ ...textStyle, width: 62, height: 24 }}>
            {title}
          </span>
        </div>
        <div style={{ display: "flex", flex: 1, gap: "var(--spacing-20, 20px)" }}>
        </div>
      </div>
    );
  }

  // popup variant
  return (
    <div className={className} style={containerStyle} {...props}>
      <div style={{ display: "flex", flex: 1, gap: "var(--spacing-20, 20px)" }}>
      </div>
      <div style={{ display: "flex", flex: 1 }}>
        <span style={{ ...textStyle, width: 62, height: 24 }}>
          {title}
        </span>
      </div>
      <div style={{ display: "flex", flex: 1 }}>
        {closeButton && (
          <IconButton variants="gray" state="enabled" size={20} icon={<CloseLarge />} />
        )}
      </div>
    </div>
  );
};

const TopNavi = memo(TopNaviComponent);
TopNavi.displayName = "TopNavi";
export { TopNavi };