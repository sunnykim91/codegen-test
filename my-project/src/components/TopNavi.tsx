import React, { memo, HTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import { IconButton } from "./IconButton";
import { Icon } from "./Icon";
import kblogo3x from "../assets/kblogo@3x.png";

export type TopNaviVariants = "main" | "sub" | "sub2";

export interface TopNaviProps extends HTMLAttributes<HTMLDivElement> {
  variants?: TopNaviVariants;
  showCloseButton?: boolean;
  showHeading?: boolean;
  heading?: ReactNode;
}

const variantStyleMap: Record<
  TopNaviVariants,
  {
    height: string;
    padding: string;
    gap: string;
  }
> = {
  main: {
    height: "var(--height-container-lg, 56px)",
    padding: "0 var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
  },
  sub: {
    height: "var(--height-container-md, 48px)",
    padding: "0 var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
  },
  sub2: {
    height: "var(--height-container-lg, 56px)",
    padding: "0 var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
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
    height: config.height,
    padding: config.padding,
    gap: config.gap,
    backgroundColor: "transparent",
    ...style,
  };

  const leftStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    flex: 1,
    gap: variants === "main" ? "var(--spacing-12, 12px)" : "0",
  };

  const rightStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    gap: "var(--spacing-20, 20px)",
  };

  const renderLeftContent = () => {
    if (variants === "main") {
      return (
        <span
          className="text-style-kbfgtext-heading-24-bold"
          style={{ color: "var(--texticon-gray-default)" }}
        >
          홈
        </span>
      );
    }

    if (variants === "sub2") {
      return (
        <Image
          src={kblogo3x}
          width={131}
          height={24}
          alt="KB Logo"
          style={{ objectFit: "contain" }}
        />
      );
    }

    if (variants === "sub") {
      return (
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <div
            style={{
              display: "flex",
              width: "var(--width-container-detail-12, 12px)",
            }}
          >
            <IconButton
              variants="gray"
              state="enabled"
              size={24}
              icon={<Icon name="direction-icon" />}
            />
          </div>
          {showHeading && (
            <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
              <span
                className="text-style-kbfgtext-heading-16-medium"
                style={{ color: "var(--texticon-gray-default)" }}
              >
                {heading}
              </span>
            </div>
          )}
        </div>
      );
    }
  };

  const renderRightContent = () => {
    if (variants === "main") {
      return (
        <>
          <IconButton
            variants="gray"
            state="enabled"
            size={20}
            icon={<Icon name="notification-line" />}
          />
          <IconButton
            variants="gray"
            state="enabled"
            size={20}
            icon={<Icon name="search-line" />}
          />
        </>
      );
    }

    if (variants === "sub2" && showCloseButton) {
      return (
        <IconButton
          variants="gray"
          state="enabled"
          size={20}
          icon={<Icon name="close-large" />}
        />
      );
    }

    return null;
  };

  return (
    <nav className={`top-navi ${className}`} style={containerStyle} {...props}>
      <div className="left" style={leftStyle}>
        {renderLeftContent()}
      </div>
      <div className="right" style={rightStyle}>
        {renderRightContent()}
      </div>
    </nav>
  );
};

const TopNavi = memo(TopNaviComponent);
TopNavi.displayName = "TopNavi";
export { TopNavi };
