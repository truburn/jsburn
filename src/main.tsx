import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@styles/theme";
import GlobalStyles from "@styles/GlobalStyles";
import routes from "@pages/routes";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("app-root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </ThemeProvider>
  </StrictMode>
);
