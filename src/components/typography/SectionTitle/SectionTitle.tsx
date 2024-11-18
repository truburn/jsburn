import { useSectionTitleClasses } from "@typography/SectionTitle";

/**
 * Section Title
 */
export function SectionTitle() {
  const classes = useSectionTitleClasses();

  return <div className={classes.root}>Section Title</div>;
}
