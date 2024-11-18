import { useButtonClasses } from "@navigation/Button";

/**
 * Button
 */
export function Button() {
  const classes = useButtonClasses();

  return <div className={classes.root}>Button</div>;
}
