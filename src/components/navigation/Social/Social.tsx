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
        <i className="fa-brands fa-linkedin-in"></i>
      </Link>
      <Link
        className={classes.link}
        to="https://github.com/truburn"
        title="View my GitHub"
      >
        <i className="fa-brands fa-github"></i>
      </Link>
      <Link
        className={classes.link}
        to="https://codepen.io/truburn"
        title="View my Codepen"
      >
        <i className="fa-brands fa-codepen"></i>
      </Link>
    </div>
  );
}
