import { useProjectsClasses } from "@pages/Projects";

/**
 * Projects
 */
export function Projects() {
  const classes = useProjectsClasses();

  return <div className={classes.root}>Projects</div>;
}
