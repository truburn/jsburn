import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { marginMixin, paddingMixin } from "@styles/mixins";

export function useCertificationsClasses() {
  const theme = useTheme();

  const certs = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-evenly",
  });

  const card = css({
    maxWidth: "unset",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 8,
    "& > img": {
      ...marginMixin({ bottom: 4, horizontal: 6 }),
    },
    "& > p": {
      ...marginMixin(),
      "& > strong": {
        display: "inline-block",
        width: "8ch",
        textAlign: "right",
        ...marginMixin({ right: "1ch" }),
      },
    },
  });

  const certCard = css({
    flex: 1,
    "& > img": {
      maxWidth: "75%",
      alignSelf: "center",
    },
  });

  const certTitle = css({
    textAlign: "center",
    fontWeight: theme.font.standard.weight.semibold,
  });

  const edCard = css({
    maxWidth: "unset",
    width: 350,
  });

  const pending = css({
    position: "relative",
    alignSelf: "center",
    width: "75%",
    "& > img": {
      opacity: 0.35,
      width: "100%",
    },
    "&:after": {
      content: `"Pending"`,
      position: "absolute",
      width: "calc(100% + 20px)",
      bottom: "calc(50% - 10px)",
      right: -10,
      transform: "rotate(-35deg)",
      background: theme.color.primary,
      color: theme.color.bg,
      textAlign: "center",
      fontWeight: theme.font.standard.weight.bold,
      textTransform: "uppercase",
      fontSize: theme.font.standard.size.large,
      ...paddingMixin({ vertical: 4, horizontal: 8 }),
    },
  });

  return { certs, card, certCard, certTitle, edCard, pending };
}
