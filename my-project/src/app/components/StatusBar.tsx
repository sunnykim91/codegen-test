import React, { memo, HTMLAttributes } from "react";

export type StatusBarPlatform = "samsung" | "ios";

export interface StatusBarProps extends HTMLAttributes<HTMLDivElement> {
  platform?: StatusBarPlatform;
}

const platformStyleMap: Record<
  StatusBarPlatform,
  {
    height: number;
    paddingTop: number;
    paddingRight: number;
    paddingBottom: number;
    paddingLeft: number;
    gap?: number;
    justifyContent?: "space-between" | "flex-start";
  }
> = {
  ios: {
    height: 48,
    paddingTop: 21,
    paddingRight: 16,
    paddingBottom: 19,
    paddingLeft: 16,
    gap: 154,
    justifyContent: "flex-start",
  },
  samsung: {
    height: 52,
    paddingTop: 10,
    paddingRight: 24,
    paddingBottom: 10,
    paddingLeft: 24,
    justifyContent: "space-between",
  },
};

const StatusBarComponent = ({
  platform = "ios",
  className = "",
  style,
  ...props
}: StatusBarProps) => {
  const config = platformStyleMap[platform];

  return (
    <div
      className={`status-bar ${className}`}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: config.height,
        paddingTop: config.paddingTop,
        paddingRight: config.paddingRight,
        paddingBottom: config.paddingBottom,
        paddingLeft: config.paddingLeft,
        gap: config.gap,
        justifyContent: config.justifyContent,
        ...style,
      }}
      {...props}
    >
      {platform === "ios" && (
        <>
          {/* Time [GROUP] */}
          <div className="time" style={{ width: 33, height: 13, flexShrink: 0 }}>
            {/* Content for Time group (e.g., text like "9:41") would go here if provided */}
          </div>
          {/* Levels [GROUP] */}
          <div className="levels" style={{ width: 76, height: 13, flexShrink: 0 }}>
            {/* Content for Levels group (e.g., battery, signal icons) would go here if provided */}
          </div>
        </>
      )}

      {platform === "samsung" && (
        <>
          {/* Time [GROUP] */}
          <div className="time" style={{ width: 27, height: 10, flexShrink: 0 }}>
            {/* Content for Time group */}
          </div>
          {/* Camera Cutout [VECTOR] */}
          {/* SVG content for "Camera Cutout" was not provided in the prompt. */}
          {/* Rendering a placeholder div based on its dimensions and marking it as decorative. */}
          <div
            className="camera-cutout"
            aria-hidden="true"
            style={{ width: 24, height: 24, flexShrink: 0 }}
          />
          {/* right icons [GROUP] */}
          <div className="right-icons" style={{ width: 46, height: 15, flexShrink: 0 }}>
            {/* Content for right icons group */}
          </div>
        </>
      )}
    </div>
  );
};

const StatusBar = memo(StatusBarComponent);
StatusBar.displayName = "StatusBar";
export { StatusBar };