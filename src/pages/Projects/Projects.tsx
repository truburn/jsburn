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
      <p>
        Welcome to My Quest Log, a chronicle of creative journeys where each
        project tells its own story. From tackling challenging coding conundrums
        to forging innovative solutions, these quests have shaped my skills and
        fueled my passion for development.
      </p>

      <p>
        Here, you'll discover the milestones, tools, and triumphs that define my
        adventures in web design, software development, and beyond. Whether it's
        crafting seamless user experiences, experimenting with cutting-edge
        technologies, or building tools to empower others, every entry reflects
        my commitment to excellence.
      </p>

      <p>
        Prepare to explore the adventures that have brought my ideas to life—and
        perhaps be inspired to embark on a quest of your own.
      </p>
      {PROJECT_LIST.map((page) => (
        <Link
          className={classes.project}
          key={page.key}
          to={`/projects/${page.key}`}
        >
          <div className={classes.image}>
            <img src={page.image} alt={page.title} />
          </div>
          <div className={classes.info}>
            <SectionTitle
              className={classes.title}
              title={page.title}
              subtitle={page.subtitle}
            />
            <p className={classes.summary}>{page.summary}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
