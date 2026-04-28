import React, { memo, HTMLAttributes, ReactNode } from "react";
import { LinkCard } from "../app/components/LinkCard";
import { LinkListItem } from "../app/components/LinkListItem";
import { Icon } from "../app/components/Icon";

const imgkb3x = "/images/img-kb@3x.png";

// Placeholder for IconMembership as it's an INSTANCE component not provided and not in Icon.tsx
const IconMembershipPlaceholder = ({ size = 40 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* This is a placeholder for the missing Union [VECTOR] data from IconMembership.
        If specific path data for "Union" were provided, it would go here.
        Using a simple rectangle as a visual indicator. */}
    <rect width={24} height={25} fill="var(--container-gray-default)" />
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="8"
      fill="white"
    >
      Mem
    </text>
  </svg>
);

const UDSTT01Component = ({
  className = "",
  style,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  // Custom startSlot content for LinkListItem to correctly inject icons.
  // This bypasses ListLeftItem's hardcoded BlankLineIcon.

  // First LinkCard: icon_membership
  const membershipStartSlot: ReactNode = (
    <div
      className="start-container"
      style={{ display: "flex", alignItems: "center", gap: 0, flexShrink: 0 }}
    >
      <div
        className="list-left-item-wrapper" // Mimics ListLeftItem's root div
        style={{
          display: "inline-flex",
          alignItems: "center",
          flexShrink: 0,
          height: 24, // ListLeftItem's fixed height
          padding: 0,
          gap: 0,
          borderRadius: 0,
          width: "auto",
        }}
      >
        <div
          className="icon-slot" // Mimics IconSlot's div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            width: "var(--square-40, 40px)", // icon_membership size
            height: "var(--square-40, 40px)", // icon_membership size
          }}
        >
          <IconMembershipPlaceholder size={40} />
        </div>
      </div>
    </div>
  );

  // Second LinkCard: icon_login
  const loginStartSlot: ReactNode = (
    <div
      className="start-container"
      style={{ display: "flex", alignItems: "center", gap: 0, flexShrink: 0 }}
    >
      <div
        className="list-left-item-wrapper" // Mimics ListLeftItem's root div
        style={{
          display: "inline-flex",
          alignItems: "center",
          flexShrink: 0,
          height: 24, // ListLeftItem's fixed height
          padding: 0,
          gap: 0,
          borderRadius: 0,
          width: "auto",
        }}
      >
        <div
          className="icon-slot" // Mimics IconSlot's div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            width: "var(--square-40, 40px)", // icon_login size
            height: "var(--square-40, 40px)", // icon_login size
          }}
        >
          <Icon name="IconLogin" size={40} color="currentColor" />
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`screen ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 0,
        overflow: "hidden",
        backgroundColor: "var(--bg-base)",
        width: "100%",
        height: "100%", // Page frame should fill parent, often viewport
        ...style,
      }}
      {...props}
    >
      <div
        className="body-layout"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 0,
          overflow: "hidden",
          width: "100%", // horizontal=fill
          flex: 1, // vertical=fill, takes remaining height
        }}
      >
        <div
          className="title-section"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 0,
            width: "100%", // horizontal=fill
            padding: "var(--spacing-40, 40px) var(--spacing-32, 32px)",
          }}
        >
          <span
            className="kb국민은행에-오신-것을-환영합니다 text-style-notosanskr-display-md-medium"
            style={{
              color: "var(--texticon-gray-default)",
              margin: 0,
              whiteSpace: "pre-line", // Preserves explicit line breaks ()
            }}
          >
            KB국민은행에 오신 것을 환영합니다.
          </span>
        </div>
        <div
          className="box" // Renamed from 'container' to avoid Tailwind conflict
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--spacing-10, 10px)",
            padding: "var(--spacing-96, 96px) var(--spacing-24, 24px)",
            overflow: "hidden",
            width: "100%", // horizontal=fill
            flex: 1, // vertical=fill, takes remaining height
          }}
        >
          <div
            className="img-slot-block"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end", // items=end
              gap: 0,
              paddingTop: "var(--spacing-24, 24px)",
              width: "100%", // horizontal=fill
              flex: 1, // vertical=fill, takes remaining height
            }}
          >
            <img
              src={imgkb3x}
              width={214}
              height={234}
              alt="img_kb"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div
            className="card-button-block"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--spacing-12, 12px)",
              borderRadius: "var(--borderradius-lg, 10px)", // card-button-block radius
              width: "100%", // horizontal=fill
            }}
          >
            <LinkCard
              className="link-card-회원-가입"
              state="enabled"
              variants="filled"
              fullWidth={true} // horizontal=fill
              // Style overrides for LinkCard are handled by its props and internal fixed styles
              instanceSwap={
                <LinkListItem
                  variants="enabled"
                  fullWidth={true} // horizontal=fill
                  startSlot={membershipStartSlot} // Custom slot for IconMembership
                  title="회원 가입"
                  showDesc={true}
                  description="#desc"
                  showUnderDesc={true}
                  underDescription="KB스타뱅킹, 처음이세요?"
                />
              }
            />
            <LinkCard
              className="link-card-로그인"
              state="enabled"
              variants="filled"
              fullWidth={true} // horizontal=fill
              // Style overrides for LinkCard are handled by its props and internal fixed styles
              instanceSwap={
                <LinkListItem
                  variants="enabled"
                  fullWidth={true} // horizontal=fill
                  startSlot={loginStartSlot} // Custom slot for IconLogin
                  title="로그인"
                  showDesc={true}
                  description="#desc"
                  showUnderDesc={true}
                  underDescription="이미 사용 중이신가요?"
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
export default UDSTT01;
