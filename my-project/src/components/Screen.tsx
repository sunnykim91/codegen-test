import React, { memo, ReactNode, HTMLAttributes } from "react";
import Image from "next/image";
import { TopNavi } from "./TopNavi";
import kblogo3x from "../assets/kblogo@3x.png";

export type ScreenVariants = "sub" | "main" | "sub2" | "subW2" | "subW";

export interface ScreenProps extends HTMLAttributes<HTMLDivElement> {
  variants?: ScreenVariants;
  children?: ReactNode;
}

const variantStyleMap: Record<
  ScreenVariants,
  {
    background: string;
    topNaviVariants: "sub" | "main" | "sub2";
    showHeading: boolean;
    heading: string;
    showLogo: boolean;
    showCloseButton: boolean;
  }
> = {
  sub: {
    background: "var(--bg-base2)",
    topNaviVariants: "sub",
    showHeading: true,
    heading: "서브",
    showLogo: false,
    showCloseButton: false,
  },
  subW: {
    background: "var(--bg-base)",
    topNaviVariants: "sub",
    showHeading: true,
    heading: "서브",
    showLogo: false,
    showCloseButton: false,
  },
  sub2: {
    background: "var(--bg-base2)",
    topNaviVariants: "sub2",
    showHeading: false,
    heading: "",
    showLogo: true,
    showCloseButton: true,
  },
  subW2: {
    background: "var(--bg-base)",
    topNaviVariants: "sub2",
    showHeading: false,
    heading: "",
    showLogo: true,
    showCloseButton: true,
  },
  main: {
    background: "var(--bg-base2)",
    topNaviVariants: "main",
    showHeading: false,
    heading: "",
    showLogo: false,
    showCloseButton: false,
  },
};

const ScreenComponent = ({
  variants = "sub",
  children,
  className = "",
  style,
  ...props
}: ScreenProps) => {
  const config = variantStyleMap[variants];

  const screenStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    width: 393,
    height: 852,
    borderRadius: 0,
    backgroundColor: config.background,
    color: "var(--texticon-gray-default)",
    ...style,
  };

  return (
    <div className={`screen ${className}`} style={screenStyle} {...props}>
      {variants === "main" ? (
        <TopNavi variants="main" showCloseButton={false} showHeading={false} />
      ) : variants === "sub2" || variants === "subW2" ? (
        <div
          className="custom-top-navi"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: 393,
            height: "var(--height-container-md, 48px)",
            padding:
              "0 var(--spacing-global-side, 20px) 0 var(--spacing-global-side, 20px)",
            gap: "var(--spacing-16, 16px)",
          }}
        >
          <div
            className="left"
            style={{
              display: "flex",
              flex: 1,
              height: "100%",
              alignItems: "center",
              gap: "var(--spacing-12, 12px)",
            }}
          >
            <Image
              src={kblogo3x}
              width={131}
              height={24}
              alt="KB Logo"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div
            className="right"
            style={{
              display: "flex",
              flex: 1,
              height: "100%",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "var(--spacing-20, 20px)",
            }}
          >
            <button
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 20,
                height: 20,
                borderRadius: 2,
                border: "none",
                background: "transparent",
                padding: 0,
                cursor: "pointer",
                overflow: "hidden",
                minWidth: 44,
                minHeight: 44,
              }}
              aria-label="닫기"
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6162 3.61624C19.1044 3.12808 19.8957 3.12808 20.3838 3.61624C20.872 4.10439 20.872 4.89566 20.3838 5.38382L13.7676 12L20.3838 18.6162C20.872 19.1044 20.872 19.8957 20.3838 20.3838C19.8957 20.872 19.1044 20.872 18.6162 20.3838L12 13.7676L5.38382 20.3838C4.89566 20.872 4.10439 20.872 3.61624 20.3838C3.12808 19.8957 3.12808 19.1044 3.61624 18.6162L10.2324 12L3.61624 5.38382C3.12808 4.89566 3.12808 4.10439 3.61624 3.61624C4.10439 3.12808 4.89566 3.12808 5.38382 3.61624L12 10.2324L18.6162 3.61624Z"
                  fill="var(--texticon-gray-default)"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <TopNavi
          variants="sub"
          showCloseButton={config.showCloseButton}
          showHeading={config.showHeading}
          heading={config.heading}
        />
      )}

      {children}
    </div>
  );
};

const Screen = memo(ScreenComponent);
Screen.displayName = "Screen";
export { Screen };
