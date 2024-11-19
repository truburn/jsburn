import { css } from "@emotion/css";
import { paddingMixin } from "@styles/mixins";

export function useAppClasses() {
  const content = css({
    maxWidth: 1024,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignContent: "stretch",
    alignSelf: "center",
    ...paddingMixin(16),
  });

  return { content };
}
