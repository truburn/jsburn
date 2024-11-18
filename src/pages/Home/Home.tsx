import { useHomeClasses } from "@pages/Home";

/**
 * Home Page
 */
export function Home() {
  const classes = useHomeClasses();

  return <div className={classes.root}>Home Page</div>;
}
