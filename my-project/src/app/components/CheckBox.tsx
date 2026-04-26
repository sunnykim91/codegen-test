import React, { memo, HTMLAttributes, ReactNode, useState, useCallback, useId } from "react";
import { Icon, IconName } from "./Icon";

export type CheckBoxState = "enabled" | "disabled";
export type CheckBoxSize = "md" | "lg";

export interface CheckBoxProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  showLabel?: boolean;
  label?: ReactNode;
  state?: CheckBoxState;
  size?: CheckBoxSize;
  isSelected?: boolean; // Controlled prop
  defaultIsSelected?: boolean; // Uncontrolled prop
  onChange?: (checked: boolean, event: React.MouseEvent<HTMLDivElement>) => void;
}

interface CheckBoxSizeConfig {
  height: string;
  gap: string;
  checkContainerSize: string; // var(--square-X, Xpx)
  iconSize: number;
  labelTypography: string;
}

const sizeStyleMap: Record<CheckBoxSize, CheckBoxSizeConfig> = {
  lg: {
    height: "48px",
    gap: "var(--spacing-8, 8px)",
    checkContainerSize: "var(--square-24, 24px)",
    iconSize: 20,
    labelTypography: "text-style-notosanskr-label-md-medium",
  },
  md: {
    height: "40px",
    gap: "var(--spacing-6, 6px)",
    checkContainerSize: "var(--square-20, 20px)",
    iconSize: 16,
    labelTypography: "text-style-notosanskr-label-xs-medium",
  },
};

interface CheckBoxColorConfig {
  fg: string;
  checkBg: string;
  checkBorder: string;
  iconColor: string;
}

const getVariantStyle = (state: CheckBoxState, isSelected: boolean): CheckBoxColorConfig => {
  if (state === "disabled") {
    return {
      fg: "var(--state-disabled-texticon-default)",
      checkBg: isSelected ? "var(--state-disabled-texticon-default)" : "var(--state-disabled-container-default)",
      checkBorder: isSelected ? "none" : "1px solid var(--state-disabled-stroke-default)",
      iconColor: "var(--container-gray-white)", // White icon for contrast on disabled backgrounds
    };
  }

  // enabled state
  return {
    fg: "var(--texticon-gray-subtle)",
    checkBg: isSelected ? "var(--texticon-primary-subtle2)" : "var(--container-gray-white)",
    checkBorder: isSelected ? "none" : "1px solid var(--stroke-gray-default)",
    iconColor: "var(--container-gray-white)", // White icon for contrast on primary background
  };
};

const CheckBoxComponent = ({
  showLabel = true,
  label = "라벨 텍스트 입니다. 줄바꿈 예시",
  state = "enabled",
  size = "lg",
  isSelected: controlledIsSelected,
  defaultIsSelected = false,
  onChange,
  className = "",
  style,
  id,
  ...props
}: CheckBoxProps) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  const [internalIsSelected, setInternalIsSelected] = useState(defaultIsSelected);
  const isControlled = controlledIsSelected !== undefined;
  const isSelected = isControlled ? controlledIsSelected : internalIsSelected;

  const isDisabled = state === "disabled";

  const sizeConfig = sizeStyleMap[size];
  const colorConfig = getVariantStyle(state, isSelected);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDisabled) return;
    if (!isControlled) {
      setInternalIsSelected(prev => !prev);
    }
    onChange?.(!isSelected, event);
  };

  return (
    <div
      className={`checkbox ${className}`}
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%", // horizontal=fill
        height: sizeConfig.height,
        gap: sizeConfig.gap,
        cursor: isDisabled ? "not-allowed" : "pointer",
        userSelect: "none", // Prevent text selection on click
        ...style,
      }}
      role="checkbox"
      aria-checked={isSelected}
      aria-disabled={isDisabled}
      onClick={handleClick}
      id={inputId}
      {...props}
    >
      <div
        className="check-container"
        style={{
          display: "inline-flex", // Hug content
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0, // Prevent shrinking
          width: sizeConfig.checkContainerSize,
          height: sizeConfig.checkContainerSize,
          borderRadius: "var(--cornerradius-xs)",
          backgroundColor: colorConfig.checkBg,
          border: colorConfig.checkBorder,
          overflow: isSelected ? "hidden" : "visible", // From Figma data
        }}
      >
        {isSelected && (
          <Icon name="CheckLineIcon" size={sizeConfig.iconSize} color={colorConfig.iconColor} />
        )}
      </div>
      {showLabel && (
        <span
          className={sizeConfig.labelTypography}
          style={{
            color: colorConfig.fg,
            margin: 0, // Reset default text margin
            flex: 1, // Take remaining horizontal space
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
};

const CheckBox = memo(CheckBoxComponent);
CheckBox.displayName = "CheckBox";
export { CheckBox };