import { css } from "@emotion/css";
import { marginMixin, paddingMixin } from "@styles/mixins";

export function useLegalClasses() {
  const list = css({
    ...marginMixin(),
    ...paddingMixin({ left: "2ch" }),
  });

  const listItem = css({
    ...marginMixin(),
  });

  const title = css({
    ...marginMixin({ top: 8, bottom: 4 }),
  });

  return { list, listItem, title };
}
