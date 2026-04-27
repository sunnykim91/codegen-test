import React, { memo, HTMLAttributes, useCallback } from "react";
import { StatusBar } from "../app/components/StatusBar";
import { LinkCard } from "../app/components/LinkCard";
import { LinkListItem } from "../app/components/LinkListItem";
import imgkb3x from "../../public/images/imgkb@3x.png";

// 1. type/interface 정의
export interface UDSTT01Props extends HTMLAttributes<HTMLDivElement> {
  onLinkCard1Click?: () => void;
  onLinkCard2Click?: () => void;
}

// 6. UDSTT01Component (함수 컴포넌트)
const UDSTT01Component = ({
  onLinkCard1Click,
  onLinkCard2Click,
  className = "",
  style,
  ...props
}: UDSTT01Props) => {
  const handleCard1Click = useCallback(() => {
    onLinkCard1Click?.();
  }, [onLinkCard1Click]);

  const handleCard2Click = useCallback(() => {
    onLinkCard2Click?.();
  }, [onLinkCard2Click]);

  return (
    <div
      className={`udstt01 ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 0,
        overflow: "hidden",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "var(--bg-base)",
        ...style,
      }}
      {...props}
    >
      <div className="header-layout" style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        height: "auto",
      }}>
        <StatusBar platform="ios" className="status-bar" />
      </div>

      <div className="body-layout" style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}>
        <div className="title-section" style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          height: "auto",
          padding: "var(--spacing-40, 40px) var(--spacing-32, 32px)",
        }}>
          <span
            className="kb-gugmin-eunhaeng-e-osin-geoseul-hwangyeonghabnida text-style-notosanskr-display-md-medium"
            style={{ color: "var(--texticon-gray-default)", margin: 0 }}
          >
            KB국민은행에 <br /> 오신 것을 환영합니다.
          </span>
        </div>

        <div className="container-box" style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--spacing-10, 10px)",
          padding: "var(--spacing-96, 96px) var(--spacing-24, 24px)",
          overflow: "hidden",
          width: "100%",
          height: "100%",
        }}>
          <div className="img-slot-block" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            paddingTop: "var(--spacing-24, 24px)",
            width: "100%",
            height: "100%",
          }}>
            <img
              src={imgkb3x}
              width={214}
              height={234}
              alt="KB Logo"
              style={{ objectFit: "contain", flexShrink: 0 }}
            />
          </div>

          <div className="card-button-block" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "var(--spacing-12, 12px)",
            borderRadius: "var(--borderradius-lg, 10px)",
            width: "100%",
            height: "auto",
          }}>
            <LinkCard
              className="link-card"
              fullWidth={true}
              state="enabled"
              variants="filled"
              onClick={handleCard1Click}
              instanceSwap={
                <LinkListItem
                  fullWidth={true}
                  variants="enabled"
                  title="회원 가입"
                  description="#desc"
                  underDescription="KB스타뱅킹, 처음이세요?"
                />
              }
            />
            <LinkCard
              className="link-card"
              fullWidth={true}
              state="enabled"
              variants="filled"
              onClick={handleCard2Click}
              instanceSwap={
                <LinkListItem
                  fullWidth={true}
                  variants="enabled"
                  title="로그인"
                  description="#desc"
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

// 7. memo + displayName + export
const UDSTT01 = memo(UDSTT01Component);
UDSTT01.displayName = "UDSTT01";
export { UDSTT01 };
export default UDSTT01;
