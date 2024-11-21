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
 * Text Area
 */
export function TextArea(props: TextInputProps) {
  const generatedID = generateUUID({ prefix: "text-input", lengths: [8] });
  const { id = generatedID, name = snakeCase(props.label) } = props;
  const classes = useFormClasses();

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    const {
      target: { value }
    } = evt;
    props.onChange?.(name, value);
  };

  return (
    <div
      className={cx(
        classes.inputGroup,
        classes.textareaGroup,
        props.className,
        { required: props.required, disabled: props.disabled }
      )}
    >
      <label htmlFor={id} className={cx(classes.label, props.labelClass)}>
        {props.label}
      </label>
      <textarea
        id={id}
        disabled={props.disabled}
        className={cx(classes.input, classes.textarea, props.inputClass)}
        name={name}
        onChange={handleChange}
        placeholder={props.placeholder}
      >
        {props.value}
      </textarea>
    </div>
  );
}
