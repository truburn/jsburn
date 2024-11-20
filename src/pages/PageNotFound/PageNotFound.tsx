import { cx } from "@emotion/css";
import { Link } from "@navigation/Link";
import { usePageNotFoundClasses } from "@pages/PageNotFound";
import { PageTitle } from "@typography/PageTitle";

/**
 * Page Not Found
 */
export function PageNotFound() {
  const classes = usePageNotFoundClasses();

  return (
    <>
      <PageTitle title="Lost Spell" subtitle="404 - Page Not Found" />
      <div className={classes.root}>
        <p className={classes.headline}>
          Oh no! It seems this page has vanished into the ether.
        </p>
        <i
          className={cx("fa-duotone fa-regular fa-book-sparkles", classes.icon)}
        ></i>
        <p className={classes.text}>
          Perhaps a spell went awry, or the page you're seeking has been
          spirited away. Fear not!
          <br />
          <Link to="/">You can return to the heart of the realm.</Link>
        </p>
      </div>
    </>
  );
}
