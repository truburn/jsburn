import { useLegalClasses } from "@pages/Legal";

/**
 * Privacy Policy
 */
export function PrivacyPolicy() {
  const classes = useLegalClasses();

  return <div className={classes.root}>Privacy Policy</div>;
}
