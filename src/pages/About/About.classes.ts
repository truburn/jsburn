import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { marginMixin, mobileStyles } from "@styles/mixins";

export function useAboutClasses() {
  const theme = useTheme();

  const root = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 16,
    ...mobileStyles({
      flexDirection: "column",
      alignItems: "center",
    }),
  });

  const headshot = css({
    width: 200,
    float: "left",
    borderColor: theme.color.bg,
    borderStyle: "solid",
    borderWidth: 4,
    borderTopRightRadius: "10px 100px",
    borderTopLeftRadius: "100px 10px",
    borderBottomRightRadius: "100px 10px",
    borderBottomLeftRadius: "10px 100px",
    outlineColor: theme.color.primary,
    outlineStyle: "solid",
    outlineWidth: 6,
    ...marginMixin({ top: 10, right: 10 }),
    ...mobileStyles({
      ...marginMixin({ bottom: 10 }),
    }),
  });

  return { root, headshot };
}
