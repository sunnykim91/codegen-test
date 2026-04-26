import React, { memo, HTMLAttributes } from "react";

export type StatusBarPlatform = "samsung" | "ios";

export interface StatusBarProps extends HTMLAttributes<HTMLDivElement> {
  platform?: StatusBarPlatform;
}

const platformStyleMap: Record<StatusBarPlatform, React.CSSProperties> = {
  ios: {
    height: 48,
    paddingTop: 21,
    paddingRight: 16,
    paddingBottom: 19,
    paddingLeft: 16,
  },
  samsung: {
    height: 52,
    paddingTop: 10,
    paddingRight: 24,
    paddingBottom: 10,
    paddingLeft: 24,
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
        alignItems: "center",
        width: "100%",
        position: "relative",
        ...config,
        ...style,
      }}
      {...props}
    >
      {platform === "ios" && (
        <div
          className="ios-content-wrapper"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Time [GROUP] */}
          <div className="time" style={{ width: 33, height: 13 }} aria-hidden="true" />
          {/* Levels [GROUP] */}
          <div className="levels" style={{ width: 76, height: 13 }} aria-hidden="true" />
        </div>
      )}

      {platform === "samsung" && (
        <>
          {/* Camera Cutout [VECTOR] */}
          <div
            className="camera-cutout"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: 24,
              height: 24,
              backgroundColor: "rgba(0,0,0,0.2)", // Placeholder for vector content
              borderRadius: "50%", // Common cutout shape
            }}
            aria-hidden="true"
          />
          <div
            className="samsung-content-wrapper"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            {/* Time [GROUP] */}
            <div className="time" style={{ width: 27, height: 10 }} aria-hidden="true" />
            {/* right icons [GROUP] */}
            <div className="right-icons" style={{ width: 46, height: 15 }} aria-hidden="true" />
          </div>
        </>
      )}
    </div>
  );
};

const StatusBar = memo(StatusBarComponent);
StatusBar.displayName = "StatusBar";
export { StatusBar };