import { Link } from "@navigation/Link";
import { useSocialClasses } from "@navigation/Social";

/**
 * Social Media Links
 */
export function Social() {
  const classes = useSocialClasses();

  return (
    <div className={classes.root}>
      <Link
        className={classes.link}
        to="https://www.linkedin.com/in/jenniferseburn"
        title="View my LinkedIn profile"
      >
        LinkedIn
      </Link>
      <Link
        className={classes.link}
        to="https://github.com/truburn"
        title="View my GitHub"
      >
        GitHub
      </Link>
      <Link
        className={classes.link}
        to="https://codepen.io/truburn"
        title="View my Codepen"
      >
        Codepen
      </Link>
    </div>
  );
}
