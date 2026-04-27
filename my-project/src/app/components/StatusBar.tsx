import React, { memo, HTMLAttributes } from "react";

export type StatusBarPlatform = "samsung" | "ios";

export interface StatusBarProps extends HTMLAttributes<HTMLDivElement> {
  platform?: StatusBarPlatform;
}

const platformStyleMap: Record<
  StatusBarPlatform,
  {
    height: number;
    width: number;
    paddingTop: number;
    paddingBottom: number;
    paddingLeft: number;
    paddingRight: number;
    gap?: number;
    justifyContent?: React.CSSProperties["justifyContent"];
    alignItems: React.CSSProperties["alignItems"];
  }
> = {
  ios: {
    height: 48,
    width: 375,
    paddingTop: 21,
    paddingBottom: 14, // 48 (height) - 21 (top padding) - 13 (max child height) = 14
    paddingLeft: 16,
    paddingRight: 16,
    gap: 154,
    alignItems: "flex-start", // Aligns children to the top due to padding distribution
  },
  samsung: {
    height: 52,
    width: 375,
    paddingTop: 10,
    paddingBottom: 18, // 52 (height) - 10 (top padding) - 24 (max child height: Camera Cutout) = 18
    paddingLeft: 24,
    paddingRight: 24,
    justifyContent: "space-between", // From gap: auto(space-between)
    alignItems: "center", // Vertically centers children
  },
};

const StatusBarComponent = ({
  platform = "ios",
  className = "",
  style,
  ...props
}: StatusBarProps) => {
  const config = platformStyleMap[platform];

  const statusBarContainerStyle: React.CSSProperties = {
    display: "flex",
    width: config.width,
    height: config.height,
    paddingTop: config.paddingTop,
    paddingBottom: config.paddingBottom,
    paddingLeft: config.paddingLeft,
    paddingRight: config.paddingRight,
    alignItems: config.alignItems,
    flexShrink: 0, // Ensure it doesn't shrink in a flex parent
    ...style,
  };

  if (config.gap) {
    statusBarContainerStyle.gap = config.gap;
  }
  if (config.justifyContent) {
    statusBarContainerStyle.justifyContent = config.justifyContent;
  }

  return (
    <div className={`status-bar ${className}`} style={statusBarContainerStyle} {...props}>
      {platform === "ios" && (
        <>
          {/* Time [GROUP] */}
          <div className="time" style={{ width: 33, height: 13, flexShrink: 0 }}>
            <span className="text-style-notosanskr-label-14-medium" style={{ color: "var(--texticon-gray-black)", margin: 0 }}>
              9:41
            </span>
          </div>
          {/* Levels [GROUP] */}
          <div className="levels" style={{ width: 76, height: 13, flexShrink: 0 }}>
            <span className="text-style-notosanskr-label-14-medium" style={{ color: "var(--texticon-gray-black)", margin: 0 }}>
              Levels
            </span>
          </div>
        </>
      )}

      {platform === "samsung" && (
        <>
          {/* Time [GROUP] */}
          <div className="time" style={{ width: 27, height: 10, flexShrink: 0 }}>
            <span className="text-style-notosanskr-label-12-regular" style={{ color: "var(--texticon-gray-black)", margin: 0 }}>
              9:41
            </span>
          </div>
          {/* right icons [GROUP] */}
          <div className="right-icons" style={{ width: 46, height: 15, flexShrink: 0 }}>
            <span className="text-style-notosanskr-label-12-regular" style={{ color: "var(--texticon-gray-black)", margin: 0 }}>
              Icons
            </span>
          </div>
          {/* Camera Cutout [VECTOR] */}
          {/* svgContent not provided in prompt for VECTOR, using a div placeholder */}
          <div
            className="camera-cutout"
            aria-hidden="true"
            style={{ width: 24, height: 24, flexShrink: 0, borderRadius: "50%", backgroundColor: "black" }}
          />
        </>
      )}
    </div>
  );
};

const StatusBar = memo(StatusBarComponent);
StatusBar.displayName = "StatusBar";
export { StatusBar };