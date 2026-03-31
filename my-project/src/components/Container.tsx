import React, { memo, HTMLAttributes, ReactNode } from "react";
import { SelectChip } from "./SelectChip";
import { SelectChipItem } from "./SelectChipItem";
import { Chip } from "./Chip";
import { ContentsListItem } from "./ContentsListItem";
import { Divider } from "./Divider";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  onChipSelect?: (label: string) => void;
  onItemClick?: (item: string) => void;
}

const ContainerComponent = ({
  onChipSelect,
  onItemClick,
  className = "",
  style,
  ...props
}: ContainerProps) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: "100%",
    minHeight: "100vh",
    padding: "20px",
    borderRadius: 0,
    ...style,
  };

  const selectChipChildren = (
    <>
      <SelectChipItem variants="single" state="enabled" isSelected={true}>
        <Chip
          variants="filled"
          state="enabled"
          isSelected={true}
          showStartIcon={false}
          showEndIcon={false}
        >
          입출금
        </Chip>
      </SelectChipItem>
      <SelectChipItem variants="single" state="enabled" isSelected={false}>
        <Chip
          variants="filled"
          state="enabled"
          isSelected={false}
          showStartIcon={false}
          showEndIcon={false}
        >
          예금
        </Chip>
      </SelectChipItem>
      <SelectChipItem variants="single" state="enabled" isSelected={false}>
        <Chip
          variants="filled"
          state="enabled"
          isSelected={false}
          showStartIcon={false}
          showEndIcon={false}
        >
          적금
        </Chip>
      </SelectChipItem>
      <SelectChipItem variants="single" state="enabled" isSelected={false}>
        <Chip
          variants="filled"
          state="enabled"
          isSelected={false}
          showStartIcon={false}
          showEndIcon={false}
        >
          대출
        </Chip>
      </SelectChipItem>
      <SelectChipItem variants="single" state="enabled" isSelected={false}>
        <Chip
          variants="filled"
          state="enabled"
          isSelected={false}
          showStartIcon={false}
          showEndIcon={false}
        >
          외환
        </Chip>
      </SelectChipItem>
      <SelectChipItem variants="single" state="enabled" isSelected={false}>
        <Chip
          variants="filled"
          state="enabled"
          isSelected={false}
          showStartIcon={false}
          showEndIcon={false}
        >
          환전
        </Chip>
      </SelectChipItem>
      <SelectChipItem variants="single" state="enabled" isSelected={false}>
        <Chip
          variants="filled"
          state="enabled"
          isSelected={false}
          showStartIcon={false}
          showEndIcon={false}
        >
          라벨
        </Chip>
      </SelectChipItem>
      <SelectChipItem variants="single" state="enabled" isSelected={false}>
        <Chip
          variants="filled"
          state="enabled"
          isSelected={false}
          showStartIcon={false}
          showEndIcon={false}
        >
          라벨
        </Chip>
      </SelectChipItem>
      <SelectChipItem variants="single" state="enabled" isSelected={false}>
        <Chip
          variants="filled"
          state="enabled"
          isSelected={false}
          showStartIcon={false}
          showEndIcon={false}
        >
          라벨
        </Chip>
      </SelectChipItem>
      <SelectChipItem variants="single" state="enabled" isSelected={false}>
        <Chip
          variants="filled"
          state="enabled"
          isSelected={false}
          showStartIcon={false}
          showEndIcon={false}
        >
          라벨
        </Chip>
      </SelectChipItem>
    </>
  );

  const firstItemContent = (
    <div
      className="container"
      style={{ display: "flex", gap: 12, width: "100%" }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-6, 6px)",
          flex: 1,
        }}
      >
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
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-6, 6px)",
          flex: 1,
        }}
      >
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
  );

  const secondItemContent = (
    <div
      className="container"
      style={{ display: "flex", gap: 12, width: "100%" }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-6, 6px)",
          flex: 1,
        }}
      >
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
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-6, 6px)",
          flex: 1,
        }}
      >
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
  );

  const thirdItemContent = (
    <div
      className="container"
      style={{ display: "flex", gap: 12, width: "100%" }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-6, 6px)",
          flex: 1,
        }}
      >
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
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-6, 6px)",
          flex: 1,
        }}
      >
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
  );

  const fourthItemContent = (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-6, 6px)",
        width: "100%",
      }}
    >
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
  );

  return (
    <div className={`container ${className}`} style={containerStyle} {...props}>
      <span
        className="text-style-inter-heading-16-bold"
        style={{ color: "var(--texticon-gray-default)", margin: 0 }}
      >
        서비스 체험하기
      </span>

      <SelectChip
        variants="single"
        isExpand={false}
        slot={selectChipChildren}
      />

      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-20, 20px)",
          width: "100%",
        }}
      >
        <ContentsListItem hasGutter={false} slotCenter={firstItemContent} />

        <Divider colro="strong" weight="thin" direction="horizontal" />

        <ContentsListItem hasGutter={false} slotCenter={secondItemContent} />

        <Divider colro="strong" weight="thin" direction="horizontal" />

        <ContentsListItem hasGutter={false} slotCenter={thirdItemContent} />

        <Divider colro="strong" weight="thin" direction="horizontal" />

        <ContentsListItem hasGutter={false} slotCenter={fourthItemContent} />
      </div>
    </div>
  );
};

const Container = memo(ContainerComponent);
Container.displayName = "Container";
export { Container };
