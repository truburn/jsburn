import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { marginMixin, paddingMixin } from "@styles/mixins";

export function useHeaderClasses() {
  const theme = useTheme();

  const root = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    ...paddingMixin({ vertical: 5, horizontal: 20 }),
    "& p": {
      ...marginMixin(),
      lineHeight: 1,
    },
  });

  const headerLeft = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    gap: 10,
  });

  const headerRight = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
  });

  const logo = css({
    height: "100%",
  });

  const headerText = css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 8,
  });

  const title = css({
    fontFamily: theme.font.header.family,
    fontSize: theme.font.header.size.xlarge,
    fontWeight: theme.font.header.weight.bold,
    color: theme.color.primary,
    "& > small": {
      color: theme.color.secondary,
      fontSize: theme.font.header.size.large,
      fontWeight: theme.font.header.weight.normal,
    },
  });

  const tagLine = css({
    fontFamily: theme.font.header.family,
    fontSize: theme.font.header.size.regular,
    color: theme.color.fg,
    whiteSpace: "nowrap",
  });

  const social = css({});

  const socialIcon = css({});

  const contactButton = css({
    ...paddingMixin({ vertical: 2, horizontal: 8 }),
    ...marginMixin({ top: 8 }),
  });

  return {
    root,
    headerLeft,
    headerRight,
    logo,
    headerText,
    title,
    tagLine,
    social,
    socialIcon,
    contactButton,
  };
}
