import { Link } from "@navigation/Link";
import { useProjectsClasses } from "@pages/Projects";
import caseStudies from "@pages/CaseStudy/studies";
import { PageTitle } from "@typography/PageTitle";
import { SectionTitle } from "@typography/SectionTitle";

const PROJECT_LIST = Object.values(caseStudies);

/**
 * Projects
 */
export function Projects() {
  const classes = useProjectsClasses();

  return (
    <>
      <PageTitle title="My Quest Log" />
      {PROJECT_LIST.map((page) => (
        <Link
          className={classes.project}
          key={page.key}
          to={`/projects/${page.key}`}
        >
          <div className={classes.image}>Image</div>
          <div className={classes.info}>
            <SectionTitle className={classes.title} title={page.title} />
            <p className={classes.summary}>{page.summary}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
