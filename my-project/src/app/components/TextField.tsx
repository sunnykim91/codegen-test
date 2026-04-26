import React, { memo, HTMLAttributes, useRef, useState, useId } from "react";
import { FieldLabelItem, FieldLabelItemState } from "./FieldLabelItem";
import { HelperTextItem, HelperTextItemVariants } from "./HelperTextItem";
import { IconButton } from "./IconButton";
import { Icon } from "./Icon"; // For closecirclefillicon

// 1. type/interface 정의
export type TextFieldState =
  | "enabled"
  | "focused"
  | "filled"
  | "read-only"
  | "disabled";
export type TextFieldStatus = "none" | "error" | "success";

// Map TextFieldState to HelperTextItemVariants
const mapStateToHelperTextVariant = (
  state: TextFieldState,
  status: TextFieldStatus,
): HelperTextItemVariants => {
  if (state === "disabled") return "disabled";
  if (status === "error") return "error";
  if (status === "success") return "success";
  return "enabled"; // focused, filled, enabled all map to enabled helper text variant for now
};

// Map TextFieldState to FieldLabelItemState
const mapStateToFieldLabelItemState = (
  state: TextFieldState,
): FieldLabelItemState => {
  return state === "disabled" ? "disabled" : "enabled";
};

export interface TextFieldProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onChange" | "onFocus" | "onBlur" | "value" | "placeholder"
> {
  /** The value of the textarea. Use for controlled component. */
  value?: string;
  /** The initial value of the textarea. Use for uncontrolled component. */
  defaultValue?: string;
  /** The placeholder text for the textarea. */
  placeholder?: string;
  /** Callback fired when the value changes. */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** Callback fired when the textarea gains focus. */
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  /** Callback fired when the textarea loses focus. */
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  /** The name attribute for the textarea. */
  name?: string;
  /** The ID attribute for the textarea. If not provided, a unique ID will be generated. */
  id?: string;
  /** A ref to the underlying textarea element. */
  inputRef?: React.RefObject<HTMLTextAreaElement>;
  /** Whether to show the helper text area. Defaults to true. */
  showHelperText?: boolean; // BOOLEAN (default: true)
  /** Whether to show the field label. Defaults to true. */
  showLabel?: boolean; // BOOLEAN (default: true)
  /** The label text for the field. Defaults to "필드 라벨". */
  label?: string;
  /** The helper text content. Defaults to "헬퍼 텍스트 입니다. 줄바꿈시 이렇게 바뀌어집니다. 감사합니다.". */
  helperText?: string;
  /** The maximum number of characters allowed in the textarea. Shows character count if provided. */
  maxLength?: number;
  /** Overrides the character count display text, e.g., "10/1000". */
  characterCountText?: string;
  /** The current state of the text field. */
  state?: TextFieldState; // default: enabled
  /** The current status (validation) of the text field. */
  status?: TextFieldStatus; // default: none
  /** Whether the textarea is read-only. Overrides `state` to "read-only". */
  readOnly?: boolean;
  /** Whether the textarea is disabled. Overrides `state` to "disabled". */
  disabled?: boolean;
  /** Whether to show a clear button when the field is focused and has text. */
  clearButton?: boolean;
}

// 4. getVariantStyle 함수
interface TextFieldVariantConfig {
  fieldContainerStrokeColor: string;
  fieldContainerBackgroundColor: string;
  fieldContainerStrokeWeight: number;
  inputTextColor: string;
  placeholderColor: string; // CSS custom property name
  cursorColor: string;
  helperTextVariant: HelperTextItemVariants;
  fieldLabelItemState: FieldLabelItemState;
}

