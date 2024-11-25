import { css } from "@emotion/css";
import { marginMixin } from "@styles/mixins";

export function useLegalClasses() {
  const title = css({
    ...marginMixin({ top: 8, bottom: 4 }),
  });

  return { title };
}
