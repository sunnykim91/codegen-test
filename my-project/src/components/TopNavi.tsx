import React, { memo, ReactNode, HTMLAttributes } from "react";
import { IconButton } from "./IconButton";
import { User, Menu, DirectionLeftLg, CloseLarge } from "../icons";

export type TopNaviVariants = "main" | "sub" | "popup";

export interface TopNaviProps extends HTMLAttributes<HTMLDivElement> {
  variants?: TopNaviVariants;
  closeButton?: boolean;
  centerHeading?: boolean;
  heading?: ReactNode;
}

const variantStyleMap: Record<TopNaviVariants, {
  height: string;
  fontSize: string;
  fontWeight: string;
  padding: string;
  gap: string;
  headingTextStyle: string;
}> = {
  main: {
    height: "var(--height-container-lg, 56px)",
    fontSize: "24px",
    fontWeight: "bold",
    padding: "0 var(--spacing-global-side, 20px) 0 var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    headingTextStyle: "text-style-notosanskr-heading-24-bold",
  },
  sub: {
    height: "var(--height-container-md, 48px)",
    fontSize: "16px",
    fontWeight: "medium",
    padding: "0 var(--spacing-global-side, 20px) 0 var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    headingTextStyle: "text-style-notosanskr-heading-16-medium",
  },
  popup: {
    height: "var(--height-container-md, 48px)",
    fontSize: "16px",
    fontWeight: "medium",
    padding: "0 var(--spacing-global-side, 20px) 0 var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    headingTextStyle: "text-style-notosanskr-heading-16-medium",
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
  const config = variantStyleMap[variants];

  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    width: 375,
    height: config.height,
    padding: config.padding,
    gap: config.gap,
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
    flex: 1,
    height: "100%",
  };

  const rightStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    flex: 1,
    height: "100%",
  };

  const headingStyle: React.CSSProperties = {
    margin: 0,
    color: "var(--text-icon-gray-default)",
  };

  if (variants === "main") {
    return (
      <div className={className} style={containerStyle} {...props}>
        <div style={{ ...leftStyle, gap: "var(--spacing-12, 12px)" }}>
          <h2 className="text-style-notosanskr-heading-24-bold" style={headingStyle}>
            LOGO
          </h2>
        </div>
        <div style={{ ...rightStyle, gap: "var(--spacing-20, 20px)", justifyContent: "flex-end" }}>
          <IconButton variants="gray" state="enabled" size={20} icon={<User />} />
          <IconButton variants="gray" state="enabled" size={20} icon={<Menu />} />
        </div>
      </div>
    );
  }

  if (variants === "sub") {
    return (
      <div className={className} style={containerStyle} {...props}>
        <div style={leftStyle}>
          <div style={{ width: "var(--width-container-detail-12, 12px)", height: "100%", display: "flex" }}>
            <IconButton variants="gray" state="enabled" size={24} icon={<DirectionLeftLg />} />
          </div>
        </div>
        <div style={centerStyle}>
          <h1 className="text-style-notosanskr-heading-16-medium" style={headingStyle}>
            {heading}
          </h1>
        </div>
        <div style={{ ...rightStyle, gap: "var(--spacing-20, 20px)" }}>
        </div>
      </div>
    );
  }

  if (variants === "popup") {
    return (
      <div className={className} style={containerStyle} {...props}>
        <div style={{ ...leftStyle, gap: "var(--spacing-20, 20px)" }}>
        </div>
        <div style={centerStyle}>
          <h1 className="text-style-notosanskr-heading-16-medium" style={headingStyle}>
            {heading}
          </h1>
        </div>
        <div style={{ ...rightStyle, justifyContent: "flex-end" }}>
          {closeButton && (
            <IconButton variants="gray" state="enabled" size={20} icon={<CloseLarge />} />
          )}
        </div>
      </div>
    );
  }

  return null;
};

const TopNavi = memo(TopNaviComponent);
TopNavi.displayName = "TopNavi";
export { TopNavi };