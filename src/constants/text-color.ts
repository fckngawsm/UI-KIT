import { VARIANT } from "@/components/Button/Button.types";
import { COLOR } from "./color";

export const TEXT_COLOR: Record<VARIANT, string> = {
  elevated: COLOR.white,
  critical: COLOR.white,
  filled: COLOR.white,
  tonal: COLOR.white,
  outlined: COLOR.violet,
  ghost: COLOR.black,
};
