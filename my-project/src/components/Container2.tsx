import React, { memo, HTMLAttributes } from "react";
import { CardEX } from "./CardEX";
import bank3x from "../assets/bank@3x.png";
import moneycoin3x from "../assets/moneycoin@3x.png";
import notepen3x from "../assets/notepen@3x.png";

export interface Container2Props extends HTMLAttributes<HTMLDivElement> {
  onBusinessLoanClick?: () => void;
  onTaxRefundClick?: () => void;
  onStartupKitClick?: () => void;
}

const Container2Component = ({
  onBusinessLoanClick,
  onTaxRefundClick,
  onStartupKitClick,
  className = "",
  style,
  ...props
}: Container2Props) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: "20px",
    width: "100%",
    minHeight: "100vh",
    ...style,
  };

  return (
    <div className={`container2 ${className}`} style={containerStyle} {...props}>
      <span 
        className="서비스-체험하기 text-style-inter-heading-16-bold" 
        style={{ color: "var(--texticon-gray-default)", margin: 0 }}
      >
        서비스 체험하기
      </span>
      
      <div className="container" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-10, 10px)", flex: 1 }}>
        <CardEX 
          size="md" 
          style={{ 
            width: "100%", 
            height: "auto", 
            backgroundColor: "var(--container-gray-subtle4)",
            cursor: "pointer"
          }}
          onClick={onBusinessLoanClick}
        >
          <div className="container" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-6, 6px)", flex: 1 }}>
            <span 
              className="방문없이-신속하게 text-style-kbfgtext-label-14-medium" 
              style={{ color: "var(--texticon-gray-subtle2)", margin: 0 }}
            >
              방문없이 신속하게
            </span>
            <span 
              className="사업자대출-신청하기 text-style-kbfgtext-label-16-bold" 
              style={{ color: "var(--texticon-gray-default)", margin: 0 }}
            >
              사업자대출 신청하기
            </span>
          </div>
          <img 
            src={bank3x} 
            width={60} 
            height={60} 
            alt="Bank" 
            style={{ objectFit: "contain", backgroundColor: "rgb(255,255,255)" }} 
          />
        </CardEX>

        <CardEX 
          size="md" 
          style={{ 
            width: "100%", 
            height: "auto", 
            backgroundColor: "var(--container-gray-subtle4)",
            cursor: "pointer"
          }}
          onClick={onTaxRefundClick}
        >
          <div className="container" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-6, 6px)", flex: 1 }}>
            <span 
              className="수수료-없이 text-style-kbfgtext-label-14-medium" 
              style={{ color: "var(--texticon-gray-subtle2)", margin: 0 }}
            >
              수수료 없이
            </span>
            <span 
              className="종합소득세-환급받기 text-style-kbfgtext-label-16-bold" 
              style={{ color: "var(--texticon-gray-default)", margin: 0 }}
            >
              종합소득세 환급받기
            </span>
          </div>
          <img 
            src={moneycoin3x} 
            width={60} 
            height={60} 
            alt="Money&Coin" 
            style={{ objectFit: "contain", backgroundColor: "rgb(255,255,255)" }} 
          />
        </CardEX>

        <CardEX 
          size="md" 
          style={{ 
            width: "100%", 
            height: "auto", 
            backgroundColor: "var(--container-gray-subtle4)",
            cursor: "pointer"
          }}
          onClick={onStartupKitClick}
        >
          <div className="container" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-6, 6px)", flex: 1 }}>
            <span 
              className="뭐부터-해야할지-모르겠다면 text-style-kbfgtext-label-14-medium" 
              style={{ color: "var(--texticon-gray-subtle2)", margin: 0 }}
            >
              뭐부터 해야할지 모르겠다면?
            </span>
            <span 
              className="예비사장님-kit text-style-kbfgtext-label-16-bold" 
              style={{ color: "var(--texticon-gray-default)", margin: 0 }}
            >
              예비사장님 KIT
            </span>
          </div>
          <img 
            src={notepen3x} 
            width={60} 
            height={60} 
            alt="Note&Pen" 
            style={{ objectFit: "contain", backgroundColor: "rgb(255,255,255)" }} 
          />
        </CardEX>
      </div>
    </div>
  );
};

const Container2 = memo(Container2Component);
Container2.displayName = "Container2";
export { Container2 };