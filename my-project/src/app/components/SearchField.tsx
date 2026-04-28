import React, {
  memo,
  useState,
  useRef,
  useId,
  HTMLAttributes,
  ChangeEvent,
  FocusEvent,
} from "react";
import { FieldLabelItem, FieldLabelItemState } from "./FieldLabelItem";
import { HelperTextItem, HelperTextItemVariants } from "./HelperTextItem";
import { Icon } from "./Icon"; // SearchLineIcon, CloseCircleFillIcon
import { GhostIconButton } from "./GhostIconButton";

// 1. type/interface 정의
export type SearchFieldState =
  | "enabled"
  | "focused"
  | "filled"
  | "read-only"
  | "disabled";
export type SearchFieldStatus = "none" | "error" | "success";

// Omit HTMLDivElement event handlers that belong to the input element
export interface SearchFieldProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "onChange" | "onFocus" | "onBlur" | "value" | "placeholder"
  > {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  name?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  showHelperText?: boolean;
  showLabel?: boolean;
  state?: SearchFieldState;
  status?: SearchFieldStatus;
  label?: string; // Prop for FieldLabelItem
  helperText?: string; // Prop for HelperTextItem
  characterCountText?: string; // Prop for HelperTextItem's CharacterCountItem
}

interface SearchFieldConfig {
  fieldContainerStroke: string;
  fieldContainerStrokeWeight: number;
  fieldContainerBg: string;
  inputTextColor: string;
  placeholderColor: string;
  cursorColor: string;
  fieldLabelItemState: FieldLabelItemState;
  helperTextItemVariants: HelperTextItemVariants;
  ghostIconButtonState: "enabled" | "disabled";
  showCursor: boolean;
  showClearButton: boolean;
}

// 4. getVariantStyle 함수 또는 variantStyleMap (Record)
const getVariantStyle = (
  state: SearchFieldState,
  status: SearchFieldStatus,
  hasValue: boolean,
): SearchFieldConfig => {
  const isError = status === "error";
  const isSuccess = status === "success";

  const baseConfig: SearchFieldConfig = {
    fieldContainerStroke: "var(--stroke-gray-default)",
    fieldContainerStrokeWeight: 1,
    fieldContainerBg: "var(--container-gray-white)",
    inputTextColor: "var(--texticon-gray-default)",
    placeholderColor: "var(--texticon-gray-subtle3)",
    cursorColor: "var(--texticon-gray-default)",
    fieldLabelItemState: "enabled",
    helperTextItemVariants: "enabled",
    ghostIconButtonState: "enabled",
    showCursor: false,
    showClearButton: false,
  };

  switch (state) {
    case "enabled":
    case "filled":
      baseConfig.fieldContainerStroke = isError
        ? "var(--stroke-system-error-strong)"
        : isSuccess
          ? "var(--stroke-system-success-strong)"
          : "var(--stroke-gray-default)";
      baseConfig.fieldContainerStrokeWeight = isError || isSuccess ? 2 : 1;
      baseConfig.inputTextColor = "var(--texticon-gray-default)";
      baseConfig.placeholderColor = "var(--texticon-gray-subtle3)";
      baseConfig.helperTextItemVariants = isError
        ? "error"
        : isSuccess
          ? "success"
          : "enabled";
      baseConfig.showClearButton = false; // Only on focused
      break;
    case "focused":
      baseConfig.fieldContainerStroke = isError
        ? "var(--stroke-system-error-strong)"
        : isSuccess
          ? "var(--stroke-system-success-strong)"
          : "var(--stroke-gray-strong3)";
      baseConfig.fieldContainerStrokeWeight = 2;
      baseConfig.inputTextColor = "var(--texticon-gray-default)";
      baseConfig.placeholderColor = "var(--texticon-gray-subtle3)"; // No placeholder text on focused
      baseConfig.cursorColor = "var(--texticon-primary-default)"; // Cursor color based on Figma
      baseConfig.helperTextItemVariants = isError
        ? "error"
        : isSuccess
          ? "success"
          : "enabled";
      baseConfig.showCursor = true;
      baseConfig.showClearButton = hasValue; // Show clear button if focused AND has value
      break;
    case "read-only":
      baseConfig.fieldContainerBg = "var(--state-readonly-container-default)";
      baseConfig.fieldContainerStroke = "var(--state-readonly-stroke-default)";
      baseConfig.fieldContainerStrokeWeight = 1;
      baseConfig.inputTextColor = "var(--texticon-gray-default)";
      baseConfig.placeholderColor = "var(--texticon-gray-subtle3)";
      baseConfig.ghostIconButtonState = "disabled"; // Search icon also disabled
      break;
    case "disabled":
      baseConfig.fieldContainerBg = "var(--state-disabled-container-default)";
      baseConfig.fieldContainerStroke = "var(--state-disabled-stroke-default)";
      baseConfig.fieldContainerStrokeWeight = 1;
      baseConfig.inputTextColor = "var(--state-disabled-texticon-default)";
      baseConfig.placeholderColor = "var(--state-disabled-texticon-default)";
      baseConfig.fieldLabelItemState = "disabled";
      baseConfig.helperTextItemVariants = "disabled";
      baseConfig.ghostIconButtonState = "disabled";
      break;
    default:
      break;
  }
  return baseConfig;
};

