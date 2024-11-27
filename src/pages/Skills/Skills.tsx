import { useSkillsClasses } from "@pages/Skills";
import skillList from "@pages/Skills/skills.json";
import toolList from "@pages/Skills/tools.json";
import { PageTitle } from "@typography/PageTitle";
import { SectionTitle } from "@typography/SectionTitle";

interface ListItem {
  title: string;
  list: string[];
}

/**
 * Skills Page
 */
export function Skills() {
  const classes = useSkillsClasses();

  return (
    <>
      <PageTitle title="The Magic I Wield" />
      <p>
        Step into my workshop of wonders, where the magic of modern web
        development comes to life. Here, you'll find the blend of skills and
        tools that shape my approach to web development. From mastering the
        fundamentals to leveraging cutting-edge technologies, this is the
        foundation of the seamless, engaging experiences I bring to life.
      </p>
      <SectionTitle title="Skills" />
      <p>
        My core skills are the spells I’ve honed over years of practice and
        application. These are the strategic, technical, and creative abilities
        that drive my ability to solve complex problems, design intuitive
        interfaces, and deliver exceptional results.
      </p>
      <div className={classes.cardSet}>
        {skillList.map((item: ListItem, idx) => (
          <div key={idx} className={classes.card}>
            <SectionTitle depth="3" title={item.title} />
            <ul>
              {item.list.map((skill: string) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <SectionTitle title="Tools & Technology" />
      <p>
        Every craftsman needs their tools, and in the world of web development,
        technology is key. From powerful frameworks and libraries to
        indispensable development tools, these technologies form the backbone of
        my craft, allowing me to turn ideas into reality.
      </p>
      <div className={classes.cardSet}>
        {toolList.map((item: ListItem, idx) => (
          <div key={idx} className={classes.card}>
            <SectionTitle depth="3" title={item.title} />
            <ul>
              {item.list.map((tool: string) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