const getVariantStyle = (
  state: TextFieldState,
  status: TextFieldStatus,
): TextFieldVariantConfig => {
  let fieldContainerStrokeColor = "var(--stroke-gray-default)";
  let fieldContainerBackgroundColor = "var(--container-gray-white)";
  let fieldContainerStrokeWeight = 1;
  let inputTextColor = "var(--texticon-gray-default)";
  let placeholderColor = "var(--texticon-gray-subtle3)";
  let cursorColor = "var(--texticon-gray-default)"; // From Cursor in focused state
  let helperTextVariant: HelperTextItemVariants = mapStateToHelperTextVariant(
    state,
    status,
  );
  let fieldLabelItemState: FieldLabelItemState =
    mapStateToFieldLabelItemState(state);

  if (state === "disabled") {
    fieldContainerStrokeColor = "var(--state-disabled-stroke-default)";
    fieldContainerBackgroundColor = "var(--state-disabled-container-default)";
    inputTextColor = "var(--state-disabled-texticon-default)";
    placeholderColor = "var(--state-disabled-texticon-default)";
    cursorColor = "transparent"; // No cursor when disabled
    fieldLabelItemState = "disabled";
  } else if (state === "read-only") {
    fieldContainerStrokeColor = "var(--state-readonly-stroke-default)";
    fieldContainerBackgroundColor = "var(--state-readonly-container-default)";
    inputTextColor = "var(--texticon-gray-default)"; // Figma input text color is default, not disabled
    placeholderColor = "var(--texticon-gray-subtle3)";
    cursorColor = "transparent"; // No cursor when read-only
    fieldLabelItemState = "enabled"; // Label is enabled
  } else if (state === "focused") {
    fieldContainerStrokeColor = "var(--stroke-gray-strong3)";
    fieldContainerStrokeWeight = 2;
    cursorColor = "var(--texticon-gray-default)"; // Figma cursor color
  }

  // Status overrides state colors for stroke and helper text
  if (status === "error") {
    fieldContainerStrokeColor = "var(--stroke-system-critical-strong)"; // Figma: --stroke-system-error-strong
    fieldContainerStrokeWeight = 2;
    helperTextVariant = "error";
  } else if (status === "success") {
    fieldContainerStrokeColor = "var(--stroke-system-success-strong)";
    fieldContainerStrokeWeight = 2;
    helperTextVariant = "success";
  }

  return {
    fieldContainerStrokeColor,
    fieldContainerBackgroundColor,
    fieldContainerStrokeWeight,
    inputTextColor,
    placeholderColor,
    cursorColor,
    helperTextVariant,
    fieldLabelItemState,
  };
};

