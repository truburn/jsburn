import { cx } from "@emotion/css";
import { useButtonClasses } from "@form/Button";
import { generateUUID } from "@utils/generate";
import { MouseEventHandler, PropsWithChildren } from "react";

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  id?: string;
  className?: string;
  ariaLabel?: string;
  submit?: boolean;
  variant?: "filled" | "outlined";
}

/**
 * Button
 */
export function Button(props: PropsWithChildren<ButtonProps>) {
  const generatedID = generateUUID({
    prefix: "button",
    lengths: [6]
  });
  const { id = generatedID, variant = "filled" } = props;
  const classes = useButtonClasses();

  return (
    <button
      onClick={props.onClick}
      id={id}
      className={cx(classes.root, props.className, variant)}
      aria-label={props.ariaLabel}
      disabled={props.disabled}
      type={props.submit ? "submit" : "button"}
    >
      {props.children}
    </button>
  );
}
