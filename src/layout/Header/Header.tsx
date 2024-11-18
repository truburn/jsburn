import { useHeaderClasses } from "@layout/Header";

/**
 * Header
 */
export function Header() {
  const classes = useHeaderClasses();

  return <div className={classes.root}>Header</div>;
}
