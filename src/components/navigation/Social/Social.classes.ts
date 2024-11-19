import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useSocialClasses() {
  const theme = useTheme();

  const root = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "flex-end",
    gap: 8,
  });

  const link = css({
    color: theme.color.secondary,
  });

  return { root, link };
}
