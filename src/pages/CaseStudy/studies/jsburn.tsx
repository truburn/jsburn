import { CaseStudyItem } from "@pages/CaseStudy/CaseStudy";
import LogoImage from "@assets/logo/logo.svg";
import { SectionTitle } from "@typography/SectionTitle";
import Logo from "@assets/logo/logo.svg?react";
import { css } from "@emotion/css";
import { mobileStyles } from "@styles/mixins";

const logoSection = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  justifyContent: "space-between",
  gap: 32,
  flexWrap: "wrap",
  ...mobileStyles({
    flexDirection: "column"
  })
});

const logoText = css({
  flex: 1
});

const logo = css({
  maxWidth: 300,
  ...mobileStyles({
    maxWidth: "unset"
  })
});

export default {
  key: "jsburn",
  subtitle: "Crafting My Digital Portfolio",
  title: "jsburn.com",
  summary:
    "Explore the design journey and development process behind JSBurn.com—a React-based portfolio showcasing creativity and technical expertise. Click to see how it all came together!",
  image: LogoImage,
  body: (
    <>
      <SectionTitle title="Overview" />
      <p>
        Building my portfolio site was a crucial step in establishing my online
        presence as a frontend developer. I wanted a place where potential
        employers and clients could easily explore my work, learn about my
        skills, and see the personal side of my development journey. The goal
        was to create a website that would reflect my abilities, yet remain a
        flexible and dynamic space for future growth.
      </p>
      <SectionTitle title="Challenges" />
      <ul>
        <li>
          <strong>Personal Branding:</strong> It was important for the site to
          convey my personal brand as a developer. Balancing technical
          proficiency with creativity was essential, but I also wanted to inject
          a bit of personality into the design.
        </li>
        <li>
          <strong>Iterative Process:</strong> The portfolio needed to be
          functional and polished, but I also wanted to make sure that it could
          evolve. Rather than creating a perfect product from the start, I
          focused on getting the MVP out there so I could iterate and improve as
          I moved forward.
        </li>
        <li>
          <strong>User Experience:</strong> I wanted to make sure the site was
          intuitive and that visitors could navigate easily through my projects
          and skills, all while maintaining a clean and user-friendly design.
        </li>
      </ul>
      <SectionTitle title="My Role" />
      <p>
        As the sole developer and designer, I had full control over the creation
        of the site, from concept to deployment. I focused on:
      </p>
      <ul>
        <li>
          <strong>Designing a Flexible Layout:</strong> I crafted wireframes and
          mockups to define the user flow and layout, ensuring the site had a
          clean, minimalist feel while still showcasing my projects.
        </li>
        <li>
          <strong>Building the Frontend:</strong> Using React, I built a
          responsive, fast-loading site with reusable components. Emotion was
          used for styling to maintain consistency across the site.
        </li>
        <li>
          <strong>Backend Integration:</strong> The site uses GitHub Actions for
          automated unit testing and Storybook for visual testing and
          documentation, ensuring that I can keep the codebase organized and
          transparent.
        </li>
        <li>
          <strong>Deployment:</strong> To ensure smooth updates and scalability,
          I deployed the site using AWS Amplify, which allows for continuous
          deployment and scalability.
        </li>
      </ul>
      <SectionTitle title="Logo Design: Creating My Visual Identity" />
      <div className={logoSection}>
        <Logo className={logo} />
        <div className={logoText}>
          <p>
            A key component of my portfolio is the logo, which I designed to
            reflect my personal connection with both coding and my identity. The
            logo features a dragon, symbolizing strength, creativity, and
            transformation. The scales of the dragon are cleverly represented by
            code symbols , tying the dragon directly to my work as a developer.
          </p>
          <p>
            The dragon itself is shaped like an "S", which stands for JavaScript
            and my initials, Jenny Seburn. The dragon's form entwines with the
            letter "J", reinforcing the idea that I, as a developer, and the
            code I work with are inseparable—like a "code dragon."
          </p>
          <p>
            The fire within the design is not just a visual element; it also
            symbolizes my passion for development. The vibrant red and fire
            color scheme emphasizes this passion and the energy I bring to my
            work.
          </p>
          <p>
            While the design incorporates multiple elements, from the scales to
            the fire, it maintains a balance of being professional yet full of
            personality. The logo represents both my technical expertise and my
            creative side, giving visitors a glimpse into who I am as a
            developer.
          </p>
        </div>
      </div>
      <SectionTitle title="Solution" />
      <p>
        The MVP of my portfolio is designed with simplicity in mind. It serves
        as a starting point, and I plan to continually refine it based on user
        feedback and evolving design preferences. Here's what I implemented:
      </p>
      <ul>
        <li>
          <strong>Technical Showcase:</strong> The site highlights my projects
          with links to their GitHub repositories and live demos. I used
          Storybook to document my React components and ensure consistency
          across the UI.
        </li>
        <li>
          <strong>Logo and Personal Branding:</strong> The logo, designed with
          my personal brand in mind, anchors the site's aesthetic. The tagline,
          "Breathing Life Into Interfaces, One Pixel at a Time," encapsulates my
          approach to thoughtful design and development.
        </li>
        <li>
          <strong>Dynamic Features:</strong> I added a playful AI assistant that
          guides users through the portfolio and answers questions about my
          work, adding an interactive and whimsical element to the site.
        </li>
      </ul>
      <SectionTitle title="Outcome" />
      <p>
        The portfolio is live and serves as a starting point for future
        development. It highlights my work and showcases my skills while
        allowing me to continue iterating. It is a flexible platform where I can
        grow my personal brand, add new projects, and adjust the design to
        better reflect my style as a developer.
      </p>
      <p>
        While the current iteration of the portfolio isn't perfect, it
        successfully demonstrates my abilities and showcases my commitment to
        continuous improvement. As I grow and evolve as a developer, my
        portfolio will evolve with me.
      </p>
      <SectionTitle title="Future Iterations" />
      <p>
        I plan to iterate on the site by refining the design, adding new
        features, and incorporating additional projects. With the MVP in place,
        I'm free to experiment and continue enhancing the user experience,
        integrating new technologies, and improving the overall aesthetics of
        the site.
      </p>
      <SectionTitle title="Future Iteration: AI Assistant" depth="3" />
      <p>
        I plan to introduce an AI Assistant to guide visitors through my
        portfolio. This interactive assistant will answer questions, offer
        insights about my work, and provide a whimsical, engaging way to explore
        my projects. Think of it as a personalized tour guide with a bit of
        personality—helping visitors navigate my work while adding a fun and
        dynamic element to the experience.
      </p>
      <SectionTitle title="Technology Stack" />
      <ul>
        <li>
          <strong>Frontend:</strong> React with Typescript, Emotion (for
          styling), Storybook (for component documentation)
        </li>
        <li>
          <strong>Deployment:</strong> AWS Amplify (for hosting and CI/CD)
        </li>
        <li>
          <strong>Testing:</strong> Vitest, React Testing Library, GitHub
          Actions (for unit tests and automated deployment)
        </li>
        <li>
          <strong>Logo Design:</strong> Created using Adobe Illustrator
        </li>
        <li>
          <strong>Build Tooling:</strong> Vite for fast and optimized builds
        </li>
      </ul>
    </>
  ),
  links: [
    {
      label: "GitHub Repository",
      to: "https://github.com/truburn/jsburn"
    }
  ]
} as CaseStudyItem;
