import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useLinkClasses() {
  const theme = useTheme();

  const root = css({
    textDecoration: "none",
    transition: "ease all 0.5s",
  });

  return { root };
}
