import { CaseStudyItem } from "@pages/CaseStudy/CaseStudy";
import elemancer from "@assets/elemancer.svg";
import { SectionTitle } from "@typography/SectionTitle";

export default {
  key: "elemancer",
  title: "Elemancer",
  subtitle: "Crafting a Versatile Foundation for React Development",
  summary:
    "Discover Elemancer, a versatile React boilerplate designed to jumpstart project development with a robust component library, built-in testing, and seamless theme customization. Learn more about its features and vision!",
  image: elemancer,
  body: (
    <>
      <SectionTitle title="Objective" />
      <p>
        Elemancer is a boilerplate React application designed to streamline
        project development. By incorporating a robust component library,
        integrated tools, and flexible customization options, it offers a
        seamless starting point for developers aiming to build high-quality
        applications efficiently. Released under an MIT license, it is available
        for anyone to use and adapt.
      </p>

      <SectionTitle title="The Vision" />
      <p>
        Elemancer embodies the idea of a workshop of components—a harmonious
        blend of reusable tools and creative elements. The name reflects the
        "elemental magic" of crafting a strong foundation for building React
        applications.
      </p>

      <SectionTitle title="Key Features" />
      <ul>
        <li>
          <strong>Boilerplate Setup:</strong> A fully-configured React
          application, complete with TypeScript integration, providing a
          reliable base for new projects.
        </li>

        <li>
          <strong>Component Library:</strong> A curated selection of reusable,
          customizable React components that prioritize accessibility and
          responsiveness.
        </li>

        <li>
          <strong>Storybook Integration:</strong> Built-in Storybook support
          enables visual documentation and testing of components, facilitating
          clear design communication and streamlined development.
        </li>

        <li>
          <strong>Robust Testing Frameworks:</strong> Incorporates Vitest and
          React Testing Library to ensure high code quality and reliability.
        </li>

        <li>
          <strong>Theme Customization:</strong> Designed with flexibility in
          mind, Elemancer allows developers to easily modify themes to align
          with branding or project-specific requirements.
        </li>
      </ul>
      <SectionTitle title="Tech Stack" />
      <ul>
        <li>
          <strong>Frontend Framework:</strong> React with Typescript
        </li>
        <li>
          <strong>Styling:</strong> Emotion for dynamic and maintainable styles
        </li>
        <li>
          <strong>Component Documentation:</strong> Storybook
        </li>
        <li>
          <strong>Testing:</strong> Vitest, React Testing Library, GitHub
          Actions (for unit tests and automated deployment)
        </li>
        <li>
          <strong>Build Tooling:</strong> Vite for fast and optimized builds
        </li>
      </ul>
      <SectionTitle title="Current Status" />
      <p>
        Elemancer is actively being developed and refined. With its core
        features in place, ongoing work focuses on expanding the component
        library and enhancing customization capabilities.
      </p>

      <SectionTitle title="Takeaway" />
      <p>
        Elemancer is a thoughtfully crafted boilerplate that empowers developers
        to focus on building innovative features rather than setup. Its
        integrated tools and reusable components make it an invaluable resource
        for accelerating project development.
      </p>
    </>
  ),
  links: [
    {
      to: "https://github.com/truburn/elemancer",
      label: "GitHub Repository"
    },
    {
      to: "https://truburn.github.io/elemancer",
      label: "Storybook"
    }
  ]
} as CaseStudyItem;
