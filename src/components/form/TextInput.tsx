import { cx } from "@emotion/css";
import { useFormClasses } from "@form/useFormClasses";
import { generateUUID } from "@utils/generate";
import snakeCase from "lodash/snakeCase";
import { ChangeEventHandler } from "react";

interface TextInputProps {
  label: string;
  value?: string;
  onChange?: (field: string, newValue?: string) => void;
  error?: string;
  disabled?: boolean;
  type?: "text" | "email";
  id?: string;
  className?: string;
  inputClass?: string;
  labelClass?: string;
  helperText?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
}

/**
 * Text Input
 */
export function TextInput(props: TextInputProps) {
  const generatedID = generateUUID({ prefix: "text-input", lengths: [8] });
  const {
    type = "text",
    id = generatedID,
    name = snakeCase(props.label)
  } = props;
  const classes = useFormClasses();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const {
      target: { value }
    } = evt;
    props.onChange?.(name, value);
  };

  return (
    <div
      className={cx(classes.inputGroup, props.className, {
        required: props.required,
        disabled: props.disabled
      })}
    >
      <label htmlFor={id} className={cx(classes.label, props.labelClass)}>
        {props.label}
      </label>
      <input
        id={id}
        type={type}
        value={props.value}
        disabled={props.disabled}
        className={cx(classes.input, props.inputClass)}
        name={name}
        onChange={handleChange}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  );
}
