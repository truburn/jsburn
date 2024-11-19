import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { marginMixin, paddingMixin } from "@styles/mixins";

export function useCardClasses() {
  const theme = useTheme();

  const root = css({
    maxWidth: 250,
    maxHeight: 350,
    background: theme.color.muted,
    overflow: "hidden",
    ...paddingMixin(16),
    ...marginMixin(16),
    borderStyle: "solid",
    borderWidth: 4,
    borderColor: theme.color.primary,
    borderTopRightRadius: "100px 10px",
    borderBottomLeftRadius: "100px 10px",
    borderTopLeftRadius: "10px 100px",
    borderBottomRightRadius: "10px 100px",
    "&:nth-child(even)": {
      borderTopRightRadius: "10px 100px",
      borderBottomLeftRadius: "10px 100px",
      borderTopLeftRadius: "100px 10px",
      borderBottomRightRadius: "100px 10px",
    },
  });

  return { root };
}
