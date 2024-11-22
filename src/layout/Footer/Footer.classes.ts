import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { marginMixin, mobileStyles, paddingMixin } from "@styles/mixins";

export function useFooterClasses() {
  const theme = useTheme();

  const root = css({
    background: theme.color.muted,
    color: theme.color.secondary,
    fontSize: theme.font.standard.size.medium,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 16,
    ...paddingMixin(16),
    "& > div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      ...marginMixin(),
      "&:first-of-type": {
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 4,
        ...mobileStyles({
          alignItems: "center",
        }),
      },
      "&:last-of-type": {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 16,
        ...mobileStyles({
          flexDirection: "column",
          alignItems: "flex-start",
        }),
      },
      ...mobileStyles({
        flexDirection: "column",
        alignItems: "flex-start",
      }),
    },
    ...mobileStyles({
      flexDirection: "column",
      alignItems: "flex-start",
    }),
  });

  const nav = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    ...mobileStyles({
      flexDirection: "column",
      alignItems: "flex-start",
    }),
  });

  const link = css({
    color: theme.color.secondary,
  });

  return { root, nav, link };
}
