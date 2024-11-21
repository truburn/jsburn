import { useHeaderClasses } from "@layout/Header";
import LogoImage from "@assets/logo/logo.svg?react";
import { Link } from "@navigation/Link";
import { Social } from "@navigation/Social";
import { Button } from "@form/Button";

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
        <Social />
        <Button className={classes.contactButton} asLink={{ to: "/contact" }}>
          Let's Build Something Together
        </Button>
      </div>
    </header>
  );
}
