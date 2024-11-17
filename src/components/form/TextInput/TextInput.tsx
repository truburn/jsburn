import { useTextInputStyles } from "@form/TextInput";

export interface TextInputProps {}

/**
 * Text Input Component
 */
export const TextInput = (_props: TextInputProps) => {
  const classes = useTextInputStyles();

  return <div className={classes.root}>Text Input</div>;
};
