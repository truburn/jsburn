import { useLinkClasses } from "@navigation/Link";

/**
 * Link
 */
export function Link() {
  const classes = useLinkClasses();

  return <div className={classes.root}>Link</div>;
}
