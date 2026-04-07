import React, { memo, HTMLAttributes, ReactElement } from "react";
import Image from "next/image";
import { IconButton } from "./IconButton";
import { Icon } from "./Icon";
import kblogo3x from "../assets/kblogo@3x.png";

export type TopNaviVariants = "main" | "sub" | "sub2";

export interface TopNaviProps extends HTMLAttributes<HTMLDivElement> {
  showCloseButton?: boolean;
  showHeading?: boolean;
  heading?: string;
  variants?: TopNaviVariants;
}

const sizeStyleMap: Record<
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

const getVariantStyle = (variants: TopNaviVariants) => {
  return {
    color: "var(--texticon-gray-default)",
  };
};

const TopNaviComponent = ({
  showCloseButton = true,
  showHeading = true,
  heading = "heading",
  variants = "main",
  className = "",
  style,
  ...props
}: TopNaviProps) => {
  const sizeConfig = sizeStyleMap[variants];
  const variantConfig = getVariantStyle(variants);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    width: 375,
    height: sizeConfig.height,
    padding: sizeConfig.padding,
    gap: sizeConfig.gap,
    borderRadius: 0,
    color: variantConfig.color,
    ...style,
  };

  const renderLeftContent = () => {
    if (variants === "main") {
      return (
        <div className="left" style={{ display: "flex", alignItems: "center", flex: 1, gap: "var(--spacing-12, 12px)" }}>
          <span
            className="text-style-kbfgtext-heading-24-bold"
            style={{ color: "var(--texticon-gray-default)", margin: 0, whiteSpace: "nowrap" }}
          >
            홈
          </span>
        </div>
      );
    }

    if (variants === "sub2") {
      return (
        <div className="left" style={{ display: "flex", alignItems: "center", flex: 1, gap: "var(--spacing-12, 12px)" }}>
          <Image src={kblogo3x} width={131} height={24} alt="KBLOGO" style={{ objectFit: "contain" }} />
        </div>
      );
    }

    if (variants === "sub") {
      return (
        <div className="left" style={{ display: "flex", alignItems: "center", flex: 1, gap: 0 }}>
          <div className="box" style={{ display: "flex", alignItems: "center", width: "var(--width-container-detail-12, 12px)", height: "100%" }}>
            <IconButton
              variants="gray"
              state="enabled"
              size={24}
              icon={<Icon name="direction-icon-left" size={24} />}
            />
          </div>
        </div>
      );
    }

    return null;
  };

  const renderCenterContent = () => {
    if (variants === "sub" && showHeading) {
      return (
        <div className="center" style={{ display: "flex", alignItems: "center", flex: 1 }}>
          <span
            className="text-style-kbfgtext-heading-16-medium"
            style={{ color: "var(--texticon-gray-default)", margin: 0, whiteSpace: "nowrap" }}
          >
            {heading}
          </span>
        </div>
      );
    }

    return null;
  };

  const renderRightContent = () => {
    if (variants === "main") {
      return (
        <div className="right" style={{ display: "flex", alignItems: "center", flex: 1, gap: "var(--spacing-20, 20px)" }}>
          <IconButton
            variants="gray"
            state="enabled"
            size={20}
            icon={<Icon name="notification-line" size={20} />}
          />
          <IconButton
            variants="gray"
            state="enabled"
            size={20}
            icon={<Icon name="search-line" size={20} />}
          />
        </div>
      );
    }

    if (variants === "sub2" && showCloseButton) {
      return (
        <div className="right" style={{ display: "flex", alignItems: "center", flex: 1, gap: "var(--spacing-20, 20px)" }}>
          <IconButton
            variants="gray"
            state="enabled"
            size={20}
            icon={<Icon name="close-large" size={20} />}
          />
        </div>
      );
    }

    if (variants === "sub") {
      return (
        <div className="right" style={{ display: "flex", alignItems: "center", flex: 1, gap: "var(--spacing-20, 20px)" }}>
        </div>
      );
    }

    return null;
  };

  return (
    <div className={className} style={containerStyle} {...props}>
      {renderLeftContent()}
      {renderCenterContent()}
      {renderRightContent()}
    </div>
  );
};

const TopNavi = memo(TopNaviComponent);
TopNavi.displayName = "TopNavi";
export { TopNavi };