import React, { memo, ReactNode, ButtonHTMLAttributes } from "react";
import { ComponentBlank } from "./ComponentBlank";

export type LinkCardState = "enabled" | "pressed" | "disabled";
export type LinkCardVariants = "shadow" | "outlined" | "filled";

export interface LinkCardProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  state?: LinkCardState;
  variants?: LinkCardVariants;
  instanceSwap?: ReactNode; // Figma property 🔄InstanceSwap#1450:43
}

// Helper function to get combined styles based on state and variants
const getVariantStyle = (
  state: LinkCardState,
  variants: LinkCardVariants,
) => {
  let background: string;
  let border: string;
  let boxShadow: string = "none";
  let textColor = "#9747FF"; // Default foreground color from summary table

  // 1. Base styles from variants (for enabled state initially)
  if (variants === "outlined") {
    background = "var(--container-gray-white)";
    border = "1px solid var(--stroke-gray-default)";
  } else if (variants === "shadow") {
    background = "var(--container-gray-white)";
    border = "none";
    boxShadow = "0px 10px 10px rgba(0, 0, 0, 0.05), 0px 5px 5px rgba(0, 0, 0, 0.05), 0px 0px 5px rgba(0, 0, 0, 0.05)";
  } else { // filled
    background = "var(--container-gray-subtle3)";
    border = "none";
  }

  // 2. State overrides
  if (state === "pressed") {
    if (variants === "filled") {
      background = "var(--container-gray-subtle2)"; // Specific override for filled pressed
    } else {
      background = "var(--container-gray-subtle3)"; // General pressed background for outlined/shadow
    }
    // Border for outlined variant is kept from its base, for shadow/filled it's none.
  } else if (state === "disabled") {
    background = "var(--state-disabled-container-default)";
    border = variants === "outlined" ? "1px solid var(--state-disabled-stroke-default)" : "none";
    textColor = "var(--state-disabled-texticon-default)"; // Override text color for disabled
  }

  return { background, border, boxShadow, textColor };
};

const LinkCardComponent = ({
  state = "enabled",
  variants = "shadow",
  instanceSwap,
  className = "",
  style,
  onClick,
  ...props
}: LinkCardProps) => {
  const { background, border, boxShadow, textColor } = getVariantStyle(state, variants);
  const isDisabled = state === "disabled";

  const linkCardStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column", // layout: VERTICAL
    gap: 0, // gap: 0
    width: "100%", // horizontal=fill(fill)
    height: 84, // fixed 84px from summary table
    padding: "var(--spacing-20, 20px)", // pad: var(--spacing-20, 20px) on all sides
    borderRadius: "var(--cornerradius-2xl, 16px)", // radius: 16
    backgroundColor: background,
    border: border,
    boxShadow: boxShadow,
    cursor: isDisabled ? "not-allowed" : "pointer",
    overflow: "hidden", // Good practice for cards with border radius
    textAlign: "left", // Default text alignment
    ...style,
  };

  // When instanceSwap is provided, it replaces the default ComponentBlank content.
  const content = instanceSwap ? (
    React.isValidElement(instanceSwap) ? (
      React.cloneElement(
        instanceSwap as React.ReactElement<any>, // Explicitly cast to React.ReactElement<any>
        {
          style: {
            ...instanceSwap.props.style,
            color: textColor, // Apply text color if the instance has text
          },
        }
      )
    ) : (
      instanceSwap
    )
  ) : (
    <ComponentBlank variants="instanceSwap" />
  );

  return (
    <button
      className={`link-card ${className}`}
      style={linkCardStyle as React.CSSProperties} // Ensure style prop type matches
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...props}
    >
      {content}
    </button>
  );
};

const LinkCard = memo(LinkCardComponent);
LinkCard.displayName = "LinkCard";
export { LinkCard };