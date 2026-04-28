import React, { memo, HTMLAttributes, ReactNode, useState } from "react";
import { Backdrop } from "../components/Backdrop";
import { BottomSheet } from "../components/BottomSheet";
import { LinkListItem } from "../components/LinkListItem";
import { ListLeftItem } from "../components/ListLeftItem";
import { CheckBox } from "../components/CheckBox";
import { Divider } from "../components/Divider";
import { Icon } from "../components/Icon"; // Only imported if needed for passing to a slot where default is not suitable

export type TT07Props = HTMLAttributes<HTMLDivElement>;

const TT07Component = ({ className = "", style, ...props }: TT07Props) => {
  // State for CheckBoxes (if interactivity is desired, not strictly required by static render)
  const [allAgreed, setAllAgreed] = useState(false);
  const [assetAgreed, setAssetAgreed] = useState(false);
  const [marketingAgreed, setMarketingAgreed] = useState(false);

  return (
    <div
      className={`tt07 ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        width: "100%", // Page component fills available width
        height: "100vh", // Page component fills viewport height
        position: "relative", // For absolutely positioned children
        overflow: "hidden", // Prevents page scrolling
        ...style,
      }}
      {...props}
    >
      {/* Backdrop [INSTANCE] component="Backdrop" */}
      <Backdrop
        variants="default"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%", // Override Backdrop's fixed width to fill parent
          height: "100%", // Override Backdrop's fixed height to fill parent
        }}
      />

      {/* BottomSheet [INSTANCE] component="BottomSheet" */}
      <BottomSheet
        isFullHeight={false}
        hauButton={true}
        className="bottom-sheet"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%", // BottomSheet's own code has width: 393, override to 100% for page context
          maxWidth: 393, // Constraints on TT07 page width might be 393
          margin: "0 auto", // Center BottomSheet horizontally
        }}
        showHeading={true}
        heading="약관동의" // From Figma TopNavi heading text
        instanceSwap={
          // 🔲slot for the main content of the BottomSheet
          <div
            className="list-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // items=start
              gap: "var(--spacing-16, 16px)", // gap=var(--spacing-16, 16px)
              width: "100%", // horizontal=fill
              height: "auto", // vertical=hug
            }}
          >
            {/* LinkList_Item [INSTANCE] for "[선택] 전체동의" */}
            <LinkListItem
              variants="enabled"
              title="[선택] 전체동의"
              showUnderDesc={false} // Default from Figma
              showDesc={false} // Default from Figma
              startSlot={
                <ListLeftItem
                  variants="check"
                  label={null} // CheckBox label is internal text, not passed to ListLeftItem's label prop
                >
                  <CheckBox
                    state="enabled"
                    size="md"
                    isSelected={allAgreed}
                    onChange={(checked) => setAllAgreed(checked)}
                    showLabel={false} // Label is provided by LinkListItem's title
                    id="all-agree-checkbox"
                  />
                </ListLeftItem>
              }
              fullWidth={true} // horizontal=fill
            />

            {/* Divider [INSTANCE] */}
            <Divider color="strong" weight="thin" direction="horizontal" className="divider" />

            {/* LinkList_Item [INSTANCE] for "[선택] 통합자산관리 동의" */}
            <LinkListItem
              variants="enabled"
              title="[선택] 통합자산관리 동의"
              showUnderDesc={false} // Default from Figma
              showDesc={false} // Default from Figma
              startSlot={
                <ListLeftItem
                  variants="check"
                  label={null} // CheckBox label is internal text, not passed to ListLeftItem's label prop
                >
                  <CheckBox
                    state="enabled"
                    size="md"
                    isSelected={assetAgreed}
                    onChange={(checked) => setAssetAgreed(checked)}
                    showLabel={false} // Label is provided by LinkListItem's title
                    id="asset-agree-checkbox"
                  />
                </ListLeftItem>
              }
              fullWidth={true} // horizontal=fill
            />

            {/* LinkList_Item [INSTANCE] for "[선택] 개인정보 마케팅 동의" */}
            <LinkListItem
              variants="enabled"
              title="[선택] 개인정보 마케팅 동의"
              showUnderDesc={false} // Default from Figma
              showDesc={false} // Default from Figma
              startSlot={
                <ListLeftItem
                  variants="check"
                  label={null} // CheckBox label is internal text, not passed to ListLeftItem's label prop
                >
                  <CheckBox
                    state="enabled"
                    size="md"
                    isSelected={marketingAgreed}
                    onChange={(checked) => setMarketingAgreed(checked)}
                    showLabel={false} // Label is provided by LinkListItem's title
                    id="marketing-agree-checkbox"
                  />
                </ListLeftItem>
              }
              fullWidth={true} // horizontal=fill
            />
          </div>
        }
      />
    </div>
  );
};

const TT07 = memo(TT07Component);
TT07.displayName = "TT07";
export default TT07;
