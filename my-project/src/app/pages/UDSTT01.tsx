import React, { memo, ReactNode, HTMLAttributes } from "react";
import Image from "next/image";
import { StatusBar } from "./StatusBar";
import { LinkCard } from "./LinkCard";
import { LinkListItem } from "./LinkListItem";
import { ListLeftItem } from "./ListLeftItem";
import { IconSlot } from "./IconSlot";
import { IconMembership } from "./IconMembership";
import { ListTitleItem } from "./ListTitleItem";
import { ListDescriptionItem } from "./ListDescriptionItem";
import { IconLogin } from "./IconLogin";

// IMAGE_ASSET import
import imgkb3x from "../../../public/images/imgkb@3x.png";

// 1. type/interface 정의
export interface Udstt01Props extends HTMLAttributes<HTMLDivElement> {}

// 6. Udstt01Component (함수 컴포넌트)
const Udstt01Component = ({ className = "", style, ...props }: Udstt01Props) => {
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
        minHeight: "100vh", // 페이지는 항상 뷰포트 높이를 채워야 합니다.
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
          width: "100%", // horizontal=fill
          height: "auto", // vertical=hug
          alignItems: "flex-start", // items=start
        }}
      >
        <StatusBar className="status-bar-instance" platform="ios" style={{ width: "100%", height: 48 }} />
      </div>

      <div
        className="body-layout"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          width: "100%", // horizontal=fill
          flex: 1, // vertical=fill (남은 공간 채움)
          alignItems: "flex-start", // items=start
          overflow: "hidden", // overflow=hidden
        }}
      >
        <div
          className="title-section"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            width: "100%", // horizontal=fill
            height: "auto", // vertical=hug (콘텐츠에 따라 높이 조절)
            alignItems: "flex-start", // items=start
            padding: "var(--spacing-40, 40px) var(--spacing-32, 32px)", // pad=var(--spacing-40, 40px)/var(--spacing-32, 32px)/var(--spacing-40, 40px)/var(--spacing-32, 32px)
          }}
        >
          <span
            className="kb-gugmin-eunhaeng-e-osin-geoseul-hwan-yeonghabnida text-style-notosanskr-display-md-medium"
            style={{
              width: "100%", // Figma의 고정 width 329는 무시하고 fill로 처리 (반응형)
              height: "auto", // Figma의 고정 height 80은 무시하고 auto로 처리 (텍스트 내용에 맞춤)
              color: "var(--texticon-gray-default)",
              margin: 0, // 기본 margin 제거
            }}
          >
            KB국민은행에  오신 것을 환영합니다.
          </span>
        </div>

        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            width: "100%", // horizontal=fill
            flex: 1, // vertical=fill (남은 공간 채움)
            alignItems: "center", // items=center
            padding: "var(--spacing-96, 96px) var(--spacing-24, 24px)", // pad=var(--spacing-96, 96px)/var(--spacing-24, 24px)/var(--spacing-96, 96px)/var(--spacing-24, 24px)
            overflow: "hidden", // overflow=hidden
            position: "relative", // img-slot-block의 absolute 포지셔닝을 위한 기준
          }}
        >
          <div
            className="card-button-block"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-12, 12px)", // gap=var(--spacing-12, 12px)
              width: "100%", // horizontal=fill
              height: "auto", // vertical=hug
              alignItems: "flex-start", // items=start
              borderRadius: "var(--borderradius-lg, 10px)", // radius=10(var(--borderradius-lg))
              position: "relative", // ImgSlotBlock을 위한 position:relative
            }}
          >
            <LinkCard
              state="enabled"
              variants="filled"
              fullWidth={true} // horizontal=fill
              // LinkCard 컴포넌트 내부에서 variants="filled"에 따라 backgroundColor, borderRadius 등이 설정되므로,
              // 여기에 중복된 style prop을 전달하지 않습니다.
            >
              <LinkListItem variants="enabled" fullWidth={true}>
                <div
                  className="start-container"
                  style={{ display: "flex", alignItems: "center", gap: 0 }}
                >
                  <ListLeftItem variants="iconSlot">
                    <IconSlot size={40}>
                      {/* icon_membership [INSTANCE] component="IconMembership" */}
                      <IconMembership size={40} />
                    </IconSlot>
                  </ListLeftItem>
                </div>
                <div
                  className="center-container"
                  style={{
                    display: "flex",
                    flexDirection: "column", // VERTICAL
                    gap: "var(--spacing-2, 2px)", // gap=var(--spacing-2, 2px)
                    alignItems: "flex-start", // items=start
                    flex: 1, // horizontal=fill
                  }}
                >
                  <div
                    className="title-container"
                    style={{
                      display: "flex",
                      gap: "var(--spacing-4, 4px)", // gap=var(--spacing-4, 4px)
                      alignItems: "center", // items=center
                      flexWrap: "wrap", // wrap
                      width: "100%", // horizontal=fill
                    }}
                  >
                    <ListTitleItem
                      variants="enabled"
                      size="md"
                      color="gray"
                      fontWeight="medium"
                      title="회원가입"
                      // titleText의 nowrap을 유지하며 flex 아이템으로 동작하도록
                      style={{ flexShrink: 0, width: "auto" }}
                    />
                    <ListDescriptionItem
                      variants="enabled"
                      size="xs"
                      color="grayTinted"
                      fontWeight="medium"
                      title="KB스타뱅킹, 처음이신가요?"
                      // 남은 공간을 채우고, 필요시 줄바꿈을 허용 (flexWrap="wrap")
                      style={{ flex: 1, minWidth: 0 }}
                    />
                  </div>
                </div>
              </LinkListItem>
            </LinkCard>

            <LinkCard
              state="enabled"
              variants="filled"
              fullWidth={true} // horizontal=fill
            >
              <LinkListItem variants="enabled" fullWidth={true}>
                <div
                  className="start-container"
                  style={{ display: "flex", alignItems: "center", gap: 0 }}
                >
                  <ListLeftItem variants="iconSlot">
                    <IconSlot size={40}>
                      {/* icon_login [INSTANCE] component="IconLogin" */}
                      <IconLogin size={40} />
                    </IconSlot>
                  </ListLeftItem>
                </div>
                <div
                  className="center-container"
                  style={{
                    display: "flex",
                    flexDirection: "column", // VERTICAL
                    gap: "var(--spacing-2, 2px)", // gap=var(--spacing-2, 2px)
                    alignItems: "flex-start", // items=start
                    flex: 1, // horizontal=fill
                  }}
                >
                  <div
                    className="title-container"
                    style={{
                      display: "flex",
                      gap: "var(--spacing-4, 4px)", // gap=var(--spacing-4, 4px)
                      alignItems: "center", // items=center
                      flexWrap: "wrap", // wrap
                      width: "100%", // horizontal=fill
                    }}
                  >
                    <ListTitleItem
                      variants="enabled"
                      size="md"
                      color="gray"
                      fontWeight="medium"
                      title="로그인"
                      style={{ flexShrink: 0, width: "auto" }}
                    />
                    <ListDescriptionItem
                      variants="enabled"
                      size="xs"
                      color="grayTinted"
                      fontWeight="medium"
                      title="이미 사용중이신가요?"
                      style={{ flex: 1, minWidth: 0 }}
                    />
                  </div>
                </div>
              </LinkListItem>
            </LinkCard>

            <div
              className="img-slot-block"
              style={{
                display: "flex",
                flexDirection: "column", // VERTICAL
                gap: 0,
                width: 345, // horizontal=fixed w:345
                height: "auto", // vertical=hug
                alignItems: "flex-end", // items=end
                paddingTop: "var(--spacing-24, 24px)", // pad=var(--spacing-24, 24px)/0/0/0
                position: "absolute", // position=absolute
                right: 0, // Figma에서 명시되지 않았지만 일반적으로 우측 하단에 위치
                bottom: 0, // Figma에서 명시되지 않았지만 일반적으로 우측 하단에 위치
                pointerEvents: "none", // 아래 LinkCard들과의 인터랙션 방해하지 않도록
              }}
            >
              <Image
                src={imgkb3x}
                width={214}
                height={172}
                alt="Img Kb"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 7. memo + displayName + export
const Udstt01 = memo(Udstt01Component);
Udstt01.displayName = "Udstt01";
export { Udstt01 };