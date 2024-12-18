import { css } from "@emotion/css";
import { mobileStyles, paddingMixin } from "@styles/mixins";
import { useLocation } from "react-router-dom";

export function useAppClasses() {
  const location = useLocation();

  const content = css({
    flex: 1,
    display: "flex",
    flexDirection: location.pathname === "/" ? "row" : "column",
    alignItems: "center",
    ...(location.pathname !== "/" && {
      alignSelf: "center",
      alignItems: "stretch",
      maxWidth: 1024,
      justifyContent: "flex-start",
    }),
    ...paddingMixin(16),
    ...mobileStyles({
      flexDirection: "column",
    }),
  });

  return { content };
}
