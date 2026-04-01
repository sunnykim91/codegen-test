import React, { memo, HTMLAttributes } from "react";
import Image from "next/image";
import { Screen } from "./Screen";
import { CardEX } from "./CardEX";
import { SelectChip } from "./SelectChip";
import { SelectChipItem } from "./SelectChipItem";
import { ContentsListItem } from "./ContentsListItem";
import { Divider } from "./Divider";
import { Icon } from "./Icon";
import bagbadge3x from "../assets/bagbadge@3x.png";
import bank3x from "../assets/bank@3x.png";
import moneycoin3x from "../assets/moneycoin@3x.png";
import notepen3x from "../assets/notepen@3x.png";

export interface TestFrame03Props extends HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  onServiceExperienceClick?: (serviceName: string) => void;
  onChipSelect?: (chipLabel: string) => void;
  onProductClick?: (productName: string) => void;
  onBranchFinderClick?: () => void;
  onFAQClick?: () => void;
}

const TestFrame03Component = ({
  onClose,
  onServiceExperienceClick,
  onChipSelect,
  onProductClick,
  onBranchFinderClick,
  onFAQClick,
  className = "",
  style,
  ...props
}: TestFrame03Props) => {
  const pageStyle: React.CSSProperties = {
    display: "flex",
    gap: 0,
    width: "100%",
    minHeight: "100vh",
    borderRadius: 0,
    ...style,
  };

  return (
    <div className={`testframe03 ${className}`} style={pageStyle} {...props}>
      <Screen variants="subW2">
        <div
          className="box"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            width: "100%",
          }}
        >
          <div
            className="box"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-20, 20px)",
              width: "100%",
              padding: "var(--spacing-20, 20px) var(--spacing-global-side, 20px) var(--spacing-20, 20px) var(--spacing-global-side, 20px)",
            }}
          >
            <CardEX
              size="md"
              style={{
                width: "100%",
                backgroundColor: "var(--container-primary-subtle)",
                borderRadius: 20,
              }}
              slotContent={
                <div
                  className="box"
                  style={{
                    display: "flex",
                    gap: 0,
                    width: "100%",
                  }}
                >
                  <div
                    className="box"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "var(--spacing-8, 8px)",
                      flex: 1,
                    }}
                  >
                    <span
                      className="text-style-kbfgtext-label-14-medium"
                      style={{
                        color: "var(--texticon-primary-subtle)",
                        margin: 0,
                        whiteSpace: "pre-line",
                      }}
                    >
                      26년도 상반기{"\n"}우수 구인기업을 위한
                    </span>
                    <span
                      className="text-style-kbfgtext-label-18-bold"
                      style={{
                        color: "var(--texticon-gray-default)",
                        margin: 0,
                        whiteSpace: "pre-line",
                      }}
                    >
                      KB굿잡 우수기업{"\n"}취업박람회
                    </span>
                  </div>
                  <Image
                    src={bagbadge3x}
                    width={112}
                    height={112}
                    alt="Bag&Badge"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              }
            />
          </div>

          <div
            className="container2"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-20, 20px)",
              width: "100%",
              padding: "var(--spacing-20, 20px) var(--spacing-global-side, 20px) var(--spacing-20, 20px) var(--spacing-global-side, 20px)",
            }}
          >
            <span
              className="text-style-inter-heading-16-bold"
              style={{
                color: "var(--texticon-gray-default)",
                margin: 0,
                width: "100%",
              }}
            >
              서비스 체험하기
            </span>
            <div
              className="box"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-10, 10px)",
                width: "100%",
              }}
            >
              <CardEX
                size="md"
                style={{
                  width: "100%",
                  backgroundColor: "var(--container-gray-subtle4)",
                  borderRadius: 20,
                }}
                slotContent={
                  <div
                    className="box"
                    style={{
                      display: "flex",
                      gap: 0,
                      width: "100%",
                    }}
                  >
                    <div
                      className="box"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--spacing-6, 6px)",
                        flex: 1,
                      }}
                    >
                      <span
                        className="text-style-kbfgtext-label-14-medium"
                        style={{
                          color: "var(--texticon-gray-subtle2)",
                          margin: 0,
                        }}
                      >
                        방문없이 신속하게
                      </span>
                      <span
                        className="text-style-kbfgtext-label-16-bold"
                        style={{
                          color: "var(--texticon-gray-default)",
                          margin: 0,
                        }}
                      >
                        사업자대출 신청하기
                      </span>
                    </div>
                    <Image
                      src={bank3x}
                      width={60}
                      height={60}
                      alt="Bank"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                }
              />
              <CardEX
                size="md"
                style={{
                  width: "100%",
                  backgroundColor: "var(--container-gray-subtle4)",
                  borderRadius: 20,
                }}
                slotContent={
                  <div
                    className="box"
                    style={{
                      display: "flex",
                      gap: 0,
                      width: "100%",
                    }}
                  >
                    <div
                      className="box"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--spacing-6, 6px)",
                        flex: 1,
                      }}
                    >
                      <span
                        className="text-style-kbfgtext-label-14-medium"
                        style={{
                          color: "var(--texticon-gray-subtle2)",
                          margin: 0,
                        }}
                      >
                        수수료 없이
                      </span>
                      <span
                        className="text-style-kbfgtext-label-16-bold"
                        style={{
                          color: "var(--texticon-gray-default)",
                          margin: 0,
                        }}
                      >
                        종합소득세 환급받기
                      </span>
                    </div>
                    <Image
                      src={moneycoin3x}
                      width={60}
                      height={60}
                      alt="Money&Coin"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                }
              />
              <CardEX
                size="md"
                style={{
                  width: "100%",
                  backgroundColor: "var(--container-gray-subtle4)",
                  borderRadius: 20,
                }}
                slotContent={
                  <div
                    className="box"
                    style={{
                      display: "flex",
                      gap: 0,
                      width: "100%",
                    }}
                  >
                    <div
                      className="box"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--spacing-6, 6px)",
                        flex: 1,
                      }}
                    >
                      <span
                        className="text-style-kbfgtext-label-14-medium"
                        style={{
                          color: "var(--texticon-gray-subtle2)",
                          margin: 0,
                        }}
                      >
                        뭐부터 해야할지 모르겠다면?
                      </span>
                      <span
                        className="text-style-kbfgtext-label-16-bold"
                        style={{
                          color: "var(--texticon-gray-default)",
                          margin: 0,
                        }}
                      >
                        예비사장님 KIT
                      </span>
                    </div>
                    <Image
                      src={notepen3x}
                      width={60}
                      height={60}
                      alt="Note&Pen"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                }
              />
            </div>
          </div>

          <div
            className="box"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-20, 20px)",
              width: "100%",
              padding: "var(--spacing-20, 20px) var(--spacing-global-side, 20px) var(--spacing-20, 20px) var(--spacing-global-side, 20px)",
            }}
          >
            <span
              className="text-style-inter-heading-16-bold"
              style={{
                color: "var(--texticon-gray-default)",
                margin: 0,
                width: "100%",
              }}
            >
              서비스 체험하기
            </span>
            <SelectChip
              variants="single"
              isExpand={false}
              style={{ width: "100%" }}
            >
              <SelectChipItem
                variants="single"
                state="enabled"
                isSelected={true}
                label="입출금"
              />
              <SelectChipItem
                variants="single"
                state="enabled"
                isSelected={false}
                label="예금"
              />
              <SelectChipItem
                variants="single"
                state="enabled"
                isSelected={false}
                label="적금"
              />
              <SelectChipItem
                variants="single"
                state="enabled"
                isSelected={false}
                label="대출"
              />
              <SelectChipItem
                variants="single"
                state="enabled"
                isSelected={false}
                label="외환"
              />
              <SelectChipItem
                variants="single"
                state="enabled"
                isSelected={false}
                label="환전"
              />
              <SelectChipItem
                variants="single"
                state="enabled"
                isSelected={false}
                label="라벨"
              />
              <SelectChipItem
                variants="single"
                state="enabled"
                isSelected={false}
                label="라벨"
              />
              <SelectChipItem
                variants="single"
                state="enabled"
                isSelected={false}
                label="라벨"
              />
              <SelectChipItem
                variants="single"
                state="enabled"
                isSelected={false}
                label="라벨"
              />
            </SelectChip>
            <div
              className="box"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-20, 20px)",
                width: "100%",
                padding: "var(--spacing-20, 20px) 0 var(--spacing-20, 20px) 0",
              }}
            >
              <ContentsListItem
                hasGutter={false}
                style={{ width: "100%" }}
                slotCenter={
                  <div
                    className="box"
                    style={{
                      display: "flex",
                      gap: 12,
                      width: "100%",
                    }}
                  >
                    <div
                      className="box"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--spacing-6, 6px)",
                        flex: 1,
                      }}
                    >
                      <span
                        className="text-style-kbfgtext-label-12-medium"
                        style={{
                          color: "var(--texticon-gray-subtle2)",
                          margin: 0,
                          whiteSpace: "nowrap",
                        }}
                      >
                        하루만 맡겨도 이자받고 언제든지 찾아쓰는
                      </span>
                      <span
                        className="text-style-kbfgtext-label-14-bold"
                        style={{
                          color: "var(--texticon-gray-default)",
                          margin: 0,
                          whiteSpace: "nowrap",
                        }}
                      >
                        KB사장님 파킹통장
                      </span>
                    </div>
                    <div
                      className="box"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--spacing-6, 6px)",
                        alignItems: "flex-end",
                        flex: 1,
                      }}
                    >
                      <span
                        className="text-style-kbfgtext-heading-14-medium"
                        style={{
                          color: "var(--texticon-gray-subtle2)",
                          margin: 0,
                          whiteSpace: "nowrap",
                        }}
                      >
                        최고
                      </span>
                      <span
                        className="text-style-kbfgtext-label-16-bold"
                        style={{
                          color: "var(--texticon-system-info-subtle2)",
                          margin: 0,
                          whiteSpace: "nowrap",
                        }}
                      >
                        연 2.5%
                      </span>
                    </div>
                  </div>
                }
              />
              <Divider
                color="strong"
                weight="thin"
                direction="horizontal"
                style={{ width: "100%" }}
              />
              <ContentsListItem
                hasGutter={false}
                style={{ width: "100%" }}
                slotCenter={
                  <div
                    className="box"
                    style={{
                      display: "flex",
                      gap: 12,
                      width: "100%",
                    }}
                  >
                    <div
                      className="box"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--spacing-6, 6px)",
                        flex: 1,
                      }}
                    >
                      <span
                        className="text-style-kbfgtext-label-12-medium"
                        style={{
                          color: "var(--texticon-gray-subtle2)",
                          margin: 0,
                          whiteSpace: "nowrap",
                        }}
                      >
                        하루만 맡겨도 이자받고 언제든지 찾아쓰는
                      </span>
                      <span
                        className="text-style-kbfgtext-label-14-bold"
                        style={{
                          color: "var(--texticon-gray-default)",
                          margin: 0,
                          whiteSpace: "nowrap",
                        }}
                      >
                        KB사장님+통장
                      </span>
                    </div>
                    <div
                      className="box"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--spacing-6, 6px)",
                        alignItems: "flex-end",
                        flex: 1,
                      }}
                    >
                      <span
                        className="text-style-kbfgtext-heading-14-medium"
                        style={{
                          color: "var(--texticon-gray-subtle2)",
                          margin: 0,
                          whiteSpace: "nowrap",
                        }}
                      >
                        최고
                      </span>
                      <span
                        className="text-style-kbfgtext-label-16-bold"
                        style={{
                          color: "var(--texticon-system-info-subtle2)",
                          margin: 0,
                          whiteSpace: "nowrap",
                        }}
                      >
                        연 0.1%
                      </span>
                    </div>
                  </div>
                }
              />
              <Divider
                color="strong"
                weight="thin"
                direction="horizontal"
                style={{ width: "100%" }}
              />
              <ContentsListItem
                hasGutter={false}
                style={{ width: "100%" }}
                slotCenter={
                  <div
                    className="box"
                    style={{
                      display: "flex",
                      gap: 12,
                      width: "100%",
                    }}
                  >
                    <div
                      className="box"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--spacing-6, 6px)",
                        flex: 1,
                      }}
                    >
                      <span
                        className="text-style-kbfgtext-label-12-medium"
                        style={{
                          color: "var(--texticon-gray-subtle2)",
                          margin: 0,
                          whiteSpace: "nowrap",
                        }}
                      >
                        은행 거래의 시작은 다양한 혜택과 함께
                      </span>
                      <span
                        className="text-style-kbfgtext-label-14-bold"
                        style={{
                          color: "var(--texticon-gray-default)",
                          margin: 0,
                          whiteSpace: "nowrap",
                        }}
                      >
                        ONE KB 사업자 통장
                      </span>
                    </div>
                    <div
                      className="box"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--spacing-6, 6px)",
                        alignItems: "flex-end",
                        flex: 1,
                      }}
                    >
                      <span
                        className="text-style-kbfgtext-heading-14-medium"
                        style={{
                          color: "var(--texticon-gray-subtle2)",
                          margin: 0,
                          whiteSpace: "nowrap",
                        }}
                      >
                        최고
                      </span>
                      <span
                        className="text-style-kbfgtext-label-16-bold"
                        style={{
                          color: "var(--texticon-system-info-subtle2)",
                          margin: 0,
                          whiteSpace: "nowrap",
                        }}
                      >
                        연 0.1%
                      </span>
                    </div>
                  </div>
                }
              />
              <Divider
                color="strong"
                weight="thin"
                direction="horizontal"
                style={{ width: "100%" }}
              />
              <ContentsListItem
                hasGutter={false}
                style={{ width: "100%" }}
                slotCenter={
                  <div
                    className="box"
                    style={{
                      display: "flex",
                      gap: 12,
                      width: "100%",
                    }}
                  >
                    <div
                      className="box"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--spacing-6, 6px)",
                        flex: 1,
                      }}
                    >
                      <span
                        className="text-style-kbfgtext-label-12-medium"
                        style={{
                          color: "var(--texticon-gray-subtle2)",
                          margin: 0,
                        }}
                      >
                        은행 거래의 시작은 다양한 혜택과 함께
                      </span>
                      <span
                        className="text-style-kbfgtext-label-14-bold"
                        style={{
                          color: "var(--texticon-gray-default)",
                          margin: 0,
                        }}
                      >
                        KB e-Commerce 채권양도 전용계좌(통장)
                      </span>
                    </div>
                  </div>
                }
              />
            </div>
          </div>

          <div
            className="box"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-20, 20px)",
              width: "100%",
              padding: "var(--spacing-20, 20px) var(--spacing-global-side, 20px) var(--spacing-20, 20px) var(--spacing-global-side, 20px)",
            }}
          >
            <span
              className="text-style-inter-heading-16-bold"
              style={{
                color: "var(--texticon-gray-default)",
                margin: 0,
                width: "100%",
              }}
            >
              영업점 방문하기
            </span>
            <div
              className="box"
              style={{
                display: "flex",
                gap: "var(--spacing-10, 10px)",
                width: "100%",
              }}
            >
              <CardEX
                size="sm"
                style={{
                  flex: 1,
                  backgroundColor: "var(--container-gray-subtle4)",
                  borderRadius: 16,
                }}
                slotContent={
                  <div
                    className="box"
                    style={{
                      display: "flex",
                      gap: "var(--spacing-4, 4px)",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <div
                      className="box"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "var(--spacing-4, 4px)",
                        backgroundColor: "var(--container-system-info-default)",
                        borderRadius: 8,
                        flexShrink: 0,
                      }}
                    >
                      <Icon name="map-pin-line" size={20} color="white" />
                    </div>
                    <span
                      className="text-style-kbfgtext-label-14-bold"
                      style={{
                        color: "var(--texticon-gray-default)",
                        margin: 0,
                        whiteSpace: "nowrap",
                      }}
                    >
                      영업점 찾기
                    </span>
                  </div>
                }
              />
              <CardEX
                size="sm"
                style={{
                  flex: 1,
                  backgroundColor: "var(--container-gray-subtle4)",
                  borderRadius: 16,
                }}
                slotContent={
                  <div
                    className="box"
                    style={{
                      display: "flex",
                      gap: "var(--spacing-4, 4px)",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <div
                      className="box"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "var(--spacing-4, 4px)",
                        backgroundColor: "var(--container-system-quetion-default)",
                        borderRadius: 8,
                        flexShrink: 0,
                      }}
                    >
                      <Icon name="questionnaire-line" size={20} color="white" />
                    </div>
                    <span
                      className="text-style-kbfgtext-label-14-bold"
                      style={{
                        color: "var(--texticon-gray-default)",
                        margin: 0,
                        whiteSpace: "nowrap",
                      }}
                    >
                      자주묻는 질문
                    </span>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </Screen>
    </div>
  );
};

const TestFrame03 = memo(TestFrame03Component);
TestFrame03.displayName = "TestFrame03";
export { TestFrame03 };