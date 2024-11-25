import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { borderMixin, paddingMixin } from "@styles/mixins";

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
      width: { bottom: 1 },
      radius: 0,
    }),
    "&:last-of-type": {
      border: "none",
    },
    "&:hover": {
      background: theme.color.muted,
    },
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
