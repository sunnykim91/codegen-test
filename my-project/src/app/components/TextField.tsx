import React, { memo, HTMLAttributes, TextareaHTMLAttributes, useState, useRef, useEffect, useCallback } from "react";
import { FieldLabelItem, FieldLabelItemState } from "./_FieldLabel_Item";
import { HelperTextItem, HelperTextItemVariants } from "./_HelperText_Item";
import { IconButton } from "./IconButton";
import { Icon } from "./Icon"; // For CloseCircleFillIcon

// 1. type/interface 정의
export type TextFieldState = "enabled" | "focused" | "filled" | "read-only" | "disabled";
export type TextFieldStatus = "none" | "error" | "success";

export interface TextFieldProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "placeholder" | "value" | "onChange"> {
  /**
   * The placeholder text for the input field. Defaults to "플레이스홀더".
   */
  placeholder?: string;
  /**
   * The current value of the input field. Makes the component controlled.
   * If not provided, an internal state manages the value.
   */
  value?: string;
  /**
   * Callback fired when the input value changes.
   */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * Determines whether the helper text and character count are shown. Defaults to true.
   */
  showHelperText?: boolean;
  /**
   * Determines whether the field label is shown. Defaults to true.
   */
  showLabel?: boolean;
  /**
   * The visual state of the text field. Defaults to "enabled".
   */
  state?: TextFieldState;
  /**
   * The validation status of the text field. Defaults to "none".
   */
  status?: TextFieldStatus;
  /**
   * The label text for the field. Defaults to "필드 라벨".
   */
  label?: string;
  /**
   * The helper text content. Defaults to "헬퍼 텍스트 입니다. 줄바꿈시 이렇게 바뀌어집니다. 감사합니다.".
   */
  helperText?: string;
  /**
   * The character count string. Defaults to "0/1000".
   */
  characterCount?: string;
  /**
   * Reference to the internal textarea element.
   */
  inputRef?: React.RefObject<HTMLTextAreaElement>;
}

// Config type for state and status combinations
interface TextFieldVariantConfig {
  fieldContainerStroke: string;
  fieldContainerStrokeWeight: number;
  fieldContainerBg: string;
  helperTextItemVariants: HelperTextItemVariants;
  labelItemState: FieldLabelItemState;
  inputTextColor: string;
  placeholderColor: string;
  showCursor: boolean;
  showClearButton: boolean;
  isInputDisabled: boolean;
  isInputReadOnly: boolean;
}

// 4. getVariantStyle 함수 (variantStyleMap)
const getVariantConfig = (state: TextFieldState, status: TextFieldStatus): TextFieldVariantConfig => {
  const baseConfig: TextFieldVariantConfig = {
    fieldContainerStroke: "var(--stroke-gray-default)",
    fieldContainerStrokeWeight: 1,
    fieldContainerBg: "var(--container-gray-white)",
    helperTextItemVariants: "enabled",
    labelItemState: "enabled",
    inputTextColor: "var(--texticon-gray-default)",
    placeholderColor: "var(--texticon-gray-subtle3)",
    showCursor: false,
    showClearButton: false,
    isInputDisabled: false,
    isInputReadOnly: false,
  };

  // Apply status-specific styles (primary influence on stroke for errors/successes)
  if (status === "error") {
    baseConfig.fieldContainerStroke = "var(--stroke-system-critical-strong)"; // Mapped from Figma's error-strong
    baseConfig.fieldContainerStrokeWeight = 2;
    baseConfig.helperTextItemVariants = "error";
  } else if (status === "success") {
    baseConfig.fieldContainerStroke = "var(--stroke-system-green-default)"; // Mapped from Figma's success-strong
    baseConfig.fieldContainerStrokeWeight = 2;
    baseConfig.helperTextItemVariants = "success";
  }

  // Apply state-specific styles (can override status styles for certain properties)
  if (state === "focused") {
    // Focused state stroke takes precedence, but error/success status keeps its strong stroke
    if (status === "none") { // Only apply primary focused stroke if no error/success status
      baseConfig.fieldContainerStroke = "var(--stroke-gray-strong3)";
      baseConfig.fieldContainerStrokeWeight = 2;
    }
    baseConfig.showCursor = true;
    baseConfig.showClearButton = true;
  } else if (state === "read-only") {
    baseConfig.fieldContainerStroke = "var(--state-readonly-stroke-default)";
    baseConfig.fieldContainerStrokeWeight = 1;
    baseConfig.fieldContainerBg = "var(--state-readonly-container-default)";
    baseConfig.isInputReadOnly = true;
  } else if (state === "disabled") {
    baseConfig.fieldContainerStroke = "var(--state-disabled-stroke-default)";
    baseConfig.fieldContainerStrokeWeight = 1;
    baseConfig.fieldContainerBg = "var(--state-disabled-container-default)";
    baseConfig.helperTextItemVariants = "disabled";
    baseConfig.labelItemState = "disabled";
    baseConfig.inputTextColor = "var(--state-disabled-texticon-default)";
    baseConfig.placeholderColor = "var(--state-disabled-texticon-default)";
    baseConfig.isInputDisabled = true;
  }

  return baseConfig;
};

