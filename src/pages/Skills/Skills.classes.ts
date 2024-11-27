import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { marginMixin, mobileStyles, paddingMixin } from "@styles/mixins";

export function useSkillsClasses() {
  const theme = useTheme();

  const cardSet = css({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 8,
    ...paddingMixin({
      horizontal: 32,
      bottom: 48,
    }),
    ...mobileStyles({
      flexDirection: "column",
      ...paddingMixin({ bottom: 48 }),
    }),
  });

  const card = css({
    ...paddingMixin(),
    ...marginMixin({ vertical: 8 }),
    width: "40%",
    ...mobileStyles({
      width: "auto",
    }),
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
