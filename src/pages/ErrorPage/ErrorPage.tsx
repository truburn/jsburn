import { cx } from "@emotion/css";
import { useAppClasses } from "@layout/App";
import { Footer } from "@layout/Footer";
import { Header } from "@layout/Header";
import { Navigation } from "@layout/Navigation";
import { Link } from "@navigation/Link";
import { useErrorPageClasses } from "@pages/ErrorPage";
import { PageTitle } from "@typography/PageTitle";

/**
 * Error Page
 */
export function ErrorPage() {
  const classes = useErrorPageClasses();
  const appClasses = useAppClasses();

  return (
    <>
      <Header />
      <Navigation />
      <main className={appClasses.content}>
        <PageTitle title="A Glitch in the Matrix" />
        <div className={classes.root}>
          <i
            className={cx(classes.icon, "fa-sharp-duotone fa-solid fa-bugs")}
          ></i>
          <p className={classes.text}>
            It seems we've encountered a glitch in the system! Rest assured, the
            error has been logged, and I've been notified to address the issue
            promptly. You can <Link to="/">return to the home page</Link> so the
            magic can continue without interruption. If the issue persists, feel
            free to <Link to="/contact">contact me</Link> for further
            assistance.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
