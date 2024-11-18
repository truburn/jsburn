import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useLinkClasses() {
  const theme = useTheme();

  const root = css({
    color: theme.color.accent,
    textDecoration: "none",
    transition: "ease all 0.5s",
    "&:hover": {
      color: theme.color.primary,
    },
  });

  return { root };
}