// Global CSS for cursor blinking (should ideally be in a global stylesheet)
const cursorBlinkKeyframes = `
  @keyframes cursorBlink {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }
`;

// Inject keyframes only once
let styleInjected = false;
const injectCursorBlinkStyle = () => {
  if (typeof window !== "undefined" && !styleInjected) {
    const styleTag = document.createElement("style");
    styleTag.textContent = cursorBlinkKeyframes;
    document.head.appendChild(styleTag);
    styleInjected = true;
  }
};

// 6. TextFieldComponent (함수 컴포넌트)
const TextFieldComponent = ({
  placeholder = "플레이스홀더",
  value: controlledValue, // Renamed to avoid conflict with internal state
  onChange,
  showHelperText = true,
  showLabel = true,
  state = "enabled",
  status = "none",
  label = "필드 라벨",
  helperText = "헬퍼 텍스트 입니다. 줄바꿈시 이렇게 바뀌어집니다. 감사합니다.",
  characterCount = "0/1000",
  inputRef,
  className = "",
  style,
  id, // Allow consumer to pass ID for label association
  ...props
}: TextFieldProps) => {
  const [internalValue, setInternalValue] = useState("");
  const currentInputValue = controlledValue !== undefined ? controlledValue : internalValue;

  const inputId = id || `textfield-${Math.random().toString(36).substr(2, 9)}`;

  // Inject cursor blink style when component mounts
  useEffect(() => {
    injectCursorBlinkStyle();
  }, []);

  const config = getVariantConfig(state, status);

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (controlledValue === undefined) {
      setInternalValue(event.target.value);
    }
    onChange?.(event);
  }, [controlledValue, onChange]);

  const handleClearInput = useCallback(() => {
    // Create a synthetic event for onChange to simulate clearing the input
    const syntheticEvent = {
      target: {
        value: "",
        name: props.name,
      },
      currentTarget: { value: "" },
      bubbles: true,
      cancelable: true,
      defaultPrevented: false,
      eventPhase: 3,
      isTrusted: true,
      nativeEvent: new Event('input', { bubbles: true }),
      persist: () => {},
      isDefaultPrevented: () => false,
      isPropagationStopped: () => false,
      stopPropagation: () => {},
      preventDefault: () => {},
    } as unknown as React.ChangeEvent<HTMLTextAreaElement>; // Cast to the correct type

    handleInputChange(syntheticEvent);
  }, [handleInputChange, props.name]);

  const hasValue = currentInputValue.length > 0;
  // Clear button is visible if configured, and there is actual text in the input
  const isClearButtonVisible = config.showClearButton && hasValue;

  return (
    <div
      className={`textfield ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-2, 2px)", // layout: VERTICAL, gap: var(--spacing-2, 2px)
        width: "100%", // horizontal=fill
        flexShrink: 0, // vertical=hug implies content-driven height, but in a container it won't shrink
        ...style,
      }}
      {...props}
    >
      {showLabel && (
        <FieldLabelItem
          className="field-label-wrapper"
          state={config.labelItemState}
          label={label}
          size="sm" // Figma instance shows size=sm
          htmlFor={inputId} // Associate label with input via id
          // These paddings are already handled by FieldLabelItem's internal structure
          // style={{ paddingBottom: "var(--spacing-4, 4px)", paddingTop: 0, paddingLeft: "var(--spacing-2, 2px)", paddingRight: "var(--spacing-2, 2px)" }}
        />
      )}

      <div
        className="field-container"
        style={{
          display: "flex",
          flexDirection: "row", // HORIZONTAL
          gap: "var(--spacing-8, 8px)", // gap=var(--spacing-8, 8px)
          alignItems: "center", // items=center
          padding: "var(--spacing-20, 20px)", // pad=var(--spacing-20, 20px)
          overflow: "hidden",
          backgroundColor: config.fieldContainerBg,
          border: `${config.fieldContainerStrokeWeight}px solid ${config.fieldContainerStroke}`,
          borderRadius: "var(--borderradius-xl, 12px)", // radius=12(var(--borderradius-xl))
          minHeight: 72, // constraints=[minH=72]
          width: "100%", // horizontal=fill
          flexShrink: 0, // vertical=hug
        }}
      >
        <div
          className="input-block"
          style={{
            display: "flex",
            flexDirection: "row", // HORIZONTAL
            gap: "var(--spacing-4, 4px)", // gap=var(--spacing-4, 4px)
            alignItems: "center", // items=center
            flex: 1, // horizontal=fill w:fill
            flexShrink: 0, // vertical=hug h:hug
          }}
        >
          <textarea
            id={inputId}
            ref={inputRef}
            className="text-style-notosanskr-label-md-medium" // font=16px textStyle="NotoSansKR/Label/md-medium"
            style={{
              flex: 1, // horizontal=fill
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              padding: 0, // Reset textarea default padding
              margin: 0, // Reset textarea default margin
              resize: "none", // Prevent user from resizing textarea
              color: config.inputTextColor,
              height: "auto", // vertical=hug, allows content to define height
              minHeight: "24px", // Default height of the Figma text node (single line)
              lineHeight: "24px", // Match textStyle
              // Pseudo-element styles for placeholder must be in a CSS stylesheet.
              // For demonstration, we set a custom property which might be picked up by global CSS.
              // Or, if not supported globally, the placeholder color will inherit inputTextColor or browser default.
              "--udc-placeholder-color": config.placeholderColor, // Custom prop for external CSS
            }}
            placeholder={placeholder}
            value={currentInputValue}
            onChange={handleInputChange}
            disabled={config.isInputDisabled}
            readOnly={config.isInputReadOnly}
            aria-disabled={config.isInputDisabled}
            aria-readonly={config.isInputReadOnly}
            aria-labelledby={showLabel ? inputId : undefined} // Link to label if shown
            {...props} // Pass through remaining textarea props
          />
          {config.showCursor && (
            <span
              className="cursor-blink"
              style={{
                width: "var(--width-container-detail-1, 1px)", // w:var(--width-container-detail-1, 1px)
                height: "var(--height-container-detail-18, 18px)", // h:var(--height-container-detail-18, 18px)
                backgroundColor: "var(--texticon-gray-default)", // Typical cursor color
                flexShrink: 0, // Do not shrink
              }}
              aria-hidden="true" // Decorative, not for screen readers
            />
          )}
          {isClearButtonVisible && (
            <IconButton
              icon={<Icon name="close-circle-fill" />} // Figma instance: CloseCircleFillIcon
              state="enabled" // state=enabled
              variants="bare" // variants=bare
              color="gray" // color=gray
              size="sm" // size=sm
              onClick={handleClearInput}
              aria-label="입력 지우기"
              tabIndex={0} // Make clear button focusable for keyboard users
              style={{ flexShrink: 0 }}
            />
          )}
        </div>
      </div>

      {showHelperText && (
        <HelperTextItem
          className="helper-text-wrapper"
          variants={config.helperTextItemVariants}
          text={helperText}
          characterCount={characterCount}
          // The Figma tree shows _CharacterCount_Item with props={variants=enabled} even when HelperText is error/success
          // This behavior is encapsulated within HelperTextItem, so we don't need to specify variants here.
          showCharacterCount={!!characterCount}
          // These paddings are already handled by HelperTextItem's internal structure
          // style={{ paddingLeft: "var(--spacing-2, 2px)", paddingRight: "var(--spacing-2, 2px)", paddingTop: 0, paddingBottom: 0 }}
        />
      )}
    </div>
  );
};

// 7. memo + displayName + export
const TextField = memo(TextFieldComponent);
TextField.displayName = "TextField";
export { TextField };