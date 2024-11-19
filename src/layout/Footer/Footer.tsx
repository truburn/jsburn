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
      <div>Copyright 2024 Jenny Seburn</div>
      <div>
        <div className={classes.nav}>
          {navList.map((navItem: NavItem, idx) => (
            <Link className={classes.link} key={idx} to={navItem.to}>
              {navItem.label}
            </Link>
          ))}
        </div>
        <Social />
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
