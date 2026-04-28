import React, { memo, HTMLAttributes, ReactNode } from "react";
import { StatusBar } from "../components/StatusBar";
import { LinkCard } from "../components/LinkCard";
import { LinkListItem } from "../components/LinkListItem";
import imgkb3x from "../../../public/images/img-kb@3x.png";

export type TT01Props = HTMLAttributes<HTMLDivElement>;

// Helper component for IconMembership (Vector SVG)
const IconMembershipSVG = ({ size = 40, color = "currentColor" }: { size?: number; color?: string }) => (
  <div
    className="icon-slot"
    style={{
      width: size,
      height: size,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      color,
    }}
  >
    <div
      aria-hidden="true"
      style={{ width: 24, height: 25, flexShrink: 0 }}
      dangerouslySetInnerHTML={{
        __html:
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M12 1.00049C5.925 1.00049 1 5.92549 1 12.0005C1 18.0755 5.925 23.0005 12 23.0005C18.075 23.0005 23 18.0755 23 12.0005C23 5.92549 18.075 1.00049 12 1.00049ZM16.25 16.0366L15 14.7866C14.0048 15.6599 12.6074 16.1916 12 16.1916C10.027 16.1916 8.33333 14.5249 8.33333 12.5519C8.33333 10.5789 10.027 8.91221 12 8.91221C12.6074 8.91221 14.0048 9.44391 15 10.3172L16.25 9.06721C14.707 7.74999 12.8333 7.00052 12 7.00052C6.98333 7.00052 2.83333 11.1505 2.83333 16.1672C2.83333 21.1839 6.98333 25.3339 12 25.3339C12.8333 25.3339 14.707 24.5844 16.25 23.2672L16.25 16.0366ZM12 7.75052C10.027 7.75052 8.33333 9.44421 8.33333 11.4172C8.33333 13.3902 10.027 15.0839 12 15.0839C13.973 15.0839 15.6667 13.3902 15.6667 11.4172C15.6667 9.44421 13.973 7.75052 12 7.75052Z" fill="currentColor"></path><path d="M12 11.4172C10.027 11.4172 8.33333 13.1109 8.33333 15.0839C8.33333 17.0569 10.027 18.7505 12 18.7505C13.973 18.7505 15.6667 17.0569 15.6667 15.0839C15.6667 13.1109 13.973 11.4172 12 11.4172Z" fill="currentColor"></path><path d="M12 1.00049C18.075 1.00049 23 5.92549 23 12.0005C23 18.0755 18.075 23.0005 12 23.0005C5.925 23.0005 1 18.0755 1 12.0005C1 5.92549 5.925 1.00049 12 1.00049Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 7.75052C13.973 7.75052 15.6667 9.44421 15.6667 11.4172C15.6667 13.3902 13.973 15.0839 12 15.0839C10.027 15.0839 8.33333 13.3902 8.33333 11.4172C8.33333 9.44421 10.027 7.75052 12 7.75052Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>',
      }}
    />
  </div>
);

// Helper component for IconLogin (Vector SVG)
const IconLoginSVG = ({ size = 40, color = "currentColor" }: { size?: number; color?: string }) => (
  <div
    className="icon-slot"
    style={{
      width: size,
      height: size,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      color,
    }}
  >
    <div
      aria-hidden="true"
      style={{ width: 28, height: 26, flexShrink: 0 }}
      dangerouslySetInnerHTML={{
        __html:
          '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none"><path d="M14.0005 1C7.88219 1 2.83386 5.86475 2.83386 11.8333V12.75H1.0005V11.8333C1.0005 5.09311 6.64336 0.16666 14.0005 0.16666C21.3576 0.16666 27.0005 5.09311 27.0005 11.8333V12.75H25.1671V11.8333C25.1671 5.86475 20.1188 1 14.0005 1Z" fill="currentColor"></path><path d="M14.0005 12.75C11.5458 12.75 9.18386 13.6293 7.42553 15.191C5.6672 16.7527 4.58386 18.8687 4.58386 21.1667V24.5833H23.4171V21.1667C23.4171 18.8687 22.3338 16.7527 20.5755 15.191C18.8171 13.6293 16.4552 12.75 14.0005 12.75ZM1.0005 14.5833V25.4167C1.0005 25.8769 1.37365 26.25 1.83386 26.25H26.1671C26.6273 26.25 27.0005 25.8769 27.0005 25.4167V14.5833H25.1671V21.1667C25.1671 21.7335 24.9602 22.284 24.5849 22.7099C24.2096 23.1357 23.702 23.375 23.1671 23.375H4.83386C4.29897 23.375 3.79133 23.1357 3.41604 22.7099C3.04075 22.284 2.83386 21.7335 2.83386 21.1667V14.5833H1.0005Z" fill="currentColor"></path><path d="M14.0005 12.75C11.5458 12.75 9.18386 13.6293 7.42553 15.191C5.6672 16.7527 4.58386 18.8687 4.58386 21.1667V24.5833H23.4171V21.1667C23.4171 18.8687 22.3338 16.7527 20.5755 15.191C18.8171 13.6293 16.4552 12.75 14.0005 12.75ZM1.0005 14.5833V25.4167C1.0005 25.8769 1.37365 26.25 1.83386 26.25H26.1671C26.6273 26.25 27.0005 25.8769 27.0005 25.4167V14.5833H25.1671V21.1667C25.1671 21.7335 24.9602 22.284 24.5849 22.7099C24.2096 23.1357 23.702 23.375 23.1671 23.375H4.83386C4.29897 23.375 3.79133 23.1357 3.41604 22.7099C3.04075 22.284 2.83386 21.7335 2.83386 21.1667V14.5833H1.0005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>',
      }}
    />
  </div>
);

