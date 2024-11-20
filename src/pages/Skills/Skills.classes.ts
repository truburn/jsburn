import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { marginMixin, paddingMixin } from "@styles/mixins";

export function useSkillsClasses() {
  const theme = useTheme();

  const cardSet = css({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "space-evenly",
    gap: 8,
  });

  const card = css({
    ...paddingMixin(),
    ...marginMixin({ vertical: 8 }),
    maxWidth: "unset",
    width: "40%",
  });

  const cardTitle = css({
    fontFamily: theme.font.header.family,
    textAlign: "center",
    background: theme.color.primary,
    color: theme.color.bg,
    ...marginMixin(),
    ...paddingMixin({ vertical: 4, horizontal: 8 }),
  });

  const cardList = css({
    ...marginMixin(8),
    ...paddingMixin(),
    listStyle: "none",
    textAlign: "center",
    "& > li": {
      display: "inline",
      "&:after": {
        content: `", "`,
      },
      "&:last-of-type": {
        "&:after": {
          content: "none",
        },
      },
    },
  });

  return { cardSet, card, cardTitle, cardList };
}
