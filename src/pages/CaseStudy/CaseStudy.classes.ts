import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useCaseStudyClasses() {
  const theme = useTheme();

  const root = css({ background: theme.color.muted });

  return { root };
}
