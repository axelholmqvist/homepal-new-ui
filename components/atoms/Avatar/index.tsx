import React, { ElementType } from "react";
import { ReactNode } from "react";
import { Avatar as MUIAvatar } from "@mui/material";

interface AvatarProps {
  alt?: string;
  children?: ReactNode;
  component?: ElementType<any>;
  onClick?: ((event: any) => void) | (() => void);
  sizes?: string;
  src?: string;
  sx?: object;
  variant?: "circular" | "rounded" | "square";
}

const Avatar = React.forwardRef((props: AvatarProps, ref: any) => {
  return (
    <MUIAvatar {...props} ref={ref}>
      {props.children}
    </MUIAvatar>
  );
});

Avatar.displayName = "Avatar";
export default Avatar;
