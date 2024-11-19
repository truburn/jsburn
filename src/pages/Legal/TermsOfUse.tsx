import { useLegalClasses } from "@pages/Legal";

/**
 * Terms of Use
 */
export function TermsOfUse() {
  const classes = useLegalClasses();

  return <div className={classes.root}>Terms of Use</div>;
}