// 6. TextFieldComponent (함수 컴포넌트)
const TextFieldComponent = ({
  value,
  defaultValue,
  placeholder = "플레이스홀더",
  onChange,
  onFocus,
  onBlur,
  name,
  id,
  inputRef: externalInputRef,
  showHelperText = true,
  showLabel = true,
  label = "필드 라벨",
  helperText = "헬퍼 텍스트 입니다. 줄바꿈시 이렇게 바뀌어집니다. 감사합니다.",
  maxLength,
  characterCountText,
  state: propState = "enabled",
  status: propStatus = "none",
  readOnly: propReadOnly = false,
  disabled: propDisabled = false,
  clearButton = false,
  className = "",
  style,
  ...props
}: TextFieldProps) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  const internalInputRef = useRef<HTMLTextAreaElement>(null);
  const textareaRef = externalInputRef || internalInputRef;

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const currentValue = isControlled ? value : internalValue;

  // Determine actual state based on props and internal focus
  let actualState: TextFieldState = propState;
  if (propDisabled) actualState = "disabled";
  else if (propReadOnly) actualState = "read-only";
  else if (isInputFocused) actualState = "focused";
  else if (currentValue !== "") actualState = "filled";

  const {
    fieldContainerStrokeColor,
    fieldContainerBackgroundColor,
    fieldContainerStrokeWeight,
    inputTextColor,
    placeholderColor,
    cursorColor,
    helperTextVariant,
    fieldLabelItemState,
  } = getVariantStyle(actualState, propStatus);

  const isDisabled = actualState === "disabled";
  const isReadOnly = actualState === "read-only";
  const isFocused = actualState === "focused";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (!isDisabled && !isReadOnly) {
      setIsInputFocused(true);
      onFocus?.(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsInputFocused(false);
    onBlur?.(e);
  };

  // No useCallback here to avoid React Compiler issues with ref.current
  const handleClear = () => {
    if (textareaRef.current) {
      // Simulate a change event
      const syntheticEvent = {
        target: { value: "", name: name || "" },
        currentTarget: { value: "" },
        bubbles: true,
        cancelable: true,
        defaultPrevented: false,
        eventPhase: 3,
        isTrusted: true,
        nativeEvent: new Event("input", { bubbles: true }),
        persist: () => {},
        isDefaultPrevented: () => false,
        isPropagationStopped: () => false,
        stopPropagation: () => {},
        preventDefault: () => {},
      } as unknown as React.ChangeEvent<HTMLTextAreaElement>; // Correct type casting

      if (!isControlled) setInternalValue("");
      onChange?.(syntheticEvent);
      textareaRef.current.focus(); // Keep focus after clearing
    }
  };

  const finalCharacterCountText =
    characterCountText ||
    (maxLength !== undefined
      ? `${currentValue.length}/${maxLength}`
      : undefined);

  return (
    <div
      className={`text-field-container ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-2, 2px)",
        width: "100%", // horizontal=fill from parent
        ...style,
      }}
      {...props}
    >
      {showLabel && (
        <div
          className="field-label-item-wrapper"
          style={{
            paddingBottom: "var(--spacing-4, 4px)",
            paddingLeft: "var(--spacing-2, 2px)",
            width: "100%", // horizontal=fill from FieldLabelItem's parent
            flexShrink: 0, // vertical=hug for FieldLabelItem's parent
          }}
        >
          <FieldLabelItem
            label={label}
            state={fieldLabelItemState}
            size="sm"
            // icon={...} // No explicit icon prop provided by Figma for label itself, InfoCricleLineIcon is for HelperText
            // isRequired is default true in FieldLabelItem, no override mentioned
            // showIcon default true in FieldLabelItem, no override mentioned
          />
        </div>
      )}

      <div
        className="FieldContainer"
        style={{
          display: "flex",
          alignItems: "center", // items=center
          gap: "var(--spacing-8, 8px)",
          padding: "var(--spacing-20, 20px)",
          overflow: "hidden",
          backgroundColor: fieldContainerBackgroundColor,
          border: `${fieldContainerStrokeWeight}px solid ${fieldContainerStrokeColor}`,
          borderRadius: "var(--borderradius-xl)", // 12px
          minHeight: 72, // constraints=[minH=72]
          flex: 1, // horizontal=fill
          flexShrink: 0, // vertical=hug
        }}
      >
        <div
          className="InputBlock"
          style={{
            display: "flex",
            flex: 1, // horizontal=fill
            flexDirection: "row", // HORIZONTAL
            gap: "var(--spacing-4, 4px)",
            alignItems: "center", // items=center
            flexShrink: 0, // vertical=hug
          }}
        >
          <textarea
            id={inputId}
            name={name}
            value={currentValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={textareaRef}
            placeholder={isFocused ? "" : placeholder} // Hide placeholder when focused
            disabled={isDisabled}
            readOnly={isReadOnly}
            maxLength={maxLength}
            rows={1} // Start with 1 row, let content expand
            className="text-style-notosanskr-label-md-medium"
            style={
              {
                flex: 1, // horizontal=fill (Figma says w:240/216 fixed, but should be fill for textarea)
                color: inputTextColor,
                backgroundColor: "transparent", // Ensure transparent background
                border: "none",
                outline: "none",
                resize: "none", // Prevent user resizing
                height: "auto", // Vertical hug, let content determine height
                minHeight: 24, // Matches text node height (h:24)
                padding: 0,
                margin: 0,
                overflowY: "hidden", // Hide scrollbar, let content expand naturally
                textOverflow: "ellipsis", // truncate=ellipsis
                whiteSpace: "pre-wrap", // Allow wrapping within textarea
                // Custom property for placeholder color, requires global CSS to apply:
                // textarea::placeholder { color: var(--placeholder-color); }
                "--placeholder-color": placeholderColor,
              } as React.CSSProperties
            }
            aria-label={label}
            aria-invalid={propStatus === "error"}
            aria-disabled={isDisabled}
            aria-readonly={isReadOnly}
          />
          {isFocused && !isDisabled && !isReadOnly && (
            <>
              <div
                className="Cursor"
                style={{
                  width: "var(--width-container-detail-1, 1px)", // 1px
                  height: "var(--height-container-detail-18, 18px)", // 18px
                  backgroundColor: cursorColor,
                  flexShrink: 0, // Fixed size
                  animation: "blink 1s infinite",
                }}
              />
              {/* Global CSS for blink animation is safer, but inlining for self-contained component */}
              <style>{`
                @keyframes blink {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0; }
                }
              `}</style>
            </>
          )}

          {clearButton &&
            isFocused &&
            currentValue.length > 0 &&
            !isDisabled &&
            !isReadOnly && (
              <IconButton
                icon={<Icon name="closecirclefillicon" />}
                onClick={handleClear}
                state="enabled"
                variants="bare"
                color="gray"
                size="sm"
                aria-label="Clear input"
              />
            )}
        </div>
      </div>

      {showHelperText && (
        <div
          className="helper-text-item-wrapper"
          style={{
            paddingLeft: "var(--spacing-2, 2px)", // pad: 0/var(--spacing-2, 2px)/0/var(--spacing-2, 2px)
            paddingRight: "var(--spacing-2, 2px)",
            width: "100%", // horizontal=fill
            flexShrink: 0, // vertical=hug for HelperTextItem's parent
          }}
        >
          <HelperTextItem
            variants={helperTextVariant}
            text={helperText}
            showCharacterCount={maxLength !== undefined}
            characterCountText={finalCharacterCountText}
            // showIcon and showText are true by default in HelperTextItem
          />
        </div>
      )}
    </div>
  );
};

// 7. memo + displayName + export
const TextField = memo(TextFieldComponent);
TextField.displayName = "TextField";
export { TextField };
