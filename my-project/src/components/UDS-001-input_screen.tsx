import React, { memo, ReactNode, HTMLAttributes } from "react";
import { Screen } from "./Screen";
import { BoxButton } from "./BoxButton";

export interface UDS001InputScreenProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  title?: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const UDS001InputScreenComponent = ({
  children,
  title = "#title",
  description = "#description", 
  buttonLabel = "버튼 라벨",
  onButtonClick,
  className = "",
  style,
  ...props
}: UDS001InputScreenProps) => {
  const screenStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "100vh",
    gap: 0,
    padding: 0,
    borderRadius: 0,
    backgroundColor: "rgb(255,255,255)",
    overflow: "hidden",
    ...style,
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "var(--spacing-48, 48px)",
    padding: "var(--spacing-24, 24px) 0 var(--spacing-24, 24px) 0",
  };

  const titleSectionStyle: React.CSSProperties = {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    gap: "var(--spacing-24, 24px)",
    padding: "0 var(--spacing-global-side, 20px) 0 var(--spacing-global-side, 20px)",
  };

  const buttonStyle: React.CSSProperties = {
    width: "100%",
    padding: "0 var(--spacing-16, 16px) 0 var(--spacing-16, 16px)",
  };

  return (
    <div className={className} style={screenStyle} {...props}>
      <Screen variants="sub">
        <div className="container" style={containerStyle}>
          <div className="title" style={titleSectionStyle}>
            <span 
              className="title text-style-notosanskr-heading-36-bold" 
              style={{ color: "var(--texticon-gray-default)", margin: 0 }}
            >
              {title}
            </span>
            <span 
              className="description text-style-notosanskr-label-16-regular"
              style={{ color: "var(--texticon-gray-subtle)", margin: 0 }}
            >
              {description}
            </span>
          </div>
          
          {children}
          
          <div style={buttonStyle}>
            <BoxButton
              color="primary"
              isTinted={false}
              size="lg"
              state="enabled"
              variants="filled"
              onClick={onButtonClick}
            >
              {buttonLabel}
            </BoxButton>
          </div>
        </div>
      </Screen>
    </div>
  );
};

const UDS001InputScreen = memo(UDS001InputScreenComponent);
UDS001InputScreen.displayName = "UDS001InputScreen";
export { UDS001InputScreen };