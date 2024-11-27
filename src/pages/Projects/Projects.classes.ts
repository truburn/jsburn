import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { borderMixin, mobileStyles, paddingMixin } from "@styles/mixins";

export function useProjectsClasses() {
  const theme = useTheme();

  const project = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    alignSelf: "center",
    justifyContent: "space-between",
    gap: 32,
    color: theme.color.fg,
    ...paddingMixin({ vertical: 16, horizontal: 8 }),
    ...borderMixin({
      ...theme.border,
      width: { top: 1 },
      radius: 0,
    }),
    "&:hover": {
      background: theme.color.muted,
    },
    ...mobileStyles({
      flexDirection: "column",
      alignItems: "center",
    }),
  });

  const image = css({
    width: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      maxWidth: "100%",
    },
  });

  const info = css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
  });

  const title = css({});

  const summary = css({});

  return { project, image, info, title, summary };
}
