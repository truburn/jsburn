import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { marginMixin, mobileStyles, paddingMixin } from "@styles/mixins";

export function useHomeClasses() {
  const theme = useTheme();

  const root = css({
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    gap: 16,
    ...mobileStyles({
      flexDirection: "column",
    }),
  });

  const logo = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      height: "calc(100vh - 400px)",
      ...mobileStyles({
        height: "auto",
        width: 300,
      }),
    },
  });

  const intro = css({
    maxWidth: 600,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    "& p": {
      textAlign: "center",
      fontSize: theme.font.standard.size.medium,
    },
  });

  const name = css({
    "&&": {
      fontFamily: theme.font.header.family,
      fontSize: theme.font.header.size.jumbo + 6,
      fontWeight: theme.font.header.weight.bold,
      color: theme.color.primary,
      "& small": {
        fontSize: theme.font.header.size.jumbo,
        fontWeight: theme.font.header.weight.normal,
        color: theme.color.secondary,
      },
    },
  });

  const headline = css({
    "&&": {
      fontSize: theme.font.standard.size.large,
      color: theme.color.primary,
    },
  });

  const tagline = css({
    "&&": {
      fontFamily: theme.font.header.family,
      fontSize: theme.font.header.size.large,
      fontWeight: theme.font.header.weight.semibold,
      color: theme.color.secondary,
    },
  });

  const buttons = css({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "space-around",
  });

  const cta = css({
    minWidth: 200,
    width: "30%",
    ...marginMixin(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: theme.font.standard.size.small,
    "& p": {
      ...marginMixin(),
    },
  });

  const ctaTitle = css({
    fontFamily: theme.font.header.family,
    fontWeight: theme.font.header.weight.semibold,
    fontSize: theme.font.header.size.regular,
    ...paddingMixin({ bottom: "0.5em" }),
  });

  return { root, logo, intro, name, headline, tagline, buttons, cta, ctaTitle };
}
