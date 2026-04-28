import React, { memo, ReactNode, HTMLAttributes } from "react";
import { Mask } from "./Mask";
import { FilledButton, FilledButtonProps } from "./FilledButton";
import { OutlinedButton, OutlinedButtonProps } from "./OutlinedButton";

// --- ButtonGroup Component (Assumed dependency, minimal implementation) ---
export type ButtonGroupVariants = "sinlge" | "subGray" | "halfTinted" | "halfOutlined";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  variants?: ButtonGroupVariants;
  children: ReactNode;
}

const ButtonGroupComponent = ({ variants, children, className = "", style, ...props }: ButtonGroupProps) => {
  let groupStyle: React.CSSProperties = {
    display: "flex",
    width: "100%",
    alignItems: "flex-start", // items=start from Figma layout
    boxSizing: "border-box",
    ...style,
  };

  switch (variants) {
    case "sinlge":
      groupStyle = { ...groupStyle, flexDirection: "column", gap: 0 };
      break;
    case "subGray": // GRID, gap=10 items=start -> flex with wrap and gap
      groupStyle = { ...groupStyle, flexDirection: "row", gap: 10, flexWrap: "wrap" };
      break;
    case "halfTinted": // HORIZONTAL, gap=var(--spacing-8, 8px) items=start
    case "halfOutlined": // HORIZONTAL, gap=var(--spacing-8, 8px) items=start
      groupStyle = { ...groupStyle, flexDirection: "row", gap: "var(--spacing-8, 8px)" };
      break;
    default:
      groupStyle = { ...groupStyle, flexDirection: "row", gap: "var(--spacing-8, 8px)" };
      break;
  }

  // If a child button has fullWidth and is in a row layout, make it flex: 1
  const childrenWithFlex = React.Children.map(children, (child) => {
    if (React.isValidElement<FilledButtonProps | OutlinedButtonProps>(child)) {
      if (
        (groupStyle.flexDirection === "row") &&
        ((child.type === FilledButton && child.props.fullWidth) ||
         (child.type === OutlinedButton && child.props.fullWidth))
      ) {
        return React.cloneElement(child, {
          style: { ...child.props.style, flex: 1 }
        });
      }
    }
    return child;
  });

  return (
    <div className={`button-group ${className}`} style={groupStyle} {...props}>
      {childrenWithFlex}
    </div>
  );
};

const ButtonGroup = memo(ButtonGroupComponent);
ButtonGroup.displayName = "ButtonGroup";
// --- End ButtonGroup Component ---

// --- Type/Interface Definitions ---
export type BottomStickyButtonVariants = "solo" | "halfStrong" | "halfSubtle" | "mainSub";

export interface BottomStickyButtonProps extends HTMLAttributes<HTMLDivElement> {
  variants?: BottomStickyButtonVariants;
  // Props for the main button
  mainButtonLabel?: string;
  onMainButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  mainButtonDisabled?: boolean;
  // Props for the sub button (only for halfStrong, halfSubtle, mainSub variants)
  subButtonLabel?: string;
  onSubButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  subButtonDisabled?: boolean;
}

