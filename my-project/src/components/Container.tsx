import React, { memo, HTMLAttributes } from "react";
import { SelectChip } from "./SelectChip";
import { ContentsListItem } from "./ContentsListItem";
import { Divider } from "./Divider";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  onSelectService?: (service: string) => void;
  onProductClick?: (productName: string) => void;
}

const ContainerComponent = ({
  onSelectService,
  onProductClick,
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
    minHeight: "100vh",
    ...style,
  };

  const chipItems = [
    { text: "입출금", isSelected: true },
    { text: "예금", isSelected: false },
    { text: "적금", isSelected: false },
    { text: "대출", isSelected: false },
    { text: "외환", isSelected: false },
    { text: "환전", isSelected: false },
    { text: "라벨", isSelected: false },
    { text: "라벨", isSelected: false },
    { text: "라벨", isSelected: false },
    { text: "라벨", isSelected: false },
  ];

  const products = [
    {
      id: "parking",
      description: "하루만 맡겨도 이자받고 언제든지 찾아쓰는",
      title: "KB사장님 파킹통장",
      rate: "연 2.5%",
      color: "var(--texticon-system-info-subtle2)",
    },
    {
      id: "plus",
      description: "하루만 맡겨도 이자받고 언제든지 찾아쓰는",
      title: "KB사장님+통장",
      rate: "연 0.1%",
      color: "var(--texticon-system-info-subtle2)",
    },
    {
      id: "one",
      description: "은행 거래의 시작은 다양한 혜택과 함께",
      title: "ONE KB 사업자 통장",
      rate: "연 0.1%",
      color: "var(--texticon-system-info-subtle2)",
    },
    {
      id: "ecommerce",
      description: "은행 거래의 시작은 다양한 혜택과 함께",
      title: "KB e-Commerce 채권양도 전용계좌(통장)",
      rate: "",
      color: "var(--texticon-system-info-subtle2)",
    },
  ];

  const handleChipClick = (service: string) => {
    onSelectService?.(service);
  };

  const handleProductClick = (productTitle: string) => {
    onProductClick?.(productTitle);
  };

  return (
    <div className={`container ${className}`} style={containerStyle} {...props}>
      <h1 
        className="text-style-inter-heading-16-bold" 
        style={{ 
          color: "var(--texticon-gray-default)",
          margin: 0,
          width: "100%",
          height: 24
        }}
      >
        서비스 체험하기
      </h1>

      <SelectChip
        variants="single"
        isExpand={false}
        style={{ width: "100%" }}
        slot={
          <div className="chips-container" style={{ display: "flex", flexWrap: "wrap", gap: 0 }}>
            {chipItems.map((item, index) => (
              <div key={index} className="selectchip-item" style={{ display: "flex" }}>
                <button
                  onClick={() => handleChipClick(item.text)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  <div
                    className="chip"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "var(--spacing-4, 4px)",
                      padding: "var(--spacing-8, 8px) var(--spacing-12, 12px)",
                      borderRadius: 9999,
                      backgroundColor: item.isSelected 
                        ? "var(--container-primary-default)" 
                        : "var(--container-gray-subtle3)",
                      overflow: "hidden",
                    }}
                  >
                    <span
                      className={item.isSelected 
                        ? "text-style-kbfgtext-label-14-bold" 
                        : "text-style-kbfgtext-label-14-regular"}
                      style={{
                        color: item.isSelected 
                          ? "var(--texticon-static-contrastprimary)"
                          : "var(--texticon-gray-default)",
                        margin: 0,
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        }
      />

      <div 
        className="container" 
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-20, 20px)",
          padding: "var(--spacing-20, 20px) 0",
          flex: 1,
        }}
      >
        {products.map((product, index) => (
          <React.Fragment key={product.id}>
            <ContentsListItem
              hasGutter={false}
              showSlotStart={false}
              showSlotEnd={false}
              slotCenter={
                <div 
                  className="container" 
                  style={{
                    display: "flex",
                    gap: 12,
                    width: "100%",
                  }}
                  onClick={() => handleProductClick(product.title)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleProductClick(product.title);
                    }
                  }}
                >
                  <div 
                    className="container" 
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "var(--spacing-6, 6px)",
                      width: product.id === "ecommerce" ? "100%" : 171,
                    }}
                  >
                    <span
                      className="text-style-kbfgtext-label-12-medium"
                      style={{
                        color: "var(--texticon-gray-subtle2)",
                        margin: 0,
                        width: product.id === "ecommerce" ? "100%" : 204,
                        height: 18,
                      }}
                    >
                      {product.description}
                    </span>
                    <span
                      className="text-style-kbfgtext-label-14-bold"
                      style={{
                        color: "var(--texticon-gray-default)",
                        margin: 0,
                        width: product.id === "ecommerce" ? "100%" : "auto",
                        height: 20,
                      }}
                    >
                      {product.title}
                    </span>
                  </div>

                  {product.rate && product.id !== "ecommerce" && (
                    <div 
                      className="container" 
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--spacing-6, 6px)",
                        width: 171,
                      }}
                    >
                      <span
                        className="text-style-kbfgtext-heading-14-medium"
                        style={{
                          color: "var(--texticon-gray-subtle2)",
                          margin: 0,
                          width: 25,
                          height: 20,
                        }}
                      >
                        최고
                      </span>
                      <span
                        className="text-style-kbfgtext-label-16-bold"
                        style={{
                          color: product.color,
                          margin: 0,
                          width: 58,
                          height: 24,
                        }}
                      >
                        {product.rate}
                      </span>
                    </div>
                  )}
                </div>
              }
              style={{ width: "100%" }}
            />
            {index < products.length - 1 && (
              <Divider
                colro="strong"
                weight="thin"
                direction="horizontal"
                style={{ width: "100%" }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const Container = memo(ContainerComponent);
Container.displayName = "Container";
export { Container };