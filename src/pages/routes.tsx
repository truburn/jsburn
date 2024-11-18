import { createBrowserRouter } from "react-router-dom";
import { App } from "@layout/App";
import { About } from "@pages/About";
import { Certifications } from "@pages/Certifications";
import { Contact } from "@pages/Contact";
import { ErrorPage } from "@pages/ErrorPage";
import { Experience } from "@pages/Experience";
import { Home } from "@pages/Home";
import { PageNotFound } from "@pages/PageNotFound";
import { Projects } from "@pages/Projects";
import { Skills } from "@pages/Skills";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/certifications",
        element: <Certifications />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/experience",
        element: <Experience />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/skills",
        element: <Skills />
      },
      {
        path: "*",
        element: <PageNotFound />
      }
    ]
  }
]);
