import React, { memo, HTMLAttributes } from "react";
import { StatusBar } from "../app/components/StatusBar";
import { LinkCard } from "../app/components/LinkCard";
import { LinkListItem } from "../app/components/LinkListItem";
import { Icon } from "../app/components/Icon";
import imgkb3x from "../../public/images/imgkb@3x.png";

// IconMembershipComponent (Inline SVG placeholder as the component definition is not provided and it's not in Icon.tsx)
const IconMembershipComponent = ({ size = 40, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-membership">
    {/* Placeholder content for Union [VECTOR] (w:24, h:25) */}
    <rect x={(size - 24) / 2} y={(size - 25) / 2} width="24" height="25" fill={color} opacity="0.5" />
    {/* Real path data for icon_membership's Union [VECTOR] would be inserted here if provided */}
  </svg>
);

export type UDSTT01Props = HTMLAttributes<HTMLDivElement>;

const UDSTT01Component = ({ className = "", style, ...props }: UDSTT01Props) => {
  return (
    <div
      className={`udstt01 ${className}`}
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        backgroundColor: "var(--bg-base)",
        ...style,
      }}
      {...props}
    >
      <div
        className="screen"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div
          className="header-layout"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
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
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <div
            className="title-section"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
              padding: "var(--spacing-40, 40px) var(--spacing-32, 32px)",
            }}
          >
            <span
              className="kb-welcome-text text-style-notosanskr-display-md-medium"
              style={{
                color: "var(--texticon-gray-default)",
                margin: 0,
                width: 329,
                height: 80,
              }}
            >
              KB국민은행에  오신 것을 환영합니다.
            </span>
          </div>
          <div
            className="box"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              height: "100%",
              padding: "var(--spacing-96, 96px) var(--spacing-24, 24px)",
              gap: "var(--spacing-10, 10px)",
              overflow: "hidden",
            }}
          >
            <div
              className="img-slot-block"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                width: "100%",
                height: "100%",
                paddingTop: "var(--spacing-24, 24px)",
              }}
            >
              <img
                src={imgkb3x}
                width={214}
                height={234}
                alt="KB Image"
                style={{ objectFit: "contain" }}
                className="img-kb"
              />
            </div>
            <div
              className="card-button-block"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
                gap: "var(--spacing-12, 12px)",
                borderRadius: "var(--borderradius-lg, 10px)",
              }}
            >
              <LinkCard
                className="link-card-member"
                state="enabled"
                variants="filled"
                fullWidth={true}
                onClick={() => console.log("회원 가입 LinkCard clicked")}
                // backgroundColor, borderRadius, padding are default for variants="filled"
                // and fixedStyles, so no need to override via 'style' prop
                instanceSwap={
                  <LinkListItem
                    className="link-list-item-member"
                    variants="enabled"
                    fullWidth={true}
                    title="회원 가입"
                    description="#desc"
                    underDescription="KB스타뱅킹, 처음이세요?"
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
                            flexShrink: 0,
                            width: "var(--square-40, 40px)",
                            height: "var(--square-40, 40px)",
                          }}
                        >
                          <IconMembershipComponent size={40} color="var(--texticon-gray-default)" />
                        </div>
                      </div>
                    }
                  />
                }
              />
              <LinkCard
                className="link-card-login"
                state="enabled"
                variants="filled"
                fullWidth={true}
                onClick={() => console.log("로그인 LinkCard clicked")}
                // backgroundColor, borderRadius, padding are default for variants="filled"
                // and fixedStyles, so no need to override via 'style' prop
                instanceSwap={
                  <LinkListItem
                    className="link-list-item-login"
                    variants="enabled"
                    fullWidth={true}
                    title="로그인"
                    description="#desc"
                    underDescription="이미 사용 중이신가요?"
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
                            flexShrink: 0,
                            width: "var(--square-40, 40px)",
                            height: "var(--square-40, 40px)",
                          }}
                        >
                          <Icon name="IconLogin" size={40} color="var(--texticon-gray-default)" />
                        </div>
                      </div>
                    }
                  />
                }
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
export default UDSTT01;
