import React, {
  memo,
  ReactNode,
  HTMLAttributes,
  isValidElement,
  cloneElement,
} from "react";
import { Icon } from "./Icon";
import { NoticeBadge } from "./NoticeBadge";

// 1. type/interface 정의
export type FieldLabelItemState = "enabled" | "disabled";
export type FieldLabelItemSize = "sm" | "md";

export interface FieldLabelItemProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode; // Default is InfoCricleLineIcon
  showIcon?: boolean; // BOOLEAN (default: true)
  isRequired?: boolean; // BOOLEAN (default: true)
  label?: string; // TEXT (default: 필드 라벨)
  state?: FieldLabelItemState; // default: enabled
  size?: FieldLabelItemSize; // default: sm
}

// 2. sizeStyleMap (configMap for combined state/size)
interface FieldLabelItemConfig {
  height: string;
  paddingX: string;
  paddingY: string;
  gap: string;
  borderRadius: number;
  backgroundColor: string;
  color: string;
  typographyClass: string;
  iconSize: number; // In px, extracted from var(--square-X, Xpx)
  // badgeSize: string; // NoticeBadge handles its own sizing based on variants="dot"
}

const configMap: Record<
  FieldLabelItemState,
  Record<FieldLabelItemSize, FieldLabelItemConfig>
> = {
  enabled: {
    sm: {
      height: "24px",
      paddingX: "var(--spacing-2, 2px)",
      paddingY: "0px",
      gap: "var(--spacing-2, 2px)",
      borderRadius: 0,
      backgroundColor: "#FFFFFF",
      color: "var(--texticon-gray-subtle)",
      typographyClass: "text-style-notosanskr-label-xs-bold",
      iconSize: 16,
    },
    md: {
      height: "28px",
      paddingX: "var(--spacing-2, 2px)",
      paddingY: "0px",
      gap: "var(--spacing-2, 2px)",
      borderRadius: 0,
      backgroundColor: "#FFFFFF",
      color: "var(--texticon-gray-subtle)",
      typographyClass: "text-style-notosanskr-label-md-bold",
      iconSize: 20,
    },
  },
  disabled: {
    sm: {
      height: "24px",
      paddingX: "var(--spacing-2, 2px)",
      paddingY: "0px",
      gap: "var(--spacing-2, 2px)",
      borderRadius: 0,
      backgroundColor: "#FFFFFF",
      color: "var(--state-disabled-texticon-default)",
      typographyClass: "text-style-notosanskr-label-xs-bold",
      iconSize: 16,
    },
    md: {
      height: "28px",
      paddingX: "var(--spacing-2, 2px)",
      paddingY: "0px",
      gap: "var(--spacing-2, 2px)",
      borderRadius: 0,
      backgroundColor: "#FFFFFF",
      color: "var(--state-disabled-texticon-default)",
      typographyClass: "text-style-notosanskr-label-md-bold",
      iconSize: 20,
    },
  },
};

// 3. {Name}Component (함수 컴포넌트)
const FieldLabelItemComponent = ({
  icon,
  showIcon = true,
  isRequired = true,
  label = "필드 라벨",
  state = "enabled",
  size = "sm",
  className = "",
  style,
  ...props
}: FieldLabelItemProps) => {
  const config = configMap[state][size];

  const labelItemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: config.gap,
    height: config.height,
    padding: `${config.paddingY} ${config.paddingX}`, // Based on summary table: padX/padY
    borderRadius: config.borderRadius,
    backgroundColor: config.backgroundColor,
    color: config.color,
    width: "100%", // horizontal=fill
    flexShrink: 0, // Fixed height and content
    overflow: "hidden",
    ...style,
  };

  const renderIconElement = () => {
    if (!showIcon) return null;

    const iconColor = config.color; // Icon color should match label text color

    if (icon) {
      if (isValidElement(icon)) {
        return cloneElement(
          icon as React.ReactElement<{ size?: number; color?: string }>,
          {
            size: config.iconSize,
            color: iconColor,
          },
        );
      }
      return icon; // Render raw ReactNode if not an element
    }

    // Default icon: InfoCricleLineIcon (mapped to "info-line")
    return (
      <Icon
        name="infocirclelineicon"
        size={config.iconSize}
        color={iconColor}
      />
    );
  };

  return (
    <div
      className={`field-label-item ${className}`}
      style={labelItemStyle}
      {...props}
    >
      <span
        className={`${config.typographyClass}`}
        style={{
          color: config.color,
          margin: 0,
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        {label}
      </span>

      {renderIconElement()}

      {/* container for NoticeBadge, conditional on isRequired */}
      {isRequired && (
        <div
          className="label-badge-wrapper"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            flexShrink: 0, // horizontal=hug
            height: "100%", // vertical=fill
            padding: "var(--spacing-2, 2px) 0", // pad: top/right/bottom/left -> top/bottom 2px, left/right 0px
          }}
        >
          <NoticeBadge variants="dot" />
        </div>
      )}
    </div>
  );
};

// 4. memo + displayName + export
const FieldLabelItem = memo(FieldLabelItemComponent);
FieldLabelItem.displayName = "FieldLabelItem";

export { FieldLabelItem };
