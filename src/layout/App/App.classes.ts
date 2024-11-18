import { css } from "@emotion/css";

export function useAppClasses() {
  const content = css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignContent: "stretch",
  });

  return { content };
}
