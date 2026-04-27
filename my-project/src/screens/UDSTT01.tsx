import React, { memo } from "react";
import Image from "next/image";
import { StatusBar } from "../components/StatusBar";
import { LinkCard } from "../components/LinkCard";
import { LinkListItem } from "../components/LinkListItem";
import { Icon } from "../components/Icon";

// CustomIconMembership definition (since it's an instance with VECTOR child and not provided)
interface CustomIconMembershipProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const CustomIconMembershipComponent = ({
  size = 40,
  color = "currentColor",
  ...props
}: CustomIconMembershipProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Placeholder path for Union from Figma tree */}
      {/* Figma: Union [VECTOR] (horizontal=fixed w:24, vertical=fixed h:25) */}
      <rect x="8" y="7.5" width="24" height="25" fill={color} opacity="0.5" />
      <text x="10" y="25" fill="white" fontSize="10px">
        Member
      </text>
    </svg>
  );
};

const CustomIconMembership = memo(CustomIconMembershipComponent);
CustomIconMembership.displayName = "CustomIconMembership";

// Image asset imports
import imgkb3x from "../../../public/images/imgkb@3x.png";

// Type definitions for the page component
export type UDSTT01Props = React.HTMLAttributes<HTMLDivElement>;

const UDSTT01Component = ({
  className = "",
  style,
  ...props
}: UDSTT01Props) => {
  const pageStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    width: "100%",
    minHeight: "100vh", // Fill screen height
    backgroundColor: "var(--bg-base)",
    ...style,
  };

  return (
    <div
      className={`udstt01 ${className}`}
      style={pageStyle}
      role="main"
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
          flex: 1, // vertical=fill
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
            padding:
              "var(--spacing-40, 40px) var(--spacing-32, 32px) var(--spacing-40, 40px) var(--spacing-32, 32px)",
          }}
        >
          <span
            className="kb-welcome-text text-style-notosanskr-display-md-medium"
            style={{
              color: "var(--texticon-gray-default)",
              margin: 0,
              width: "100%", // horizontal=fixed, but within flex container, fill width
              whiteSpace: "pre-line", // To preserve the newline character in the text
            }}
          >
            KB국민은행에 <br />
            오신 것을 환영합니다.
          </span>
        </div>

        <div
          className="card-content-wrapper" // Renamed from "container" to avoid Tailwind conflict
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            alignItems: "center",
            width: "100%",
            flex: 1, // vertical=fill
            padding:
              "var(--spacing-96, 96px) var(--spacing-24, 24px) var(--spacing-96, 96px) var(--spacing-24, 24px)",
            overflow: "hidden",
          }}
        >
          <div
            className="card-button-block"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-12, 12px)",
              alignItems: "flex-start",
              width: "100%", // horizontal=fill
              borderRadius: "var(--borderradius-lg, 10px)",
              position: "relative", // For absolute positioning of img_kb
            }}
          >
            <LinkCard
              className="link-card"
              fullWidth={true}
              state="enabled"
              variants="filled"
              // LinkCard's internal styles handle fill, radius, and padding based on variants prop
              // The default LinkCard component has borderRadius: var(--borderradius-2xl, 16px) which matches Figma's 16
              // The default LinkCard component has padding: var(--spacing-20, 20px) which matches Figma's 20
              instanceSwap={
                <LinkListItem
                  variants="enabled"
                  title="회원가입"
                  description="KB스타뱅킹, 처음이신가요?"
                  showStartItem={true}
                  showDesc={true}
                  showUnderDesc={false} // Explicitly false as no `underDescription` is present in the Figma tree
                  fullWidth={true}
                  startSlot={
                    <div
                      className="icon-slot"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        width: "var(--square-40, 40px)",
                        height: "var(--square-40, 40px)",
                      }}
                    >
                      <CustomIconMembership size={40} />
                    </div>
                  }
                />
              }
            />

            <LinkCard
              className="link-card"
              fullWidth={true}
              state="enabled"
              variants="filled"
              instanceSwap={
                <LinkListItem
                  variants="enabled"
                  title="로그인"
                  description="이미 사용중이신가요?"
                  showStartItem={true}
                  showDesc={true}
                  showUnderDesc={false} // Explicitly false as no `underDescription` is present in the Figma tree
                  fullWidth={true}
                  startSlot={
                    <div
                      className="icon-slot"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        width: "var(--square-40, 40px)",
                        height: "var(--square-40, 40px)",
                      }}
                    >
                      <Icon name="IconLogin" size={40} color="currentColor" />
                    </div>
                  }
                />
              }
            />

            <div
              className="img-slot-block"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                alignItems: "flex-end",
                width: 345, // fixed w:345
                paddingTop: "var(--spacing-24, 24px)",
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                position: "absolute",
                bottom: 0, // Placed at the bottom of card-button-block
                right: 0, // Aligned to the right
                pointerEvents: "none", // Allow clicks to pass through
              }}
            >
              <Image
                src={imgkb3x}
                width={214}
                height={172}
                alt="img_kb"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UDSTT01 = memo(UDSTT01Component);
UDSTT01.displayName = "UDSTT01";
export { UDSTT01 };
