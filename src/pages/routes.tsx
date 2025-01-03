import { createBrowserRouter, redirect } from "react-router-dom";
import { App } from "@layout/App";
import { About } from "@pages/About";
import { CaseStudy } from "@pages/CaseStudy";
import { Certifications } from "@pages/Certifications";
import { Contact } from "@pages/Contact";
import { ErrorPage } from "@pages/ErrorPage";
import { Home } from "@pages/Home";
import { PageNotFound } from "@pages/PageNotFound";
import { Projects } from "@pages/Projects";
import { Skills } from "@pages/Skills";
import { PrivacyPolicy, TermsOfUse } from "@pages/Legal";
import caseStudies from "@pages/CaseStudy/studies";

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
        path: "/projects",
        children: [
          {
            index: true,
            element: <Projects />
          },
          {
            path: ":title?",
            element: <CaseStudy />,
            loader: async ({ params }) => {
              if (params.title && caseStudies) {
                const data = caseStudies[params.title];
                if (data) {
                  return data;
                }
              }
              redirect("/projects");
            }
          }
        ]
      },
      {
        path: "/skills",
        element: <Skills />
      },
      {
        path: "/terms-of-use",
        element: <TermsOfUse />
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />
      },
      {
        path: "*",
        element: <PageNotFound />
      }
    ]
  }
]);
