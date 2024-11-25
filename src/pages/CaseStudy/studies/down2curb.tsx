import { CaseStudyItem } from "@pages/CaseStudy/CaseStudy";
import doubleT from "@assets/doubleT.svg";
import { SectionTitle } from "@typography/SectionTitle";
import flyer1 from "@assets/DoubleT_Flyer_1.png";
import flyer2 from "@assets/DoubleT_Flyer_2.png";
import { css } from "@emotion/css";
import { paddingMixin } from "@styles/mixins";
import { Link } from "@navigation/Link";

const flyers = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  ...paddingMixin({ vertical: 16 }),
  flexWrap: "wrap"
});

const flyer = css({
  height: 250
});

export default {
  key: "down2curb",
  title: "Double T's Curb Appeal",
  subtitle: "A Strong Foundation for Local Business Growth",
  summary:
    "Discover how I designed a clean, modern brand identity and built an interactive website that showcases custom concrete landscaping borders. With future plans for enhanced customer and consultant tools, this project lays the groundwork for scalable growth. Learn more about the process and features here.",
  image: doubleT,
  body: (
    <>
      <SectionTitle title="Overview" />
      <p>
        Double T's Curb Appeal specializes in custom concrete landscaping
        borders, and their brand needed a cohesive visual identity and digital
        presence. From designing a modern, clean logo to crafting a responsive,
        feature-rich website, I helped establish a solid foundation for their
        marketing efforts. The website not only highlights the stone and color
        options but also includes an interactive preview component that lets
        users mix and match colors and textures. This ensures customers can
        envision the perfect fit for their landscapes.
      </p>
      <SectionTitle title="Sales Flyers" />
      <p>
        To complement the website, I designed sales flyers showcasing the
        available stone looks and color options. These visually engaging
        materials provide customers with a clear overview of their choices,
        supporting consultants during sales discussions.
      </p>
      <div className={flyers}>
        <Link to="/DoubleT_Flyer_1.pdf" newTab>
          <img className={flyer} src={flyer1} alt="Click to view the flyer" />
        </Link>
        <Link to="/DoubleT_Flyer_2.pdf" newTab>
          <img className={flyer} src={flyer2} alt="Click to view the flyer" />
        </Link>
      </div>
      <SectionTitle title="Challenges and Solutions" />
      <ul>
        <li>
          <strong>Brand Versatility:</strong> The logo was designed with
          expansion in mind, remaining neutral to accommodate future services.
        </li>
        <li>
          <strong>User Engagement:</strong> An interactive curb preview tool was
          developed, showcasing color and texture options in a dynamic and
          engaging way.
        </li>
        <li>
          <strong>Future Scalability:</strong> Plans for future iterations
          include a customer portal for accessing invoices and payments and
          functionality for consultants to generate quotes.
        </li>
      </ul>
      <SectionTitle title="Tech Stack" />
      <ul>
        <li>
          <strong>Frontend:</strong> React with Typescript, Emotion (for
          styling), Storybook (for component documentation)
        </li>
        <li>
          <strong>Deployment:</strong> AWS Amplify (for hosting and CI/CD)
        </li>
        <li>
          <strong>Design Tools:</strong> Adobe Creative Suite, Figma
        </li>
        <li>
          <strong>Build Tooling:</strong> Vite for fast and optimized builds
        </li>
      </ul>
    </>
  ),
  links: [
    {
      to: "https://www.down2curb.com/",
      label: "Double T's Curb Appeal Website"
    }
  ]
} as CaseStudyItem;
