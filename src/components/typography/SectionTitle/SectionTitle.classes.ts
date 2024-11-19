import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useSectionTitleClasses() {
  const theme = useTheme();

  const root = css({
    fontFamily: theme.font.header.family,
    fontWeight: theme.font.header.weight.semibold,
    color: theme.color.primary,
    small: {
      display: "block",
      fontFamily: theme.font.standard.family,
      fontWeight: theme.font.standard.weight.light,
      color: theme.color.fg,
    },
    "&:first-child": {
      marginTop: 0,
    },
    "h2&": {
      color: theme.color.secondary,
    },
    "h3&": {
      color: theme.color.primary,
    },
    "h4&": {
      color: theme.color.accent,
    },
  });

  return { root };
}
