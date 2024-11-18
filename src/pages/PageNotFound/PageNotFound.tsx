import { usePageNotFoundClasses } from "@pages/PageNotFound";

/**
 * Page Not Found
 */
export function PageNotFound() {
  const classes = usePageNotFoundClasses();

  return <div className={classes.root}>Page Not Found</div>;
}
