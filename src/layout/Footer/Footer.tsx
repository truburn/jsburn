import { useFooterClasses } from "@layout/Footer";
import { NavItem } from "@layout/Navigation";
import navList from "@layout/Navigation/nav.json";
import { Link, useLinkClasses } from "@navigation/Link";
import { Link as RouteLink } from "react-router-dom";
import { Social } from "@navigation/Social";
import { cx } from "@emotion/css";

/**
 * Footer
 */
export function Footer() {
  const classes = useFooterClasses();
  const linkClasses = useLinkClasses();

  return (
    <footer className={classes.root}>
      <div>
        <p>
          <i className="fa-regular fa-copyright"></i> Copyright 2024-2025 Jenny
          Seburn
        </p>
        <p>
          Version 1.1.5
          <br />
          <small>
            <em>Last modified on 2/19/2025</em>
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
        <RouteLink
          reloadDocument
          target="_blank"
          className={cx(linkClasses.root, classes.link)}
          to="/JenniferSeburn_Resume.pdf"
        >
          Download my Resume
        </RouteLink>
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
