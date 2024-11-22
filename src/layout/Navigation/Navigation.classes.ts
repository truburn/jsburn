import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { marginMixin, mobileStyles, paddingMixin } from "@styles/mixins";

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
    ...mobileStyles({
      ...paddingMixin({ horizontal: 2 }),
      justifyContent: "space-around",
    }),
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
    ...mobileStyles({
      ...marginMixin({ horizontal: 8 }),
      ...paddingMixin({ vertical: 8 }),
      textAlign: "center",
      fontSize: theme.font.standard.size.regular,
    }),
  });

  return { root, link };
}
