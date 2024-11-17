import { cx } from "@emotion/css";
import { useButtonStyles } from "@navigation/Button";
import { ColorVariant } from "@styles/types";
import { useExtractProps } from "@utils/hooks";
import { MouseEventHandler, ReactNode } from "react";

export interface ButtonStyleProps {
  /** The theme color to use for the button */
  color?: ColorVariant;
}

export interface ButtonProps {
  /**
   * The string to display inside the button. This is also used for labeling an
   * icon button as well as being the tooltip if `tooltip` property is not
   * defined.
   */
  label: string;
  /** The action for the button to take when clicked */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /**
   * A URL to go to. This will render the button as a link that looks like a
   * button. For accessibility purposes, the element will be rendered as a
   * `<a />` tag.
   */
  to?: string;
  /** Disable the button */
  disabled?: boolean;
  /**
   * The shape of the button to render. `square` will have slightly rounded
   * corners based on your border theme setting. `round` will look like a pill
   * button, or circle for icons. `sharp` will have no border radius.
   */
  shape?: "square" | "round" | "sharp";
  /**
   * The style of the button to render. `filled` will use the selected color as
   * the background. `outline` will use the selected color for the text and
   * border. `text` will have minimal padding with not background or border.
   * The selected color will be used for the text. `custom` will remove all
   * formatting and render a basic button. Use
   * `overrideClasses` apply custom styling.
   */
  style?: "filled" | "outline" | "text" | "custom";
  /**
   * The button will only display an icon. The `label` property will be used
   * for accessibility and the tooltip text, if `tooltip` is not defined. The
   * `icon` property is required to render as an icon button. Otherwise the
   * label will be displayed. The button will be rendered with a 1:1 aspect
   * ratio.
   */
  iconButton?: boolean;
  /**
   * An icon to display inside the button. If `iconButton` is `true`, the icon
   * is required. Otherwise the icon will be displayed before the label text.
   * To display an icon after the label text, use the `endIcon` property.
   */
  icon?: string;
  /**
   * Icon to display after the label text. If `iconButton` is `true`, this icon
   * will be ignored.
   */
  endIcon?: string;
  /**
   * Text to display in a hover tooltip. If tooltip is not defined, then
   * nothing will show on hover with the exception of icon buttons. If an icon
   * button does not have the `tooltip` property defined, the `label` property
   * will be used instead.
   */
  tooltip?: string;
  /**
   * If `children` is defined, then all other content items (`label`, `icon`,
   * `endIcon`) will be ignored and the `children` contents will be rendered
   * instead. `label` is still required and used for the `aria-label` property
   * on the button.
   */
  children?: ReactNode;
  /**
   * Unique identifier for the root element. If not provided, one will be
   * generated with the prefix of `button`.
   */
  id?: string;
  /** Class names to override styles for specific elements in the component */
  overrideClasses?: {
    root?: string;
    disabled?: string;
    outline?: string;
    text?: string;
    filled?: string;
    square?: string;
    round?: string;
    icon?: string;
    btnLabel?: string;
    btnIcon?: string;
  };
}

/**
 * Button component
 */
export const Button = (_props: ButtonProps & ButtonStyleProps) => {
  const { id, overrideClasses, props, styleProps } = useExtractProps<
    ButtonProps,
    ButtonStyleProps
  >(_props, {
    prefix: "button",
    styles: ["color"],
  });
  const {
    onClick = (event) => console.log(`Button Clicked`, { id, event, _props }),
    to,
    disabled,
    label,
  } = props;
  const classes = useButtonStyles(styleProps);
  const rootClass = cx(classes.root, overrideClasses?.root, {
    [cx(classes.disabled, overrideClasses?.disabled)]: disabled,
  });

  if (to) {
    return (
      <a id={id} className={rootClass} href={to}>
        {label}
      </a>
    );
  }

  return (
    <button id={id} className={rootClass} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
