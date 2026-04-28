import React, { memo, ReactNode, HTMLAttributes } from "react";
import { Icon } from "./Icon";
import { GhostIconButton } from "./GhostIconButton";
import { GhostButton } from "./GhostButton";

export type TopNaviVariants = "mainPage" | "subPage" | "dialog";

export interface TopNaviProps extends HTMLAttributes<HTMLDivElement> {
  showMenuButton?: boolean;
  showHomeButton?: boolean;
  showCancelButton?: boolean;
  showCloseButton?: boolean;
  showHeading?: boolean;
  heading?: string;
  variants?: TopNaviVariants;
}

interface VariantStyleConfig {
  height: string;
  paddingX: string;
  gap: string;
  fg: string;
  headingTypography: string; // Specific typography for heading text
  logoTypography: string; // Specific typography for logo text
}

const variantStyleMap: Record<TopNaviVariants, VariantStyleConfig> = {
  mainPage: {
    height: "var(--component-topnavi-height-md, 48px)",
    paddingX: "var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    fg: "var(--texticon-gray-default)",
    headingTypography: "text-style-notosanskr-heading-h2", // For LOGO
    logoTypography: "text-style-notosanskr-heading-h2", // For LOGO
  },
  subPage: {
    height: "var(--component-topnavi-height-md, 48px)",
    paddingX: "var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    fg: "var(--texticon-gray-default)",
    headingTypography: "text-style-notosanskr-heading-h5", // For heading
    logoTypography: "", // Not applicable
  },
  dialog: {
    height: "var(--component-topnavi-height-md, 48px)",
    paddingX: "var(--spacing-global-side, 20px)",
    gap: "var(--spacing-16, 16px)",
    fg: "var(--texticon-gray-default)",
    headingTypography: "text-style-notosanskr-heading-h5", // For heading
    logoTypography: "", // Not applicable
  },
};

const TopNaviComponent = ({
  showMenuButton = true,
  showHomeButton = true,
  showCancelButton = true,
  showCloseButton = true,
  showHeading = true,
  heading = "heading",
  variants = "mainPage",
  className = "",
  style,
  ...props
}: TopNaviProps) => {
  const config = variantStyleMap[variants];

  const topNaviStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: config.height,
    paddingLeft: config.paddingX,
    paddingRight: config.paddingX,
    gap: config.gap,
    borderRadius: 0,
    backgroundColor: "transparent", // No specific background in summary table
    color: config.fg,
    ...style,
  };

  return (
    <div className={`top-navi ${className}`} style={topNaviStyle} {...props}>
      {variants === "mainPage" && (
        <>
          <div className="left-container" style={{ display: "flex", gap: "var(--spacing-12, 12px)", alignItems: "center", flex: 1 }}>
            <span className={`logo ${config.logoTypography}`} style={{ width: 67, height: 36, color: config.fg, whiteSpace: "nowrap", margin: 0 }}>
              LOGO
            </span>
          </div>
          <div className="right-container" style={{ display: "flex", gap: "var(--spacing-24, 24px)", alignItems: "center", justifyContent: "flex-end", flex: 1 }}>
            {showMenuButton && (
              <>
                <GhostIconButton
                  className="ghost-icon-button"
                  state="enabled"
                  isPadded={false}
                  color="gray"
                  size="sm"
                  aria-label="알림"
                  icon={<Icon name="NotificationLineIcon" size={20} />}
                />
                <GhostIconButton
                  className="ghost-icon-button"
                  state="enabled"
                  isPadded={false}
                  color="gray"
                  size="sm"
                  aria-label="메뉴"
                  icon={<Icon name="MenuLineIcon" size={20} />}
                />
              </>
            )}
          </div>
        </>
      )}

      {variants === "subPage" && (
        <>
          <div className="start-container" style={{ display: "flex", gap: 0, alignItems: "center", flex: 1 }}>
            {showCancelButton && (
              <div className="container" style={{ display: "flex", gap: 0, alignItems: "center", width: "var(--component-topnavi-width-backcontainer, 12px)", height: "100%" }}>
                <GhostIconButton
                  className="ghost-icon-button"
                  state="enabled"
                  isPadded={true}
                  color="gray"
                  size="sm"
                  aria-label="뒤로가기"
                  icon={<Icon name="LargeDirectionLeftIcon" size={20} />}
                />
              </div>
            )}
          </div>
          <div className="center-container" style={{ display: "flex", gap: 0, alignItems: "center", justifyContent: "center", flex: 1 }}>
            {showHeading && (
              <span className={`heading ${config.headingTypography}`} style={{ width: 64, height: 24, color: config.fg, whiteSpace: "nowrap", margin: 0 }}>
                {heading}
              </span>
            )}
          </div>
          <div className="end-container" style={{ display: "flex", gap: "var(--spacing-24, 24px)", alignItems: "center", justifyContent: "flex-end", flex: 1 }}>
            {showCancelButton && (
              <GhostButton
                className="ghost-button"
                state="enabeld"
                color="gray"
                textSize="xs"
                fullWidth={false}
                label="취소"
                showUnderline={false}
                style={{ padding: "0 var(--spacing-4, 4px)" }}
              />
            )}
            {showHomeButton && (
              <GhostIconButton
                className="ghost-icon-button"
                state="enabled"
                isPadded={false}
                color="gray"
                size="sm"
                aria-label="홈"
                icon={<Icon name="HomeLineIcon" size={20} />}
              />
            )}
            {showMenuButton && (
              <GhostIconButton
                className="ghost-icon-button"
                state="enabled"
                isPadded={false}
                color="gray"
                size="sm"
                aria-label="메뉴"
                icon={<Icon name="MenuLineIcon" size={20} />}
              />
            )}
          </div>
        </>
      )}

      {variants === "dialog" && (
        <>
          <div className="start-container" style={{ display: "flex", gap: 0, alignItems: "center", flex: 1 }} />
          <div className="center-container" style={{ display: "flex", gap: 0, alignItems: "center", justifyContent: "center", flex: 1 }}>
            {showHeading && (
              <span className={`heading ${config.headingTypography}`} style={{ width: 64, height: 24, color: config.fg, whiteSpace: "nowrap", margin: 0 }}>
                {heading}
              </span>
            )}
          </div>
          <div className="end-container" style={{ display: "flex", gap: "var(--spacing-24, 24px)", alignItems: "center", justifyContent: "flex-end", flex: 1 }}>
            {showCloseButton && (
              <GhostIconButton
                className="ghost-icon-button"
                state="enabled"
                isPadded={false}
                color="gray"
                size="sm"
                aria-label="닫기"
                icon={<Icon name="LargeCloseLineIcon" size={20} />}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

const TopNavi = memo(TopNaviComponent);
TopNavi.displayName = "TopNavi";
export { TopNavi };