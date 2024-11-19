import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useErrorPageClasses() {
  const theme = useTheme();

  const root = css({ background: theme.color.muted });

  return { root };
}
