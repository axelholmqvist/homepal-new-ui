import React, { ReactNode } from "react";

import Paper from "@components/atoms/Paper";
import Typography from "@components/atoms/Typography";

interface SectionProps {
  children: ReactNode;
  title?: string;
}

const Section = React.forwardRef((props: SectionProps, ref: any) => {
  return (
    <Paper sx={{ p: 4 }}>
      {props.title ? (
        <Typography component="h2" variant="h5" sx={{ mb: 2 }}>
          {props.title}
        </Typography>
      ) : null}
      {props.children}
    </Paper>
  );
});

Section.displayName = "Section";
export default Section;
