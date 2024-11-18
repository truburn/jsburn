import { useContactClasses } from "@pages/Contact";

/**
 * Contact Page
 */
export function Contact() {
  const classes = useContactClasses();

  return <div className={classes.root}>Contact Page</div>;
}
