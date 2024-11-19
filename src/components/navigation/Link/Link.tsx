import { cx } from "@emotion/css";
import { useLinkClasses } from "@navigation/Link";
import { PropsWithChildren } from "react";

interface LinkProps {
  to: string;
  className?: string;
  isActive?: boolean;
  title?: string;
  asButton?: boolean;
  newTab?: boolean;
}

/**
 * Link
 */
export function Link(props: PropsWithChildren<LinkProps>) {
  const classes = useLinkClasses();

  return (
    <a
      className={cx(classes.root, props.className, { active: props.isActive })}
      href={props.to}
      title={props.title}
      target={props.newTab ? "_blank" : "_self"}
    >
      {props.children}
    </a>
  );
}
