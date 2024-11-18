import { useAboutClasses } from "@pages/About";

/**
 * About Classes
 */
export function About() {
  const classes = useAboutClasses();

  return <div className={classes.root}>About Page</div>;
}
