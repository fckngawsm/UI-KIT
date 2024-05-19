import { COLOR } from "@/constants/color";
import { SIZE } from "@/constants/size";
import { AnimatedSpinner } from "./Spinner.styled";

export interface SpinnerProps {
  animationTime?: number;
  spinnerColor?: string;
  size?: SIZE;
}

export const Spinner = ({
  animationTime = 2,
  spinnerColor = COLOR.violet,
  size = "m",
}: SpinnerProps) => {
  return (
    <AnimatedSpinner
      size={size}
      animationTime={animationTime}
      spinnerColor={spinnerColor}
    />
  );
};
