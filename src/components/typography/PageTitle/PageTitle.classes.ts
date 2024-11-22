import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { marginMixin } from "@styles/mixins";

export function usePageTitleClasses() {
  const theme = useTheme();

  const root = css({
    fontFamily: theme.font.header.family,
    fontWeight: theme.font.header.weight.semibold,
    fontSize: theme.font.header.size.xlarge,
    color: theme.color.primary,
    ...marginMixin({ bottom: 16 }),
    "& > small": {
      display: "block",
      fontFamily: theme.font.standard.family,
      fontSize: theme.font.standard.size.large,
      fontWeight: theme.font.standard.weight.light,
    },
  });

  return { root };
}
