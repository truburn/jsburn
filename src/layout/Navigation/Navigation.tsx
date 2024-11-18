import { useNavigationClasses } from "@layout/Navigation";

/**
 * Navigation
 */
export function Navigation() {
  const classes = useNavigationClasses();

  return <div className={classes.root}>Navigation</div>;
}
