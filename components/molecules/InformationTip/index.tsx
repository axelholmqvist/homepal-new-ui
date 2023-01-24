import React, { ElementType, ReactNode } from "react";

import Icon from "@components/atoms/Icon";
import IconButton from "@components/atoms/IconButton";
import Tooltip from "@components/atoms/Tooltip";

interface InformationTipProps {
  sx?: object;
  title: ReactNode;
}

const InformationTip = React.forwardRef(
  (props: InformationTipProps, ref: any) => {
    return (
      <Tooltip {...props} ref={ref}>
        <IconButton sx={{ cursor: "default" }}>
          <Icon name="Info" fontSize="small" />
        </IconButton>
      </Tooltip>
    );
  }
);

InformationTip.displayName = "InformationTip";
export default InformationTip;
