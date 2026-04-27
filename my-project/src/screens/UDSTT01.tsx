import React, { memo, HTMLAttributes, ReactNode } from "react";
import { StatusBar } from "../app/components/StatusBar";
import { LinkCard } from "../app/components/LinkCard";
import { LinkListItem } from "../app/components/LinkListItem";
import { Icon } from "../app/components/Icon";

import imgkb3x from "../../public/images/imgkb@3x.png";

export type UDSTT01Props = HTMLAttributes<HTMLDivElement>;

const UDSTT01Component = ({ className = "", style, ...props }: UDSTT01Props) => {
  // Placeholder for IconMembership as it's an instance but not in Icon.tsx and no path data for its vector child.
  // We'll create a div that represents the visual dimensions of the Union VECTOR inside the IconMembership instance.
  const IconMembershipPlaceholder = (
    <div
      style={{
        width: 24, // width from Union [VECTOR]
        height: 25, // height from Union [VECTOR]
        backgroundColor: "var(--container-gray-subtle)", // Placeholder color
        borderRadius: "var(--cornerradius-xs, 4px)", // Example border radius
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 10,
        color: "var(--texticon-gray-invert)",
      }}
      aria-hidden="true"
    >
      M
    </div>
  );

  return (
    <div
      className={`udstt01 ${className}`}
      style={{
        width: "100%",
        height: "100%", // Page component, fills container
        display: "flex",
        flexDirection: "column",
        gap: 0,
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
          alignItems: "flex-start",
          gap: 0,
          width: "100%",
          height: "auto",
        }}
      >
        <StatusBar platform="ios" />
      </div>

      <div
        className="body-layout"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 0,
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
            alignItems: "flex-start",
            gap: 0,
            width: "100%",
            height: "auto",
            padding: "var(--spacing-40, 40px) var(--spacing-32, 32px)",
          }}
        >
          <span
            className="kb-text text-style-notosanskr-display-md-medium"
            style={{
              color: "var(--texticon-gray-default)",
              margin: 0,
              width: 329,
              height: 80,
              whiteSpace: "pre-line", // For multi-line text
              flexShrink: 0, // Prevent text from shrinking
            }}
          >
            KB국민은행에{"\n"}오신 것을 환영합니다.
          </span>
        </div>

        <div
          className="box" // Changed from "container" to "box" to avoid Tailwind conflict
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--spacing-10, 10px)",
            width: "100%",
            flex: 1, // vertical=fill
            padding: "var(--spacing-96, 96px) var(--spacing-24, 24px)",
            overflow: "hidden",
          }}
        >
          <div
            className="img-slot-block"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 0,
              width: "100%",
              flex: 1, // vertical=fill
              paddingTop: "var(--spacing-24, 24px)",
            }}
          >
            <img
              src={imgkb3x}
              width={214}
              height={234}
              alt="img_kb"
              style={{ objectFit: "contain", flexShrink: 0 }}
            />
          </div>

          <div
            className="card-button-block"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--spacing-12, 12px)",
              width: "100%", // horizontal=fill
              height: "auto", // vertical=hug
              borderRadius: "var(--borderradius-lg, 10px)",
            }}
          >
            <LinkCard state="enabled" variants="filled" fullWidth={true}>
              <LinkListItem
                variants="enabled"
                title="회원 가입"
                description="#desc"
                underDescription="KB스타뱅킹, 처음이세요?"
                fullWidth={true}
                // Custom startSlot to inject IconMembership placeholder
                startSlot={
                  <div
                    className="start-container"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0,
                      flexShrink: 0,
                    }}
                  >
                    <div
                      className="icon-slot"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "var(--square-40, 40px)",
                        height: "var(--square-40, 40px)",
                        flexShrink: 0,
                      }}
                    >
                      {IconMembershipPlaceholder}
                    </div>
                  </div>
                }
              />
            </LinkCard>

            <LinkCard state="enabled" variants="filled" fullWidth={true}>
              <LinkListItem
                variants="enabled"
                title="로그인"
                description="#desc"
                underDescription="이미 사용 중이신가요?"
                fullWidth={true}
                // Custom startSlot to inject IconLogin
                startSlot={
                  <div
                    className="start-container"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0,
                      flexShrink: 0,
                    }}
                  >
                    <div
                      className="icon-slot"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "var(--square-40, 40px)",
                        height: "var(--square-40, 40px)",
                        flexShrink: 0,
                      }}
                    >
                      <Icon name="IconLogin" size={40} color="currentColor" />
                    </div>
                  </div>
                }
              />
            </LinkCard>
          </div>
        </div>
      </div>
    </div>
  );
};

const UDSTT01 = memo(UDSTT01Component);
UDSTT01.displayName = "UDSTT01";
export { UDSTT01 };