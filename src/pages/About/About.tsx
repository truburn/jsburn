import { useAboutClasses } from "@pages/About";
import { PageTitle } from "@typography/PageTitle";
import headshot from "@assets/headshot.jpg";
import { Link } from "@navigation/Link";
import { SocialLinks } from "@navigation/Social";

/**
 * About Classes
 */
export function About() {
  const classes = useAboutClasses();

  return (
    <>
      <PageTitle title="Forging My Path" />
      <div className={classes.root}>
        <img
          src={headshot}
          alt="Portrait of Jenny Seburn"
          className={classes.headshot}
        />
        <div>
          <p>
            Forging my path through the dynamic world of web development, I've
            spent over 20 years crafting innovative digital experiences. With a
            foundation in creativity from my Multimedia & Web Development
            degree, my journey began with a passion for graphic and web design,
            where I learned to blend aesthetics with functionality.
          </p>
          <p>
            Over the years, I've expanded my expertise into front-end
            development, mastering technologies like React, Javascript,
            Typescript, and more. Currently, I'm diving into the Salesforce
            ecosystem, advancing my skills through hands-on projects and
            Trailhead modules as I work toward earning my Salesforce Platform
            Developer I certification.
          </p>
          <p>
            My journey isn't just about code—it's about connection,
            collaboration, and the spark of bringing ideas to life. As a{" "}
            <Link to="https://bcert.me/sfmokyzqu" newTab>
              Certified Scrum Master® (CSM®)
            </Link>
            and{" "}
            <Link to="https://bcert.me/seywsupzb" newTab>
              Certified Scrum Product Owner® (CSPO®)
            </Link>
            , I thrive in Agile environments, leading teams to transform visions
            into reality while ensuring quality and innovation every step of the
            way.
          </p>
          <p>
            When I'm not breathing life into interfaces, you might find me
            experimenting with new frameworks, exploring storytelling in fantasy
            worlds, or delving into a good crochet project. Join me as I
            continue to forge my path, blending creativity, leadership, and
            technology to shape the future of the web.
          </p>
          <p>
            I'm always excited to collaborate on new projects and tackle
            creative challenges. <Link to="/contact">Reach out</Link>, and let's
            see what magic we can create! For a summarized version of my
            expertise and experience, feel free to{" "}
            <Link to="/JenniferSeburn_Resume.pdf" newTab>
              download my resume
            </Link>
            .
          </p>
          <p>
            Want to dive deeper into my world? Discover more on{" "}
            <Link to={SocialLinks.LINKEDIN} newTab>
              LinkedIn
            </Link>
            , browse my code on{" "}
            <Link to={SocialLinks.GITHUB} newTab>
              GitHub
            </Link>
            , or explore my playground on{" "}
            <Link to={SocialLinks.CODEPEN} newTab>
              CodePen
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
