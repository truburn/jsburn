import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { marginMixin, paddingMixin } from "@styles/mixins";

export function useContactClasses() {
  const theme = useTheme();

  const root = css({
    minWidth: 650,
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  });

  const emailStatus = css({
    ...marginMixin(16),
    ...paddingMixin({ vertical: 8, horizontal: 16 }),
    color: theme.color.bg,
    fontWeight: theme.font.standard.weight.semibold,
    textAlign: "center",
    "&.error": {
      background: theme.color.error,
    },
    "&.success": {
      background: theme.color.success,
    },
  });

  const buttons = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "flex-end",
    gap: 16,
    ...marginMixin({ vertical: 16 }),
  });

  const note = css({
    ...marginMixin({ vertical: 16 }),
    fontSize: theme.font.standard.size.small,
    fontStyle: "italic",
    textAlign: "center",
  });

  return { root, emailStatus, buttons, note };
}
