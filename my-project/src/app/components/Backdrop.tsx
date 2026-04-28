import React, { memo, HTMLAttributes } from "react";

export type BackdropVariants = "default";

export interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  variants?: BackdropVariants;
}

const BackdropComponent = ({
  variants = "default",
  className = "",
  style,
  ...props
}: BackdropProps) => {
  return (
    <div
      className={`backdrop ${className}`}
      style={{
        width: 375,
        height: 812,
        borderRadius: 0,
        ...style,
      }}
      {...props}
    >
      {/* Dimed [RECTANGLE] */}
      <div
        className="dimed"
        style={{
          width: 375,
          height: 812,
          backgroundColor: "var(--common-overlay-black-600)",
        }}
      />
    </div>
  );
};

const Backdrop = memo(BackdropComponent);
Backdrop.displayName = "Backdrop";
export { Backdrop };