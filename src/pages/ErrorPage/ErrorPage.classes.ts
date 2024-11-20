import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { marginMixin } from "@styles/mixins";

export function useErrorPageClasses() {
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

  const icon = css({
    color: theme.color.primary,
    height: 200,
    ...marginMixin({ vertical: 32 }),
  });

  const text = css({
    color: theme.color.secondary,
    fontWeight: theme.font.standard.weight.semibold,
    fontSize: theme.font.standard.size.large,
    maxWidth: 600,
  });

  return { root, icon, text };
}
