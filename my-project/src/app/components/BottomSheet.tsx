import React, { memo, ReactNode, HTMLAttributes } from "react";
import { TopNavi } from "./TopNavi";
import { BottomStickyButton } from "./BottomStickyButton";
import { Mask } from "./Mask";
import { ComponentBlank, ComponentBlankProps } from "./ComponentBlank"; // Assumed minimal ComponentBlank
import { Scrollbar } from "./Scrollbar"; // Assumed minimal Scrollbar

// Minimal ComponentBlank definition (as it's used as instanceSwap default)
// If this component already exists, its actual definition should be imported.
// Assuming it acts as a simple container for the slot children.
// NOTE: This definition is for generation purposes, it should ideally be imported if it's a shared component.
// START_ASSUMED_COMPONENT_BLANK
// export type ComponentBlankVariants = "customSlot";
// export interface ComponentBlankProps extends HTMLAttributes<HTMLDivElement> {
//   variants?: ComponentBlankVariants;
//   children?: ReactNode;
// }
// const ComponentBlankComponent = ({
//   children,
//   variants = "customSlot",
//   className = "",
//   style,
//   ...props
// }: ComponentBlankProps) => {
//   const componentBlankStyle: React.CSSProperties = {
//     display: "flex",
//     flexDirection: "row",
//     gap: 0,
//     alignItems: "center",
//     width: "100%",
//     height: "auto", // Will be overridden by ContentsContainer's style
//     ...style,
//   };
//   return (
//     <div className={`component-blank ${className}`} style={componentBlankStyle} {...props}>
//       {children}
//     </div>
//   );
// };
// const ComponentBlank = memo(ComponentBlankComponent);
// ComponentBlank.displayName = "ComponentBlank";
// export { ComponentBlank };
// END_ASSUMED_COMPONENT_BLANK

// Minimal Scrollbar definition (as it's used as an instance)
// If this component already exists, its actual definition should be imported.
// START_ASSUMED_SCROLLBAR
// export type ScrollbarDirection = "vertical";
// export interface ScrollbarProps extends HTMLAttributes<HTMLDivElement> {
//   direction?: ScrollbarDirection;
// }
// const ScrollbarComponent = ({
//   direction = "vertical",
//   className = "",
//   style,
//   ...props
// }: ScrollbarProps) => {
//   const scrollbarStyle: React.CSSProperties = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: 0,
//     padding: "var(--spacing-2, 2px)",
//     position: "absolute",
//     width: "auto",
//     height: style?.height || "100%",
//     flexShrink: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     boxSizing: "border-box",
//     ...style,
//   };
//   const handleStyle: React.CSSProperties = {
//     width: 6,
//     height: 56,
//     borderRadius: 9999,
//     backgroundColor: "var(--scrollbar-handle)",
//   };
//   return (
//     <div className={`scrollbar ${className}`} style={scrollbarStyle} {...props}>
//       <div className="handle" style={handleStyle} />
//     </div>
//   );
// };
// const Scrollbar = memo(ScrollbarComponent);
// Scrollbar.displayName = "Scrollbar";
// export { Scrollbar };
// END_ASSUMED_SCROLLBAR

export interface BottomSheetProps extends HTMLAttributes<HTMLDivElement> {
  instanceSwap?: ReactNode; // Default will be ComponentBlank
  showHeading?: boolean;
  isFullHeight?: boolean;
  hauButton?: boolean;
  children?: ReactNode; // This is the content for the 🔲slot
  onMainButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  mainButtonLabel?: string;
  mainButtonDisabled?: boolean;
}

type VariantConfig = {
  height: string | number;
  paddingBottom: string | number;
  contentsContainerHeight: string; // vertical fill or hug for ContentsContainer
  scrollbarHeight?: number;
};

const getVariantConfig = (isFullHeight: boolean, hauButton: boolean): VariantConfig => {
  const baseConfig: Partial<VariantConfig> = {
    paddingBottom: hauButton ? "0px" : "var(--spacing-40, 40px)",
  };

  if (isFullHeight) {
    return {
      ...baseConfig,
      height: "var(--component-bottomsheet-height-sheetmaxheight, 720px)",
      contentsContainerHeight: "100%", // ContentsContainer vertical=fill
      scrollbarHeight: hauButton ? 528 : 612, // From tree data
    } as VariantConfig;
  } else {
    return {
      ...baseConfig,
      height: hauButton ? "236px" : "152px",
      contentsContainerHeight: "auto", // ContentsContainer vertical=hug
      scrollbarHeight: undefined,
    } as VariantConfig;
  }
};

const BottomSheetComponent = ({
  instanceSwap = <ComponentBlank variants="customSlot" />, // Default ComponentBlank for the slot
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
    overflow: "hidden",
    position: "relative", // For potential absolute children (e.g., Scrollbar)
    ...style,
  };

  // Clone instanceSwap to pass children (the actual slot content)
  let clonedSlotContent = instanceSwap;
  if (React.isValidElement(instanceSwap)) {
    clonedSlotContent = React.cloneElement(
      instanceSwap as React.ReactElement<ComponentBlankProps>,
      { children: children }
    );
  }

  return (
    <div className={`bottom-sheet ${className}`} style={bottomSheetStyle} {...props}>
      <TopNavi variants="dialog" showHeading={showHeading} heading="heading" showCloseButton={true} />

      <div
        className="body-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 0,
          paddingTop: "var(--spacing-4, 4px)",
          paddingBottom: "var(--spacing-24, 24px)",
          width: "100%", // horizontal=fill
          height: hauButton ? config.contentsContainerHeight : config.contentsContainerHeight, // vertical=hug/fill
          overflow: isFullHeight ? "auto" : "visible", // Enable scrolling if full height
          position: "relative",
          flex: isFullHeight ? 1 : "unset", // Allow it to take up remaining space if full height
        }}
      >
        <div
          className="contents-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
            paddingLeft: "var(--spacing-global-side, 20px)",
            paddingRight: "var(--spacing-global-side, 20px)",
            width: "100%", // horizontal=fill
            height: config.contentsContainerHeight, // vertical=hug/fill
            overflow: "hidden", // overflow=hidden from Figma data, actual scrolling handled by body-container
            position: "relative",
          }}
        >
          {clonedSlotContent}

          {isFullHeight && config.scrollbarHeight && !hauButton && (
            <Scrollbar
              direction="vertical"
              style={{ height: config.scrollbarHeight, position: "absolute", right: 0 }}
              className="scrollbar"
            />
          )}
        </div>
        {isFullHeight && config.scrollbarHeight && hauButton && (
          <Scrollbar
            direction="vertical"
            style={{ height: config.scrollbarHeight, position: "absolute", right: 0 }}
            className="scrollbar"
          />
        )}
      </div>

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