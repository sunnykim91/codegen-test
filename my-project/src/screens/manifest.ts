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
    id: "u-d-s-t-t01",
    name: "UDS_TT_01",
    category: {
      major: "",
      middle: "",
    },
  },
  {
    id: "u-d-s-t-t01",
    name: "UDS_TT_01",
    category: {
      major: "",
      middle: "",
    },
  },

];

export const screenImports: Record<
  string,
  () => Promise<{ default: ComponentType }>
> = {
  "u-d-s-t-t01": () => import("./UDSTT01"),
  "u-d-s-t-t01": () => import("./UDSTT01"),
};
