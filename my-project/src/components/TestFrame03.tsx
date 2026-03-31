import React, { memo, HTMLAttributes } from "react";
import Image from "next/image";
import { Screen } from "./Screen";
import { TopNavi } from "./TopNavi";
import { IconButton } from "./IconButton";
import { CardEX } from "./CardEX";
import { SelectChip } from "./SelectChip";
import { SelectChipItem } from "./SelectChipItem";
import { Chip } from "./Chip";
import { ContentsListItem } from "./ContentsListItem";
import { Divider } from "./Divider";
import { Mask } from "./Mask";
import { Icon } from "./Icon";
import { CloseLarge } from "../icons";
import bagbadge3x from "../assets/bagbadge@3x.png";
import bank3x from "../assets/bank@3x.png";
import moneycoin3x from "../assets/moneycoin@3x.png";
import notepen3x from "../assets/notepen@3x.png";

export interface TestFrame03Props extends HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  onBack?: () => void;
  onServiceExperience1?: () => void;
  onServiceExperience2?: () => void;
  onServiceExperience3?: () => void;
  onChipSelect?: (index: number) => void;
  selectedChip?: number;
  onBranchFind?: () => void;
  onFAQ?: () => void;
  onExpandChips?: () => void;
  isChipsExpanded?: boolean;
}

const TestFrame03Component = ({
  onClose,
  onBack,
  onServiceExperience1,
  onServiceExperience2,
  onServiceExperience3,
  onChipSelect,
  selectedChip = 0,
  onBranchFind,
  onFAQ,
  onExpandChips,
  isChipsExpanded = false,
  className = "",
  style,
  ...props
}: TestFrame03Props) => {
  const frameStyle: React.CSSProperties = {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    gap: 0,
    padding: 0,
    borderRadius: 0,
    ...style,
  };

  const chipItems = [
    { label: "입출금", isSelected: selectedChip === 0 },
    { label: "예금", isSelected: selectedChip === 1 },
    { label: "적금", isSelected: selectedChip === 2 },
    { label: "대출", isSelected: selectedChip === 3 },
    { label: "외환", isSelected: selectedChip === 4 },
    { label: "환전", isSelected: selectedChip === 5 },
    { label: "라벨", isSelected: selectedChip === 6 },
    { label: "라벨", isSelected: selectedChip === 7 },
    { label: "라벨", isSelected: selectedChip === 8 },
    { label: "라벨", isSelected: selectedChip === 9 },
  ];

  return (
    <div className={`test-frame03 ${className}`} style={frameStyle} {...props}>
      <Screen variants="subW2">
        <TopNavi 
          variants="sub2" 
          showHeading={false}
          showCloseButton={true}
        />
        
        <div className="container" style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-20, 20px)",
          padding: "var(--spacing-20, 20px) var(--spacing-global-side, 20px) var(--spacing-20, 20px) var(--spacing-global-side, 20px)",
          width: "100%",
        }}>
          <CardEX
            size="md"
            style={{
              width: "100%",
              backgroundColor: "var(--container-primary-subtle)",
              borderRadius: 20,
              padding: "var(--spacing-24, 24px)",
              gap: "var(--spacing-6, 6px)",
              display: "flex",
              flexDirection: "row",
            }}
            onClick={onServiceExperience1}
          >
            <div className="container" style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-8, 8px)",
              flex: 1,
            }}>
              <span
                className="text-style-kbfgtext-label-14-medium"
                style={{ color: "var(--texticon-primary-subtle)", margin: 0 }}
              >
                26년도 상반기
우수 구인기업을 위한
              </span>
              <span
                className="text-style-kbfgtext-label-18-bold"
                style={{ color: "var(--texticon-gray-default)", margin: 0 }}
              >
                KB굿잡 우수기업
