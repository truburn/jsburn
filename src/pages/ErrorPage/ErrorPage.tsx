import { useErrorPageClasses } from "@pages/ErrorPage";

/**
 * Error Page
 */
export function ErrorPage() {
  const classes = useErrorPageClasses();

  return <div className={classes.root}>Error Page</div>;
}
