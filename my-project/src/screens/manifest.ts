import { ComponentType } from "react";

export interface ScreenMeta {
  id: string;
  name: string;
  category: {
    major: string;
    middle: string;
    minor?: string;
  };
}

export const screens: ScreenMeta[] = [
  {
    id: "example-form-screen",
    name: "폼 입력 예시",
    category: { major: "예시", middle: "입력", minor: "기본폼" },
  },
  {
    id: "example-button-screen",
    name: "버튼 예시",
    category: { major: "예시", middle: "버튼", minor: "기본버튼" },
  },
  {
    id: "u-d-s-t-t01",
    name: "화면 이름",  // TODO: 표시 이름 수정
    category: {
      major: "",  // TODO: 대분류
      middle: "",  // TODO: 중분류
    },
  },

];

// Webpack-compatible dynamic import map (각 스크린이 별도 chunk로 분리됨)
// 코드젠이 새 페이지를 생성할 때 여기에 항목을 추가
export const screenImports: Record<
  string,
  () => Promise<{ default: ComponentType }>
> = {
  "example-form-screen": () => import("./ExampleFormScreen"),
  "example-button-screen": () => import("./ExampleButtonScreen"),
  "u-d-s-t-t01": () => import("./UDSTT01"),
};
