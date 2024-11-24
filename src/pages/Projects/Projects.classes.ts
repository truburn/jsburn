import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useProjectsClasses() {
  const theme = useTheme();

  const project = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    color: theme.color.fg,
    "&:nth-child(even)": {
      flexDirection: "row-reverse",
    },
  });

  const image = css({});

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
