import React, { memo, HTMLAttributes, ReactNode } from "react";
import { IconButton } from "./IconButton";
import { Icon } from "./Icon";
import Image from "next/image";
import kblogo3x from "../assets/kblogo@3x.png";

export type TopNaviVariants = "main" | "sub" | "sub2";

export interface TopNaviProps extends HTMLAttributes<HTMLDivElement> {
  showCloseButton?: boolean;
  showHeading?: boolean;
  heading?: ReactNode;
  variants?: TopNaviVariants;
}

const sizeStyleMap: Record<TopNaviVariants, {
  height: string;
  fontSize: string;
  textStyleClass: string;
}> = {
  main: {
    height: "var(--height-container-lg, 56px)",
    fontSize: "24px",
    textStyleClass: "text-style-kbfgtext-heading-24-bold",
  },
  sub: {
    height: "var(--height-container-md, 48px)",
    fontSize: "16px",
    textStyleClass: "text-style-kbfgtext-heading-16-medium",
  },
  sub2: {
    height: "var(--height-container-lg, 56px)",
    fontSize: "24px",
    textStyleClass: "",
  },
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

  const topNaviStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "var(--spacing-16, 16px)",
    width: 375,
    height: sizeConfig.height,
    padding: `0 var(--spacing-global-side, 20px)`,
    ...style,
  };

  const renderLeftContent = () => {
    if (variants === "main") {
      return (
        <div className="left" style={{ display: "flex", alignItems: "center", gap: "var(--spacing-12, 12px)", flex: 1 }}>
          <span 
            className={sizeConfig.textStyleClass}
            style={{ 
              color: "var(--texticon-gray-default)",
              margin: 0,
              whiteSpace: "nowrap",
              width: 22,
              height: 36
            }}
          >
            홈
          </span>
        </div>
      );
    }

    if (variants === "sub2") {
      return (
        <div className="left" style={{ display: "flex", alignItems: "center", gap: "var(--spacing-12, 12px)", flex: 1 }}>
          <Image 
            src={kblogo3x}
            width={131}
            height={24}
            alt="KBLOGO"
            style={{ objectFit: "contain" }}
          />
        </div>
      );
    }

    // variants === "sub"
    return (
      <div className="left" style={{ display: "flex", alignItems: "center", gap: 0, flex: 1 }}>
        <div className="box" style={{ display: "flex", alignItems: "center", gap: 0, width: "var(--width-container-detail-12, 12px)", height: "100%" }}>
          <IconButton
            variants="gray"
            state="enabled"
            size={24}
            icon={<Icon name="direction-icon-left" size={24} />}
          />
        </div>
      </div>
    );
  };

  const renderCenterContent = () => {
    if (variants === "sub" && showHeading) {
      return (
        <div className="center" style={{ display: "flex", alignItems: "center", gap: 0, flex: 1 }}>
          <span
            className={sizeConfig.textStyleClass}
            style={{
              color: "var(--texticon-gray-default)",
              margin: 0,
              whiteSpace: "nowrap",
              width: 60,
              height: 24
            }}
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
        <div className="right" style={{ display: "flex", alignItems: "center", gap: "var(--spacing-20, 20px)", flex: 1 }}>
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
        <div className="right" style={{ display: "flex", alignItems: "center", gap: "var(--spacing-20, 20px)", flex: 1 }}>
          <IconButton
            variants="gray"
            state="enabled"
            size={20}
            icon={<Icon name="close-large" size={20} />}
          />
        </div>
      );
    }

    // variants === "sub"
    return (
      <div className="right" style={{ display: "flex", alignItems: "center", gap: "var(--spacing-20, 20px)", flex: 1 }}>
      </div>
    );
  };

  return (
    <div className={className} style={topNaviStyle} {...props}>
      {renderLeftContent()}
      {renderCenterContent()}
      {renderRightContent()}
    </div>
  );
};

const TopNavi = memo(TopNaviComponent);
TopNavi.displayName = "TopNavi";
export { TopNavi };