import LogoImage from "@assets/logo/logo.svg?react";
import { Button } from "@form/Button";
import { NavItem } from "@layout/Navigation";
import navList from "@layout/Navigation/nav.json";
import { Link } from "@navigation/Link";
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
          Hi, I'm Jenny Seburn, a passionate frontend developer,{" "}
          <Link to="https://bcert.me/sfmokyzqu" newTab>
            Certified Scrum Master® (CSM®)
          </Link>
          , and{" "}
          <Link to="https://bcert.me/seywsupzb" newTab>
            Certified Scrum Product Owner® (CSPO®)
          </Link>{" "}
          with over 20 years of experience breathing life into interfaces. This
          portfolio reflects my journey—where creativity meets innovation—and
          showcases the projects, skills, and solutions that define my approach
          to crafting engaging digital experiences.
        </p>
        <p>
          Guided by the same iterative philosophy I bring to every project, this
          space evolves to better capture the essence of my work and the passion
          behind it. Each feature and design choice represents my dedication to
          excellence and the continual pursuit of growth.
        </p>
        <p>
          You can also explore the{" "}
          <Link to="/projects/jsburn">project page</Link> to learn more about
          the development of this portfolio and the thought process behind it.
          Thank you for visiting!
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
