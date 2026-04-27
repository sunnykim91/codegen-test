import React, { memo, HTMLAttributes, ReactNode } from "react";
import { StatusBar } from "../app/components/StatusBar";
import { LinkCard } from "../app/components/LinkCard";
import { LinkListItem } from "../app/components/LinkListItem";
import { Icon } from "../app/components/Icon";

// Image imports
import imgkb3x from "../../public/images/imgkb@3x.png";

// Custom IconMembership component definition
// Figma tree indicates 'icon_membership [INSTANCE] component="IconMembership"',
// with a 'Union [VECTOR] (horizontal=fixed w:24, vertical=fixed h:25)'.
// As 'IconMembership' is not in Icon.tsx's iconMap and no specific path is given for the Union vector,
// a placeholder SVG is created according to the "매칭되는 아이콘이 없을 때만 인라인 SVG를 생성하세요." rule.
const IconMembership = ({ size = 40, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Placeholder for actual IconMembership path, using a simple geometric shape */}
    <rect x="0" y="0" width="40" height="40" fill={color} opacity="0.1" />
    <circle cx="20" cy="20" r="15" stroke={color} strokeWidth="1.5" />
    <path d="M20 10V30M10 20H30" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export type UDSTT01Props = HTMLAttributes<HTMLDivElement>;

const UDSTT01Component = ({ className = "", style, ...props }: UDSTT01Props) => {
  // Determine icon color based on LinkListItem's default enabled state
  // LinkListItem's enabled state uses var(--texticon-gray-default) for foreground.
  const linkListItemIconColor = "var(--texticon-gray-default)";

  // First LinkCard's LinkListItem startSlot content (custom IconMembership)
  const membershipStartSlot = (
    <div // This `div` serves as the `ListLeftItem` replacement for `startSlot`
      className="list-left-item"
      style={{
        display: "inline-flex",
        alignItems: "center",
        flexShrink: 0,
        gap: 0,
        width: "auto",
        height: "auto",
      }}
    >
      <div // This `div` serves as the `IconSlot` container as per Figma tree
        className="icon-slot"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          width: "var(--square-40, 40px)", // From IconSlot props in Figma tree
          height: "var(--square-40, 40px)", // From IconSlot props in Figma tree
        }}
      >
        <IconMembership size={40} color={linkListItemIconColor} />
      </div>
    </div>
  );

  // Second LinkCard's LinkListItem startSlot content (IconLogin from Icon.tsx)
  const loginStartSlot = (
    <div // This `div` serves as the `ListLeftItem` replacement for `startSlot`
      className="list-left-item"
      style={{
        display: "inline-flex",
        alignItems: "center",
        flexShrink: 0,
        gap: 0,
        width: "auto",
        height: "auto",
      }}
    >
      <div // This `div` serves as the `IconSlot` container as per Figma tree
        className="icon-slot"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          width: "var(--square-40, 40px)", // From IconSlot props in Figma tree
          height: "var(--square-40, 40px)", // From IconSlot props in Figma tree
        }}
      >
        <Icon name="IconLogin" size={40} color={linkListItemIconColor} />
      </div>
    </div>
  );

  return (
    <div
      className={`udstt01 screen ${className}`}
      style={{
        display: "flex",
        flexDirection: "column", // layout: VERTICAL
        gap: 0,
        width: "100%", // horizontal=fill
        minHeight: "100vh", // vertical=fill for a page/screen
        backgroundColor: "var(--bg-base)", // fill=var(--bg-base)
        overflow: "hidden",
        ...style,
      }}
      {...props}
    >
      <div className="header-layout" style={{
        display: "flex",
        flexDirection: "column", // layout: VERTICAL
        gap: 0,
        width: "100%", // horizontal=fill
        height: "auto", // vertical=hug
        alignItems: "flex-start", // items=start
      }}>
        {/* StatusBar [INSTANCE] component="StatusBar" */}
        <StatusBar platform="ios" />
      </div>

      <div className="body-layout" style={{
        display: "flex",
        flexDirection: "column", // layout: VERTICAL
        gap: 0,
        width: "100%", // horizontal=fill
        height: "100%", // vertical=fill
        alignItems: "flex-start", // items=start
        overflow: "hidden",
      }}>
        <div className="title-section" style={{
          display: "flex",
          flexDirection: "column", // layout: VERTICAL
          gap: 0,
          width: "100%", // horizontal=fill
          height: "auto", // vertical=hug
          alignItems: "flex-start", // items=start
          padding: "var(--spacing-40, 40px) var(--spacing-32, 32px)", // pad=40/32/40/32
        }}>
          <span
            className="kb국민은행에-오신-것을-환영합니다 text-style-notosanskr-display-md-medium"
            style={{
              color: "var(--texticon-gray-default)", // textColor=var(--texticon-gray-default)
              margin: 0,
              // width: 329, height: 80 from Figma are layout results, not constraints for flex child
              // Remove explicit width/height to allow flex to manage
            }}
          >
            KB국민은행에  오신 것을 환영합니다.
          </span>
        </div>

        <div className="container-wrapper" style={{ // Renamed from "container" to avoid Tailwind conflict
          display: "flex",
          flexDirection: "column", // layout: VERTICAL
          gap: "var(--spacing-10, 10px)", // gap=var(--spacing-10, 10px)
          width: "100%", // horizontal=fill
          height: "100%", // vertical=fill
          alignItems: "center", // items=center
          padding: "var(--spacing-96, 96px) var(--spacing-24, 24px)", // pad=96/24/96/24
          overflow: "hidden",
        }}>
          <div className="img-slot-block" style={{
            display: "flex",
            flexDirection: "column", // layout: VERTICAL
            gap: 0,
            width: "100%", // horizontal=fill
            height: "100%", // vertical=fill
            alignItems: "flex-end", // items=end
            paddingTop: "var(--spacing-24, 24px)", // pad=24/0/0/0
          }}>
            {/* img_kb [IMAGE_ASSET] */}
            <img
              src={imgkb3x}
              width={214}
              height={234}
              alt="img_kb"
              style={{ objectFit: "contain", flexShrink: 0 }} // flexShrink: 0 to prevent shrinking in fill height container
            />
          </div>

          <div className="card-button-block" style={{
            display: "flex",
            flexDirection: "column", // layout: VERTICAL
            gap: "var(--spacing-12, 12px)", // gap=var(--spacing-12, 12px)
            width: "100%", // horizontal=fill
            height: "auto", // vertical=hug
            alignItems: "flex-start", // items=start
            borderRadius: "var(--borderradius-lg, 10px)", // radius=var(--borderradius-lg, 10px)
          }}>
            {/* LinkCard [INSTANCE] component="LinkCard" (회원 가입) */}
            <LinkCard
              state="enabled"
              variants="filled"
              fullWidth={true} // horizontal=fill
              style={{
                backgroundColor: "var(--container-gray-subtle3)", // fill=var(--container-gray-subtle3)
                borderRadius: "var(--borderradius-2xl, 16px)", // radius=var(--borderradius-2xl, 16px)
                padding: "var(--spacing-20, 20px)", // pad=20/20/20/20
                height: "auto", // vertical=hug
              }}
              instanceSwap={
                <LinkListItem
                  variants="enabled"
                  fullWidth={true} // horizontal=fill
                  title="회원 가입"
                  description="#desc"
                  underDescription="KB스타뱅킹, 처음이세요?"
                  startSlot={membershipStartSlot}
                />
              }
            />
            {/* LinkCard [INSTANCE] component="LinkCard" (로그인) */}
            <LinkCard
              state="enabled"
              variants="filled"
              fullWidth={true} // horizontal=fill
              style={{
                backgroundColor: "var(--container-gray-subtle3)", // fill=var(--container-gray-subtle3)
                borderRadius: "var(--borderradius-2xl, 16px)", // radius=var(--borderradius-2xl, 16px)
                padding: "var(--spacing-20, 20px)", // pad=20/20/20/20
                height: "auto", // vertical=hug
              }}
              instanceSwap={
                <LinkListItem
                  variants="enabled"
                  fullWidth={true} // horizontal=fill
                  title="로그인"
                  description="#desc"
                  underDescription="이미 사용 중이신가요?"
                  startSlot={loginStartSlot}
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
