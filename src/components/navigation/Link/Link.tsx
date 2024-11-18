import { cx } from "@emotion/css";
import { useLinkClasses } from "@navigation/Link";
import { PropsWithChildren } from "react";

interface LinkProps {
  to: string;
  className?: string;
  isActive?: boolean;
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
    >
      {props.children}
    </a>
  );
}