취업박람회
              </span>
            </div>
            <Image 
              src={bagbadge3x}
              width={112}
              height={112}
              alt="Bag&Badge"
              style={{ objectFit: "contain" }}
            />
          </CardEX>
        </div>

        <div className="container2" style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-20, 20px)",
          padding: "var(--spacing-20, 20px) var(--spacing-global-side, 20px) var(--spacing-20, 20px) var(--spacing-global-side, 20px)",
          width: "100%",
        }}>
          <span
            className="text-style-inter-heading-16-bold"
            style={{ color: "var(--texticon-gray-default)", margin: 0 }}
          >
            서비스 체험하기
          </span>
          
          <div className="container" style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-10, 10px)",
            width: "100%",
          }}>
            <CardEX
              size="md"
              style={{
                width: "100%",
                backgroundColor: "var(--container-gray-subtle4)",
                borderRadius: 20,
                padding: "var(--spacing-24, 24px)",
                gap: "var(--spacing-6, 6px)",
                display: "flex",
                flexDirection: "row",
              }}
              onClick={onServiceExperience1}
            >
              <div className="container" style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-6, 6px)",
                flex: 1,
              }}>
                <span
                  className="text-style-kbfgtext-label-14-medium"
                  style={{ color: "var(--texticon-gray-subtle2)", margin: 0 }}
                >
                  방문없이 신속하게
                </span>
                <span
                  className="text-style-kbfgtext-label-16-bold"
                  style={{ color: "var(--texticon-gray-default)", margin: 0 }}
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
            </CardEX>

            <CardEX
              size="md"
              style={{
                width: "100%",
                backgroundColor: "var(--container-gray-subtle4)",
                borderRadius: 20,
                padding: "var(--spacing-24, 24px)",
                gap: "var(--spacing-6, 6px)",
                display: "flex",
                flexDirection: "row",
              }}
              onClick={onServiceExperience2}
            >
              <div className="container" style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-6, 6px)",
                flex: 1,
              }}>
                <span
                  className="text-style-kbfgtext-label-14-medium"
                  style={{ color: "var(--texticon-gray-subtle2)", margin: 0 }}
                >
                  수수료 없이
                </span>
                <span
                  className="text-style-kbfgtext-label-16-bold"
                  style={{ color: "var(--texticon-gray-default)", margin: 0 }}
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
            </CardEX>

            <CardEX
              size="md"
              style={{
                width: "100%",
                backgroundColor: "var(--container-gray-subtle4)",
                borderRadius: 20,
                padding: "var(--spacing-24, 24px)",
                gap: "var(--spacing-6, 6px)",
                display: "flex",
                flexDirection: "row",
              }}
              onClick={onServiceExperience3}
            >
              <div className="container" style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-6, 6px)",
                flex: 1,
              }}>
                <span
                  className="text-style-kbfgtext-label-14-medium"
                  style={{ color: "var(--texticon-gray-subtle2)", margin: 0 }}
                >
                  뭐부터 해야할지 모르겠다면?
                </span>
                <span
                  className="text-style-kbfgtext-label-16-bold"
                  style={{ color: "var(--texticon-gray-default)", margin: 0 }}
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
            </CardEX>
          </div>
        </div>

        <div className="container" style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-20, 20px)",
          padding: "var(--spacing-20, 20px) var(--spacing-global-side, 20px) var(--spacing-20, 20px) var(--spacing-global-side, 20px)",
          width: "100%",
        }}>
          <span
            className="text-style-inter-heading-16-bold"
            style={{ color: "var(--texticon-gray-default)", margin: 0 }}
          >
            서비스 체험하기
          </span>
          
          <SelectChip
            variants="single"
            isExpand={isChipsExpanded}
            slotContent={
              <>
                {chipItems.map((item, index) => (
                  <SelectChipItem
                    key={index}
                    variants="single"
                    state="enabled"
                    isSelected={item.isSelected}
                    onClick={() => onChipSelect?.(index)}
                  >
                    <Chip
                      variants="filled"
                      state="enabled"
                      isSelected={item.isSelected}
                    >
                      {item.label}
                    </Chip>
                  </SelectChipItem>
                ))}
              </>
            }
          />
          
          <div className="box" style={{
            display: "flex",
            height: 36,
            gap: 0,
            position: "absolute",
            right: 0,
          }}>
            <Mask
              direction="right"
              style={{ width: "var(--width-container-detail-24, 24px)", height: 36 }}
            />
            <div className="box" style={{
              display: "flex",
              width: "var(--square-32, 32px)",
              height: "100%",
              gap: 0,
              backgroundColor: "var(--bg-base)",
            }}>
              <button onClick={onExpandChips} aria-label="펼치기">
                <Icon name="direction-icon" size={20} />
              </button>
            </div>
          </div>

          <div className="container" style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-20, 20px)",
            padding: "var(--spacing-20, 20px) 0 var(--spacing-20, 20px) 0",
            width: "100%",
          }}>
            <ContentsListItem
              hasGutter={false}
              slotCenter={
                <div className="container" style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 12,
                  width: "100%",
                }}>
                  <div className="container" style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--spacing-6, 6px)",
                    flex: 1,
                  }}>
                    <span
                      className="text-style-kbfgtext-label-12-medium"
                      style={{ color: "var(--texticon-gray-subtle2)", margin: 0 }}
                    >
                      하루만 맡겨도 이자받고 언제든지 찾아쓰는
                    </span>
                    <span
                      className="text-style-kbfgtext-label-14-bold"
                      style={{ color: "var(--texticon-gray-default)", margin: 0 }}
                    >
                      KB사장님 파킹통장
                    </span>
                  </div>
                  <div className="container" style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--spacing-6, 6px)",
                    flex: 1,
                  }}>
                    <span
                      className="text-style-kbfgtext-heading-14-medium"
                      style={{ color: "var(--texticon-gray-subtle2)", margin: 0 }}
                    >
                      최고
                    </span>
                    <span
                      className="text-style-kbfgtext-label-16-bold"
                      style={{ color: "var(--texticon-system-info-subtle2)", margin: 0 }}
                    >
                      연 2.5%
                    </span>
                  </div>
                </div>
              }
            />

            <Divider color="strong" weight="thin" direction="horizontal" style={{ width: "100%" }} />

            <ContentsListItem
              hasGutter={false}
              slotCenter={
                <div className="container" style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 12,
                  width: "100%",
                }}>
                  <div className="container" style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--spacing-6, 6px)",
                    flex: 1,
                  }}>
                    <span
                      className="text-style-kbfgtext-label-12-medium"
                      style={{ color: "var(--texticon-gray-subtle2)", margin: 0 }}
                    >
                      하루만 맡겨도 이자받고 언제든지 찾아쓰는
                    </span>
                    <span
                      className="text-style-kbfgtext-label-14-bold"
                      style={{ color: "var(--texticon-gray-default)", margin: 0 }}
                    >
                      KB사장님+통장
                    </span>
                  </div>
                  <div className="container" style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--spacing-6, 6px)",
                    flex: 1,
                  }}>
                    <span
                      className="text-style-kbfgtext-heading-14-medium"
                      style={{ color: "var(--texticon-gray-subtle2)", margin: 0 }}
                    >
                      최고
                    </span>
                    <span
                      className="text-style-kbfgtext-label-16-bold"
                      style={{ color: "var(--texticon-system-info-subtle2)", margin: 0 }}
                    >
                      연 0.1%
                    </span>
                  </div>
                </div>
              }
            />

            <Divider color="strong" weight="thin" direction="horizontal" style={{ width: "100%" }} />

            <ContentsListItem
              hasGutter={false}
              slotCenter={
                <div className="container" style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 12,
                  width: "100%",
                }}>
                  <div className="container" style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--spacing-6, 6px)",
                    flex: 1,
                  }}>
                    <span
                      className="text-style-kbfgtext-label-12-medium"
                      style={{ color: "var(--texticon-gray-subtle2)", margin: 0 }}
                    >
                      은행 거래의 시작은 다양한 혜택과 함께
                    </span>
                    <span
                      className="text-style-kbfgtext-label-14-bold"
                      style={{ color: "var(--texticon-gray-default)", margin: 0 }}
                    >
                      ONE KB 사업자 통장
                    </span>
                  </div>
                  <div className="container" style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--spacing-6, 6px)",
                    flex: 1,
                  }}>
                    <span
                      className="text-style-kbfgtext-heading-14-medium"
                      style={{ color: "var(--texticon-gray-subtle2)", margin: 0 }}
                    >
                      최고
                    </span>
                    <span
                      className="text-style-kbfgtext-label-16-bold"
                      style={{ color: "var(--texticon-system-info-subtle2)", margin: 0 }}
                    >
                      연 0.1%
                    </span>
                  </div>
                </div>
              }
            />

            <Divider color="strong" weight="thin" direction="horizontal" style={{ width: "100%" }} />

            <ContentsListItem
              hasGutter={false}
              slotCenter={
                <div className="container" style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--spacing-6, 6px)",
                  width: "100%",
                }}>
                  <span
                    className="text-style-kbfgtext-label-12-medium"
                    style={{ color: "var(--texticon-gray-subtle2)", margin: 0 }}
                  >
                    은행 거래의 시작은 다양한 혜택과 함께
                  </span>
                  <span
                    className="text-style-kbfgtext-label-14-bold"
                    style={{ color: "var(--texticon-gray-default)", margin: 0 }}
                  >
                    KB e-Commerce 채권양도 전용계좌(통장)
                  </span>
                </div>
              }
            />
          </div>
        </div>

        <div className="container" style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-20, 20px)",
          padding: "var(--spacing-20, 20px) var(--spacing-global-side, 20px) var(--spacing-20, 20px) var(--spacing-global-side, 20px)",
          width: "100%",
        }}>
          <span
            className="text-style-inter-heading-16-bold"
            style={{ color: "var(--texticon-gray-default)", margin: 0 }}
          >
            영업점 방문하기
          </span>
          
          <div className="container" style={{
            display: "flex",
            flexDirection: "row",
            gap: "var(--spacing-10, 10px)",
            width: "100%",
          }}>
            <CardEX
              size="sm"
              style={{
                flex: 1,
                backgroundColor: "var(--container-gray-subtle4)",
                borderRadius: 16,
                padding: "var(--spacing-12, 12px)",
                gap: "var(--spacing-6, 6px)",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              onClick={onBranchFind}
            >
              <div className="container" style={{
                display: "flex",
                flexDirection: "row",
                gap: "var(--spacing-4, 4px)",
                alignItems: "center",
                width: "100%",
              }}>
                <div className="container" style={{
                  display: "flex",
                  padding: "var(--spacing-4, 4px)",
                  backgroundColor: "var(--container-system-info-default)",
                  borderRadius: 8,
                }}>
                  <Icon name="map-pin-line" size={20} color="white" />
                </div>
                <span
                  className="text-style-kbfgtext-label-14-bold"
                  style={{ color: "var(--texticon-gray-default)", margin: 0 }}
                >
                  영업점 찾기
                </span>
              </div>
            </CardEX>

            <CardEX
              size="sm"
              style={{
                flex: 1,
                backgroundColor: "var(--container-gray-subtle4)",
                borderRadius: 16,
                padding: "var(--spacing-12, 12px)",
                gap: "var(--spacing-6, 6px)",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              onClick={onFAQ}
            >
              <div className="container" style={{
                display: "flex",
                flexDirection: "row",
                gap: "var(--spacing-4, 4px)",
                alignItems: "center",
                width: "100%",
              }}>
                <div className="container" style={{
                  display: "flex",
                  padding: "var(--spacing-4, 4px)",
                  backgroundColor: "var(--container-system-quetion-default)",
                  borderRadius: 8,
                }}>
                  <Icon name="questionnaire-line" size={20} color="white" />
                </div>
                <span
                  className="text-style-kbfgtext-label-14-bold"
                  style={{ color: "var(--texticon-gray-default)", margin: 0 }}
                >
                  자주묻는 질문
                </span>
              </div>
            </CardEX>
          </div>
        </div>
      </Screen>
    </div>
  );
};

const TestFrame03 = memo(TestFrame03Component);
TestFrame03.displayName = "TestFrame03";
export { TestFrame03 };