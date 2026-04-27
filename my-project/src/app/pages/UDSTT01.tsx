import React, { memo, HTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import { StatusBar } from "../components/StatusBar";
import { LinkCard } from "../components/LinkCard";
import { LinkListItem } from "../components/LinkListItem";
import { ListLeftItem } from "../components/ListLeftItem";
import { ListTitleItem } from "../components/ListTitleItem";
import { ListDescriptionItem } from "../components/ListDescriptionItem";
import { Icon } from "../components/Icon";
import imgkb3x from "../../../public/images/imgkb@3x.png";

// 2. type/interface 정의
export type UDSTT01Props = HTMLAttributes<HTMLDivElement>;

// 6. UDSTT01Component (함수 컴포넌트)
const UDSTT01Component = ({ className = "", style, ...props }: UDSTT01Props) => {
  return (
    <div
      className={`udstt01 ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        width: "100%",
        minHeight: "100vh", // Fixed height of 852px replaced with minHeight: 100vh for page component
        backgroundColor: "var(--bg-base)", // fills: var(--bg-base)
        ...style,
      }}
      {...props}
    >
      <div
        className="header-layout"
        style={{
          display: "flex",
          flexDirection: "column", // layout: VERTICAL
          gap: 0, // gap: 0
          alignItems: "flex-start", // items=start
          width: "100%", // horizontal=fill
          // vertical=hug, so height is determined by content
        }}
      >
        <StatusBar platform="ios" />
      </div>

      <div
        className="body-layout"
        style={{
          display: "flex",
          flexDirection: "column", // layout: VERTICAL
          gap: 0, // gap: 0
          alignItems: "flex-start", // items=start
          overflow: "hidden", // overflow=hidden
          width: "100%", // horizontal=fill
          flex: 1, // vertical=fill
        }}
      >
        <div
          className="title-section"
          style={{
            display: "flex",
            flexDirection: "column", // layout: VERTICAL
            gap: 0, // gap: 0
            alignItems: "flex-start", // items=start
            width: "100%", // horizontal=fill
            // vertical=hug, so height is determined by content
            padding: "var(--spacing-40, 40px) var(--spacing-32, 32px)", // pad=var(--spacing-40, 40px)/var(--spacing-32, 32px)/var(--spacing-40, 40px)/var(--spacing-32, 32px)
          }}
        >
          <span
            className="kb국민은행에-오신-것을-환영합니다 text-style-notosanskr-display-md-medium"
            style={{
              color: "var(--texticon-gray-default)", // textColor=var(--texticon-gray-default)
              margin: 0,
              whiteSpace: "pre-line", // Preserves newlines in the text
            }}
          >
            KB국민은행에  오신 것을 환영합니다.
          </span>
        </div>

        <div
          className="box" // Renamed from "container" to avoid Tailwind CSS conflicts
          style={{
            position: "relative", // Required for absolute positioning of ImgSlotBlock
            display: "flex",
            flexDirection: "column", // layout: VERTICAL
            gap: 0, // gap: 0
            alignItems: "center", // items=center
            overflow: "hidden", // overflow=hidden
            width: "100%", // horizontal=fill
            flex: 1, // vertical=fill
            padding: "var(--spacing-96, 96px) var(--spacing-24, 24px)", // pad=var(--spacing-96, 96px)/var(--spacing-24, 24px)/var(--spacing-96, 96px)/var(--spacing-24, 24px)
          }}
        >
          <div
            className="card-button-block"
            style={{
              display: "flex",
              flexDirection: "column", // layout: VERTICAL
              gap: "var(--spacing-12, 12px)", // gap=var(--spacing-12, 12px)
              alignItems: "flex-start", // items=start
              width: "100%", // horizontal=fill
              // vertical=hug, so height is auto
              borderRadius: "var(--borderradius-lg, 10px)", // radius=10(var(--borderradius-lg))
            }}
          >
            <LinkCard
              fullWidth={true} // horizontal=fill
              state="enabled" // props={state=enabled}
              variants="filled" // props={variants=filled}
              style={{
                backgroundColor: "var(--container-gray-subtle3)", // fill=var(--container-gray-subtle3)
                borderRadius: "var(--borderradius-2xl, 16px)", // radius=16(var(--borderradius-2xl))
                padding: "var(--spacing-20, 20px)", // pad=var(--spacing-20, 20px)/...
              }}
              instanceSwap={
                <LinkListItem
                  variants="enabled" // props={variants=enabled}
                  title="회원가입" // titleText="회원가입"
                  description="KB스타뱅킹, 처음이신가요?" // titleText="KB스타뱅킹, 처음이신가요?"
                  // The Figma tree for this LinkListItem shows ListLeftItem with icon_membership.
                  // However, the provided `ListLeftItem` component's `iconSlot` variant
                  // internally renders `<Icon name="BlankLineIcon" />`.
                  // Since `LinkListItem`'s `startSlot` is for replacing `ListLeftItem` and not customizing its internal icon,
                  // and `ListLeftItem` has no prop to customize its `iconSlot` icon,
                  // we let `LinkListItem` render its default `ListLeftItem` behavior for this case.
                  // `showStartItem` and `showDesc` are true by default in `LinkListItem`.
                />
              }
            />
            <LinkCard
              fullWidth={true} // horizontal=fill
              state="enabled" // props={state=enabled}
              variants="filled" // props={variants=filled}
              style={{
                backgroundColor: "var(--container-gray-subtle3)", // fill=var(--container-gray-subtle3)
                borderRadius: "var(--borderradius-2xl, 16px)", // radius=16(var(--borderradius-2xl))
                padding: "var(--spacing-20, 20px)", // pad=var(--spacing-20, 20px)/...
              }}
              instanceSwap={
                <LinkListItem
                  variants="enabled" // props={variants=enabled}
                  title="로그인" // titleText="로그인"
                  description="이미 사용중이신가요?" // titleText="이미 사용중이신가요?"
                  // The Figma tree for this LinkListItem shows ListLeftItem -> IconSlot -> icon_login.
                  // The `Icon` component *does* have "IconLogin" as an `IconName`.
                  // To render "IconLogin" instead of `ListLeftItem`'s default "BlankLineIcon" for `iconSlot` variant,
                  // we must use `LinkListItem`'s `startSlot` to replace the `ListLeftItem` content entirely.
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
                      {/* Simulating IconSlot's layout, as IconSlot component is not provided */}
                      <div
                        className="icon-slot"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          width: "var(--square-40, 40px)", // size=40 from IconSlot props
                          height: "var(--square-40, 40px)", // size=40 from IconSlot props
                        }}
                      >
                        <Icon
                          name="IconLogin" // [INSTANCE] component="IconLogin" (resolved to IconName)
                          size={40} // From w:var(--square-40, 40px), h:var(--square-40, 40px)
                          color="currentColor"
                        />
                      </div>
                    </div>
                  }
                />
              }
            />
          </div>

          <div
            className="img-slot-block"
            style={{
              position: "absolute", // position=absolute
              bottom: "var(--spacing-96, 96px)", // Positioned relative to parent's padding-bottom
              right: "var(--spacing-24, 24px)", // Positioned relative to parent's padding-right
              display: "flex",
              flexDirection: "column", // layout: VERTICAL
              alignItems: "flex-end", // items=end
              paddingTop: "var(--spacing-24, 24px)", // pad=var(--spacing-24, 24px)/0/0/0
              width: 345, // horizontal=fixed w:345
              // vertical=hug, so height is auto
              pointerEvents: "none", // Allows interaction with elements underneath
            }}
          >
            <Image
              src={imgkb3x} // import imgkb3x from "{IMAGE_IMPORT_PATH}imgkb@3x.png"
              width={214} // w:214
              height={172} // h:172
              alt="img_kb"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// 7. memo + displayName + export
const UDSTT01 = memo(UDSTT01Component);
UDSTT01.displayName = "UDSTT01";
export { UDSTT01 };