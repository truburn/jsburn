import { useFooterClasses } from "@layout/Footer";
import { NavItem } from "@layout/Navigation";
import navList from "@layout/Navigation/nav.json";
import { Link } from "@navigation/Link";
import { Social } from "@navigation/Social";

/**
 * Footer
 */
export function Footer() {
  const classes = useFooterClasses();

  return (
    <footer className={classes.root}>
      <div>
        <p>
          <i className="fa-regular fa-copyright"></i> Copyright 2024 Jenny
          Seburn
        </p>
        <p>
          Version 1.1.4
          <br />
          <small>
            <em>Last modified on 12/29/2024</em>
          </small>
        </p>
      </div>
      <div>
        <Social />
        <div className={classes.nav}>
          {navList.map((navItem: NavItem, idx) => (
            <Link className={classes.link} key={idx} to={navItem.to}>
              {navItem.label}
            </Link>
          ))}
        </div>
        <Link className={classes.link} to="/JenniferSeburn_Resume.pdf" newTab>
          Download my Resume
        </Link>
      </div>
      <div>
        <Link className={classes.link} to="/terms-of-use">
          Terms of Use
        </Link>
        <Link className={classes.link} to="/privacy-policy">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
