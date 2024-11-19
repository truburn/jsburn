import { useHeaderClasses } from "@layout/Header";
import LogoImage from "@assets/logo/logo.svg?react";
import { Link } from "@navigation/Link";

/**
 * Header
 */
export function Header() {
  const classes = useHeaderClasses();

  return (
    <header className={classes.root}>
      <Link className={classes.headerLeft} to="/" title="Return to home page">
        <LogoImage className={classes.logo} />
        <div className={classes.headerText}>
          <p className={classes.title}>
            J<small>enny</small> S<small>eburn</small>
          </p>
          <p className={classes.tagLine}>
            Breathing Life Into Interfaces, One Pixel at a Time
          </p>
        </div>
      </Link>
      <div className={classes.headerRight}>
        <div className={classes.social}>
          <Link
            className={classes.socialIcon}
            to="https://www.linkedin.com/in/jenniferseburn"
            title="View my LinkedIn profile"
          >
            LinkedIn
          </Link>
          <Link
            className={classes.socialIcon}
            to="https://github.com/truburn"
            title="View my GitHub"
          >
            GitHub
          </Link>
          <Link
            className={classes.socialIcon}
            to="https://codepen.io/truburn"
            title="View my Codepen"
          >
            Codepen
          </Link>
        </div>
        <Link asButton className={classes.contactButton} to="/contact">
          Let's Build Something Together
        </Link>
      </div>
    </header>
  );
}
