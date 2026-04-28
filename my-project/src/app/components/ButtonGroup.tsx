import React, { memo, HTMLAttributes, ReactNode } from "react";
import { GhostButton } from "./GhostButton";
import { FilledButton } from "./FilledButton";
import { OutlinedButton } from "./OutlinedButton";

export type ButtonGroupVariants =
  | "verticalText"
  | "sinlge"
  | "subGray"
  | "halfTinted"
  | "halfOutlined";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  variants?: ButtonGroupVariants;
}

interface ButtonGroupVariantConfig {
  display: "flex" | "grid";
  flexDirection?: "column" | "row";
  gap: string | number;
}

const variantStyleMap: Record<ButtonGroupVariants, ButtonGroupVariantConfig> = {
  verticalText: {
    display: "flex",
    flexDirection: "column",
    gap: "var(--spacing-12, 12px)",
  },
  subGray: {
    display: "grid",
    gap: 10,
  },
  halfOutlined: {
    display: "flex",
    flexDirection: "row",
    gap: "var(--spacing-8, 8px)",
  },
  sinlge: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  halfTinted: {
    display: "flex",
    flexDirection: "row",
    gap: "var(--spacing-8, 8px)",
  },
};

const ButtonGroupComponent = ({
  variants = "verticalText",
  className = "",
  style,
  ...props
}: ButtonGroupProps) => {
  const variantConfig = variantStyleMap[variants];

  const containerStyle: React.CSSProperties = {
    width: "100%", // horizontal=fill
    height: "auto", // vertical=hug
    borderRadius: 0, // radius: 0
    ...variantConfig,
    ...style,
  };

  const renderChildren = () => {
    switch (variants) {
      case "verticalText":
        return (
          <>
            <GhostButton
              className="ghost-button"
              state="enabeld" // Figma typo: "enabeld"
              color="grayTinted"
              textSize="xs"
              fullWidth={true} // horizontal=fill (instance override)
              label="서브 버튼"
              style={{
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: "var(--spacing-4, 4px)",
                paddingRight: "var(--spacing-4, 4px)",
                height: "20px", // vertical=fixed h:20
                borderRadius: "var(--borderradius-xs, 4px)", // radius=var(--borderradius-xs, 4px)
              }}
            />
            <FilledButton
              className="filled-button"
              state="enabled"
              isTinted={false}
              color="primary"
              size="lg"
              fullWidth={true} // fullWidth=true
              label="메인"
              style={{
                height: "56px", // vertical=fixed h:56
                paddingTop: "var(--spacing-14, 14px)",
                paddingBottom: "var(--spacing-14, 14px)",
                paddingLeft: "var(--spacing-16, 16px)",
                paddingRight: "var(--spacing-16, 16px)",
                borderRadius: "var(--borderradius-xl, 12px)", // radius=var(--borderradius-xl, 12px)
                minHeight: "56px", // constraints=[minH=56]
              }}
            />
          </>
        );
      case "subGray":
        return (
          <>
            <FilledButton
              className="filled-button-main"
              state="enabled"
              isTinted={false}
              color="primary"
              size="lg"
              fullWidth={true} // fullWidth=true
              label="메인"
              style={{
                height: "56px", // vertical=fixed h:56
                paddingTop: "var(--spacing-14, 14px)",
                paddingBottom: "var(--spacing-14, 14px)",
                paddingLeft: "var(--spacing-16, 16px)",
                paddingRight: "var(--spacing-16, 16px)",
                borderRadius: "var(--borderradius-xl, 12px)", // radius=var(--borderradius-xl, 12px)
                minHeight: "56px", // constraints=[minH=56]
              }}
            />
            <FilledButton
              className="filled-button-sub"
              state="enabled"
              isTinted={true}
              color="gray"
              size="lg"
              fullWidth={true} // fullWidth=true
              label="서브"
              style={{
                height: "56px", // vertical=fixed h:56
                paddingTop: "var(--spacing-14, 14px)",
                paddingBottom: "var(--spacing-14, 14px)",
                paddingLeft: "var(--spacing-16, 16px)",
                paddingRight: "var(--spacing-16, 16px)",
                borderRadius: "var(--borderradius-xl, 12px)", // radius=var(--borderradius-xl, 12px)
                minHeight: "56px", // constraints=[minH=56]
              }}
            />
          </>
        );
      case "halfOutlined":
        return (
          <>
            <OutlinedButton
              className="outlined-button-sub"
              state="enabled"
              color="primary"
              size="lg"
              fullWidth={true} // fullWidth=true, horizontal=fill -> flex: 1
              label="서브"
              style={{
                flex: 1, // horizontal=fill w:fill
                height: "56px", // vertical=fixed h:56
                paddingTop: "var(--spacing-14, 14px)",
                paddingBottom: "var(--spacing-14, 14px)",
                paddingLeft: "var(--spacing-16, 16px)",
                paddingRight: "var(--spacing-16, 16px)",
                borderRadius: "var(--borderradius-xl, 12px)", // radius=var(--borderradius-xl, 12px)
                minHeight: "56px", // constraints=[minH=56]
              }}
            />
            <FilledButton
              className="filled-button-main"
              state="enabled"
              isTinted={false}
              color="primary"
              size="lg"
              fullWidth={true} // fullWidth=true, horizontal=fill -> flex: 1
              label="메인"
              style={{
                flex: 1, // horizontal=fill w:fill
                height: "56px", // vertical=fixed h:56
                paddingTop: "var(--spacing-14, 14px)",
                paddingBottom: "var(--spacing-14, 14px)",
                paddingLeft: "var(--spacing-16, 16px)",
                paddingRight: "var(--spacing-16, 16px)",
                borderRadius: "var(--borderradius-xl, 12px)", // radius=var(--borderradius-xl, 12px)
                minHeight: "56px", // constraints=[minH=56]
              }}
            />
          </>
        );
      case "sinlge":
        return (
          <FilledButton
            className="filled-button-main"
            state="enabled"
            isTinted={false}
            color="primary"
            size="lg"
            fullWidth={true} // fullWidth=true
            label="메인"
            style={{
              height: "56px", // vertical=fixed h:56
              paddingTop: "var(--spacing-14, 14px)",
              paddingBottom: "var(--spacing-14, 14px)",
              paddingLeft: "var(--spacing-16, 16px)",
              paddingRight: "var(--spacing-16, 16px)",
              borderRadius: "var(--borderradius-xl, 12px)", // radius=var(--borderradius-xl, 12px)
              minHeight: "56px", // constraints=[minH=56]
            }}
          />
        );
      case "halfTinted":
        return (
          <>
            <FilledButton
              className="filled-button-sub"
              state="enabled"
              isTinted={true}
              color="primary"
              size="lg"
              fullWidth={true} // fullWidth=true, horizontal=fill -> flex: 1
              label="서브"
              style={{
                flex: 1, // horizontal=fill w:fill
                height: "56px", // vertical=fixed h:56
                paddingTop: "var(--spacing-14, 14px)",
                paddingBottom: "var(--spacing-14, 14px)",
                paddingLeft: "var(--spacing-16, 16px)",
                paddingRight: "var(--spacing-16, 16px)",
                borderRadius: "var(--borderradius-xl, 12px)", // radius=var(--borderradius-xl, 12px)
                minHeight: "56px", // constraints=[minH=56]
              }}
            />
            <FilledButton
              className="filled-button-main"
              state="enabled"
              isTinted={false}
              color="primary"
              size="lg"
              fullWidth={true} // fullWidth=true, horizontal=fill -> flex: 1
              label="메인"
              style={{
                flex: 1, // horizontal=fill w:fill
                height: "56px", // vertical=fixed h:56
                paddingTop: "var(--spacing-14, 14px)",
                paddingBottom: "var(--spacing-14, 14px)",
                paddingLeft: "var(--spacing-16, 16px)",
                paddingRight: "var(--spacing-16, 16px)",
                borderRadius: "var(--borderradius-xl, 12px)", // radius=var(--borderradius-xl, 12px)
                minHeight: "56px", // constraints=[minH=56]
              }}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`button-group ${className}`} style={containerStyle} {...props}>
      {renderChildren()}
    </div>
  );
};

const ButtonGroup = memo(ButtonGroupComponent);
ButtonGroup.displayName = "ButtonGroup";
export { ButtonGroup };