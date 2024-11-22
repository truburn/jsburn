import LogoImage from "@assets/logo/logo.svg?react";
import { Button } from "@form/Button";
import { NavItem } from "@layout/Navigation";
import navList from "@layout/Navigation/nav.json";
import { useHomeClasses } from "@pages/Home";

/**
 * Home Page
 */
export function Home() {
  const classes = useHomeClasses();

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <LogoImage />
      </div>
      <div className={classes.intro}>
        <p className={classes.name}>
          J<small>enny</small> S<small>eburn</small>
        </p>
        <p className={classes.headline}>
          Javascript & Frontend Developer
          <br />
          Certified Scrum Master & Product Owner
        </p>
        <p className={classes.tagline}>
          Breathing Life Into Interfaces, One Pixel at a Time
        </p>
        <p>
          Welcome to my digital workshop! I’m Jenny Seburn, a frontend
          developer, designer, and certified Scrum Master® and Product Owner®
          dedicated to crafting seamless, user-focused experiences. With over
          two decades of expertise in web development and a passion for
          creativity, I bring ideas to life with precision and imagination.
          Explore my work, discover my skills, and let’s build something amazing
          together.
        </p>
        <div className={classes.buttons}>
          {navList.map((item: NavItem, idx) => (
            <Button key={idx} className={classes.cta} asLink={{ to: item.to }}>
              <p className={classes.ctaTitle}>{item.label}</p>
              <p>{item.summary}</p>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
