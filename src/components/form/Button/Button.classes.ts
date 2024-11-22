import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { borderMixin, paddingMixin } from "@styles/mixins";

export function useButtonClasses() {
  const theme = useTheme();

  const root = css({
    ...borderMixin({ width: 2 }),
    borderTopLeftRadius: "110px 15px",
    borderTopRightRadius: "15px 110px",
    borderBottomLeftRadius: "15px 110px",
    borderBottomRightRadius: "110px 15px",
    ...paddingMixin({ vertical: 8, horizontal: 16 }),
    fontFamily: theme.font.standard.family,
    fontSize: theme.font.standard.size.regular,
    cursor: "pointer",
    transition: "ease all 0.5s",
    textDecoration: "none",
    "&.filled": {
      background: theme.color.secondary,
      color: theme.color.bg,
      borderColor: theme.color.secondary,
      "&:hover": {
        background: theme.color.primary,
        borderColor: theme.color.primary,
      },
    },
    "&.outlined": {
      background: theme.color.bg,
      color: theme.color.fg,
      borderColor: "currentcolor",
      "&:hover": {
        background: theme.color.muted,
      },
    },
    "&.disabled, &:disabled": {
      opacity: 0.25,
      cursor: "not-allowed",
      pointerEvents: "none",
    },
  });

  return { root };
}