// --- Component ---
const BottomStickyButtonComponent = ({
  variants = "solo",
  mainButtonLabel = "메인",
  onMainButtonClick,
  mainButtonDisabled = false,
  subButtonLabel = "서브",
  onSubButtonClick,
  subButtonDisabled = false,
  className = "",
  style,
  ...props
}: BottomStickyButtonProps) => {

  const baseContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    width: "100%", // horizontal=fill from Figma data
    height: "auto", // vertical=hug from Figma data
    position: "relative", // Needed for absolutely positioned gradientBack
    ...style,
  };

  const gradientBackStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%", // horizontal=fill for gradientBack children
    height: 124, // fixed h:124 from Figma data
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 0,
    top: 0,
    left: 0,
    pointerEvents: "none", // Ensures clicks pass through to actual buttons in the container
  };

  const topGradientFrameStyle: React.CSSProperties = {
    width: "100%", // horizontal=fill for 'top' frame
    height: "var(--component-button-height-sheetgradienttop, 28px)", // fixed h:var(...)
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 0,
  };

  const bottomSurfaceFrameStyle: React.CSSProperties = {
    width: "100%", // horizontal=fill for 'bottom' frame
    height: 96, // fixed h:96 for 'bottom' frame
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 0,
    backgroundColor: "var(--common-white)", // Assuming white background for the sticky bottom bar
  };

  const containerContentStyle: React.CSSProperties = {
    width: "100%", // horizontal=fill for 'container' frame
    height: "auto", // vertical=hug for 'container' frame
    display: "flex",
    flexDirection: "row", // HORIZONTAL
    alignItems: "flex-end", // items=end
    gap: "var(--spacing-8, 8px)", // gap=var(--spacing-8, 8px)
    paddingTop: 0,
    paddingBottom: "var(--spacing-40, 40px)", // pad=.../var(--spacing-40, 40px)/...
    paddingLeft: "var(--spacing-global-side, 20px)", // pad=.../var(--spacing-global-side, 20px)
    paddingRight: "var(--spacing-global-side, 20px)", // pad=.../var(--spacing-global-side, 20px)
    boxSizing: "border-box", // Ensure padding is included in the element's total width/height
    zIndex: 1, // Ensure content is above the gradient
  };

  const mainButton = (
    <FilledButton
      label={mainButtonLabel}
      onClick={onMainButtonClick}
      disabled={mainButtonDisabled}
      state={mainButtonDisabled ? "disabled" : "enabled"}
      isTinted={false}
      color="primary"
      size="lg"
      fullWidth={true}
      className="button-label"
    />
  );

  const subButtonFilled = (
    <FilledButton
      label={subButtonLabel}
      onClick={onSubButtonClick}
      disabled={subButtonDisabled}
      state={subButtonDisabled ? "disabled" : "enabled"}
      isTinted={true}
      color="gray"
      size="lg"
      fullWidth={true}
      className="button-label"
    />
  );

  const subButtonFilledPrimaryTinted = (
    <FilledButton
      label={subButtonLabel}
      onClick={onSubButtonClick}
      disabled={subButtonDisabled}
      state={subButtonDisabled ? "disabled" : "enabled"}
      isTinted={true}
      color="primary"
      size="lg"
      fullWidth={true}
      className="button-label"
    />
  );

  const subButtonOutlined = (
    <OutlinedButton
      label={subButtonLabel}
      onClick={onSubButtonClick}
      disabled={subButtonDisabled}
      state={subButtonDisabled ? "disabled" : "enabled"}
      color="primary"
      size="lg"
      fullWidth={true}
      className="button-label"
    />
  );

  let buttonsContent: ReactNode;

  switch (variants) {
    case "solo":
      buttonsContent = (
        <ButtonGroup variants="sinlge">
          {mainButton}
        </ButtonGroup>
      );
      break;
    case "halfStrong":
      buttonsContent = (
        <ButtonGroup variants="subGray">
          {mainButton}
          {subButtonFilled}
        </ButtonGroup>
      );
      break;
    case "halfSubtle":
      buttonsContent = (
        <ButtonGroup variants="halfTinted">
          {subButtonFilledPrimaryTinted}
          {mainButton}
        </ButtonGroup>
      );
      break;
    case "mainSub":
      buttonsContent = (
        <ButtonGroup variants="halfOutlined">
          {subButtonOutlined}
          {mainButton}
        </ButtonGroup>
      );
      break;
    default:
      buttonsContent = (
        <ButtonGroup variants="sinlge">
          {mainButton}
        </ButtonGroup>
      );
  }

  return (
    <div className={`bottom-sticky-button ${className}`} style={baseContainerStyle} {...props}>
      {/* gradientBack [FRAME] */}
      <div className="gradient-back" style={gradientBackStyle}>
        {/* top [FRAME] */}
        <div className="top" style={topGradientFrameStyle}>
          {/* Mask [INSTANCE] component="Mask" */}
          <Mask direction="bottom" className="mask" style={{ width: "100%", height: "100%" }} />
        </div>
        {/* bottom [FRAME] */}
        <div className="bottom" style={bottomSurfaceFrameStyle} />
      </div>

      {/* container [FRAME] */}
      <div className="container" style={containerContentStyle}>
        {buttonsContent}
      </div>
    </div>
  );
};

const BottomStickyButton = memo(BottomStickyButtonComponent);
BottomStickyButton.displayName = "BottomStickyButton";
export { BottomStickyButton };