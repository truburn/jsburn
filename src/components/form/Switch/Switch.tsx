import { useSwitchStyles } from "@form/Switch";

export interface SwitchProps {}

/**
 * Switch Component
 */
export const Switch = (_props: SwitchProps) => {
  const classes = useSwitchStyles();

  return <div className={classes.root}>Switch Component</div>;
};
