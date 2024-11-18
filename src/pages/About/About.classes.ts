import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useAboutClasses() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
