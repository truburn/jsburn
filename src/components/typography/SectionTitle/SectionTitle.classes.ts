import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useSectionTitleClasses() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
