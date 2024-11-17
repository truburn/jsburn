import { useSliderStyles } from "@form/Slider";

export interface SliderProps {}

/**
 * Slider Component
 */
export const Slider = (_props: SliderProps) => {
  const classes = useSliderStyles();

  return <div className={classes.root}>Slider Component</div>;
};
