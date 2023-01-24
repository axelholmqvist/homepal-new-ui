import React, { useRef, useEffect, useState, ReactNode } from "react";

import Tooltip from "@components/atoms/Tooltip";
import Box from "@components/atoms/Box";

interface OverflowTipProps {
  children: ReactNode;
  title: string;
}

const OverflowTip = (props: OverflowTipProps) => {
  const ref = useRef<HTMLElement>();

  const [isOverflow, setIsOverflow] = useState<boolean>(false);

  const checkOverflow = () => {
    if (ref.current) {
      setIsOverflow(ref.current.scrollWidth > ref.current.clientWidth);
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <Tooltip title={props.title} arrow disableHoverListener={!isOverflow}>
      <Box
        ref={ref}
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {props.children}
      </Box>
    </Tooltip>
  );
};

export default OverflowTip;
