import { useAppClasses } from "@layout/App";
import { Header } from "@layout/Header";
import { Footer } from "@layout/Footer";
import { Outlet } from "react-router-dom";
import { Navigation } from "@layout/Navigation";

/**
 * App Layout wrapper to place header, footer, and navigation on all pages
 */
export function App() {
  const classes = useAppClasses();

  return (
    <>
      <Header />
      <Navigation />
      <main className={classes.content}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
