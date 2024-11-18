import { useSkillsClasses } from "@pages/Skills";

/**
 * Skills Page
 */
export function Skills() {
  const classes = useSkillsClasses();

  return <div className={classes.root}>Skills Page</div>;
}
