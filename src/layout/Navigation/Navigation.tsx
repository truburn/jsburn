import { useNavigationClasses } from "@layout/Navigation";
import { Link } from "@navigation/Link";
import navList from "./nav.json";

export interface NavItem {
  to: string;
  label: string;
}

/**
 * Navigation
 */
export function Navigation() {
  const classes = useNavigationClasses();

  return (
    <nav className={classes.root}>
      {navList.map((navItem: NavItem, idx) => (
        <Link key={idx} className={classes.link} to={navItem.to}>
          {navItem.label}
        </Link>
      ))}
    </nav>
  );
}
