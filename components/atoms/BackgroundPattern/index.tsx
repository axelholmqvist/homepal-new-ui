import React from "react";

interface BackgroundPatternProps {
  variant: "waves";
}

const BackgroundPattern = (props: BackgroundPatternProps) => {
  switch (props.variant) {
    case "waves":
      return <div className="waves" />;
    default:
      return null;
  }
};

export default BackgroundPattern;
