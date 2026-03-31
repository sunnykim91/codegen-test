import React, { memo, HTMLAttributes } from "react";
import { CardEX } from "./CardEX";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  onBusinessLoanClick?: () => void;
  onTaxRefundClick?: () => void;
  onPreBusinessKitClick?: () => void;
}

const ContainerComponent = ({
  onBusinessLoanClick,
  onTaxRefundClick,
  onPreBusinessKitClick,
  className = "",
  style,
  ...props
}: ContainerProps) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: 20,
    width: "100%",
    ...style,
  };

  const innerContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "var(--spacing-10, 10px)",
  };

  const cardContentStyle: React.CSSProperties = {
    display: "flex",
    width: "100%",
  };

  const cardInnerStyle: React.CSSProperties = {
    display: "flex",
    gap: "var(--spacing-6, 6px)",
    padding: "var(--spacing-24, 24px)",
    backgroundColor: "var(--container-gray-subtle4)",
    borderRadius: 20,
    cursor: "pointer",
  };

  const textContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "var(--spacing-6, 6px)",
    flex: 1,
  };

  const iconContainerStyle: React.CSSProperties = {
    width: "var(--square-60, 60px)",
    height: "var(--square-60, 60px)",
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className={`container ${className}`} style={containerStyle} {...props}>
      <span
        className="서비스-체험하기 text-style-inter-heading-16-bold"
        style={{ color: "var(--texticon-gray-default)" }}
      >
        서비스 체험하기
      </span>
      
      <div className="container" style={innerContainerStyle}>
        <div style={cardContentStyle} onClick={onBusinessLoanClick}>
          <div style={cardInnerStyle}>
            <div className="container" style={textContainerStyle}>
              <span
                className="방문없이-신속하게 text-style-kbfgtext-label-14-medium"
                style={{ color: "var(--texticon-gray-subtle2)" }}
              >
                방문없이 신속하게
              </span>
              <span
                className="사업자대출-신청하기 text-style-kbfgtext-label-16-bold"
                style={{ color: "var(--texticon-gray-default)" }}
              >
                사업자대출 신청하기
              </span>
            </div>
            <div style={iconContainerStyle}>
              <div style={{ width: 60, height: 60, backgroundColor: "rgb(255,255,255)", borderRadius: 4 }} />
            </div>
          </div>
        </div>

        <div style={cardContentStyle} onClick={onTaxRefundClick}>
          <div style={cardInnerStyle}>
            <div className="container" style={textContainerStyle}>
              <span
                className="수수료-없이 text-style-kbfgtext-label-14-medium"
                style={{ color: "var(--texticon-gray-subtle2)" }}
              >
                수수료 없이
              </span>
              <span
                className="종합소득세-환급받기 text-style-kbfgtext-label-16-bold"
                style={{ color: "var(--texticon-gray-default)" }}
              >
                종합소득세 환급받기
              </span>
            </div>
            <div style={iconContainerStyle}>
              <div style={{ width: 60, height: 60, backgroundColor: "rgb(255,255,255)", borderRadius: 4 }} />
            </div>
          </div>
        </div>

        <div style={cardContentStyle} onClick={onPreBusinessKitClick}>
          <div style={cardInnerStyle}>
            <div className="container" style={textContainerStyle}>
              <span
                className="뭐부터-해야할지-모르겠다면 text-style-kbfgtext-label-14-medium"
                style={{ color: "var(--texticon-gray-subtle2)" }}
              >
                뭐부터 해야할지 모르겠다면?
              </span>
              <span
                className="예비사장님-kit text-style-kbfgtext-label-16-bold"
                style={{ color: "var(--texticon-gray-default)" }}
              >
                예비사장님 KIT
              </span>
            </div>
            <div style={iconContainerStyle}>
              <div style={{ width: 60, height: 60, backgroundColor: "rgb(255,255,255)", borderRadius: 4 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Container = memo(ContainerComponent);
Container.displayName = "Container";
export { Container };