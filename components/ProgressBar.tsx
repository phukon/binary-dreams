import React from "react";
import Progressbar from "@ramonak/react-progress-bar";

interface ProgressBarProps {
  completed: number;
  bgColor: string;
  borderRadius: string;
  isLabelVisible: boolean;
  baseBgColor: string;
  labelColor: string;
  transitionDuration: string;
  maxCompleted: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  completed,
  bgColor,
  borderRadius,
  isLabelVisible,
  baseBgColor,
  labelColor,
  transitionDuration,
  maxCompleted,
}) => {
  return (
    <Progressbar
      completed={completed}
      bgColor={bgColor}
      borderRadius={borderRadius}
      isLabelVisible={isLabelVisible}
      baseBgColor={baseBgColor}
      labelColor={labelColor}
      transitionDuration={transitionDuration}
      maxCompleted={maxCompleted}
    />
  );
};

export default ProgressBar;
