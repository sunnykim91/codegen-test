import React, { memo, HTMLAttributes } from "react";
import { Screen } from "./Screen";
import { BoxButton } from "./BoxButton";

export interface UDS001InputScreenProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  onBack?: () => void;
  children?: React.ReactNode;
}

const UDS001InputScreenComponent = ({
  title = "#title",
  description = "#description", 
  buttonLabel = "버튼 라벨",
  onButtonClick,
  onBack,
  children,
  className = "",
  style,
  ...props
}: UDS001InputScreenProps) => {
  const screenStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "100vh",
    ...style,
  };

  return (
    <div className={className} style={screenStyle} {...props}>
      <Screen variants="sub">
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          flex: 1,
          gap: "var(--spacing-48, 48px)",
          padding: "var(--spacing-24, 24px) 0"
        }}>
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            width: "100%",
            gap: "var(--spacing-24, 24px)",
            padding: "0 var(--spacing-global-side, 20px)"
          }}>
            <h1 
              className="text-style-notosanskr-heading-36-bold"
              style={{ 
                color: "var(--text-icon-gray-default)",
                margin: 0,
                width: "100%"
              }}
            >
              {title}
            </h1>
            <p 
              className="text-style-notosanskr-label-16-regular"
              style={{ 
                color: "var(--text-icon-gray-subtle)",
                margin: 0,
                width: "100%"
              }}
            >
              {description}
            </p>
          </div>
          
          {children && (
            <div style={{ flex: 1 }}>
              {children}
            </div>
          )}
          
          <div style={{ padding: "0 var(--spacing-16, 16px)" }}>
            <BoxButton
              color="primary"
              tinted={false}
              size="lg"
              state="enabled"
              variants="solid"
              fullWidth
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