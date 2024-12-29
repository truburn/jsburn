import { useAboutClasses } from "@pages/About";
import { PageTitle } from "@typography/PageTitle";
import headshot from "@assets/headshot.jpg";
import { Link } from "@navigation/Link";
import { SocialLinks } from "@navigation/Social";
import { SectionTitle } from "@typography/SectionTitle";

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
            Typescript, and more.
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
          <SectionTitle title="Beyond the Code" subtitle="My Hobbies" />
          <p>
            Life isn't all about keyboards and algorithms—sometimes, the best
            inspiration comes from unexpected places. Crochet, cooking, and
            baking not only bring joy and relaxation but also mirror many of the
            skills I use in software development. These pursuits sharpen my
            creativity, adaptability, and focus—essential qualities for any
            developer. They remind me that, whether it's crafting a scarf, a
            meal, or an application, the blend of structure and imagination
            leads to the best results.
          </p>
          <SectionTitle
            depth="3"
            title="Crochet"
            subtitle="Weaving Creativity and Precision"
          />
          <p>
            Crochet combines precision with creativity, making it much like
            coding. When a well-drawn diagram accompanies a pattern, its
            universal symbols transcend language barriers, enabling anyone—no
            matter their location or native tongue—to bring the design to life.
            This parallels the universality of good code, where clear
            documentation ensures collaboration across global teams.
          </p>
          <p>
            Mastering the basics of crochet unlocks boundless possibilities.
            Once the foundational stitches are second nature, it becomes easier
            to create custom designs without relying on a pattern. Similarly,
            strong technical foundations empower developers to build creative,
            tailored solutions without always needing step-by-step guidance.
            Crochet fosters patience, problem-solving, and the joy of building
            something from nothing—qualities that translate seamlessly to
            software development.
          </p>
          <SectionTitle
            depth="3"
            title="Cooking"
            subtitle="Experimentation and Adaptability"
          />
          <p>
            Cooking is a dance of flavors and creativity, thriving on
            experimentation and adaptability. As dishes are prepared, the cook
            continually tastes, adjusts, and refines the ingredients. Perhaps a
            sauce needs a touch of acidity, or a soup benefits from a dash of
            spice—these real-time decisions embody the iterative nature of
            problem-solving in development.
          </p>
          <p>
            Like coding, cooking involves balancing structure and flexibility.
            Recipes provide guidelines, but the true art lies in knowing when to
            follow the rules and when to break them. This mirrors the creative
            ingenuity developers use when fine-tuning solutions, exploring new
            technologies, and adapting to unforeseen challenges.
          </p>
          <SectionTitle
            depth="3"
            title="Baking"
            subtitle="Process and Precision"
          />
          <p>
            Unlike cooking's flexibility, baking is a science where precision
            reigns supreme. Exact measurements of ingredients, the right
            temperature, and adherence to specific techniques are vital to
            achieving the desired result. A teaspoon too much of one ingredient,
            or an oven that's slightly too hot, can throw off an entire
            recipe—just as a single typo can break a program.
          </p>
          <p>
            The precision required in baking reinforces the importance of
            discipline, attention to detail, and trust in the process.
            Developers rely on these same principles when adhering to coding
            standards, testing protocols, and deploying stable applications.
            While baking may seem rigid, the structure allows creativity to
            shine in presentation and flavor combinations, much like how
            developers innovate within the framework of reliable practices.
          </p>
        </div>
      </div>
    </>
  );
}
