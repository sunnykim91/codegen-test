import React, { memo, ReactNode, HTMLAttributes, isValidElement, cloneElement } from "react";
// Assuming BlanCIImg is a component that can be swapped in
import { BlanCIImg } from "./BlanCIImg"; // Adjust path as needed based on your project structure

export interface ImageIconSlotProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * An instance component to render within the slot, typically an image or icon.
   * If not provided, a default BlanCIImg component will be rendered.
   */
  Img?: ReactNode;
  /**
   * The size of the image slot in pixels.
   * @default 24
   */
  size?: number; // Figma options: 24 | 32 | 48 | 60 | 72
  /**
   * If true, the image slot will have a full circle border radius.
   * @default false
   */
  circle?: boolean; // Figma options: false | true
}

const sizeStyleMap: Record<number, {
  width: string;
  height: string;
}> = {
  24: { width: "var(--square-24, 24px)", height: "var(--square-24, 24px)" },
  32: { width: "var(--square-32, 32px)", height: "var(--square-32, 32px)" },
  48: { width: "var(--square-48, 48px)", height: "var(--square-48, 48px)" },
  60: { width: "var(--square-60, 60px)", height: "var(--square-60, 60px)" },
  72: { width: "var(--square-72, 72px)", height: "var(--square-72, 72px)" },
};

const getBorderRadius = (circle: boolean) => {
  return circle ? "var(--borderradius-full, 9999px)" : "var(--borderradius-xs, 4px)";
};

const ImageIconSlotComponent = ({
  Img,
  size = 24,
  circle = false,
  className = "",
  style,
  ...props
}: ImageIconSlotProps) => {
  const sizeConfig = sizeStyleMap[size];
  const borderRadius = getBorderRadius(circle);

  const containerStyle: React.CSSProperties = {
    display: "inline-flex", // horizontal=hug, vertical=hug
    flexDirection: "column", // layout: VERTICAL
    alignItems: "flex-start", // layout: items=start (for internal consistency)
    gap: 0, // layout: gap: 0
    flexShrink: 0, // Prevents shrinking as it's a "hug" container with fixed internal content
    width: sizeConfig.width, // Set explicit width based on size prop
    height: sizeConfig.height, // Set explicit height based on size prop
    borderRadius: borderRadius,
    overflow: "hidden", // Crucial for borderRadius to clip child content
    ...style,
  };

  const content = Img ? (
    isValidElement(Img) ? (
      // Clone the provided Img element, passing size-related props and styling for proper fit
      cloneElement(Img as React.ReactElement<{ width?: string | number; height?: string | number; style?: React.CSSProperties }>, {
        width: sizeConfig.width,
        height: sizeConfig.height,
        style: {
          objectFit: "cover", // Ensures image covers the area, cropping if necessary
          display: "block", // Prevents extra space issues
          ...Img.props.style, // Preserve existing inline styles from the passed element
        },
      })
    ) : (
      // If Img is not a React element (e.g., string), render it directly
      Img
    )
  ) : (
    // Default BlanCIImg component if no Img prop is provided
    <BlanCIImg
      width={sizeConfig.width}
      height={sizeConfig.height}
      // BlanCIImg's internal overflow:hidden is its concern.
      // The parent ImageIconSlot handles its own overflow:hidden for corner clipping.
    />
  );

  return (
    <div
      className={`image-icon-slot ${className}`}
      style={containerStyle}
      {...props}
      // This component is a visual container for an image.
      // If it were interactive, additional accessibility attributes would be required.
    >
      {content}
    </div>
  );
};

const ImageIconSlot = memo(ImageIconSlotComponent);
ImageIconSlot.displayName = "ImageIconSlot";
export { ImageIconSlot };