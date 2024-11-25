import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { marginMixin, paddingMixin } from "@styles/mixins";

export function useCaseStudyClasses() {
  const theme = useTheme();

  const goBack = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    ...marginMixin({ bottom: 32 }),
    color: theme.color.secondary,
  });

  const links = css({
    ...marginMixin(),
    ...paddingMixin(),
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    gap: 16,
    fontSize: theme.font.standard.size.large,
    "&:before": {
      content: '"Links: "',
      fontWeight: theme.font.standard.weight.semibold,
    },
  });

  return { goBack, links };
}
