import React, { ElementType, ReactNode } from "react";
import { Skeleton as MUISkeleton } from "@mui/material";

interface SkeletonProps {
  animation?: "pulse" | "wave" | false;
  children?: ReactNode;
  component?: ElementType<any>;
  height?: number | string;
  sx?: object;
  variant?: "circular" | "rectangular" | "rounded" | "text";
  width?: number | string;
}

const Skeleton = React.forwardRef((props: SkeletonProps, ref: any) => {
  return <MUISkeleton {...props} ref={ref} />;
});

Skeleton.displayName = "Skeleton";
export default Skeleton;
