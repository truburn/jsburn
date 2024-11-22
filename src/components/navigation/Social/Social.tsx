import { cx } from "@emotion/css";
import { Link } from "@navigation/Link";
import { useSocialClasses } from "@navigation/Social";

interface SocialProps {
  className?: string;
}

/**
 * Keep links to social media in one place that can be referrenced in multiple places and updated in a single location when necessary
 */
export enum SocialLinks {
  LINKEDIN = "https://www.linkedin.com/in/jenniferseburn",
  GITHUB = "https://github.com/truburn",
  CODEPEN = "https://codepen.io/truburn"
}

/**
 * Social Media Links
 */
export function Social(props: SocialProps) {
  const classes = useSocialClasses();

  return (
    <div className={cx(classes.root, props.className)}>
      <Link
        className={classes.link}
        to={SocialLinks.LINKEDIN}
        title="View my LinkedIn profile"
        newTab
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </Link>
      <Link
        className={classes.link}
        to={SocialLinks.GITHUB}
        title="View my GitHub"
        newTab
      >
        <i className="fa-brands fa-github"></i>
      </Link>
      <Link
        className={classes.link}
        to={SocialLinks.CODEPEN}
        title="View my Codepen"
        newTab
      >
        <i className="fa-brands fa-codepen"></i>
      </Link>
    </div>
  );
}
