import React, { memo, HTMLAttributes } from "react";
import { StatusBar } from "../app/components/StatusBar";
import { LinkCard } from "../app/components/LinkCard";
import { LinkListItem } from "../app/components/LinkListItem";

// Image asset imports
import imgkb3x from "../../public/images/imgkb@3x.png";

export interface UDSTT01Props extends HTMLAttributes<HTMLDivElement> {
  welcomeTitle?: string;
  signUpTitle?: string;
  signUpDescription?: string;
  signUpUnderDescription?: string;
  loginTitle?: string;
  loginDescription?: string;
  loginUnderDescription?: string;
  onSignUpClick?: () => void;
  onLoginClick?: () => void;
}

const UDSTT01Component = ({
  welcomeTitle = "KB국민은행에  오신 것을 환영합니다.",
  signUpTitle = "회원 가입",
  signUpDescription = "#desc",
  signUpUnderDescription = "KB스타뱅킹, 처음이세요?",
  loginTitle = "로그인",
  loginDescription = "#desc",
  loginUnderDescription = "이미 사용 중이신가요?",
  onSignUpClick,
  onLoginClick,
  className = "",
  style,
  ...props
}: UDSTT01Props) => {
  return (
    <div
      className={`udstt01 ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        padding: 0,
        borderRadius: 0,
        width: "100%",
        height: "100%", // Fill container for page
        overflow: "hidden",
        backgroundColor: "var(--bg-base)",
        ...style,
      }}
      {...props}
    >
      <div
        className="header-layout"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          alignItems: "flex-start",
          width: "100%",
          height: "auto",
        }}
      >
        <StatusBar className="status-bar" platform="ios" />
      </div>

      <div
        className="body-layout"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          alignItems: "flex-start",
          width: "100%",
          height: "100%", // Fill container
          overflow: "hidden",
        }}
      >
        <div
          className="title-section"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            alignItems: "flex-start",
            width: "100%",
            height: "auto",
            padding: "var(--spacing-40, 40px) var(--spacing-32, 32px)",
          }}
        >
          <span
            className="kb-gukmin-eunhaeng-e-osin-geos-eul-hwanyeonghabnida text-style-notosanskr-display-md-medium"
            style={{
              color: "var(--texticon-gray-default)",
              margin: 0,
              width: "100%", // Fill width, not fixed 329px
              height: "auto", // Hug height, not fixed 80px
            }}
          >
            {welcomeTitle}
          </span>
        </div>

        <div
          className="container-wrapper" // Renamed from "container" to avoid Tailwind clash
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-10, 10px)",
            alignItems: "center",
            width: "100%",
            height: "100%", // Fill container
            padding: "var(--spacing-96, 96px) var(--spacing-24, 24px)",
            overflow: "hidden",
          }}
        >
          <div
            className="img-slot-block"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              alignItems: "flex-end", // items=end for the image
              width: "100%",
              height: "100%", // Fill container
              paddingTop: "var(--spacing-24, 24px)",
            }}
          >
            <img
              src={imgkb3x}
              width={214}
              height={234}
              alt="img_kb"
              className="img-kb"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div
            className="card-button-block"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-12, 12px)",
              alignItems: "flex-start",
              width: "100%",
              height: "auto",
              borderRadius: "var(--borderradius-lg, 10px)",
            }}
          >
            <LinkCard
              className="link-card"
              state="enabled"
              variants="filled"
              fullWidth={true}
              style={{
                backgroundColor: "var(--container-gray-subtle3)",
                borderRadius: "var(--borderradius-2xl, 16px)",
                padding: "var(--spacing-20, 20px)",
                // The LinkCard component already applies a height based on its internal logic.
                // It has horizontal=fill, vertical=hug so it takes fullWidth and auto height.
              }}
              onClick={onSignUpClick}
              instanceSwap={
                <LinkListItem
                  className="link-list-item"
                  variants="enabled"
                  title={signUpTitle}
                  description={signUpDescription}
                  underDescription={signUpUnderDescription}
                  // startSlot and endSlot are not provided, LinkListItem will use its defaults.
                  // showStartItem, showUnderDesc, showDesc default to true.
                />
              }
            />

            <LinkCard
              className="link-card"
              state="enabled"
              variants="filled"
              fullWidth={true}
              style={{
                backgroundColor: "var(--container-gray-subtle3)",
                borderRadius: "var(--borderradius-2xl, 16px)",
                padding: "var(--spacing-20, 20px)",
                // LinkCard component handles its height based on content.
              }}
              onClick={onLoginClick}
              instanceSwap={
                <LinkListItem
                  className="link-list-item"
                  variants="enabled"
                  title={loginTitle}
                  description={loginDescription}
                  underDescription={loginUnderDescription}
                  // startSlot and endSlot are not provided, LinkListItem will use its defaults.
                  // showStartItem, showUnderDesc, showDesc default to true.
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const UDSTT01 = memo(UDSTT01Component);
UDSTT01.displayName = "UDSTT01";
export { UDSTT01 };
export default UDSTT01;
