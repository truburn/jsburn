import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { borderMixin, paddingMixin } from "@styles/mixins";

export function useFormClasses() {
  const theme = useTheme();

  const label = css({
    textAlign: "right",
    fontWeight: theme.font.standard.weight.light,
    width: "10ch",
    lineHeight: 1,
  });

  const input = css({
    flex: 1,
    background: "white",
    ...borderMixin(theme.border),
    fontFamily: theme.font.standard.family,
    fontSize: theme.font.standard.size.regular,
    ...paddingMixin({ vertical: "0.25em", horizontal: "0.5em" }),
    "&:focus": {
      outlineColor: theme.color.secondary,
      ...borderMixin({
        ...theme.border,
        color: theme.color.secondary,
      }),
    },
  });

  const helperText = css({});

  const error = css({});

  const inputGroup = css({
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    ...paddingMixin({ vertical: 16 }),
    [`&.required .${label}`]: {
      fontWeight: theme.font.standard.weight.bold,
      "&:after": {
        content: `"*"`,
        color: theme.color.error,
        fontWeight: theme.font.standard.weight.normal,
      },
    },
  });

  const textareaGroup = css({
    alignItems: "flex-start",
  });

  const textarea = css({
    minHeight: 150,
  });

  return {
    label,
    input,
    helperText,
    error,
    inputGroup,
    textareaGroup,
    textarea,
  };
}
