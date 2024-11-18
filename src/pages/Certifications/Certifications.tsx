import { useCertificationsClasses } from "@pages/Certifications";

/**
 * Certifications
 */
export function Certifications() {
  const classes = useCertificationsClasses();

  return <div className={classes.root}>Certifications</div>;
}
