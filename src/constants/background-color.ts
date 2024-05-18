import { VARIANT } from "@/components/Button/Button.types";
import { COLOR } from "./color";

export const BACKGROUND_COLOR: Record<VARIANT, string> = {
  elevated: COLOR.violet,
  critical: COLOR.critical,
  outlined: COLOR.transparent,
  filled: COLOR.violet,
  tonal: COLOR.default,
  ghost: COLOR.transparent,
};
