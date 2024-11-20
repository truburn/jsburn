import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { marginMixin } from "@styles/mixins";

export function usePageNotFoundClasses() {
  const theme = useTheme();

  const root = css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > p": {
      textAlign: "center",
    },
  });

  const headline = css({
    fontWeight: theme.font.standard.weight.bold,
    fontSize: theme.font.standard.size.xlarge,
  });

  const icon = css({
    color: theme.color.primary,
    width: 300,
    height: "auto",
    ...marginMixin({ vertical: 32 }),
  });

  const text = css({
    color: theme.color.secondary,
    fontWeight: theme.font.standard.weight.semibold,
    fontSize: theme.font.standard.size.large,
    maxWidth: 600,
  });

  return { root, headline, icon, text };
}
