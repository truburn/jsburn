import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useHeaderClasses() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
