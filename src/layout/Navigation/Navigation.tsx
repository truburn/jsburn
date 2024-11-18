import { useNavigationClasses } from "@layout/Navigation";
import { Link } from "@navigation/Link";

/**
 * Navigation
 */
export function Navigation() {
  const classes = useNavigationClasses();

  return (
    <nav className={classes.root}>
      <Link className={classes.link} to="/about">
        About
      </Link>
      <Link className={classes.link} to="/skills">
        Skills
      </Link>
      <Link className={classes.link} to="/certifications">
        Certifications
      </Link>
      <Link className={classes.link} to="/experience">
        Experience
      </Link>
      <Link className={classes.link} to="/projects">
        Projects
      </Link>
    </nav>
  );
}
