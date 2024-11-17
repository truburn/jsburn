import { useTextareaStyles } from "@form/Textarea";

export interface TextareaProps {}

/**
 * Textarea component
 */
export const Textarea = (_props: TextareaProps) => {
  const classes = useTextareaStyles();

  return <div className={classes.root}>Textarea Component</div>;
};
