import React, { memo, ReactNode, HTMLAttributes } from "react";
import { TopNavi } from "./TopNavi";
import { BottomStickyButton } from "./BottomStickyButton";
import { Mask } from "./Mask";
import { Scrollbar } from "./Scrollbar"; // Assuming Scrollbar exists as a separate component

// Type/Interface definitions
export interface BottomSheetProps extends HTMLAttributes<HTMLDivElement> {
  instanceSwap?: ReactNode; // Default will be null based on rules
  showHeading?: boolean;
  isFullHeight?: boolean; // BOOLEAN variant
  hauButton?: boolean; // BOOLEAN variant
  children?: ReactNode; // This is the content for the 🔲slot
  onMainButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  mainButtonLabel?: string;
  mainButtonDisabled?: boolean;
}

interface SwapProps {
  children?: ReactNode;
  style?: React.CSSProperties;
  [key: string]: unknown;
}

type VariantConfig = {
  height: string | number;
  paddingBottom: string | number;
  contentsContainerHeight: string;
  bodyContainerOverflow: "auto" | "visible";
  contentsContainerOverflow: "auto" | "hidden";
  scrollbarHeight?: number;
};

// getVariantConfig function based on the summary table
const getVariantConfig = (
  isFullHeight: boolean,
  hauButton: boolean,
): VariantConfig => {
  const basePaddingBottom = hauButton ? "0px" : "var(--spacing-40, 40px)";

  if (isFullHeight) {
    return {
      height: "var(--component-bottomsheet-height-sheetmaxheight, 720px)",
      paddingBottom: basePaddingBottom,
      contentsContainerHeight: "100%", // vertical=fill
      bodyContainerOverflow: hauButton ? "auto" : "visible",
      contentsContainerOverflow: hauButton ? "hidden" : "auto", // ContentsContainer scrolls if no BodyContainer
      scrollbarHeight: hauButton ? 528 : 612, // From tree data
    };
  } else {
    // isFullHeight = false
    return {
      height: hauButton ? "236px" : "152px",
      paddingBottom: basePaddingBottom,
      contentsContainerHeight: "auto", // vertical=hug
      bodyContainerOverflow: "visible",
      contentsContainerOverflow: "hidden",
      scrollbarHeight: undefined, // Scrollbar only appears for fullHeight
    };
  }
};

// BottomSheetComponent (function component)
const BottomSheetComponent = ({
  instanceSwap = null, // Default to null as per rules
  showHeading = true,
  isFullHeight = false,
  hauButton = false,
  children, // This is the content for the slot
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
    paddingBottom: config.paddingBottom, // dynamic based on hauButton
    boxShadow:
      "0px -16px 16px 0px rgba(0, 0, 0, 0.05), 0px -8px 8px 0px rgba(0, 0, 0, 0.05), 0px 0px 8px 0px rgba(0, 0, 0, 0.05)",
    overflow: "hidden", // Main component has overflow: hidden
    position: "relative",
    ...style,
  };

  // Logic for instanceSwap vs children
  let slotContentToRender = children;
  if (instanceSwap) {
    if (React.isValidElement(instanceSwap)) {
      slotContentToRender = React.cloneElement(
        instanceSwap as React.ReactElement<SwapProps>,
        { children: children },
      );
    } else {
      slotContentToRender = instanceSwap;
    }
  }

  const topNaviHeading = "heading"; // Hardcoded from Figma tree

  const contentsContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 0,
    paddingLeft: "var(--spacing-global-side, 20px)",
    paddingRight: "var(--spacing-global-side, 20px)",
    width: "100%", // horizontal=fill
    height: config.contentsContainerHeight, // vertical=hug/fill
    overflow: config.contentsContainerOverflow,
    position: "relative",
  };

  const scrollbarElement =
    isFullHeight && !hauButton && config.scrollbarHeight ? (
      <Scrollbar
        className="scrollbar"
        direction="vertical"
        style={{
          height: config.scrollbarHeight,
          position: "absolute",
          right: "var(--spacing-2, 2px)", // Based on scrollbar's own padding and common placement
          top: 0, // Should be relative to ContentsContainer
          paddingTop: "var(--spacing-2, 2px)", // From scrollbar component itself
          paddingBottom: "var(--spacing-2, 2px)", // From scrollbar component itself
          boxSizing: "border-box",
          zIndex: 1, // Ensure it's above content
        }}
      />
    ) : null;

  return (
    <div
      className={`bottom-sheet ${className}`}
      style={bottomSheetStyle}
      {...props}
    >
      <TopNavi
        variants="dialog"
        showHeading={showHeading}
        heading={topNaviHeading}
        showCloseButton={true}
      />

      {hauButton ? (
        // Structure for hauButton=true: TopNavi, BodyContainer, BottomStickyButton
        <div
          className="body-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 0,
            paddingTop: "var(--spacing-4, 4px)", // from BodyContainer's pad
            paddingBottom: "var(--spacing-24, 24px)", // from BodyContainer's pad
            width: "100%", // horizontal=fill
            height: config.contentsContainerHeight, // vertical=hug/fill
            overflow: config.bodyContainerOverflow,
            position: "relative",
            flex: isFullHeight ? 1 : "unset", // Take remaining space if full height
          }}
        >
          <div className="contents-container" style={contentsContainerStyle}>
            {slotContentToRender}
            {/* Scrollbar is NOT present for [isFullHeight=true, hauButton=true] based on tree data */}
          </div>
        </div>
      ) : (
        // Structure for hauButton=false: TopNavi, ContentsContainer (then maybe Scrollbar)
        <div
          className="contents-container"
          style={{
            ...contentsContainerStyle,
            paddingTop: 0, // ContentsContainer's pad doesn't define paddingTop (BodyContainer does)
            paddingBottom: 0, // ContentsContainer's pad doesn't define paddingBottom (BodyContainer does)
            flex: isFullHeight ? 1 : "unset", // Take remaining space if full height
          }}
        >
          {slotContentToRender}
          {scrollbarElement}
        </div>
      )}

      {hauButton && (
        <BottomStickyButton
          variants="solo"
          mainButtonLabel={mainButtonLabel}
          onMainButtonClick={onMainButtonClick}
          mainButtonDisabled={mainButtonDisabled}
          className="bottom-sticky-button"
          style={{
            position: "sticky", // Sticky to the bottom of the sheet
            bottom: 0,
            zIndex: 10,
            width: "100%",
          }}
        />
      )}
    </div>
  );
};

const BottomSheet = memo(BottomSheetComponent);
BottomSheet.displayName = "BottomSheet";
export { BottomSheet };