import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { borderMixin, paddingMixin } from "@styles/mixins";

export const useSearchBoxStyles = () => {
  const theme = useTheme();

  const root = css({
    ...borderMixin(theme.border),
    ...paddingMixin(16),
  });

  const label = css({});

  const input = css({});

  const button = css({});

  return { root, label, input, button };
};
