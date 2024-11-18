import { usePageTitleClasses } from "@typography/PageTitle";

/**
 * Page Title
 */
export function PageTitle() {
  const classes = usePageTitleClasses();

  return <div className={classes.root}>Page Title</div>;
}
