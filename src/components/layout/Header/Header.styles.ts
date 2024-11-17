import { css } from "@emotion/css";
import { borderMixin } from "@styles/mixins";
import { useTheme } from "@emotion/react";

export const useHeaderStyles = () => {
  const theme = useTheme();

  const root = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    ...borderMixin({
      color: theme.border.color,
      width: { bottom: 1 },
    }),
  });

  const section = css({
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    "&.start": {
      justifyContent: "start",
    },
    "&.mid": {
      justifyContent: "center",
    },
    "&.end": {
      justifyContent: "end",
    },
  });

  const heading = css({
    margin: 0,
    fontSize: "1rem",
    padding: 0,
  });

  const button = css({});

  return { root, section, heading, button };
};
