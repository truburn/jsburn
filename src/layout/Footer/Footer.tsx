import { useFooterClasses } from "@layout/Footer";

/**
 * Footer
 */
export function Footer() {
  const classes = useFooterClasses();

  return <div className={classes.root}>Footer</div>;
}
