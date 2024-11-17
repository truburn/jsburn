import { css } from "@emotion/css";
import { borderMixin } from "@styles/mixins";
import { useTheme } from "@emotion/react";
import { ButtonStyleProps } from "@navigation/Button/Button";

export const useButtonStyles = (props: ButtonStyleProps = {}) => {
  const theme = useTheme();

  const btnLabel = css({});

  const btnIcon = css({});

  const root = css({
    ...borderMixin(theme.border),
    padding: 16,
  });

  const disabled = css({});

  const outline = css({});

  const text = css({});

  const filled = css({});

  const square = css({});

  const round = css({});

  const icon = css({});

  return {
    root,
    disabled,
    outline,
    text,
    filled,
    square,
    round,
    icon,
    btnLabel,
    btnIcon,
  };
};
