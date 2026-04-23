import React, { memo, ReactNode, HTMLAttributes, cloneElement, isValidElement } from "react";
// BlanCIImg 컴포넌트는 INSTANCE로 참조되므로, 별도 파일에서 import하여 사용합니다.
// BlanCIImg는 width, height, borderRadius, style prop을 받아 이미지를 렌더링하는 컴포넌트라고 가정합니다.
import { BlanCIImg } from "./BlanCIImg";

// 타입 정의
export type ImageIconSlotSize = number; // 숫자 전용 variant는 number 타입 사용

export interface ImageIconSlotProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  imgSlot?: ReactNode; // Figma의 'Img' INSTANCE_SWAP 속성에 해당합니다.
  size?: ImageIconSlotSize; // Figma의 'size' 속성
  circle?: boolean; // Figma의 'circle' 속성 (true/false variant는 boolean 타입 사용)
}

// sizeStyleMap: size prop에 따른 기본 치수 및 border-radius 정보
// Record 키 타입은 string이어야 하지만, 여기서는 number 타입이므로 직접 매핑
const sizeStyleMap: Record<ImageIconSlotSize, {
  height: string; // 정사각형이므로 width와 height 모두 이 값을 사용
  borderRadiusDefault: string; // circle=false일 때의 border-radius
  borderRadiusCircle: string; // circle=true일 때의 border-radius
}> = {
  24: {
    height: "var(--square-24, 24px)",
    borderRadiusDefault: "var(--cornerradius-xs, 4px)",
    borderRadiusCircle: "var(--cornerradius-full, 9999px)",
  },
  32: {
    height: "var(--square-32, 32px)",
    borderRadiusDefault: "var(--cornerradius-xs, 4px)",
    borderRadiusCircle: "var(--cornerradius-full, 9999px)",
  },
  48: {
    height: "var(--square-48, 48px)",
    borderRadiusDefault: "var(--cornerradius-xs, 4px)",
    borderRadiusCircle: "var(--cornerradius-full, 9999px)",
  },
  60: {
    height: "var(--square-60, 60px)",
    borderRadiusDefault: "var(--cornerradius-xs, 4px)",
    borderRadiusCircle: "var(--cornerradius-full, 9999px)",
  },
  72: {
    height: "var(--square-72, 72px)",
    borderRadiusDefault: "var(--cornerradius-xs, 4px)",
    borderRadiusCircle: "var(--cornerradius-full, 9999px)",
  },
};

const ImageIconSlotComponent = ({
  imgSlot, // INSTANCE_SWAP으로 제공되는 대체 컴포넌트 또는 내용
  size = 24, // Figma에 정의된 기본 size 값
  circle = false, // Figma에 정의된 기본 circle 값
  className = "",
  style,
  ...props
}: ImageIconSlotProps) => {
  const sizeConfig = sizeStyleMap[size];
  const itemDimension = sizeConfig.height; // 정사각형이므로 가로세로 크기가 동일
  const itemBorderRadius = circle ? sizeConfig.borderRadiusCircle : sizeConfig.borderRadiusDefault;

  // 내부 이미지/슬롯 콘텐츠(또는 기본 BlanCIImg)에 적용될 스타일
  // Figma의 BlanCIImg 노드 속성에서 파생:
  // (horizontal=fixed w:..., vertical=fixed h:...) [NONE, gap=0 items=start] overflow=hidden
  const contentBaseStyle: React.CSSProperties = {
    width: itemDimension,
    height: itemDimension,
    borderRadius: itemBorderRadius,
    overflow: "hidden", // BlanCIImg에 지정된 overflow
    display: "flex",
    alignItems: "flex-start", // BlanCIImg의 layout items=start
    justifyContent: "flex-start", // items=start에 따라 주축도 start로 암묵적 적용
    flexShrink: 0, // Fixed sizing이므로 flexShrink: 0 적용 (압축 방지)
  };

  let renderedContent: ReactNode;

  if (imgSlot) {
    if (isValidElement(imgSlot)) {
      // imgSlot이 React Element인 경우, cloneElement를 사용하여
      // imgSlot 컴포넌트에 필요한 dimension 및 style prop을 전달합니다.
      // imgSlot (대체된 인스턴스)이 이러한 prop을 받을 수 있다고 가정합니다.
      renderedContent = cloneElement(
        imgSlot as React.ReactElement<{
          width?: string | number;
          height?: string | number;
          borderRadius?: string;
          style?: React.CSSProperties; // imgSlot 자체의 스타일과 병합 가능하도록
        }>,
        {
          width: itemDimension,
          height: itemDimension,
          borderRadius: itemBorderRadius,
          style: { ...contentBaseStyle, ...imgSlot.props.style }, // 기본 스타일과 imgSlot의 스타일을 병합
        }
      );
    } else {
      // imgSlot이 ReactNode이지만 React Element가 아닌 경우 (예: 문자열, 숫자),
      // div로 감싸고 해당 div에 스타일을 적용합니다.
      renderedContent = <div style={contentBaseStyle}>{imgSlot}</div>;
    }
  } else {
    // imgSlot이 제공되지 않은 경우, 기본 BlanCIImg 컴포넌트를 렌더링합니다.
    renderedContent = (
      <BlanCIImg
        width={itemDimension}
        height={itemDimension}
        borderRadius={itemBorderRadius}
        style={contentBaseStyle} // BlanCIImg에 계산된 스타일을 직접 적용
      />
    );
  }

  // ImageIconSlot 컴포넌트 자체의 외부 컨테이너 스타일
  // Figma의 layout: VERTICAL, gap: 0, size: horizontal=hug(hug)×vertical=hug(hug)
  const wrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    flexShrink: 0, // "hug" sizing에 따라 flexShrink: 0 적용
    // Figma 데이터에 따라 외부 래퍼에는 명시적인 padding이나 gap이 없습니다.
    ...style, // 외부에서 전달된 스타일 오버라이드를 허용
  };

  return (
    <div className={`image-icon-slot ${className}`} style={wrapperStyle} {...props}>
      {renderedContent}
    </div>
  );
};

const ImageIconSlot = memo(ImageIconSlotComponent);
ImageIconSlot.displayName = "ImageIconSlot";
export { ImageIconSlot };