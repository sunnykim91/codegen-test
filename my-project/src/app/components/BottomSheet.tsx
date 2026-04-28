import React, { memo, ReactNode, HTMLAttributes } from "react";
import { TopNavi } from "./TopNavi";
import { BottomStickyButton } from "./BottomStickyButton";
import { Mask } from "./Mask";

export interface BottomSheetProps extends HTMLAttributes<HTMLDivElement> {
  instanceSwap?: ReactNode; // CONTENTS_CONTAINER의 내용물을 대체할 ReactNode (ComponentBlank 대체)
  showHeading?: boolean;
  isFullHeight?: boolean;
  hauButton?: boolean;
  children?: ReactNode; // "🔲slot"에 들어갈 실제 콘텐츠
  heading?: string; // TopNavi의 제목 텍스트 (Figma placeholder "heading")
  onMainButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  mainButtonLabel?: string;
  mainButtonDisabled?: boolean;
}

interface VariantConfig {
  height: string;
  paddingBottom: string;
  bodyContainerFlex?: number | "unset";
  bodyContainerOverflow: "auto" | "visible";
  contentsContainerHeight: string; // "100%" or "auto"
  contentsContainerOverflow: "auto" | "hidden" | "visible";
  scrollbarHeight?: number;
}

const getVariantConfig = (
  isFullHeight: boolean,
  hauButton: boolean,
): VariantConfig => {
  const basePaddingBottom = hauButton ? "0px" : "var(--spacing-40, 40px)";

  if (isFullHeight) {
    return {
      height: "var(--component-bottomsheet-height-sheetmaxheight, 720px)",
      paddingBottom: basePaddingBottom,
      bodyContainerFlex: 1, // BodyContainer의 vertical=fill (flex: 1)
      bodyContainerOverflow: hauButton ? "auto" : "visible",
      contentsContainerHeight: "100%", // ContentsContainer는 부모를 채움
      contentsContainerOverflow: hauButton ? "hidden" : "auto", // hauButton=true면 ContentsContainer는 hidden, BodyContainer가 스크롤. hauButton=false면 ContentsContainer가 스크롤.
      scrollbarHeight: hauButton ? undefined : 612, // [isFullHeight=true, hauButton=false]일 때 스크롤바 (612px)
    };
  } else {
    // isFullHeight = false
    return {
      height: hauButton ? "236px" : "152px",
      paddingBottom: basePaddingBottom,
      bodyContainerFlex: "unset",
      bodyContainerOverflow: "visible",
      contentsContainerHeight: "auto", // ContentsContainer의 vertical=hug
      contentsContainerOverflow: "hidden", // non-full-height일 때는 overflow: hidden
      scrollbarHeight: undefined,
    };
  }
};

const BottomSheetComponent = ({
  instanceSwap = null,
  showHeading = true,
  isFullHeight = false,
  hauButton = true, // Figma default is true
  children,
  heading = "알림", // Figma placeholder "heading"을 prop으로 변경, 기본값 설정
  onMainButtonClick,
  mainButtonLabel = "메인",
  mainButtonDisabled = false,
  className = "",
  style,
  ...props
}: BottomSheetProps) => {
  const config = getVariantConfig(isFullHeight, hauButton);

  const bottomSheetStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    width: 393, // horizontal=fixed(393)
    height: config.height,
    borderRadius: "var(--borderradius-2xl, 0px)",
    backgroundColor: "var(--bg-floating)",
    color: "var(--texticon-gray-default)",
    paddingTop: "var(--spacing-20, 20px)",
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: config.paddingBottom,
    boxShadow:
      "0px -16px 16px 0px rgba(0, 0, 0, 0.05), 0px -8px 8px 0px rgba(0, 0, 0, 0.05), 0px 0px 8px 0px rgba(0, 0, 0, 0.05)",
    overflow: "hidden",
    position: "relative",
    ...style,
  };

  // instanceSwap이 제공되면 instanceSwap을 렌더링하고, 그렇지 않으면 기본 슬롯 래퍼에 children을 렌더링합니다.
  // instanceSwap에는 cloneElement를 사용하지 않고 그대로 렌더링하며, children은 슬롯의 콘텐츠입니다.
  const slotWrapperContent = instanceSwap ?? (
    <div className="contents-slot-wrapper">{children}</div>
  );

  const commonContentsContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 0,
    paddingLeft: "var(--spacing-global-side, 20px)",
    paddingRight: "var(--spacing-global-side, 20px)",
    width: "100%", // horizontal=fill
    height: config.contentsContainerHeight,
    overflow: config.contentsContainerOverflow,
    position: "relative",
  };

  return (
    <div
      className={`bottom-sheet ${className}`}
      style={bottomSheetStyle}
      {...props}
    >
      <TopNavi
        className="top-navi"
        variants="dialog"
        showHeading={showHeading}
        heading={heading}
        showCloseButton={true}
      />

      {hauButton ? (
        <div
          className="body-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 0,
            paddingTop: "var(--spacing-4, 4px)", // BodyContainer의 padding
            paddingBottom: "var(--spacing-24, 24px)", // BodyContainer의 padding
            width: "100%", // horizontal=fill
            flex: config.bodyContainerFlex, // isFullHeight일 때 flex: 1 적용
            overflow: config.bodyContainerOverflow,
            position: "relative",
          }}
        >
          <div
            className="contents-container"
            style={commonContentsContainerStyle}
          >
            {slotWrapperContent}
          </div>
        </div>
      ) : (
        <div
          className="contents-container"
          style={{
            ...commonContentsContainerStyle,
            flex: config.bodyContainerFlex, // isFullHeight일 때 flex: 1 적용
          }}
        >
          {slotWrapperContent}
        </div>
      )}

      {hauButton && (
        <BottomStickyButton
          className="bottom-sticky-button"
          variants="solo"
          mainButtonLabel={mainButtonLabel}
          onMainButtonClick={onMainButtonClick}
          mainButtonDisabled={mainButtonDisabled}
          style={{
            position: "sticky",
            bottom: 0,
            left: 0,
            width: "100%",
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
};

const BottomSheet = memo(BottomSheetComponent);
BottomSheet.displayName = "BottomSheet";
export { BottomSheet };
