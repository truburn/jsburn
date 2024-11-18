import { ThemeProvider } from "@emotion/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ArgTypes, Description, Title } from "@storybook/blocks";
import type { Preview } from "@storybook/react";
import React from "react";
import { withRouter } from "storybook-addon-remix-react-router";
import GlobalStyles from "../src/styles/GlobalStyles";
import { theme } from "../src/styles/theme";
import { ImportStatement } from "./blocks/ImportStatement";
import { allModes } from "./modes";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    chromatic: {
      modes: {
        mobile1: allModes.mobile1,
        mobile2: allModes.mobile2,
        tablet: allModes.tablet
      }
    },
    docs: {
      page: () => (
        <>
          <Title />
          <ImportStatement />
          <Description />
          <h2>Props</h2>
          <ArgTypes />
        </>
      )
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "components",
          "form",
          "layout",
          "navigation",
          "typography",
          "Theme"
        ]
      }
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: { theme },
      defaultTheme: "theme",
      Provider: ThemeProvider,
      GlobalStyles
    }),
    withRouter
  ]
};

export default preview;
