import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useProjectsClasses() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