const SearchFieldComponent = ({
  placeholder = "플레이스홀더",
  value,
  onChange,
  onFocus,
  onBlur,
  name,
  inputRef,
  showHelperText = true,
  showLabel = true,
  state = "enabled",
  status = "none",
  label = "필드 라벨",
  helperText = "헬퍼 텍스트 입니다. 줄바꿈시 이렇게 바뀌어집니다. 감사합니다.",
  characterCountText = "0/1000",
  className = "",
  style,
  id, // Allow consumer to pass id, otherwise generate
  ...props
}: SearchFieldProps) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  // Use internal state for uncontrolled component behavior
  const [internalValue, setInternalValue] = useState(value ?? "");
  const [isInputFocused, setIsInputFocused] = useState(false); // Track internal focus state
  const controlledRef = useRef<HTMLInputElement>(null);
  const resolvedInputRef = inputRef || controlledRef;

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const hasValue = currentValue.length > 0;

  // Determine effective state for rendering
  const effectiveState = isInputFocused
    ? "focused"
    : state === "enabled" && hasValue
      ? "filled"
      : state;

  const config = getVariantStyle(effectiveState, status, hasValue);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsInputFocused(true);
    onFocus?.(e);
  };

  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsInputFocused(false);
    onBlur?.(e);
  };

  const handleClear = () => {
    if (!resolvedInputRef.current) return;

    if (!isControlled) {
      setInternalValue("");
    }
    // Create a synthetic event for onChange
    const syntheticEvent = {
      target: {
        value: "",
        name: name,
        id: inputId,
      },
      currentTarget: { value: "", name: name, id: inputId }, // Add currentTarget for robustness
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
    } as unknown as ChangeEvent<HTMLInputElement>; // Double cast is necessary
    onChange?.(syntheticEvent);
    resolvedInputRef.current.focus(); // Re-focus after clearing
  };

  const isInputDisabled = state === "disabled";
  const isInputReadOnly = state === "read-only";

  return (
    <div
      className={`search-field ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-2, 2px)",
        width: "100%", // horizontal=fill
        height: "auto", // vertical=hug
        ...style,
      }}
      {...props}
    >
      {showLabel && (
        <FieldLabelItem
          className="field-label-item"
          state={config.fieldLabelItemState}
          size="sm"
          label={label}
          showIcon={false} // InfoCircleLineIcon is in HelperText, not FieldLabel
          isRequired={false} // No NoticeBadge
          style={{
            padding: "0 0 var(--spacing-4, 4px) var(--spacing-2, 2px)",
          }}
        />
      )}

      <div
        className="field-container"
        style={{
          display: "flex",
          gap: "var(--spacing-8, 8px)",
          alignItems: "center",
          padding: "var(--spacing-20, 20px)",
          overflow: "hidden",
          backgroundColor: config.fieldContainerBg,
          border: `${config.fieldContainerStrokeWeight}px solid ${config.fieldContainerStroke}`,
          borderRadius: "var(--borderradius-xl, 12px)",
          minHeight: 72,
          width: "100%", // horizontal=fill
          height: "auto", // vertical=hug
        }}
      >
        <div
          className="input-block"
          style={{
            display: "flex",
            gap: "var(--spacing-4, 4px)",
            alignItems: "center",
            flex: 1, // horizontal=fill
            height: "auto", // vertical=hug
          }}
        >
          <input
            id={inputId}
            ref={resolvedInputRef}
            type="search" // Use type="search" for search fields
            name={name}
            value={currentValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder={
              effectiveState === "focused" && hasValue ? "" : placeholder
            } // Clear placeholder text if focused and has value
            readOnly={isInputReadOnly}
            disabled={isInputDisabled}
            aria-labelledby={showLabel ? `${inputId}-label` : undefined} // TODO: Add a label for FieldLabelItem to link
            className="text-style-notosanskr-label-md-medium"
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              color: config.inputTextColor,
              flex: 1, // horizontal=fill
              width: "100%", // Ensure input takes available width
              padding: 0,
              margin: 0,
              textOverflow: "ellipsis", // truncate=ellipsis
              whiteSpace: "nowrap",
              overflow: "hidden",
              minHeight: 24, // Matches text height
              // Apply placeholder color as a custom CSS variable
              "--placeholder-color": config.placeholderColor,
            } as React.CSSProperties} // Cast to CSSProperties for custom variable
          />
          {effectiveState === "focused" && config.showCursor && (
            <div
              className="cursor"
              style={{
                width: "var(--width-container-detail-1, 1px)",
                height: "var(--height-container-detail-18, 18px)",
                backgroundColor: config.cursorColor,
                animation: "blink 1s step-end infinite",
              }}
            ></div>
          )}
          {config.showClearButton && !isInputReadOnly && !isInputDisabled && (
            <GhostIconButton
              className="clear-button"
              state={config.ghostIconButtonState}
              isPadded={false}
              color="gray"
              size="sm"
              icon={<Icon name="CloseCircleFillIcon" />}
              onClick={handleClear}
              aria-label="입력 지우기"
              style={{ flexShrink: 0 }}
            />
          )}
        </div>
        <GhostIconButton
          className="search-button"
          state={config.ghostIconButtonState}
          isPadded={false}
          color="gray"
          size="sm"
          icon={<Icon name="SearchLineIcon" />}
          aria-label="검색"
          style={{ flexShrink: 0 }}
          disabled={isInputDisabled || isInputReadOnly} // Disabled if parent field is disabled or read-only
        />
      </div>

      {showHelperText && (
        <HelperTextItem
          className="helper-text-item"
          variants={config.helperTextItemVariants}
          text={helperText}
          characterCountText={characterCountText}
          showIcon={true}
          showText={true}
          showCharacterCount={true}
          style={{
            padding: "0 var(--spacing-2, 2px)",
          }}
        />
      )}

      {/* Basic keyframes for cursor blink */}
      <style>{`
        @keyframes blink {
          from, to { opacity: 0; }
          50% { opacity: 1; }
        }
        .search-field input::placeholder {
          color: var(--placeholder-color);
        }
      `}</style>
    </div>
  );
};

const SearchField = memo(SearchFieldComponent);
SearchField.displayName = "SearchField";
export { SearchField };