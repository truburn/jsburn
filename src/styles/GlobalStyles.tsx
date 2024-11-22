import { Global, css, useTheme } from "@emotion/react";
import { marginMixin } from "@styles/mixins";

export default function GlobalStyles() {
  const theme = useTheme();
  return (
    <Global
      styles={css({
        "html, body": {
          margin: 0,
          padding: 0,
          width: "100vw",
          height: "100vh",
          fontFamily: theme.font.standard.family,
          fontSize: theme.font.standard.size.regular,
          background: theme.color.bg,
          color: theme.color.fg
        },
        "#app-root": {
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "space-between"
        },
        p: {
          ...marginMixin({ bottom: 16 })
        }
      })}
    />
  );
}