const TT01Component = ({ className = "", style, ...props }: TT01Props) => {
  return (
    <div
      className={`tt01 ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%", // Horizontal=fill
        minHeight: "100vh", // Vertical=fill
        backgroundColor: "var(--bg-base)",
        gap: 0,
        padding: 0,
        borderRadius: 0,
        ...style,
      }}
      {...props}
    >
      {/* HeaderLayout [FRAME] */}
      <div
        className="header-layout"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%", // horizontal=fill w:fill
          flexShrink: 0, // vertical=hug h:hug
          gap: 0,
        }}
      >
        {/* StatusBar [INSTANCE] */}
        <StatusBar platform="ios" style={{ width: "100%" }} />
      </div>

      {/* BodyLayout [FRAME] */}
      <div
        className="body-layout"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%", // horizontal=fill w:fill
          flex: 1, // vertical=fill h:fill
          gap: 0,
          overflow: "hidden",
        }}
      >
        {/* TitleSection [FRAME] */}
        <div
          className="title-section"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%", // horizontal=fill w:fill
            flexShrink: 0, // vertical=hug h:hug
            paddingTop: "var(--spacing-40, 40px)",
            paddingRight: "var(--spacing-32, 32px)",
            paddingBottom: "var(--spacing-40, 40px)",
            paddingLeft: "var(--spacing-32, 32px)",
            gap: 0,
          }}
        >
          {/* KB국민은행에  오신 것을 환영합니다. [TEXT] */}
          <span
            className="kb-gugmin-eunhaeng-e-osin-geos-eul-hwangyeonghabnida text-style-notosanskr-display-md-medium"
            style={{
              width: 329, // fixed w
              height: 80, // fixed h
              color: "var(--texticon-gray-default)",
              margin: 0,
              whiteSpace: "pre-line", // For multiline text from Figma
            }}
          >
            KB국민은행에 <br />
            오신 것을 환영합니다.
          </span>
        </div>

        {/* container [FRAME] */}
        <div
          className="container"
          style={{
            position: "relative", // For absolute positioning of ImgSlotBlock
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%", // horizontal=fill w:fill
            flex: 1, // vertical=fill h:fill
            paddingTop: "var(--spacing-96, 96px)",
            paddingRight: "var(--spacing-24, 24px)",
            paddingBottom: "var(--spacing-96, 96px)",
            paddingLeft: "var(--spacing-24, 24px)",
            gap: 0,
            overflow: "hidden", // overflow=hidden
          }}
        >
          {/* CardButtonBlock [FRAME] */}
          <div
            className="card-button-block"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%", // horizontal=fill w:fill
              flexShrink: 0, // vertical=hug h:hug
              gap: "var(--spacing-12, 12px)",
              borderRadius: "var(--borderradius-lg, 10px)",
              position: "relative", // For z-index context against ImgSlotBlock
            }}
          >
            {/* LinkCard [INSTANCE] #1 */}
            <LinkCard
              state="enabled"
              variants="filled"
              fullWidth={true} // horizontal=fill
              style={{
                backgroundColor: "var(--container-gray-subtle3)",
                borderRadius: "var(--borderradius-2xl, 16px)",
              }}
              instanceSwap={
                <LinkListItem
                  variants="enabled"
                  showUnderDesc={false} // Figma tree doesn't show description below title
                  title="회원가입"
                  description="KB스타뱅킹, 처음이신가요?"
                  startSlot={<IconMembershipSVG size={40} color="var(--texticon-gray-default)" />}
                  fullWidth={true} // horizontal=fill
                />
              }
            />

            {/* LinkCard [INSTANCE] #2 */}
            <LinkCard
              state="enabled"
              variants="filled"
              fullWidth={true} // horizontal=fill
              style={{
                backgroundColor: "var(--container-gray-subtle3)",
                borderRadius: "var(--borderradius-2xl, 16px)",
              }}
              instanceSwap={
                <LinkListItem
                  variants="enabled"
                  showUnderDesc={false} // Figma tree doesn't show description below title
                  title="로그인"
                  description="이미 사용중이신가요?"
                  startSlot={<IconLoginSVG size={40} color="var(--texticon-gray-default)" />}
                  fullWidth={true} // horizontal=fill
                />
              }
            />
          </div>

          {/* ImgSlotBlock [FRAME] */}
          <div
            className="img-slot-block"
            style={{
              position: "absolute",
              width: 345, // fixed w
              height: "auto", // hug h:hug
              paddingTop: "var(--spacing-24, 24px)",
              paddingRight: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              display: "flex",
              flexDirection: "column", // VERTICAL
              alignItems: "flex-end", // items=end
              // Position relative to the parent "container"
              bottom: "var(--spacing-96, 96px)", // Aligns with bottom padding of container
              right: "var(--spacing-24, 24px)", // Aligns with right padding of container
              pointerEvents: "none", // Image is decorative
            }}
          >
            {/* img_kb [IMAGE_ASSET] */}
            <img
              src={imgkb3x}
              width={214}
              height={172}
              alt="img-kb"
              style={{ objectFit: "contain", flexShrink: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const TT01 = memo(TT01Component);
TT01.displayName = "TT01";
export default TT01;
