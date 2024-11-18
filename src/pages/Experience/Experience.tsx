import { useExperienceClasses } from "@pages/Experience";

/**
 * Experience
 */
export function Experience() {
  const classes = useExperienceClasses();

  return <div className={classes.root}>Experience</div>;
}
