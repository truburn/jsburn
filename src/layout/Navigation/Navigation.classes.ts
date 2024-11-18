import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { marginMixin, paddingMixin } from "@styles/mixins";

export function useNavigationClasses() {
  const theme = useTheme();

  const root = css({
    background: theme.color.fg,
    color: theme.color.bg,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    ...paddingMixin({ horizontal: 16 }),
  });

  const link = css({
    color: theme.color.muted,
    fontSize: theme.font.standard.size.large,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...paddingMixin({ horizontal: 16, vertical: 6 }),
    ...marginMixin({ horizontal: 16 }),
    lineHeight: 1,
    "&:hover, &.active": {
      color: theme.color.bg,
    },
  });

  return { root, link };
}
