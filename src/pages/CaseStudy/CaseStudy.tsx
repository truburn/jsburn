import { Link } from "@navigation/Link";
import { useCaseStudyClasses } from "@pages/CaseStudy";
import { PageTitle } from "@typography/PageTitle";
import { ReactElement } from "react";
import { useLoaderData } from "react-router-dom";

interface CaseStudyLink {
  to: string;
  label: string;
}
export interface CaseStudyItem {
  key: string;
  title: string;
  subtitle?: string;
  body: ReactElement;
  summary: string;
  image: string;
  links?: CaseStudyLink[];
}

/**
 * Case Study
 */
export function CaseStudy() {
  const classes = useCaseStudyClasses();
  const data = useLoaderData() as CaseStudyItem;

  return (
    <>
      <Link className={classes.goBack} to="/projects">
        <i className="fa-solid fa-chevron-left"></i> Return to Projects
      </Link>
      <PageTitle title={data.title ?? "Case Study"} subtitle={data.subtitle} />
      {data.links?.length && (
        <ul className={classes.links}>
          {data.links.map((link, idx) => (
            <li key={idx}>
              <Link to={link.to} newTab>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {data.body}
    </>
  );
}
