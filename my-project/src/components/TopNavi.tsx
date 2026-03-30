import React, { memo, HTMLAttributes } from "react";
import { IconButton } from "./IconButton";
import { Icon } from "./Icon";

export type TopNaviVariants = "main" | "sub";

export interface TopNaviProps extends HTMLAttributes<HTMLDivElement> {
  variants?: TopNaviVariants;
  showCloseButton?: boolean;
  showHeading?: boolean;
  heading?: string;
}

const variantStyleMap: Record<TopNaviVariants, {
  height: string;
  padding: string;
  gap: string;
  logoFontSize: string;
  logoTextStyle: string;
  headingTextStyle: string;
}> = {
  main: {
    height: "var(--height-container-lg, 56px)",
    padding: "0 var(--spacing-global-side, 20px) 0 var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    logoFontSize: "24px",
    logoTextStyle: "text-style-notosanskr-heading-24-bold",
    headingTextStyle: "text-style-notosanskr-heading-16-medium",
  },
  sub: {
    height: "var(--height-container-md, 48px)",
    padding: "0 var(--spacing-global-side, 20px) 0 var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    logoFontSize: "16px",
    logoTextStyle: "text-style-notosanskr-heading-16-medium",
    headingTextStyle: "text-style-notosanskr-heading-16-medium",
  },
};

const TopNaviComponent = ({
  variants = "main",
  showCloseButton = true,
  showHeading = true,
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
    width: 375,
    height: config.height,
    padding: config.padding,
    gap: config.gap,
    borderRadius: 0,
    color: "var(--texticon-gray-default)",
    ...style,
  };

  const leftStyle: React.CSSProperties = {
    display: "flex",
    flex: 1,
    height: "100%",
    gap: variants === "main" ? "var(--spacing-12, 12px)" : 0,
  };

  const centerStyle: React.CSSProperties = {
    display: "flex",
    flex: 1,
    height: "100%",
    alignItems: "center",
  };

  const rightStyle: React.CSSProperties = {
    display: "flex",
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "var(--spacing-20, 20px)",
  };

  const boxStyle: React.CSSProperties = {
    display: "flex",
    width: "var(--width-container-detail-12, 12px)",
    height: "100%",
    alignItems: "center",
  };

  return (
    <nav className={className} style={containerStyle} {...props}>
      <div className="left" style={leftStyle}>
        {variants === "main" ? (
          <span 
            className={`h2타이틀 ${config.logoTextStyle}`} 
            style={{ color: "var(--texticon-gray-default)", margin: 0 }}
          >
            LOGO
          </span>
        ) : (
          <div className="box" style={boxStyle}>
            <IconButton
              variants="gray"
              state="enabled"
              size={24}
              icon={<Icon name="direction-icon" />}
              aria-label="뒤로 가기"
            />
          </div>
        )}
      </div>

      {variants === "sub" && showHeading && (
        <div className="center" style={centerStyle}>
          <span 
            className={`heading ${config.headingTextStyle}`}
            style={{ color: "var(--texticon-gray-default)", margin: 0 }}
          >
            {heading}
          </span>
        </div>
      )}

      <div className="right" style={rightStyle}>
        {variants === "main" && (
          <>
            <IconButton
              variants="gray"
              state="enabled"
              size={20}
              icon={<Icon name="user-line" />}
              aria-label="사용자 메뉴"
            />
            <IconButton
              variants="gray"
              state="enabled"
              size={20}
              icon={<Icon name="menu-line" />}
              aria-label="메뉴"
            />
          </>
        )}
        {variants === "sub" && showCloseButton && (
          <IconButton
            variants="gray"
            state="enabled"
            size={24}
            icon={<Icon name="close" />}
            aria-label="닫기"
          />
        )}
      </div>
    </nav>
  );
};

const TopNavi = memo(TopNaviComponent);
TopNavi.displayName = "TopNavi";
export { TopNavi };