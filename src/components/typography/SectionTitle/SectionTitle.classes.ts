import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useSectionTitleClasses() {
  const theme = useTheme();

  const root = css({
    fontFamily: theme.font.header.family,
    fontWeight: theme.font.header.weight.semibold,
    color: theme.color.secondary,
    "&:small": {
      display: "block",
      fontFamily: theme.font.standard.family,
      fontWeight: theme.font.standard.weight.light,
    },
    "&:first-child": {
      marginTop: 0,
    },
  });

  return { root };
}
