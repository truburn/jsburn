import { useCheckboxStyles } from "@form/Checkbox";

export interface CheckboxProps {}

/**
 * Checkbox Component
 */
export const Checkbox = (_props: CheckboxProps) => {
  const classes = useCheckboxStyles();

  return <div className={classes.root}>Checkbox Component</div>;
};
