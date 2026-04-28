import { memo, HTMLAttributes } from "react";

import { LinkCard } from "../components/LinkCard";
import { LinkListItem } from "../components/LinkListItem";

// Image imports
import imgkb3x from "../../public/images/imgkb@3x.png";

// Placeholder components for IconMembership and IconLogin.
// The actual component code or SVG data for "IconMembership" and "IconLogin"
// is not provided, and they are not listed in the generic Icon component's `IconName` type.
// As per rules, we cannot hardcode non-existent icon names or import missing components.
// These placeholders render a div with the specified dimensions and a descriptive text
// as a fallback for the missing visual asset.
const PlaceholderIconMembership = () => (
  <div
    className="icon-membership"
    aria-label="Membership Icon Placeholder"
    style={{
      width: "var(--square-40, 40px)",
      height: "var(--square-40, 40px)",
      flexShrink: 0,
      backgroundColor: "var(--container-gray-subtle)", // Neutral background
      borderRadius: "var(--borderradius-xs, 4px)", // Common small icon radius
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--texticon-gray-default)",
      fontSize: 12, // Small text for placeholder
    }}
  >
    Memb
  </div>
);

const PlaceholderIconLogin = () => (
  <div
    className="icon-login"
    aria-label="Login Icon Placeholder"
    style={{
      width: "var(--square-40, 40px)",
      height: "var(--square-40, 40px)",
      flexShrink: 0,
      backgroundColor: "var(--container-gray-subtle)", // Neutral background
      borderRadius: "var(--borderradius-xs, 4px)", // Common small icon radius
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--texticon-gray-default)",
      fontSize: 12, // Small text for placeholder
    }}
  >
    Login
  </div>
);

export type UDSTT01Props = HTMLAttributes<HTMLDivElement>;

const UDSTT01Component = ({
  className = "",
  style,
  ...props
}: UDSTT01Props) => {
  return (
    <div
      className={`screen ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // items=start
        width: "100%", // horizontal=fill w:fill
        height: "100%", // vertical=fill h:fill
        overflow: "hidden",
        backgroundColor: "var(--bg-base)",
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
          height: "auto", // vertical=hug h:hug
          gap: 0,
        }}
      ></div>

      {/* BodyLayout [FRAME] */}
      <div
        className="body-layout"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%", // horizontal=fill w:fill
          height: "100%", // vertical=fill h:fill
          overflow: "hidden",
          gap: 0,
          flex: 1, // Fill remaining vertical space
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
            height: "auto", // vertical=hug h:hug
            gap: 0,
            padding: "var(--spacing-40, 40px) var(--spacing-32, 32px)", // pad=var(--spacing-40, 40px)/var(--spacing-32, 32px)/var(--spacing-40, 40px)/var(--spacing-32, 32px)
          }}
        >
          {/* KB국민은행에  오신 것을 환영합니다. [TEXT] */}
          <span
            className="kb-welcome-text text-style-notosanskr-display-md-medium"
            style={{
              width: "auto", // horizontal=fixed, but `auto` allows content sizing in flex
              height: "auto", // vertical=fixed, but `auto` allows wrapping
              color: "var(--texticon-gray-default)",
              whiteSpace: "pre-line", // Preserves `\n` for line breaks
              margin: 0,
            }}
          >
            KB국민은행에{"\n"}오신 것을 환영합니다.
          </span>
        </div>

        {/* container [FRAME] (renamed to avoid Tailwind CSS class collision) */}
        <div
          className="container-wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // items=center
            width: "100%", // horizontal=fill w:fill
            height: "100%", // vertical=fill h:fill
            overflow: "hidden",
            flex: 1, // Fill remaining vertical space
            gap: "var(--spacing-10, 10px)",
            padding: "var(--spacing-96, 96px) var(--spacing-24, 24px)", // pad=var(--spacing-96, 96px)/var(--spacing-24, 24px)/var(--spacing-96, 96px)/var(--spacing-24, 24px)
          }}
        >
          {/* ImgSlotBlock [FRAME] */}
          <div
            className="img-slot-block"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end", // items=end
              width: "100%", // horizontal=fill w:fill
              height: "100%", // vertical=fill h:fill
              flex: 1, // Fill remaining vertical space
              gap: 0,
              paddingTop: "var(--spacing-24, 24px)", // pad=var(--spacing-24, 24px)/0/0/0
            }}
          >
            {/* img_kb [IMAGE_ASSET] */}
            <img
              src={imgkb3x}
              width={214}
              height={234}
              alt="KB Logo"
              style={{ objectFit: "contain", flexShrink: 0 }}
              className="img-kb"
            />
          </div>

          {/* CardButtonBlock [FRAME] */}
          <div
            className="card-button-block"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%", // horizontal=fill w:fill
              height: "auto", // vertical=hug h:hug
              gap: "var(--spacing-12, 12px)",
              borderRadius: "var(--borderradius-lg, 10px)",
            }}
          >
            {/* LinkCard [INSTANCE] component="LinkCard" */}
            <LinkCard
              className="link-card-membership"
              state="enabled"
              variants="filled"
              fullWidth={true} // horizontal=fill w:fill
              style={{ backgroundColor: "var(--container-gray-subtle3)" }}
              instanceSwap={
                <LinkListItem
                  variants="enabled"
                  showStartItem={true} // Explicitly true, as per Figma tree
                  startSlot={<PlaceholderIconMembership />} // Use the custom placeholder for the icon
                  title="회원 가입"
                  showDesc={true} // Explicitly true
                  description="#desc"
                  showUnderDesc={true} // Explicitly true
                  underDescription="KB스타뱅킹, 처음이세요?"
                  showEndItem={true} // Explicitly true (LinkListItem's default DirectionRightIcon)
                  fullWidth={true} // horizontal=fill w:fill
                />
              }
            />

            {/* LinkCard [INSTANCE] component="LinkCard" */}
            <LinkCard
              className="link-card-login"
              state="enabled"
              variants="filled"
              fullWidth={true} // horizontal=fill w:fill
              style={{ backgroundColor: "var(--container-gray-subtle3)" }}
              instanceSwap={
                <LinkListItem
                  variants="enabled"
                  showStartItem={true} // Explicitly true, as per Figma tree
                  startSlot={<PlaceholderIconLogin />} // Use the custom placeholder for the icon
                  title="로그인"
                  showDesc={true} // Explicitly true
                  description="#desc"
                  showUnderDesc={true} // Explicitly true
                  underDescription="이미 사용 중이신가요?"
                  showEndItem={true} // Explicitly true (LinkListItem's default DirectionRightIcon)
                  fullWidth={true} // horizontal=fill w:fill
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
