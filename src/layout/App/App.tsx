import { useAppClasses } from "@layout/App";

/**
 * App Layout
 */
export function App() {
  const classes = useAppClasses();

  return <div className={classes.root}>App Layout</div>;
}
